import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Animated,ImageBackground } from 'react-native';
import color from '../../styles/colors';




const Splash = (props) => {

    const [seconds, setSeconds] = useState(0)

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
         onAnimate();
    }, []);

    const onAnimate = () => {
        Animated.sequence([
            Animated.timing(animatedValue,
                {
                    toValue: 1,
                    duration: 1000
                }),
            Animated.timing(animatedValue,
                {
                    toValue: 0,
                    duration: 1000
                })
        ]).start()


    }

    const rotation = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });



    return (
        <SafeAreaView style={{ flex: 0, backgroundColor:'#050713' }}>


        
          
           
            <ImageBackground source={require('../../assest/MJ5.jpeg')}  style={{width: '100%', height: '100%'}} resizeMode={'cover'}/>

       </SafeAreaView>     


     

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background.white,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default Splash;