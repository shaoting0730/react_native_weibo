/**
 * Created by shaotingzhou on 2017/4/26.
 */
//授权界面
// https://api.weibo.com/oauth2/authorize?client_id=428058221&redirect_uri=http://www.baidu.com
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';

import Navigator1 from '../Utils/navigator1'
import TabBar from '../../tabBar'


var {width,height} = Dimensions.get('window');
var client_id = "3802325060"   // appkey
var redirect_uri = "http://www.baidu.com"  //授权回调页
var client_secret = "cfb876dc41200a29bf197aa330655ae3"  //App Secret
export default class Login extends Component {

    render() {
        let uri = 'https://api.weibo.com/oauth2/authorize?client_id=' + client_id + '&redirect_uri=' + redirect_uri
        return (
            <View style={styles.container}>
                <Navigator1 leftText = '返回' centerText = '授权'  rightText = '  ' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>

                <WebView
                    ref = "webView"
                    onNavigationStateChange = {(e)=>this.onNavigationStateChange(e)}
                    style={{width:width,height:height,backgroundColor:'gray'}}
                    source={{uri:uri,method: 'GET'}}
                    renderLoading = {this.renderActivityIndicator}
                />
            </View>
        );

    }
    renderActivityIndicator (){
        return(
            <ActivityIndicator />
        )
    }

    //获取code
    onNavigationStateChange =(e) =>{
        if(e.loading == true){
            var indexStart = e.url.indexOf('=')
            var indexEnd = e.url.indexOf('&')
            var code =  e.url.substring(indexStart+1,indexEnd)
            this.loginAction(code) // 获取授权
        }
    }

    //获取授权
    loginAction =(code) =>{
        // 网络请求里面 有 存值 有 跳转  ? 性能问题
        var uri = 'https://api.weibo.com/oauth2/access_token' + '?client_id=' + client_id + '&client_secret=' + client_secret + '&grant_type=' + 'authorization_code' + '&code=' + code + '&redirect_uri=' + redirect_uri
        fetch(uri,{
            method:'POST',
        })
            .then((response) => response.json())
            .then((json) => {

                if(json.access_token){
                    //存access_token
                    AsyncStorage.setItem(
                        'access_token',
                        json.access_token,
                        (error)=>{
                            if (!error){
                                //返回首页
                                this.props.navigator.immediatelyResetRouteStack([
                                    {
                                        component:TabBar
                                    }
                                ])

                            }
                        }
                    );
                }
            })
    }

    leftAction =() =>{
        this.props.navigator.pop({})
    }

    rightAction = () =>{

    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


