import React from 'react';
import {Image, View, Button, StyleSheet, DeviceEventEmitter} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Stacks from './child/Stacks';

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


export default class MyHomeScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => {
        return {
            tabBarLabel: 'Chat',
            tabBarVisible: navigation.state.params ? !navigation.state.params.hideTabBar : true,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../imgs/chat.png')}
                    style={[styles.icon, {tintColor}]}
                />
            ),
        }
    };

    componentDidMount() {
        this.hideTabBarListener = DeviceEventEmitter.addListener('hideTabBar', function () {
            this.baseMethod();
        }.bind(this))
    }

    componentWillUnmount() {
        this.hideTabBarListener.remove();
    }

    baseMethod = () => {
        const setParamsAction = NavigationActions.setParams({
            params: {hideTabBar: true},
            key: 'Chat'
        });
        this.props.navigation.dispatch(setParamsAction);
    };

    navigationStateChange = (prevState, newState, action) => {
        let routeName = getCurrentRouteName(newState);
        if (routeName === 'MDialog') {
            this.baseMethod();
        } else {
            const setParamsAction = NavigationActions.setParams({
                params: {hideTabBar: false},
                key: 'Chat'
            });
            this.props.navigation.dispatch(setParamsAction);
        }
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: 30,
                }}
            >
                <Button
                    onPress={this.baseMethod}
                    title="hideTabBar baseMethod"
                />
                <Stacks
                    screenProps={{parentNavigation: this.props.navigation}}
                    onNavigationStateChange={this.navigationStateChange}
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


