import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Message = (props) => (
    <View style={styles.container}>
        <Text>{ props.children } </Text>
    </View>
    )
export default Message;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});