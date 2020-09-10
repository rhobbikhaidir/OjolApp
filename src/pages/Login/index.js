import React from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from '../../component/atoms';
import {colors} from '../utils';
import {LoginIllustration} from '../../assests';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Login = ({navigation}) => {
  const {form} = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();

  const onInputChange = (value, input) => {
    dispatch(setForm(input, value));
  };

  const sendData = ({}) => {
    console.log('Data yang di Kirim', form);
  };
  return (
    <View style={styles.wrapper.page}>
      <Button type="icon" name="kosong" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LoginIllustration
          width={350}
          height={150}
          style={styles.wrapper.illustration}
        />
        <Text style={styles.wrapper.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda
        </Text>
        <View style={styles.space(40)} />
        <View style={styles.space(33)} />
        <Input
          placeholder="email"
          value={form.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(50)} />
        <Input
          placeholder="password"
          value={form.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(120)} />
        <Button title="Login" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
    illustration: {
      marginTop: 30,
    },
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 50,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default Login;
