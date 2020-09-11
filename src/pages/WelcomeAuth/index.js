import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../utils';
import {Logo} from '../../assests';
import LoginAuth from '../../component/LoginAuth';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <Logo width={219} height={117} marginBottom={10} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
      <ActionButton
        desc="Silahkan Masuk, jika anda sudah memiliki akun"
        title="Masuk"
        onPress={() => handleGoTo('Login')}
      />
      <ActionButton
        desc="atau silahkan daftar jika anda belum memiliki akun"
        title="Daftar"
        onPress={() => handleGoTo('Register')}
      />
      <Text style={styles.textLogin.desc}>Atau Login Mengunakan di bawah ini</Text>
        <LoginAuth />
    </View>
  );
};

const styles = {
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
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
  textLogin:{
    desc: {
        fontSize: 10, 
        color:colors.text.default, 
        textAlign: 'center', 
        paddingHorizontal: '15%', 
        marginBottom: 6,
        marginTop: 50,
    }
  }
};

export default WelcomeAuth;
