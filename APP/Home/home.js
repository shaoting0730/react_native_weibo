/**
 * Created by shaotingzhou on 2017/4/24.
 */
//首页:用户登录
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Image,
} from 'react-native';

import NoLogin from './no_login'
import Navigator2 from '../Utils/navigator2'

export default class Home extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:''
        };
    }
    render() {

        if(this.state.access_token != null){
            return (
                <View style={{flex:1}}>
                    <Navigator2  centerText = '首页'   leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                    <Text>{this.state.access_token}首页数据</Text>
                </View>
            );
        }else{
            return (
               <NoLogin mynavigator = {this.props.navigator} />
            );
        }


    }

    componentWillMount (){
        //取出access_token
        AsyncStorage.getItem(
            'access_token',
            (error,result)=>{
                if (!error){
                    this.setState({
                        access_token:result
                    })
                }else {

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


