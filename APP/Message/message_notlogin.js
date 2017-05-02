import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Image,
    Dimensions,
    TouchableOpacity,
    Navigator
} from 'react-native';

var {width,height} = Dimensions.get('window');
import Navigator1 from '../Utils/navigator1'
import Login from '../Home/login'

export default class Message_notlogin extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:null
        };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Navigator1 leftText = '' centerText = '消息'  rightText = '' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <View style={{alignItems: 'center',marginTop:100}}>
                    <Image source={require('../../image/消息.png')} style={{width: 200,height:200}} />
                    <Text style={{marginLeft:50,marginRight:50,color:'gray'}}>登录后,别人评论你的微博,给你发消息,都会在这里收到通知</Text>
                    <View style={{flexDirection:'row',width:width-100,justifyContent:'space-around',marginTop:30}}>
                        <TouchableOpacity onPress={()=>this.registerAction()}>
                        <Image source={require('../../image/注册.png')} style={{width: 60,height:30}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.loginAction()}>
                        <Image source={require('../../image/登录.png')} style={{width: 60,height:30}}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }



    registerAction = () =>{
        alert('微博api未公开注册接口,点击登录跳转注册')
    }

    loginAction = () =>{
        this.props.mynavigator.push(
            {
                component:Login,
            }
        )
    }




    leftAction =() =>{

    }
    rightAction = () =>{

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

