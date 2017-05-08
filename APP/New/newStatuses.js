/**
 * Created by shaotingzhou on 2017/5/5.
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
    TextInput,
    AsyncStorage
} from 'react-native';
import Navigator1 from '../Utils/navigator1'
import TabBar from '../../tabBar'

var {width,height} = Dimensions.get('window');

export default class NewStatuses extends Component {
    render() {
        return (
            <View>
                <Navigator1 leftText = '取消' centerText = '发微博'  rightText = '发送' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <TextInput
                    style={{width:width,height:200}}
                    placeholder={'分享新鲜事...'}
                    autoFocus = {true}
                    maxLength = {140}
                    multiline = {true}
                    ref="myTextInput"
                />
            </View>
        );
    }

    componentWillMount(){

    }

    leftAction =()=>{
        //返回首页
        this.props.navigator.immediatelyResetRouteStack([
            {
                component:TabBar
            }
        ])
    }

    rightAction =()=>{
        let text = this.refs.myTextInput._lastNativeText
        if(text.length > 0){
            let uri = 'https://api.weibo.com/2/statuses/update.json'
            let params = 'access_token=' + this.props.access_token + '&status=' + text
            fetch(uri,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: params,
            })
                .then((response) => response.json())
                .then((json) => {
                    //返回首页
                    this.props.navigator.immediatelyResetRouteStack([
                        {
                            component:TabBar
                        }
                    ])

                })
        }else {
            alert('请发送1-140个字符')
        }

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

