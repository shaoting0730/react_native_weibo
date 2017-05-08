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

export default class ModalView extends Component {
    render() {
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
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>收藏</Text>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{backgroundColor:'white',alignItems: 'center'}}>
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>用此卡片背景</Text>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{backgroundColor:'white',alignItems: 'center'}}>
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>帮上头条</Text>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{backgroundColor:'white',alignItems: 'center'}}>
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>取消关注</Text>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{backgroundColor:'white',alignItems: 'center'}}>
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>屏蔽</Text>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{backgroundColor:'white',alignItems: 'center'}}>
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>举报</Text>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                        <TouchableOpacity onPress={()=>this.passMethod()}>
                        <View style={{backgroundColor:'white',alignItems: 'center'}}>
                            <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>取消</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                    </ScrollView>
                </View>
            </View>
        );
    }

    passMethod = () =>{
        this.props.showOnclick()
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

