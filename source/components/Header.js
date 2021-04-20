import React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import font from '../styles/font';
import colors from '../styles/colors';





const Header = (props) => {

    return (
        <View style={styles.container}>
           <Text style={styles.title}>{props.title}</Text>
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center', height: 45, justifyContent: 'center', borderBottomWidth:1,
        borderBottomColor:colors.border.skyBlue, flexDirection: 'row'
    },
    title:{
        fontSize: font.FONT_SIZE_22PX ,
        color:colors.textColor.skyBlue,
        fontWeight:'bold'
    }
});

export default Header;