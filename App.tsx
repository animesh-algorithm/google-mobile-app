import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import Navigator from "./routes/HomeStack";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
