import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton'
import { colors } from '../utils';
import { Logo } from '../../assests';
// import Logo from '../../assests/image/illustration.svg'

const WelcomeAuth = ({navigation}) => {
    const handleGoTo= (screen) =>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.wrapper.page}>
                <Logo width={219} height={117} marginBottom={10}/>
            <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
            <ActionButton  desc="Silahkan Masuk, jika anda sudah memiliki akun"
            title="Masuk"
            onPress={() => handleGoTo('Login')}
            />
            <ActionButton desc="atau silahkan daftar jika anda belum memiliki akun"
            title="Daftar"
            onPress={() => handleGoTo('Register')}/>
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