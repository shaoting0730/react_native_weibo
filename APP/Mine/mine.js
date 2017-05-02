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
import Logined from './mine_logined'
import NoLogin from './mine_notlogin'


export default class Mine extends Component {

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
                <Logined mynavigator = {this.props.navigator} access_token = {this.state.access_token} />
            );
        }else{
            return (
                <NoLogin mynavigator = {this.props.navigator} />
            );
        }
    }

    componentWillMount (){
        //取出本地化的access_token
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



