import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
export const getWelcomeString = (name) =>{
    return(
        <View>
           <Text style={{color:'red',fontSize: 30}}>Welcomes {name} to our project </Text>
         </View>   
    )
}