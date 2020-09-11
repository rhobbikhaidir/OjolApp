import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import fb from '../../assests/image/fb.png';
import phone from '../../assests/image/phone.png';
import gmail from '../../assests/image/gmail.png';



const LoginAuth = () => {
    return (
        <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image  source={gmail} style={{width: 40, height:40, }}/>
        <Image  source={fb} style={{width: 40, height:40, marginLeft: 40}}/>
        <Image  source={phone} style={{width: 40, height:40, marginLeft: 40}}/>
    </View>
    )
}

const styles = StyleSheet.create({})
export default LoginAuth;