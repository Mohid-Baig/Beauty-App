import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {
  const [image, setimage] = useState([require('../../Assets/images/skincare1.jpeg'),
  require('../../Assets/images/skincare2.jpeg'),
  require('../../Assets/images/skincare3.jpeg'),
  require('../../Assets/images/skincare4.jpg'),
  require('../../Assets/images/skincare7.jpg')]);


  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
    <View style={styles.main}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={styles.TopHeader}>
        <View style={styles.iconAdjust}>
          <TouchableOpacity style={styles.opacityForIcon}>
            <FontAwesome name="heart-o" size={19} color="#003366" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerText}>
          <Text style={{ color: 'white' }}>2648 points</Text>
        </View>
        <View style={styles.iconAdjust}>
          <TouchableOpacity style={styles.Usericon}>
            <Feather name="user" size={20} color="#003366" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MidText}>
        <Text style={styles.HelloText}>
          Hello <Text style={[styles.HelloText, { fontFamily: 'Roboto-Medium' }]}>Marta,</Text>
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 17, marginLeft: 20, fontFamily: 'OpenSans-Light', color: 'white' }}>
          Let's take care of your skin!
        </Text>
      </View>

      <View style={styles.parentContainer}>
        <TouchableOpacity style={styles.containerOpacity}>
          <View style={styles.leaf}>
            <FontAwesome5 name="leaf" size={19} color="black" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontFamily: 'Nunito-Bold', color: '#000' }}>Daily Routine</Text>
          </View>
          <View style={styles.progressBar}>
            <Text style={{ color: 'black' }}>70%{'  '}</Text>
            <ProgressBar
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.7}
              color={'#cc8ef5'}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.ForYouContainer}>
        <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', color: 'white' }}>For you</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Products2')}>
          <Text style={{ fontSize: 13, fontFamily: 'Roboto-Regular', color: 'white' }}>
            View more <Entypo name="chevron-thin-right" size={13} color="#003366" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.image}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {image.map((image, index) => (
            <TouchableOpacity key={index} style={styles.imageContainer}>
              <ImageBackground source={image} style={styles.imageBack}>
                <View style={styles.Imageicon}>                      
                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.clockContainer}>
                      <EvilIcons name="clock" size={24} color={'#b01e28'} />
                      <Text style={{ color: "black" }}>{`${index + 2}min`}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.playContainer}>
                      <Feather name='play' size={17} color="#b01e28" />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#008080',
  },
  iconAdjust: {
    margin: 8,
  },
  opacityForIcon: {
    borderWidth: 0,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    height: 50,
    width: 52,
    marginLeft: 20,
  },
  Usericon: {
    borderWidth: 0,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    marginRight: 20,
  },
  TopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  MidText: {
    marginTop: 25,
    marginLeft: 30,
  },
  HelloText: {
    fontSize: 46,
    color: 'white',
    fontFamily: 'Roboto-Light',
  },
  parentContainer: {
    alignItems: 'center',
    marginTop: 35,
  },
  containerOpacity: {
    borderWidth: 0.1,
    height: 80,
    width: 350,
    borderRadius: 17,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f5f3f2',
  },
  leaf: {
    borderWidth: 0.4,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    height: 47,
    width: 47,
    borderColor: '#e0dcdc',
    marginLeft: 15,
  },
  progressBar: {
    flexDirection: 'row',
    borderWidth: 0.4,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    height: 47,
    width: 100,
    borderColor: '#E0E0E0',
    marginLeft: 42,
    
  },
  ForYouContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 47,
    marginHorizontal: 20,
  },
  image: {
    marginTop: 65,
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 23,
    marginLeft: 15,
    overflow: 'hidden'
  },
  imageBack: {
    height: 260,
    width: 190,
    alignItems: 'center',
    position: 'relative',
  },
  clockContainer: {
    flexDirection: 'row',
    width: 80,
    borderRadius: 20,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 3,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imageicon: {
    height: 65,
    width: 190,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playContainer: {
    width: 48,
    borderRadius: 25,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 16,
  },
  bottomtab: {
    height: 80,
    width: '80%',
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
  },
  Scanface: {
    position: 'absolute',
    top: -38,
    left: 125,

  },
});

export default HomeScreen;
