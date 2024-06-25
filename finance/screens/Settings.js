import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Switch } from "react-native";
import { ThemeContext } from "../styles/ThemeContext";
import Icon from 'react-native-vector-icons/FontAwesome';



const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: theme.background, borderColor: theme.text, }]}>
      <Text style={[styles.text, { color: theme.text }]}>
        {item.description}
      </Text>
      <Icon name="chevron-right" size={21} color={theme.text} />
    </View>
  );

  const settings = [
    { id: "1", description: "Language" },
    { id: "2", description: "My Profile" },
    { id: "3", description: "Contact Us" },
    { id: "4", description: "Change Password" },
    { id: "5", description: "Privacy Policy" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, {color: theme.text}]}>Settings</Text>
      <FlatList
        data={settings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{maxHeight: 380}}
      />
      <View style={styles.themeknob}>
        <Text style={[styles.themetext, { color: theme.text }]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767477", true: "#f4f4f4" }}
          thumbColor={theme.background === "#fff"  ? "#000" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={!(theme.background === "#fff")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 79,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  header: {
    width: "100%",
    fontSize: 34,
    textAlign: "center",
  },
  themeknob: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  themetext: {
    fontSize: 25,
  },

});

export default SettingsScreen;
