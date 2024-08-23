import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#c6cbef' }}>
            <ImageBackground source={require('../Assets/images/YelloBackground.jpeg')} style={{ padding: 20, marginTop: -4 }}>
                <Image source={require('../Assets/images/emoji.jpeg')} style={styles.image} />
                <Text style={styles.text}>Mohid Baig</Text>
            </ImageBackground>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.touchableopacity}
                onPress={()=>props.navigation.navigate('Home')}
                >
                    <Text style={styles.opacityText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableopacity}
                 onPress={()=>props.navigation.navigate('Profile')}
                >
                    <AntDesign name='antdesign' size={20} color='red'/>
                    <Text style={styles.opacityText}>Profile</Text>
                </TouchableOpacity><TouchableOpacity style={styles.touchableopacity}
                 onPress={()=>props.navigation.navigate('About')}
                 >
                    <Text style={styles.opacityText}>About</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto-Medium'
    },
    touchableopacity: {
        marginTop: 10,
        width: '92%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        backgroundColor:'lightblue',
        flexDirection:'row',
    },
    opacityText: {
        fontSize: 20,
        textAlign: 'center',
    },
})
export default CustomDrawer
