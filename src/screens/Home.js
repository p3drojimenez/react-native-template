import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Message from '../components/HomeScreen/message'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Message>
                    <Text>Home Screen</Text>
                </Message>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});