import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, ScrollView, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalenderTouchableoPacity from '../../Components/CalenderTouchableoPacity';
import CardUi from '../../Components/CardUi';
import CardUi2 from '../../Components/CardUi2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const MoreProducts = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.TopContainerAdjust}>
        <View style={styles.TopContainer}>
          <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
          <View style={styles.iconAdjust}>
            <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={styles.opacityForIcon}>
              <AntDesign name="left" size={17} color="#003366" />
            </TouchableOpacity>
            <View style={styles.TopHeader}>
              <Text style={styles.text}>Daily routine</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="close" color={'#003366'} size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <ScrollView horizontal={true}>
              <CalenderTouchableoPacity Date={'10'} dayName={'Mon'} />
              <CalenderTouchableoPacity Date={'11'} dayName={'Tue'} />
              <CalenderTouchableoPacity Date={'12'} dayName={'Wed'} />
              <CalenderTouchableoPacity Date={'13'} dayName={'Thu'} />
              <CalenderTouchableoPacity Date={'14'} dayName={'Fri'} />
              <CalenderTouchableoPacity Date={'15'} dayName={'Sat'} />
              <CalenderTouchableoPacity Date={'16'} dayName={'Sun'} />
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.BottomContainerAdjustment}>
        <ScrollView contentContainerStyle={{ width: "100%", paddingBottom: 300 }} >
          <View style={styles.bottomContainer1}>
            <CardUi imageSection1={require('../../Assets/images/Fruitoil.jpeg')} Text1={'100% Organic'} Text2={'Fruit Oil'} />
            <CardUi imageSection1={require('../../Assets/images/AcneCream.jpeg')} Text1={'Acne Cream'} Text2={" ForFace"} />
            <CardUi imageSection1={require('../../Assets/images/cinimide2.jpeg')} Text1={'Nicniamide'} Text2={'10% + Zinc PCA 1%'} />
            <CardUi imageSection1={require('../../Assets/images/lotion.jpeg')} Text1={'Lotion'} Text2={'For Dry Skin'} />
            <CardUi imageSection1={require('../../Assets/images/skindrink.jpeg')} Text1={'Skin'} Text2={'Drink'} />
            <CardUi imageSection1={require('../../Assets/images/shampoo.jpeg')} Text1={'Shampoo for'} Text2={'Scalp + Hair'} />

          </View>
        </ScrollView>
        <ScrollView contentContainerStyle={{ width: "100%", paddingBottom: 300 }} >
          <View style={styles.bottomContainer2}>
            <CardUi2 imageSection1={require('../../Assets/images/seedOil.jpeg')} Text3={'100% Organic'} Text4={'Seed Oil'} />
            <CardUi2 imageSection1={require('../../Assets/images/MineralUv.jpeg')} Text3={'Mineral UV'} Text4={'Filters SPF'} />
            <CardUi2 imageSection1={require('../../Assets/images/Niacinimide.jpeg')} Text3={'Nicniamide'} Text4={'5% + Zinc 1%'} />
            <CardUi2 imageSection1={require('../../Assets/images/FaceWashMen.jpeg')} Text3={'Face Wash'} Text4={'For Men'} />
            <CardUi2 imageSection1={require('../../Assets/images/other.jpeg')} Text3={'Hair'} Text4={'Conditioner'} />
            <CardUi2 imageSection1={require('../../Assets/images/shampooMen.jpeg')} Text3={'Shampoo'} Text4={'For Men'} />
          </View>
        </ScrollView>
        <View style={styles.TabAdjustment}>
          <View style={styles.bottomtab}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
              <Feather name="home" size={35} color="#003366" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={styles.Scanface}>
              <Ionicons name="scan-circle" size={75} color="#003366" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Products2')}>
              <Feather name="shopping-cart" size={35} color="#003366" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MoreProducts;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#008080',
  },
  TopContainerAdjust: {
    alignItems: 'center',
  },
  TopContainer: {
    height: 250,
    width: '100%',
    borderWidth: 0.4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#fcf3f2',
    borderColor: 'grey',
  },
  iconAdjust: {
    margin: 8,
    flexDirection: 'row',
    marginTop: 35
  },
  opacityForIcon: {
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 40,
    width: 40,
    borderColor: '#dbd5d5',
    marginTop: 7,
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Montserrat-SemiBold',
  },
  TopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginLeft: 8,
    width: '85%',
    alignItems: 'center',
  },
  BottomContainerAdjustment: {
    width: '100%',
    flexDirection: 'row',
  },
  bottomContainer1: {
    width: 200,
  },
  bottomContainer2: {
    width: 180,
    marginTop: 5
  },
  bottomtab: {
    height: 80,
    width: 320,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-around',
    borderRadius: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TabAdjustment: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '53%',
    left: 35
  },
  Scanface: {
    position: 'absolute',
    top: -38,
    left: 120,
  },

})