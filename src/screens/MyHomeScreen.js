import React from 'react';
import {Image,Text,View,Button,StyleSheet,DeviceEventEmitter} from 'react-native';
import {TabNavigator,NavigationActions} from 'react-navigation';
import Stacks from './Stacks';

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

function checkTabBarVisible(params) {
    return (params && params.tabBarVisible != null) ? !params.tabBarVisible : true
}

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

    componentDidMount() {
        this.hideTabBarListener = DeviceEventEmitter.addListener('hideTabBar',function () {
            this.buttonClick();
        }.bind(this))
    }

    componentWillUnmount() {
        this.hideTabBarListener.remove();
    }

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
                    paddingTop:30,
                    justifyContent:'center'
                }}
            >
                <Button
                    onPress={this.buttonClick}
                    title="方法1"
                />
                <Stacks screenProps={{parentNavigation:this.props.navigation}} />
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


