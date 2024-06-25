import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  SectionList,
  Image,
} from "react-native";

export default function Transactions({ transactions, color }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.transactions, {color: color}]}>Transactions</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={[styles.transaction, (color=== "#fff")? {borderColor: "#AFB0B6"}:{borderColor: color}]}>

            <Image
              style={styles.companyIcon}
              source={item.icon}
              resizeMode="contain"
            />
            <Text style={[styles.company, {color: color}]}>{item.company}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={[styles.amount, (item.amount > 0)? styles.positive: styles.negative]}><Text style={(item.amount >0)? styles.posSign:{}}>-</Text>${Math.abs(item.amount)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "center",
    marginTop: -18,
    paddingHorizontal: 12,
    height: "40%",
  },
  transactions: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
    width: "100%",
    padding: 0,
  },
  seeAll: {
    fontSize: 12,
    color: "#AFB0B6",
  },

  companyIcon: {
    width: 35,
    height: 35,
    position: "relative",
    top: 20,
    left: 20,
    borderRadius: 40,
    backgroundColor: "white",
  },
  transaction: {
    width: "100%",
    height: 80,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
    width: "auto",
    color: "black",
    position: "relative",
    top: -20,
    left: 70,
  },
  category: {
    fontSize: 12,
    width: 90,
    color: "#AFB0B6",
    position: "relative",
    top: -20,
    left: 70,
  },
  amount: {
    fontSize: 12,
    width: 90,
    textAlign: "right",
    color: "#AFB0B6",
    position: "relative",
    top: -40,
    left: 220,
  },
  negative: {
    color: "red",
  },
  positive: {
    color: "green",
  },
  posSign: {
    display: "none",
  },
});
