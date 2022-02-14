import {ImageBackground, View, Text, StyleSheet } from 'react-native';
import lake from './lake.jpg'

function Main() {
    return (
        <View>
            <ImageBackground source={lake} style={styles.image}>
            <Text style={styles.text}>En sjö</Text>
            </ImageBackground>
           
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 250,
        position: 'relative'
    },

    text: {
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        bottom: 20,
        right: 175
    }
})

export default Main;