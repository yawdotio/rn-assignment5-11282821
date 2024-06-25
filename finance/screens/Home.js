import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../styles/ThemeContext";
import Header from "../components/Header";
import Transactions from '../components/Transactions'


const transactions = [
  {
    key: "1",
    category: "Entertainment",
    icon: require("../assets/apple.png"),
    amount: "-5.79",
    company: "Apple Store",
  },
  {
    key: "2",
    category: "Music",
    icon: require("../assets/spotify.png"),
    amount: "-12.99",
    company: "Spotify",
  },
  {
    key: "3",
    category: "Transaction",
    icon: require("../assets/moneyTransfer.png"),
    amount: "800",
    company: "Money Transfer",
  },
  {
    key: "4",
    category: "Transaction",
    icon: require("../assets/grocery.png"),
    amount: "-90",
    company: "Grocery",
  },
];


const options = [
  {id:"1", description: "Send", icon: require("../assets/send.png")},
  {id:"2", description: "Receive", icon: require("../assets/recieve.png")},
  {id:"3", description: "Loan", icon: require("../assets/loan.png")},
  {id:"4", description: "Top UP", icon: require("../assets/topUp.png")},
]

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: theme.background }]}>
      <Image style={[styles.options, { backgroundColor: "#fff" }]} source={item.icon}  resizeMode="contain"/>
      <Text style={[styles.text, { color: theme.text }]}>{item.description}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background, color: theme.text }]}>
      <Header title="Welcome back" name="John Smith" color={theme.text} />
      <Image source={require("../assets/Card.png")} style={styles.card} resizeMode="contain"/>
      <View style={styles.optionContainer}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      <Transactions transactions={transactions} color={theme.text}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 70,
  },
  item: {
    marginHorizontal: 16,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,

  },
  text: {
    fontSize: 16,
  },
  card: {
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  options: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 30,
    color: "#fff",
    paddingBottom: 10,
  },
  listStyle: {

  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 130,
    width: "100%",
    marginHorizontal: 10,
  }

});

export default HomeScreen;
