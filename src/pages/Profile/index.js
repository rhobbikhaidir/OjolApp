import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text>ini Component Profile</Text>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#eaeaea',
          borderStyle: 'solid',
          width: 393,
          height: 900,
          marginTop: 100,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
            shadowColor:'#000',
            shadowOffset:{
                width:0 ,
                height: 3
            },
            shadowOpacity:0.27,
            shadowRadius: 4.65,

            elevation: 3
        }}>
        <Text>kosong</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
