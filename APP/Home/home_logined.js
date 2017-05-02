/**
 * Created by shaotingzhou on 2017/4/26.
 */
// 存在access_token
// https://api.weibo.com/2/statuses/home_timeline.json?access_token=2.00j6v5hC0rUFy971093d5fecnXtMTB&page=2   默认20条
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ListView,
    AsyncStorage,
    TextInput,
    ScrollView,
    RefreshControl
} from 'react-native';

import Navigator2 from '../Utils/navigator2'
var {width,height} = Dimensions.get('window');

var ary = []
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
var num = 1 //第几页数据
export default class Home_logined extends Component {

    // 构造
    constructor(props) {
        super(props);

        // 初始状态
        this.state = {
            dataSource:ds.cloneWithRows(ary),
            isRefreshing:false
        };
    }
    render () {
        return (
            <View style={{flex:1}}>
                <Navigator2  centerText = '首页'   leftSource  = {require('../../image/相机.png')} rightSource = {require('../../image/二维码.png')} leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <View style={{backgroundColor:'#EAEAEA',height:40,justifyContent:'center'}}>
                    <TextInput style={{height:30,backgroundColor:'white',marginLeft:5,marginRight:5,borderRadius:3}} placeholder={'  🔍 大家都在搜: react native '}/>
                </View>
                <ListView
                    refreshControl={
                    <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={()=>this.onRefreshData()}
                    />
                    }
                    onEndReached={()=>this.loadMore()}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}  //去除警告
                />
            </View>
        );
    }

    onRefreshData =() =>{
        this.loadData(1)
    }
    loadMore =() =>{
        num ++
        this.loadData(num)
    }

    renderRow =(rowData,sectionID,rowID,highlightRow) =>{
        // 截取字符串 <a href="http://app.weibo.com/t/feed/6vtZb0" rel="nofollow">微博 weibo.com</a>
        let textEnd = ''
        if(rowData.source){
            let ary = rowData.source.split('<')
            let text = ary[1]
            let startIndex = text.indexOf('>')
            textEnd = text.substring(startIndex + 1,text.length)
            textEnd = '来自  ' + textEnd
        }


        return(
            <View>
                {/*头像等信息*/}
                <View style={{flexDirection:'row',marginLeft:10}}>
                    <Image source={{uri:rowData.user.profile_image_url}} style={{width:40,height:40,borderRadius:20}}/>
                    <View style={{marginLeft:5,justifyContent:'space-around'}}>
                        <Text style={{color:'red'}}>{rowData.user.name}</Text>
                        <Text style={{color:'#CDC9C9',fontSize:12}}>{textEnd}</Text>
                    </View>
                </View>
                {/*中间微博信息*/}
                <View>
                    <Text>{rowData.text}</Text>
                    {this.middleViewRender(rowData,sectionID,rowID,highlightRow)}
                </View>
                {/*转发.评论.点赞*/}
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../image/转发.png')} style={{width:20,height:20}} />
                        <Text>{rowData.reposts_count == 0 ? '转发' :rowData.reposts_count}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../image/评论.png')} style={{width:20,height:20}} />
                        <Text>{rowData.comments_count == 0 ? '转发' :rowData.comments_count}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../image/点赞.png')} style={{width:20,height:20}} />
                        <Text>{rowData.attitudes_count == 0 ? '转发' :rowData.attitudes_count}</Text>
                    </View>
                </View>
                {/*分隔条*/}
                <View style={{height:15,backgroundColor:'#CCCCCC'}}/>

            </View>
        );
    }




    // 辨识是否微博转发
    middleViewRender (rowData,sectionID,rowID,highlightRow){

        if(rowData.retweeted_status){
            let retweeted_status = rowData.retweeted_status
            //转发
            return(
                <View style={{backgroundColor:'#F8F8FF',marginLeft:10}}>
                    <Text style={{fontSize:12}}>@{retweeted_status.user.name}:{retweeted_status.text}</Text>
                </View>
            )
        }else{
            //原创
            //取出图片url
            var imgAry = rowData.pic_urls
            var imgUrlAry = []
            imgAry.forEach(function (val, index) {
                var url = val.thumbnail_pic
                imgUrlAry.push(url)
            })
            if(imgUrlAry.length > 0) {
                return(
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        {this.renderImg(imgUrlAry,rowData)}
                    </View>
                )
            }
        }
    }

    //图片render
    renderImg = (imgUrlAry,rowData) =>{
        var itemAry = [];
        for(var i = 0;i < imgUrlAry.length; i++){
            if(imgUrlAry.length == 1){ //只有一张图片,拿原图
                itemAry.push(
                    <Image key={i} source={{uri:rowData.original_pic}} style={{width:200,height:200}}/>
                )
            }else if(imgUrlAry.length == 2 || imgUrlAry.length == 4){
                itemAry.push(
                    <Image key={i} source={{uri:imgUrlAry[i]}} style={{width:width/2,height:200}}/>
                )
            }else {
                itemAry.push(
                    <Image key={i} source={{uri:imgUrlAry[i]}} style={{width:width/3,height:150}}/>
                )
            }
        }

        return itemAry
    }




    leftAction =() =>{

    }

    rightAction = () =>{
        alert('二维码')

    }

    componentDidMount (){
        this.loadData(1)
    }


    loadData = (num) =>{
        //请求数据
        console.log('https://api.weibo.com/2/statuses/home_timeline.json?access_token=' + this.props.access_token + '&page=')
        let uri = 'https://api.weibo.com/2/statuses/home_timeline.json?access_token=' + this.props.access_token + '&page=' + num
        fetch(uri)
            .then((response) => response.json())
            .then((json) => {
                if (json.error_code == 10023) {
                    alert('api请求次数受限,请更换. 10023')
                } else {
                    json.statuses.forEach(function (val, index) {
                        ary.push(val)
                    })
                    this.setState({
                        dataSource: ds.cloneWithRows(ary),

                    })
                }
            })
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

