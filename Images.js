import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import bird from "./assets/bird-1.jpg";
import secondBird from "./assets/bird-2.jpg";
import thirdBird from "./assets/bird-3.jpg";

function ImageScreen({ navigation }) {
  return (
    <ScrollView>
      <Header></Header>
      <ImageBackground style={styles.birds} source={bird}></ImageBackground>
      <ImageBackground style={styles.birds} source={secondBird}></ImageBackground>
      <ImageBackground style={styles.birds} source={thirdBird}></ImageBackground>
      <Button title="Go back to start" onPress={() => navigation.navigate("Start")}></Button>

      <Footer></Footer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  birds: {
    resizeMode: "cover",
    height: 200,
  },
});

export default ImageScreen;
