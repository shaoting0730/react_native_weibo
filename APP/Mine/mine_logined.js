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
    ScrollView
} from 'react-native';

var {width,height} = Dimensions.get('window');
import Navigator1 from '../Utils/navigator1'
import MineItem from './mineItem'
import Info from './infoItem'
export default class Mine_logined extends Component {

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
                <Navigator1 leftText = '添加好友' centerText = '我'  rightText = '        设置' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <ScrollView>
                    {/*个人信息*/}
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../../image/评论.png')} style={{width:60,height:60,borderRadius:30}} />
                            <View style={{justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold'}}>少停</Text>
                                <Text style={{color:'#CCCCCC',fontSize:11}}>简介:暂无介绍</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Info txt1 = '110' txt2 = '微博' />
                            <Info txt1 = '110' txt2 = '关注' />
                            <Info txt1 = '110' txt2 = '粉丝' />
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    </View>
                    {/*新的好友*/}
                    <MineItem txt1 = " 新的好友" source = {require('../../image/mine01.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    {/*我的相册,我的赞*/}
                    <MineItem txt1 = " 我的相册" source = {require('../../image/mine02.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <MineItem txt1 = " 我的赞"   source = {require('../../image/mine03.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    {/*微博钱包 微博运动 免流量*/}
                    <MineItem txt1 = " 微博钱包" txt2 = " 抢钱!充值能翻倍" source = {require('../../image/mine04.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <MineItem txt1 = " 微博运动" txt2 = " 好运走以来" source = {require('../../image/mine05.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <MineItem txt1 = " 免流量" txt2 = " 微博微卡" source = {require('../../image/mine06.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    {/*粉丝服务 粉丝头条*/}
                    <MineItem txt1 = " 粉丝服务" txt2 = " 写文章,发点评,赚粉丝" source = {require('../../image/mine07.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <MineItem txt1 = " 粉丝头条" txt2 = " 推广博文及账号的利器" source = {require('../../image/mine08.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    {/*草稿箱*/}
                    <MineItem txt1 = " 草稿箱"  source = {require('../../image/mine09.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    {/*更多*/}
                    <MineItem txt1 = " 更多"  source = {require('../../image/mine10.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                </ScrollView>
            </View>
        );
    }



    leftAction = () =>{
        alert('添加好友')
    }

    rightAction = () =>{
        alert('设置')
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

