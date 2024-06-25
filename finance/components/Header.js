import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/profile.png")} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{title}</Text>
      <Image source={require("../assets/icon.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1e1e1e", // Adjust for light/dark mode
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: "#fff", // Adjust for light/dark mode
  },
});

export default Header;
