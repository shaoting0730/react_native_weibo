/**
 * Created by shaotingzhou on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Platform,
    NativeModules
} from 'react-native';
import Navigator1 from '../Utils/navigator1'
import SettingItem from './settingItem'
var CalendarManager = NativeModules.CalendarManager;

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            cache:0

        })
    }
    render() {
        return (
            <View>
                <Navigator1 leftText = '返回' centerText = '设置'  rightText = '  ' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <ScrollView style={{marginBottom:0}}>
                    <View style={{backgroundColor:'#F0F0F0',height:10}}></View>
                    <SettingItem txt1 = '账号管理'/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '账号与安全'/>
                    <View style={{backgroundColor:'#F0F0F0',height:10}}></View>
                    <SettingItem txt1 = '消息设置'/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '屏蔽设置'/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '隐私设置'/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '通用设置'/>
                    <View style={{backgroundColor:'#F0F0F0',height:10}}></View>
                    <TouchableOpacity  onPress={()=> this.clearCache()}>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:5,marginLeft:5}}>
                            <Text>清理缓存</Text>
                            <Text style={{fontSize:11,color:'#CCCCCC',position:'absolute',right:15}}>{this.state.cache} KB</Text>
                            <Image source={require('../../image/大于号.png')} style={{width:10,height:10,position:'absolute',right:5}} />
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '意见反馈'/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '客户中心' txt2 = "🆕"/>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    <SettingItem txt1 = '关于微博'/>
                    <View style={{backgroundColor:'#F0F0F0',height:10}}></View>
                    <View style={{justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{color:'red',marginTop:5,marginBottom:5}}>退出当前账号</Text>
                    </View>
                    <View style={{backgroundColor:'#F0F0F0',height:10}}></View>
                </ScrollView>
            </View>
        );
    }

    leftAction =() =>{
        this.props.navigator.pop({})
    }

    rightAction =() =>{

    }

    componentWillMount() {
        Platform.OS === 'ios' ?
            CalendarManager.cacheSize((error, events) => {
                if (error) {
                    console.error(error);
                } else {
                    this.setState({
                        cache:Math.round((events/1024/1024)*100)
                    })
                }
            })
            :
            console.log('安卓清除缓存未实现')
    }

    clearCache =() =>{
        Platform.OS === 'ios' ?
            CalendarManager.cleanCache((error, events) => {
                if (error) {
                    console.error(error);
                } else {
                    this.setState({
                        cache:0
                    })
                }
            })
            :
            console.log('安卓清除缓存未实现')
    }


}

const styles = StyleSheet.create({
    container: {
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }
});
