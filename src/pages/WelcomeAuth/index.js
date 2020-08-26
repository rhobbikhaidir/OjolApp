import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton'

const WelcomeAuth = () => {
    return(
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flex: 1
        }}>
            <View style={{width: 219, 
                height: 117, 
                backgroundColor: '#A55eea', 
                marginBottom: 10}}/>
            <Text style={{fontSize: 18, 
                fontWeight: 'bold', 
                color: '#A55eea', 
                marginBottom: 76}}>Selamat Datang di O-JOL</Text>
            <ActionButton  desc="Silahkan Masuk, jika anda sudah memiliki akun"
            title="Masuk"/>
            <ActionButton desc="atau silahkan daftar jika anda belum memiliki akun" title="Daftar"/>
        </View>
    )
}



export default WelcomeAuth;