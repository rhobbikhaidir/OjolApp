import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton'
import { colors } from '../utils';

const WelcomeAuth = () => {
    return(
        <View style={styles.wrapper.page}>
            <View style={styles.wrapper.ilustrasi}/>
            <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
            <ActionButton  desc="Silahkan Masuk, jika anda sudah memiliki akun"
            title="Masuk"/>
            <ActionButton desc="atau silahkan daftar jika anda belum memiliki akun" title="Daftar"/>
        </View>
    )
}



const styles=  {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flex: 1,
        },
        ilustrasi: {
            width: 219, 
            height: 117, 
            backgroundColor: colors.default, 
            marginBottom: 10
        }
    },
    text: {
        welcome: {
            fontSize: 18, 
            fontWeight: 'bold', 
            color: colors.default, 
            marginBottom: 76
        }
    }
}


export default WelcomeAuth;