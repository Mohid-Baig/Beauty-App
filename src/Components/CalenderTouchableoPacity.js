import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CalenderTouchableoPacity = ({Date,dayName}) => {
  return (
    <View>
     <TouchableOpacity  style={styles.CalenderContainer}>
                    <View>
                      <Text style={{fontSize:22,marginLeft:7,color:'#000'}}>{Date}</Text>
                      <Text style={{marginTop:-2,color:'#000', fontFamily: 'Montserrat-SemiBold',marginLeft:5}}>{dayName}</Text>
                    </View>
                  </TouchableOpacity>
    </View>
  )
}

export default CalenderTouchableoPacity

const styles = StyleSheet.create({
  CalenderContainer: {
    marginRight: 5,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 35,
    borderWidth: 0.4,
    borderColor: '#f0f0f0',
    height: 85,
    width: 70,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    marginLeft:5
  },
})