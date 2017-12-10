import React from 'react';
import {View,Text,Button,DeviceEventEmitter} from 'react-native';
import {NavigationActions, StackNavigator} from 'react-navigation';

class S1 extends React.Component{

    buttonClick = ()=>{
        const setParamsAction = NavigationActions.setParams({
            params: { hideTabBar: true },
            key: 'Home'
        });
        this.props.screenProps.parentNavigation.dispatch(setParamsAction);
    };

    buttonClick2 = ()=>{
        DeviceEventEmitter.emit('hideTabBar');//通过事件方式
    };

    render(){
        return <View>
            <Button
                onPress={this.buttonClick}
                title="方法2"
            />
            <Button
                onPress={this.buttonClick2}
                title="方法3"
            />
        </View>
    }
}

class S2 extends React.Component{

    buttonClick = ()=>{
        const setParamsAction = NavigationActions.setParams({
            params: { hideTabBar: true },
            key: 'Home'
        });
        this.props.screenProps.parentNavigation.dispatch(setParamsAction);
    };

    buttonClick2 = ()=>{
        DeviceEventEmitter.emit('hideTabBar');//通过事件方式
    };

    render(){
        return <View>
            <Button
                onPress={this.buttonClick}
                title="方法2"
            />
            <Button
                onPress={this.buttonClick2}
                title="方法3"
            />
        </View>
    }
}

export default StackNavigator({
    S1: {
        screen: S1,
    },
    S2: {
        screen: S2,
    },
});
