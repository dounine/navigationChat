import React from 'react';
import {StackNavigator} from 'react-navigation';
import MessageList from './MessageList';
import MessageDialog from './MessageDialog';


export default StackNavigator({
    MList: {
        screen: MessageList,
    },
    MDialog: {
        screen: MessageDialog,
    },
});
