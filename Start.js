import React from 'react';
import { Button, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function StartScreen({navigation}) {
    return (
            <ScrollView>
                <Header />
                <Main />
                <Button title="Go to images" onPress={() => navigation.navigate('Image') }></Button>
                <Footer/>
            </ScrollView>
    )

}

const styles = StyleSheet.create({
    
})


export default StartScreen;