import { View, Text, StyleSheet } from 'react-native';


function Header() {
    return (
        <View>
            <Text style={styles.headingText}>Lorem Ipsum</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 50,
        backgroundColor: 'cornflowerblue',
        margin: 0,
        padding: 10,
        textAlign: 'center',
    }

})

export default Header;