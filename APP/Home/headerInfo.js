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
    Modal
} from 'react-native';
import ModalView from './modalView'

export default class HeaderInfo extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show:false
        };
    }
    render() {
        const rowData = this.props.rowData
        // 截取字符串 <a href="http://app.weibo.com/t/feed/6vtZb0" rel="nofollow">微博 weibo.com</a>
        let textEnd = ''
        if(rowData.source){
            let ary = rowData.source.split('<')
            let text = ary[1]
            let startIndex = text.indexOf('>')
            textEnd = text.substring(startIndex + 1,text.length)
            textEnd = '来自  ' + textEnd
        }
        return (
            <View style={{flexDirection:'row',marginLeft:10}}>
                <Image source={{uri:rowData.user.profile_image_url}} style={{width:40,height:40,borderRadius:20}}/>
                <View style={{marginLeft:5,justifyContent:'space-around'}}>
                    <Text style={{color:'red'}}>{rowData.user.name}</Text>
                    <Text style={{color:'#CDC9C9',fontSize:12}}>{textEnd}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.modalShow()} style={{position:'absolute',right:5}}>
                    <Image source={require('../../image/下箭头.png')} style={{width:20,height:20}} />
                </TouchableOpacity>
                {/*modal*/}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.show}
                >
                    <ModalView rowData = {rowData} access_token = {this.props.access_token}  showOnclick = {()=>this.modalShow()} mynavigator = {this.props.mynavigator} />
                </Modal>
            </View>
        );
    }

    modalShow = () =>{
        this.setState({
            show:!this.state.show
        })
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
