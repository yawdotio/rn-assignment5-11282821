import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../styles/ThemeContext";

const Header = ({ title , name, color}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/profile.png")} />
      <Text style={[styles.title, {color: color}]}>{title}</Text>
      <Text style={[styles.name, {color: color}]}>{name}</Text>
      <TouchableOpacity
      >
          <Image
            style={styles.search}
            source={require("../assets/search.png")}
            resizeMode="contain"
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 80,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15, 
    position: "relative",
    top: -12, 
    left: 8,
  },
  name: {
    fontSize: 22, 
    position: "relative",
    top: 12,
    right: 105,
    fontWeight: "bold",
  },
  search: {
    backgroundColor: "red",
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff"
  }
});

export default Header;
