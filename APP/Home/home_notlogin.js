/**
 * Created by shaotingzhou on 2017/4/26.
 */
// 没有access_token
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
    Image
} from 'react-native';

import Navigator1 from '../Utils/navigator1'

var {width,height} = Dimensions.get('window');
import Login from './login'

export default class Home_notlogin extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        // 初始状态
        this.state = {
        };
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <Navigator1 leftText = '注册' centerText = '首页'  rightText = '登录' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <View style={{alignItems:'center',marginTop:100}}>
                    <Animated.Image source={require('../../image/no-login.png')} style={{width:width*0.6,height:width*0.6,transform: [{rotate: spin}] }}/>
                    <Image source={require('../../image/no-login-bg.png')} style={{marginTop:-width*0.3,width:width*0.6,height:width*0.3}}/>
                    <Image source={require('../../image/small_house.png')} style={{marginTop:-width*0.4,width:width*0.32,height:width*0.31}}/>
                    <Text style={{color:'gray',marginTop:50}}>关注一些人,回到这里看看有什么惊囍</Text>
                    <Image source={require('../../image/attention.png')} style={{marginTop:20,width:150,height:35}}/>
                </View>

            </View>
        );
    }

    leftAction =() =>{
        alert('微博api未公开注册接口,点击登录跳转注册')
    }
    //登录按钮
    rightAction = () =>{
        this.props.mynavigator.push(
            {
                component:Login,
            }
        )
    }


    //旋转动画
    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear
            }
        ).start(()=>this.spin())
    }

    componentWillMount (){
        this.spin()
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

