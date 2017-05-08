/**
 * Created by shaotingzhou on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';

export default class BottomInfo extends Component {

    render() {
        const rowData = this.props.rowData
        return (
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../image/转发.png')} style={{width:20,height:20}} />
                    <Text>{rowData.reposts_count == 0 ? '转发' :rowData.reposts_count}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../image/评论.png')} style={{width:20,height:20}} />
                    <Text>{rowData.comments_count == 0 ? '转发' :rowData.comments_count}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../image/点赞.png')} style={{width:20,height:20}} />
                    <Text>{rowData.attitudes_count == 0 ? '转发' :rowData.attitudes_count}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }
});
