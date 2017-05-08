/**
 * Created by shaotingzhou on 2017/4/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import  TabBar from '../../tabBar'
export default class Find extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>this.loginOut()}>
                   注销
                </Text>
            </View>
        );
    }


    loginOut =()=> {
            // 取值里面 有 网络请求  有 移除本地存值 有 跳转  ? 性能问题
            AsyncStorage.getItem(
                'access_token',
                (error, result) => {
                    if (!error) {
                        //值有 开始网络请求
                        fetch('https://api.weibo.com/oauth2/revokeoauth2?access_token=' + result)
                            .then((response) => response.json())
                            .then((json) => {
                                console.log(json)
                                if(json.result == "true"){  //只有服务器移除授权之后才移除本地存值
                                    AsyncStorage.removeItem(
                                        'access_token',
                                        (error)=>{
                                            if(!error){
                                                //移除完之后开始跳界面
                                                this.props.navigator.immediatelyResetRouteStack([
                                                    {
                                                        component:TabBar
                                                    }
                                                ])
                                            }
                                        }
                                    )
                                }else {
                                    alert('没登录,点个毛')
                                }

                            })
                    }
                }
            )


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

