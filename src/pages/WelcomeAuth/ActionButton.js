import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ActionButton = ({desc, title}) => {
    return(
        <View style={{marginBottom: 43, 
        maxWidth: 225}}>
            <Text style={{fontSize: 10, 
                color:"#7e7e7e", 
                textAlign: 'center', 
                paddingHorizontal: '15%', 
                marginBottom: 6 }}>{desc}</Text>
            <TouchableOpacity style={{fontSize: 10, 
                backgroundColor: "#a55eea", 
                borderRadius: 25, 
                paddingVertical: 13}}>
                <Text style={{fontSize: 12, 
                    fontWeight: 'bold', 
                    color: 'white', 
                    textTransform: "uppercase", 
                    textAlign: 'center'}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}





export default ActionButton;