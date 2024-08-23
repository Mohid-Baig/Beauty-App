import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CardUi = ({imageSection1,Text1,Text2}) => {
  return (
    <View >
              
      <TouchableOpacity style={styles.section1}>
              <Image source={imageSection1} style={styles.section1Images} />
            </TouchableOpacity>
            <View style={{marginLeft:15,alignItems:'center'}}>
              <Text style={{ fontSize: 20, color: '#000', fontFamily: 'Montserrat-SemiBold', }}>{Text1}</Text>
              <Text style={{ fontSize: 20, color: '#000', fontFamily: 'Montserrat-SemiBold', }}>{Text2}</Text>
              </View>
    </View>
  )
}

export default CardUi

const styles = StyleSheet.create({
    section1: {
        alignItems: 'center',
        borderRadius: 40,
      },
      section1Images: {
        width: "85%",
        height: 230,
        marginTop: 10,
        borderRadius: 40,
      },
})