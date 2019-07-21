import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SumButton = props => (
  <View style={styles.container}>
    <Button title={props.title} onPress={props.onPress} color="#841584" />
  </View>
);
export default SumButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
