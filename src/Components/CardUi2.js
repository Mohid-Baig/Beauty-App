import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CardUi2 = ({imageSection1,Text3,Text4}) => {
  return (
    <View>
      <View  style={{marginLeft:15,alignItems:'center'}}>
                      <Text style={{ fontSize: 20, color: '#000', fontFamily: 'Montserrat-SemiBold', }}>{Text3}</Text>
              <Text style={{ fontSize: 20, color: '#000', fontFamily: 'Montserrat-SemiBold', }}>{Text4}</Text>
              </View>
       <TouchableOpacity style={styles.section1}>
        
              <Image source={imageSection1} style={styles.section1Images} />
            </TouchableOpacity>
            </View>
  )
}

export default CardUi2

const styles = StyleSheet.create({  section1: {
    alignItems: 'center',
    borderRadius: 40,
  },
  section1Images: {
    width: "93%",
    height: 230,
    marginTop: 10,
    borderRadius: 40,
  },})