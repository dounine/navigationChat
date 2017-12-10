import React from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationActions, StackNavigator} from 'react-navigation';

class S1 extends React.Component{

    buttonClick = ()=>{
        const setParamsAction = NavigationActions.setParams({
            params: { hideTabBar: true },
            key: 'Home'
        });
        this.props.screenProps.parentNavigation.dispatch(setParamsAction);
    };

    render(){
        return <View>
            <Button
                onPress={this.buttonClick}
                title="childStackHideTabBar"
            />
        </View>
    }
}

export default StackNavigator({
    S1: {
        screen: S1,
    },
});
