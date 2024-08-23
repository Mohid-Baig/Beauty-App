import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'; 

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.opacity}>
        <AntDesign name="left" size={17} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity: {
    borderWidth:0,
padding:10,
borderRadius:10,
backgroundColor:'#fff',
  },
});
