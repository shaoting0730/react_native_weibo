/**
 * Created by shaotingzhou on 2017/4/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
var {width,height} = Dimensions.get('window');

export default class Navigator1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{marginLeft:20}} onPress={()=>this.props.leftAction()}>
                    <Text style={{color:'#FFC125'}}>{this.props.leftText}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight:'700',fontSize:18}}>{this.props.centerText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:20}} onPress={()=>this.props.rightAction()}>
                    <Text style={{color:'#FFC125'}}>{this.props.rightText}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 69,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'#C1CDCD'
    }
});

