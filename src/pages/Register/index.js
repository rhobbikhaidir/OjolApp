import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../component/atoms';
import { colors } from '../utils';
import { IconBack, RegisterIllustration } from '../../assests';




const Register = () => {
    return(
        <View style={styles.wrapper.page}>
            <IconBack width={25} height={25}  />
            <RegisterIllustration width={180} height={115} style={styles.wrapper.illustration} />
            <Text style={styles.wrapper.desc}>
                Mohon mengisi beberapa data untuk proses daftar anda
            </Text>
            <View style={styles.space(64)}/>
            <Input placeholder="nama lengkap" />
            <View style={styles.space(33)} />
            <Input placeholder="email"/>
            <View style={styles.space(33)} />
            <Input placeholder="password"/>
        </View>
    )
}


const styles = {
    wrapper: {
        page: {padding: 20},
        icon: {
            width: 25, height: 25, backgroundColor: 'blue'
        },
        illustration: {
            marginTop: 8,
            },
        desc: {fontSize: 14, 
            fontWeight: 'bold', 
            color: colors.default,
            marginTop: 16,
            maxWidth: 200 ,
    }
},
    space: (value) => {
        return{
        height: value,
    }
    }
}

export default Register;