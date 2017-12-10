import {TabNavigator} from "react-navigation";
import ChatScreen from './ChatScreen';
import MineScreen from './MineScreen';

export default TabNavigator({
    Chat: {
        screen: ChatScreen,
    },
    Mine: {
        screen: MineScreen,
    },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#7558e9',
    },
});