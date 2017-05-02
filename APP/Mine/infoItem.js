/**
 * Created by shaotingzhou on 2017/5/2.
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
export default class InfoItem extends Component {
    render() {
        return (
            <TouchableOpacity  onPress={()=>alert(this.props.txt1)}>
                <View style={{marginTop:5,marginBottom:5}}>
                    <Text style={{fontWeight:'bold'}}>{this.props.txt1}</Text>
                    <Text style={{color:'#CCCCCC',fontSize:11}}>{this.props.txt2}</Text>
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

