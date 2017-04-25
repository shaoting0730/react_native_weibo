/**
 * Created by shaotingzhou on 2017/4/24.
 */
// https://api.weibo.com/oauth2/authorize?client_id=428058221&redirect_uri=http://www.baidu.com
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
    AsyncStorage
} from 'react-native';
var {width,height} = Dimensions.get('window');
var client_id = "428058221"   // appkey
var redirect_uri = "http://www.baidu.com"  //授权回调页
var client_secret = "b1b7481c44b1c5833f8203dafe24a8c2"  //App Secret
var access_token = ''
export default class Home extends Component {

    render() {
        let uri = 'https://api.weibo.com/oauth2/authorize?client_id=' + client_id + '&redirect_uri=' + redirect_uri
        AsyncStorage.getItem(
            'key',
            (error,result)=>{
                if (!error){
                    access_token = result
                }
            }
        )
        return (
            <View style={styles.container}>
                <WebView
                    ref = "webView"
                    onNavigationStateChange = {(e)=>this.onNavigationStateChange(e)}
                    style={{width:width,height:height,backgroundColor:'gray'}}
                    source={{uri:uri,method: 'GET'}}
                />
            </View>
        );

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
        var uri = 'https://api.weibo.com/oauth2/access_token' + '?client_id=' + client_id + '&client_secret=' + client_secret + '&grant_type=' + 'authorization_code' + '&code=' + code + '&redirect_uri=' + redirect_uri
        fetch(uri,{
            method:'POST',
        })
            .then((response) => response.json())
            .then((json) => {
                if(json.access_token){
                    access_token =  json.access_token
                }
            })

    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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


