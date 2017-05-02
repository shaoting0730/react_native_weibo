/**
 * Created by shaotingzhou on 2017/4/24.
 */
//首页:这里取出本地化的access_token.判断
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Image,
    DeviceEventEmitter
} from 'react-native';

import NoLogin from './home_notlogin'
import Logined from './home_logined'

export default class Home extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:null
        };
    }
    render() {

        if(this.state.access_token != null){
            return (
                <Logined mynavigator = {this.props.navigator} access_token = {this.state.access_token}  />
            );
        }else{
            return (
                <NoLogin mynavigator = {this.props.navigator}  />
            );
        }

    }

    componentWillMount (){
        AsyncStorage.getItem(
            'access_token',
            (error,result)=>{
                if (!error){
                    this.setState({
                        access_token:result
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


