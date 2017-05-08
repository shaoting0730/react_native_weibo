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

export default class HeaderInfo extends Component {

    render() {
        const rowData = this.props.rowData
        // 截取字符串 <a href="http://app.weibo.com/t/feed/6vtZb0" rel="nofollow">微博 weibo.com</a>
        let textEnd = ''
        if(rowData.source){
            let ary = rowData.source.split('<')
            let text = ary[1]
            let startIndex = text.indexOf('>')
            textEnd = text.substring(startIndex + 1,text.length)
            textEnd = '来自  ' + textEnd
        }
        return (
            <View style={{flexDirection:'row',marginLeft:10}}>
                <Image source={{uri:rowData.user.profile_image_url}} style={{width:40,height:40,borderRadius:20}}/>
                <View style={{marginLeft:5,justifyContent:'space-around'}}>
                    <Text style={{color:'red'}}>{rowData.user.name}</Text>
                    <Text style={{color:'#CDC9C9',fontSize:12}}>{textEnd}</Text>
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
