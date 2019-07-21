import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Message from "../components/HomeScreen/message";
import CustomButton from "../components/HomeScreen/SumButton";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state.home.count,
  };
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Message>
          <Text>Contador: {this.props.count}</Text>
        </Message>
        <View style={{ flexDirection: "row" }}>
          <CustomButton
            title="Sumar"
            onPress={() => this.props.dispatch({ type: "INCREMENT" })}
          />
          <CustomButton
            title="Restar"
            onPress={() => this.props.dispatch({ type: "DECREMENT" })}
          />
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});
