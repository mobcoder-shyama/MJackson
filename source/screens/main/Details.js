import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Text, SafeAreaView, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import colors from '../../styles/colors';
import font from '../../styles/font';
import { getOr } from 'lodash/fp';
import {releaseDate} from '../../utils/DateUtils'
import Header from '../../components/Header';







const Details = (props) => {

    const [state, setState] = useState({
        data: getOr(null, 'route.params.item', props)
    })

   let {data} = state;

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* header */}
            <Header title={'Details'}/>

            {/* details */}

            <View style={{ alignItems: 'center',marginTop:100, }}>

                <Image source={{ uri:data.artworkUrl100 }}
                    style={styles.imgView} />

                <View style={{ margin: 10,alignItems:'center' }}>
                    <Text style={styles.title}>{data.trackName}</Text>
                    <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX, }]}>{data.collectionName}</Text>
                    <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX, }]}>Artist {data.artistName}</Text>
                    <Text style={[styles.title, { fontSize: font.FONT_SIZE_12PX, }]}>Release on {releaseDate(data.releaseDate)}</Text>
                </View>

                <TouchableWithoutFeedback style={{ margin:10,alignItems:'center' }} onPress={()=>props.navigation.goBack()}>
                    <Text style={[styles.title,{fontSize:font.FONT_SIZE_16PX,color:colors.textColor.skyBlue,fontWeight:'bold'}]}>Back</Text>
                </TouchableWithoutFeedback>

            </View>




        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#87ceeb',
        //padding: 50,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,

        padding: 8,
    },
    title: {
        fontSize:font.FONT_SIZE_22PX,
        color: colors.textColor.black,
        margin: 5,textAlign:'center'
   },
   imgView:{
      width: "75%", height: 250, borderRadius: 10,
   }
});

export default Details;