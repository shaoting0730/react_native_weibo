import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TextInput,
    ListView,
    Image,
    Dimensions
} from 'react-native';
import Navigator2 from '../Utils/navigator2'
import MessageAry from './message.json'

var {width,height} = Dimensions.get('window');
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

export default class Message_logined extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:null,
            dataSource:ds.cloneWithRows(MessageAry),
        };
    }
    render() {
        return (
            <View>
                <Navigator2  centerText = '消息'   leftSource  = {require('../../image/发现.png')} rightSource = {require('../../image/消息头.png')} leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}  //去除警告
                />
            </View>
        );
    }
    leftAction =() =>{

    }

    rightAction = () =>{
        alert('二维码')

    }

    renderRow =(rowData,sectionID,rowID,highlightRow) =>{
        if(rowID == 0){ //第一行
            return (
                <View style={{backgroundColor:'#EAEAEA',height:40,justifyContent:'center'}}>
                    <TextInput style={{height:30,backgroundColor:'white',marginLeft:5,marginRight:5,borderRadius:3}} placeholder={'  🔍 大家都在搜: react native '}/>
                </View>
            )
        }else if(rowID > 0 && rowID < 4){  // 2-4
            return (
                <View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:rowData.img}} style={{width:30,height:30,marginLeft:5,marginBottom:5,marginTop:5}}/>
                        <View style={{flexDirection:'row',alignItems:'center',width:width-30,justifyContent:'space-between'}}>
                            <Text>{rowData.txt}</Text>
                            <Image source={require('../../image/大于号.png')} style={{width:15,height:15,marginRight:5}} />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                </View>
            )
        }else { //其他
            return (
                <View>
                    <Text>333</Text>
                </View>
            )
        }


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

