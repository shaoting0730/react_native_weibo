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
    Dimensions
} from 'react-native';
export default class SettingItem extends Component {
    render() {
        return (
            <TouchableOpacity  onPress={()=>alert(this.props.txt1)}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:5,marginLeft:5}}>
                    <Text>{this.props.txt1}</Text>
                    <Text style={{fontSize:11,color:'#CCCCCC',position:'absolute',right:15}}>{this.props.txt2}</Text>
                    <Image source={require('../../image/大于号.png')} style={{width:10,height:10,position:'absolute',right:5}} />
                </View>
            </TouchableOpacity>
        );
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