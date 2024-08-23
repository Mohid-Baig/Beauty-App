import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'



const SplashScreen = () => {
  return (
    <View style={styles.container}> 
      <Image source={require('../../Assets/images/mg2.jpeg')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})