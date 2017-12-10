import React from "react";
import {StyleSheet,Button,View,Image} from "react-native";

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../imgs/mine.png')}
                style={[styles.icon, {tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{paddingTop:30,}}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back Chat"
                />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});