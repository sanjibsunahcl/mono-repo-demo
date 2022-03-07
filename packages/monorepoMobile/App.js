import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {getWelcomeString} from 'common/src/main';
import { add } from 'common/src/calculation';

const App = () => {
  
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      {getWelcomeString("Sanjib")}   
      <Text>{add(3,8)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
