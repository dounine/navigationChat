import {TabNavigator} from "react-navigation";
import MyHomeScreen from './MyHomeScreen';
import MyNotificationsScreen from './MyNotificationsScreen';

export default TabNavigator({
    Home: {
        screen: MyHomeScreen,
        navigationOptions: ({navigation, screenProps}) => {
            return {
                tabBarVisible: navigation.state.params ? !navigation.state.params.hideTabBar : true,
            }
        }
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});