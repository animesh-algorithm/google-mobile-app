import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { search } from "../utils/search";
import { Audio } from "expo-av";
interface Props {
  navigation: {
    navigate: (
      screen: string,
      params: { data: any; searchTerm: string }
    ) => void;
  };
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [sound, setSound] = useState<any>();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio.mp3"),
      {
        shouldPlay: true,
        isLooping: true,
        isMuted: false,
        volume: 1,
        rate: 1.0,
        shouldCorrectPitch: true,
        pitchCorrectionQuality: Audio.PitchCorrectionQuality.High,
      }
    );

    setSound(sound);
    console.log("Loading Sound");
    await sound.playAsync();
    await sound.setIsLoopingAsync(true);
  };

  const handleChange = (text: string) => {
    setSearchTerm(text);
  };
  const handleSubmit = async () => {
    const data = await search(searchTerm, "");
    navigation.navigate("SearchResults", { data, searchTerm });
    setSearchTerm("");
  };

  useEffect(() => {
    playSound();
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require("../assets/Google-logo.png")}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={handleChange}
        />
        <TouchableOpacity style={styles.button}>
          <Button title="Google Search" onPress={handleSubmit} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 150,
    resizeMode: "contain",
  },
  input: {
    height: 50,
    width: 280,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 50,
  },
  button: {
    marginTop: 20,
  },
});

export default Home;
