import React, {useEffect} from 'react';
import {Text, View} from 'react-native';



const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 5000);
    });
    return(
        <View>
            <Text>Ini adalah Splash Screen</Text>
        </View>
    )
}


export default Splash;