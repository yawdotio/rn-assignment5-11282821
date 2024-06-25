import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ThemeContext } from "../styles/ThemeContext";
import Header from "../components/Header";

const transactions = [
  { id: "1", description: "Grocery Shopping", amount: "- $88" },
  { id: "2", description: "Apple Store", amount: "- $5.99" },
  { id: "3", description: "Spotify", amount: "- $12.99" },
  // Add more transactions as needed
];

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>
        {item.description}
      </Text>
      <Text style={[styles.text, { color: theme.text }]}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header title="Welcome back, John Smith" />
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
