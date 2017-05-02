/**
 * Created by shaotingzhou on 2017/5/2.
 */
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
    Navigator,
} from 'react-native';

var {width,height} = Dimensions.get('window');
import Navigator1 from '../Utils/navigator1'
import Login from '../Home/login'

export default class Mine_notlogin extends Component {

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
                <Navigator1 leftText = '        '  centerText = '我'  rightText = '设置' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>

                <View>
                    <Image source={require('../../image/person_bg.jpg')} style={{width:width,height:200}} />
                    <Image source={require('../../image/prrson.png')} style={{width:50,height:50,position:'absolute',marginTop:75,borderRadius:25,alignSelf:'center'}} />
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text>关注  </Text>
                            <Text style={{color:'#CCCCCC',fontSize:10}}>快看看大家都在关注谁</Text>
                        </View>
                        <Image source={require('../../image/大于号.png')} style={{width:15,height:15,marginRight:5}} />
                    </View>
                </View>

                <View style={{alignItems:'center',marginTop:100}}>
                    <Text style={{color:'#CCCCCC'}}>登录后.你的微薄.相册.个人资料</Text>
                    <Text style={{color:'#CCCCCC'}}>会显示在这里,展示给别人</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-around',marginLeft:50,marginRight:50}}>
                    <TouchableOpacity onPress={()=>this.registerAction()}>
                        <Image source={require('../../image/注册.png')} style={{width: 60,height:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.loginAction()}>
                        <Image source={require('../../image/登录.png')} style={{width: 60,height:30}}/>
                    </TouchableOpacity>
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

