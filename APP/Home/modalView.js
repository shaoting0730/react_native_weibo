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
    AsyncStorage,
    ScrollView
} from 'react-native';
var {width,height} = Dimensions.get('window');
import TabBar from '../../tabBar'

export default class ModalView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            uid:0
        };
    }


    render() {
        if(this.props.rowData.user.id == this.state.uid){
            return (
                <View style={styles.container}>
                    {/*阴影*/}
                    <TouchableOpacity onPress={()=>this.passMethod()}>
                        <View style={styles.shadowView}>
                        </View>
                    </TouchableOpacity>
                    {/*modal*/}
                    <View style={styles.modalStyle}>
                        <ScrollView>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>收藏</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>置顶</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>推广</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <TouchableOpacity onPress={() => this.deleteStatus()}>
                                <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                    <Text style={{fontSize:20,marginTop:10,marginBottom:10,color:'red'}}>删除</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                            <TouchableOpacity onPress={()=>this.passMethod()}>
                                <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                    <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>取消</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        </ScrollView>
                    </View>
                </View>
            );
        }else {
            return (
                <View style={styles.container}>
                    {/*阴影*/}
                    <TouchableOpacity onPress={()=>this.passMethod()}>
                        <View style={styles.shadowView}>
                        </View>
                    </TouchableOpacity>
                    {/*modal*/}
                    <View style={styles.modalStyle}>
                        <ScrollView>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>收藏</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>用此卡片背景</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>帮上头条</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>取消关注</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>屏蔽</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                            <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>举报</Text>
                            </View>
                            <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                            <TouchableOpacity onPress={()=>this.passMethod()}>
                                <View style={{backgroundColor:'white',alignItems: 'center'}}>
                                    <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>取消</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }

    passMethod = () =>{
        this.props.showOnclick()
    }

    componentDidMount() {
        //获取用户的uid
        //取出本地化的access_token
        AsyncStorage.getItem(
            'uid',
            (error,result)=>{
                if (!error){
                    this.setState({
                        uid:result
                    })

                }
            }
        )

    }

    deleteStatus = () =>{
        let id = this.props.rowData.id  //微博id
        let access_token  = this.props.access_token
        let uri = 'https://api.weibo.com/2/statuses/destroy.json'
        let params = 'access_token=' + access_token + '&id=' + id
        fetch(uri,{
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params,
        })
            .then((response) => response.json())
            .then((json) => {
                //返回首页
                this.props.mynavigator.immediatelyResetRouteStack([
                    {
                        component:TabBar
                    }
                ])

            })
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    shadowView:{
        backgroundColor:'black',
        opacity:0.5,
        height: height*0.55,
        width: width,
    },
    //modal
    modalStyle:{
        backgroundColor:'white',
        width: width,
        height: height*0.45
    },
});

