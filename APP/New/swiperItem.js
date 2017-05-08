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
    Dimensions,
    AsyncStorage
} from 'react-native';
import NewStatuses from './newStatuses'
import Login from '../Home/login'

export default class SwiperItem extends Component {
    render() {
        return (
            <TouchableOpacity  onPress={()=>this.itemOnclick()}>
                <View style={styles.container}>
                    <Image source={this.props.source} style={{width:40,height:40}}/>
                    <Text style={{marginTop:5,fontSize:10}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    itemOnclick = ()=>{
        AsyncStorage.getItem(
            'access_token',
            (error,result)=>{
                if (!error) {
                    if (result != null) {

                        if (this.props.text == '文字') {
                            this.props.mynavigator.push(
                                {
                                    component: NewStatuses,
                                    passProps: {
                                        'access_token': result
                                    }
                                }
                            )
                        }
                    }else {
                        this.props.mynavigator.push(
                            {
                                component: Login,
                            }
                        )
                    }
                }
            }
        )




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

