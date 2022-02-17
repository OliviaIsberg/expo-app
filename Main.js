import {ImageBackground, StyleSheet, ScrollView } from 'react-native';
import lake from './assets/lake.jpg'
import Section from './Section';

function Main({}) {
    return (
        <ScrollView>
            <ImageBackground source={lake} style={styles.image}>
            </ImageBackground>
            <Section></Section>
        </ScrollView>
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