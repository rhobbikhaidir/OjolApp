import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '../../component/atoms';
import { colors } from '../utils';
import { IconBack, RegisterIllustration } from '../../assests';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';




const Register = () => {
    const globalState= useSelector((state) => state);


    const [form, setForm]= useState({
        fullName: '',
        email: '',
        password: '',
    })

    const onInputChange = (value, kosong) => {
        setForm({
            ...form,
            [kosong ]: value
        })
    }

    const sendData = () => {
        console.log('Data yang di Kirim', form)
    }
    return(
        <View style={styles.wrapper.page}>
            <IconBack width={25} height={25}  />
            <ScrollView showsVerticalScrollIndicator={false}>
            <RegisterIllustration width={180} height={115} style={styles.wrapper.illustration} />
            <Text style={styles.wrapper.desc}>
                Mohon mengisi beberapa data untuk proses daftar anda {globalState.name}
            </Text>
            <View style={styles.space(64)}/>
            <Input placeholder="nama lengkap"  
            value={form.fullName}
            onChangeText={(value) => onInputChange(value, 'fullName')}
            />
            <View style={styles.space(33)} />
            <Input placeholder="email" 
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
            />
            <View style={styles.space(33)} />
            <Input placeholder="password" 
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            // secureTextEntry={true}
            />
            <View style={styles.space(83)}/>
            <Button title="Daftar" onPress={sendData}/>
            </ScrollView>
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