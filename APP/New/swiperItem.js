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
    TouchableOpacity,
    Dimensions
} from 'react-native';
export default class react_native_weibo extends Component {
    render() {
        return (
            <TouchableOpacity  onPress={()=>alert(this.props.text)}>
            <View style={styles.container}>
                <Image source={this.props.source} style={{width:40,height:40}}/>
                <Text style={{marginTop:5,fontSize:10}}>{this.props.text}</Text>
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

AppRegistry.registerComponent('react_native_weibo', () => react_native_weibo);
