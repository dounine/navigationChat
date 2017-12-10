import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class MessageDialog extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1,
            }}>

                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical:6,
                        marginLeft:10,
                    }}
                >
                    <View
                        style={styles.youBox}
                    >
                        <View
                            style={styles.you}
                        >
                            <TouchableOpacity
                                style={{
                                    padding: 8,
                                }}
                            >

                                <Text style={{fontSize: 18}}>Hello</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: -4,
                            width: 0,
                            height: 0,
                            borderTopWidth: 10,
                            borderTopColor: 'transparent',
                            borderRightWidth: 10,
                            zIndex: -1,
                            borderRightColor: '#E5E5E7',
                            borderBottomWidth: 10,
                            borderBottomColor: 'transparent',
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: -3.5,
                            width: 0,
                            height: 0,
                            borderTopWidth: 10,
                            borderTopColor: 'transparent',
                            borderRightWidth: 10,
                            borderRightColor: '#FFF',
                            borderBottomWidth: 10,
                            borderBottomColor: 'transparent',
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical:6,
                        marginRight:10,
                    }}
                >
                    <View style={styles.mineBox}>
                        <View
                            style={styles.mine}
                        >
                            <TouchableOpacity
                                style={{
                                    padding: 8,
                                }}
                            >
                                <Text style={{fontSize: 18,color:'#FFF'}}>hi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: -4,
                            width: 0,
                            height: 0,
                            borderTopWidth: 10,
                            borderTopColor: 'transparent',
                            borderLeftWidth: 10,
                            zIndex: -1,
                            borderLeftColor: '#E7E7E7',
                            borderBottomWidth: 10,
                            borderBottomColor: 'transparent',
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: -3.5,
                            width: 0,
                            height: 0,
                            borderTopWidth: 10,
                            borderTopColor: 'transparent',
                            borderLeftWidth: 10,
                            borderLeftColor: '#26B8F2',
                            borderBottomWidth: 10,
                            borderBottomColor: 'transparent',
                        }}
                    />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    youBox: {
        flex: 1,
        flexDirection: 'row',
    },
    you: {
        maxWidth: '84%',
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E5E7',
        borderRadius: 8,
        overflow:'hidden',
        borderWidth: 0.5,
    },
    mineBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    mine: {
        maxWidth: '86%',
        backgroundColor: '#26B8F2',
        borderColor: '#E6E6E6',
        overflow: 'hidden',
        borderRadius: 8,
        marginLeft: 6,
        borderWidth: 0.5,
        flexDirection: 'column'
    }
});