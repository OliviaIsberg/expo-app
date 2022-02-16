import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';

function Footer() {
    return(
        <View style={styles.continer}>
            <Text></Text>
            <View style={styles.socialsContainer}>
                <FontAwesome5 style={styles.icon} name="facebook" size={24} color="black" />
                <FontAwesome5 style={styles.icon} name="instagram" size={24} color="black" />
                <Feather style={styles.icon} name="youtube" size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    continer: {
        backgroundColor: 'lightgray',
        height: 100,
        resizeMode: 'cover',
        // flex: 1
    },

    socialsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'

    },

    icon: {
        fontSize: 40,
    }
})

export default Footer;