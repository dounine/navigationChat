import React from 'react';
import {Image,Text,View,Button,StyleSheet} from 'react-native';
import {TabNavigator,NavigationActions} from 'react-navigation';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    buttonClick = ()=>{
        const setParamsAction = NavigationActions.setParams({
            params: { hideTabBar: true },
            key: 'Home'
        });
        this.props.navigation.dispatch(setParamsAction);
    };

    render() {
        return (
            <View
                style={{
                    flex:1,
                    justifyContent:'center'
                }}
            >
                <Button
                    onPress={this.buttonClick}
                    title="toggerTabBar"
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


