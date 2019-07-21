import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Message from "../components/HomeScreen/message";
import CustomButton from "../components/HomeScreen/SumButton";
import { connect } from "react-redux";

import onIncreaseCount from "../actions/increaseCount";
import onDecreaseCount from "../actions/decreaseCount";

function mapStateToProps(state) {
  return {
    count: state.home.count
  };
}

const mapDispatchToProps = {
  onIncreaseCount,
  onDecreaseCount
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
            onPress={() => this.props.onIncreaseCount()}
          />
          <CustomButton
            title="Restar"
            onPress={() => this.props.onDecreaseCount()}
          />
        </View>
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});
