import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const images = [
  require('../../Assets/images/view1.jpeg'),
  require('../../Assets/images/view2.jpeg'),
  require('../../Assets/images/view3.jpeg'),
  require('../../Assets/images/view4.jpeg'),
  require('../../Assets/images/view5.jpeg'),
]

const ScanFase = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <ImageBackground source={require("../../Assets/images/ScanFace2.jpeg")} style={styles.image}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
        <View style={styles.iconAdjust}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.opacityForIcon}>
            <AntDesign name="left" size={17} color="#003366" />
          </TouchableOpacity>
          <View style={styles.TopHeader}>
            <Text style={styles.text}>Scan your face</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <AntDesign name="close" color={'#003366'} size={24} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.ParentContainer}>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Special for you</Text>
            <View style={{ marginLeft: 10 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={true}>
                {images.map((image, index) => (
                  <TouchableOpacity key={index} style={styles.imageContainer}>
                    <ImageBackground source={image} style={styles.imageBack}>
                      <View style={styles.Imageicon}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                          <View style={styles.plusContainer}>
                            <AntDesign name="plus" size={14} color={'white'} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.productContainerAdjustment}>
                <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
              <View style={styles.productContainer}>
                  <Text style={{fontSize:15,color:'#003366',fontFamily:'Montserrat-SemiBold'}}>View all products</Text>
              </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}

export default ScanFase;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  iconAdjust: {
    margin: 8,
    flexDirection: 'row',
    marginTop:30
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
  image: {
    flex: 1,
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
  ParentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 8,
    height: '35%',
  },
  bottomContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 20,
    alignItems: 'center',
    width: '95%',
    borderWidth: 0,
    borderRadius: 30,
    height: '100%',
  },
  bottomText: {
    color: '#003366',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 35,
    borderWidth: 0.4,
    borderColor: '#fafafa',
    height: 90,
    width: 90,
  },
  imageBack: {
    height: 90,
    width: 90,
    alignItems: 'center',
  },
  Imageicon: {
    height: 65,
    width: 190,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 65,
    marginRight: 5
  },
  plusContainer: {
    width: 20,
    borderRadius: 20,
    height: 20,
    backgroundColor: 'black',
    padding: 3,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainerAdjustment:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 40,
  },

  productContainer:{
    height:70,
    borderWidth:0,
    width:240,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35,
    backgroundColor:'white'
  }
});
