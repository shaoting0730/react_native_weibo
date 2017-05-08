/**
 * Created by shaotingzhou on 2017/4/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import Swiper from 'react-native-swiper'
import TabBar from '../../tabBar'
import SwiperItem from './swiperItem'


var {width,height} = Dimensions.get('window');

export default class New extends Component {
    // 构造
      constructor(props) {
        super(props);
          this.animatedValue = new Animated.Value(0)
          // 初始状态
        this.state = {
            date:'',   //日
            month:'',   //月
            fullYear:'',   //年
            day:'',      //星期
            weather:''   //天气
        };
      }
    animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }
        ).start()
    }
    render() {
        const marginTop = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [300, 0]
        })
        return (
            <View style={styles.container}>
                {/*上方的日期天气栏目*/}
                <View style={{height: 100,marginTop: 50,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:200}}>
                    <View>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={{fontSize:40}}>{this.state.date}</Text>
                            <View style={{marginLeft:5}}>
                                <Text>周{this.state.day}</Text>
                                <Text>{this.state.month}/{this.state.fullYear}</Text>
                            </View>
                        </View>
                        <Text>上海:  {this.state.weather}   ></Text>
                    </View>
                    <Image source={require('../../image/广告.png')} style={{width:150,height:150}}/>
                </View>
                {/*中部的轮播*/}
                <Animated.View style={{marginTop}}>
                <Swiper height = {200} loop = {false}>
                    <View style={styles.slideView}>
                        <View style={{flexDirection:'row'}}>
                            <SwiperItem source = {require('../../image/item1.png')} text = "文字" mynavigator = {this.props.navigator} />
                            <SwiperItem source = {require('../../image/item2.png')} text = "拍摄" mynavigator = {this.props.navigator} />
                            <SwiperItem source = {require('../../image/item3.png')} text = "相册" mynavigator = {this.props.navigator} />
                            <SwiperItem source = {require('../../image/item4.png')} text = "直播"mynavigator = {this.props.navigator} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <SwiperItem source = {require('../../image/item5.png')} text = "光影秀" mynavigator = {this.props.navigator} />
                            <SwiperItem source = {require('../../image/item6.png')} text = "头条文章" mynavigator = {this.props.navigator} />
                            <SwiperItem source = {require('../../image/item7.png')} text = "签到" mynavigator = {this.props.navigator} />
                            <SwiperItem source = {require('../../image/item8.png')} text = "点评" mynavigator = {this.props.navigator} />
                        </View>

                    </View>
                    <View style={styles.slideView}>
                        <View style={{flexDirection:'row'}}>
                            <SwiperItem source = {require('../../image/item9.png')} text = "话题" mynavigator = {this.props.navigator}/>
                            <SwiperItem source = {require('../../image/item10.png')} text = "红包" mynavigator = {this.props.navigator}/>
                            <SwiperItem source = {require('../../image/item11.png')} text = "好友圈" mynavigator = {this.props.navigator}/>
                            <SwiperItem source = {require('../../image/item12.png')} text = "音乐" mynavigator = {this.props.navigator}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <SwiperItem source = {require('../../image/item13.png')} text = "商品" mynavigator = {this.props.navigator}/>
                            <SwiperItem source = {require('../../image/item14.png')} text = "秒拍" mynavigator = {this.props.navigator}/>
                        </View>
                    </View>
                </Swiper>
                </Animated.View>
                {/*下方的X号按钮返回*/}
                <TouchableOpacity onPress={()=>this.backHomeAction()} style={styles.bottomStyle}>
                    <View>
                        <Image source={require('../../image/差号-加粗.png')} style={{width:30,height:30}} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    //X号响应事件 返回首页
    backHomeAction = ()=>{
        this.props.navigator.immediatelyResetRouteStack([
            {
                component:TabBar

            }
        ])
    }

    //获取日期 天气
    componentDidMount(){
          this.animate()
        var myDate = new Date();
        /*
         * myDate.getDate() 日
         * myDate.getMonth() 月 0-11
         * myDate.getFullYear()  年
         * myDate.getDay()   星期几
         * http://www.weather.com.cn/data/cityinfo/101020100.html 上海天气
         * */
        var day:'';
        switch(myDate.getDay())
        {
            case 1:
                day = '一'
                break;
            case 2:
                day = '二'
                break;
            case 3:
                day = '三'
                break;
            case 4:
                day = '四'
                break;
            case 5:
                day = '五'
                break;
            case 6:
                day = '六'
                break;
            default:
                day = '日'
        }

        this.setState({
            date:myDate.getDate(),
            month:myDate.getMonth() + 1,
            fullYear:myDate.getFullYear(),
            day:day,
        })
        //获取天气况状
        fetch('http://www.weather.com.cn/data/cityinfo/101020100.html')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    weather:json.weatherinfo.weather
                })
            })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slideView: {
        height:300,
        alignItems:'center'
    },
    bottomStyle: {
        width:width,
        position: 'absolute',
        bottom:2,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }
});



