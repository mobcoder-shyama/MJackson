import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, RefreshControl, Text, SafeAreaView, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import { getHomeData } from '../../config/ApiServices'
import colors from '../../styles/colors';
import font from '../../styles/font';
import { releaseDate } from '../../utils/DateUtils';
import { getOr } from 'lodash/fp';
import _ from 'lodash';
import Header from '../../components/Header';





const Home = (props) => {

    const [state, setState] = useState({
        listData: [],
        isLoader: true
    })

    useEffect(() => {
        getDataFromApi()
    }, [state.isLoader]);


    // Mark :- api's call for list item  

    const getDataFromApi = async () => {
        let params = "Michael+jackson"
        let response = await getHomeData(params);
        let data_list = getOr(null, 'data.results', response)
        setState({ listData: data_list, isLoader: false })

    };

    // Mark :- item view for flatlist

    const Item = ({ title, data }) => (


        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('details', { 'item': data })}>
            <View style={styles.item}>

                <View style={{ flexDirection: 'row', }}>
                    {/* image view */}
                    <Image source={{ uri: data.artworkUrl100 }}
                        style={styles.itemImg} />

                    {/* info view */}
                    <View style={{ margin: 10, }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX }]}>{data.artistName}</Text>
                        <View>
                            <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX, color: colors.textColor.darkBlack }]}>Genre:-{(data.primaryGenreName)}</Text>
                            <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX, color: colors.textColor.darkBlack }]}>Release:-{releaseDate(data.releaseDate)}</Text>
                            <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX, color: colors.textColor.darkBlack }]}>
                                {getOr(0, 'trackTimeMillis', data) === 0 ? null :
                                    (getOr(0, 'trackTimeMillis', data) / 6000).toFixed(0) + " min "}
                            </Text>
                        </View>

                    </View>

                </View>

            </View>

        </TouchableWithoutFeedback>
    );

    const renderItem = ({ item }) => (
        <Item title={item.trackName} data={item} />
    );

    const onRefresh = () => {
        setState({ isLoader: true })
    }

    // Mark :- loader

    const onLoad = () => {
        return (
            <View style={styles.loadContainer}>
                <ActivityIndicator size={'small'} color={colors.loader.skyBlue} />
                <Text style={styles.loadText}>Please Wait...</Text>
            </View>
        )
    }




    let { listData, isLoader } = state;

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* header */}

            <Header title={'Songs'} />

            {_.isEmpty(listData) && onLoad()}

            {!_.isEmpty(listData) && <FlatList
                data={listData}
                style={{ marginTop: 25 }}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoader}
                        onRefresh={() => onRefresh()}
                        tintColor={colors.loader.skyBlue}

                    />
                }


                keyExtractor={item => item.id}
            />}

        </SafeAreaView>

    );


}
const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.background.skyBlue,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        minHeight: 100,
        height: 'auto',
        alignSelf: 'center',
        width: "90%",
        padding: 8,
    },
    title: {
        fontSize: font.FONT_SIZE_15PX,
        color: colors.textColor.white,
        margin: 5,
    },
    loadContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    loadText: {
        marginTop: 25, color: colors.textColor.skyBlue, fontSize: font.FONT_SIZE_15PX
    },
    itemImg: {
        width: "30%", height: 140, borderRadius: 10,
    }
});

export default Home;