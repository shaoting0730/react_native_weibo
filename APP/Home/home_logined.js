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
    TextInput
} from 'react-native';

import Navigator2 from '../Utils/navigator2'

var ary = []
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
export default class Home_logined extends Component {

    // 构造
    constructor(props) {
        super(props);

        // 初始状态
        this.state = {
            access_token:'',
            dataSource:ds.cloneWithRows(ary),
        };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Navigator2  centerText = '首页'   leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <View style={{backgroundColor:'#EAEAEA',height:40,justifyContent:'center'}}>
                    <TextInput style={{height:30,backgroundColor:'white',marginLeft:5,marginRight:5,borderRadius:3}} placeholder={'  🔍 大家都在搜: react native '}/>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}  //去除警告
                />
            </View>
        );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        // 截取字符串 <a href="http://app.weibo.com/t/feed/6vtZb0" rel="nofollow">微博 weibo.com</a>
        let textEnd = ''
        if(rowData.source){
            let ary = rowData.source.split('<')
            let text = ary[1]
            console.log(text)
            let startIndex = text.indexOf('>')
            textEnd = text.substring(startIndex + 1,text.length)
            textEnd = '来自  ' + textEnd
        }

        //时间计算



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
                    <Text>{rowData.text} 转发</Text>
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
                <View style={{height:15,backgroundColor:'#F0F0F0'}}/>

            </View>
        );
    }



    leftAction =() =>{

    }

    rightAction = () =>{
        alert('二维码')

    }

    middleViewRender (rowData,sectionID,rowID,highlightRow){
        //是否原创微博
        if(rowData.retweeted_status){
            //转发
           return(
               <Text>{rowData.text} 转发</Text>
           )
        }else{
            //原创
            return(
                <Text>{rowData.text} 原创</Text>
            )

        }

    }




    componentDidMount (){
        //请求数据
        let uri = 'https://api.weibo.com/2/statuses/home_timeline.json?access_token=' + this.props.access_token + '&page=1'
        fetch(uri)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.statuses)
                this.setState({
                    dataSource:ds.cloneWithRows(json.statuses),
                })

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

