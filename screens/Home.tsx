import React, { useState } from "react";
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

  const handleChange = (text: string) => {
    setSearchTerm(text);
  };
  const handleSubmit = async () => {
    const data = await search(searchTerm, "");
    navigation.navigate("SearchResults", { data, searchTerm });
    setSearchTerm("");
  };
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
