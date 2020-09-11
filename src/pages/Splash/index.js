import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import pola from '../../assests/image/bunga.jpg'
import { colors } from '../utils';
import { HelmRacing } from '../../assests';




const Splash = ({navigation}) => {
  useEffect(() => {
      setTimeout(() => {  
          navigation.replace('WelcomeAuth')
      }, 5000)
  })
  return (
    <View>
      <Image source={pola} style={{width: 600 , height:900, position:'absolute' }} />
        {/* <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 250,}}>
        <Image source={dit} style={{width: 150, height:150, marginLeft:50, borderRadius: 150/2}}/>
      <Text style={{marginLeft: 3, fontSize: 50, fontWeight:'bold', color: colors.default, }}> -JOL</Text>
        </View> */}
        <View style={{marginLeft: 120, marginTop: 200,}}>
        <HelmRacing width={150} height={150} />
        </View>
        <View style={{marginLeft: 160, marginTop: 320, }}>
          <Text style={{color: 'gray', marginLeft: 10,}}>Created by :</Text>
          <Text style={{color: 'gray',}}>Rhobbi Khaidir</Text>
        </View>
    </View>
  );
};

const styles = {
  wrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
};

export default Splash;
