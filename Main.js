import {ImageBackground, View, Text, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import lake from './lake.jpg'
import Section from './Section';

function Main({navigation}) {
    return (
        <SafeAreaView>
        <ScrollView>
            <ImageBackground source={lake} style={styles.image}>
            </ImageBackground>
            <Section></Section>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 200,
        position: 'relative'
    },
})

export default Main;