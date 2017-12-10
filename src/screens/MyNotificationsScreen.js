import React from "react";
import {StyleSheet,Button,Image} from "react-native";

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});