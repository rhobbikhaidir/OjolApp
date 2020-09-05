import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '../../component/atoms';
import { colors } from '../utils';
import { IconBack, RegisterIllustration } from '../../assests';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from '../../redux';




const Register = () => {
    const RegisReducer= useSelector((state) => state.RegisterReducer);
    const dispatch= useDispatch();




    // const [form, setForm]= useState({
    //     fullName: '',
    //     email: '',
    //     password: '',
    // })

    const onInputChange = (value, input) => {
        // setForm({
        //     ...form,
        //     [kosong ]: value
        // }
        dispatch(setForm(input, value))
    }

    const sendData = () => {
        console.log('Data yang di Kirim', RegisReducer.form)
    }
    return(
        <View style={styles.wrapper.page}>
            <IconBack width={25} height={25}  />
            <ScrollView showsVerticalScrollIndicator={false}>
            <RegisterIllustration width={180} height={115} style={styles.wrapper.illustration} />
            <Text style={styles.wrapper.desc}>
                Mohon mengisi beberapa data untuk proses daftar anda {RegisReducer.title}
            </Text>
            <View style={styles.space(64)}/>
            <Input placeholder="nama lengkap"  
            value={RegisReducer.form.fullName}
            onChangeText={(value) => onInputChange(value, 'fullName')}
            />
            <View style={styles.space(33)} />
            <Input placeholder="email" 
            value={RegisReducer.form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
            />
            <View style={styles.space(33)} />
            <Input placeholder="password" 
            value={RegisReducer.form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            secureTextEntry={true}
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