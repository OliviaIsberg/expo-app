import React from 'react';
import { Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { View, Text } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Section from './Section';

function StartScreen({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Main />
                <Section />
                <Button title="Go to images" onPress={() => navigation.navigate('Image')}></Button>
                <Footer/>
            </ScrollView>
        </SafeAreaView>
        
    )

}


export default StartScreen;