import React from 'react';
import {View, Text, Button, DeviceEventEmitter} from 'react-native';
import {NavigationActions} from "react-navigation";

export default class MessageList extends React.Component{

    buttonClick = ()=>{
        const setParamsAction = NavigationActions.setParams({
            params: { hideTabBar: true },
            key: 'Chat'
        });
        this.props.screenProps.parentNavigation.dispatch(setParamsAction);
    };

    buttonClick3 = ()=>{
        this.props.navigation.navigate('MDialog');
    };

    buttonClick2 = ()=>{
        DeviceEventEmitter.emit('hideTabBar');
    };

    render(){
        return <View style={{
        flex:1,
        }}>
            <Button
                onPress={this.buttonClick}
                title="hideTabBar method 2"
            />
            <Button
                onPress={this.buttonClick2}
                title="hideTabBar method 3"
            />
            <Button
                onPress={this.buttonClick3}
                title="hideTabBar method 4"
            />
        </View>
    }
}