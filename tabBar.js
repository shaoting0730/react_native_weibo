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

import TabNavigator from 'react-native-tab-navigator'

import Home from './APP/Home/home'
import Message from './APP/Message/message'
import New from './APP/New/new'
import Find from './APP/Find/find'
import Mine from './APP/Mine/mine'

var {width,height} = Dimensions.get('window');



export default class TabBar extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'Home' // 默认是第一个
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        title="首页"
                        selected={this.state.selectedTab === 'Home'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => <Image source={require('./image/home.png')} style={styles.iconStyle} />} // 图标
                        renderSelectedIcon={() => <Image source={require('./image/home_selected.png')} style={styles.iconStyle} />}   // 选中的图标
                        titleStyle={styles.textStyle}
                        onPress={() => this.setState({ selectedTab: 'Home' })}>
                        <Home {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="消息"
                        selected={this.state.selectedTab === 'Message'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => <Image source={require('./image/message.png')} style={styles.iconStyle} />} // 图标
                        renderSelectedIcon={() => <Image source={require('./image/message_selcted.png')} style={styles.iconStyle} />}   // 选中的图标
                        titleStyle={styles.textStyle}
                        onPress={() => this.setState({ selectedTab: 'Message' })}>
                        <Message {...this.props} />
                    </TabNavigator.Item>
                    {<TabNavigator.Item
                        title='  '
                        selected={this.state.selectedTab === 'New'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.textStyle}
                        onPress={() => this.setState({ selectedTab: 'New' })}
                    >
                        <New {...this.props}/>
                    </TabNavigator.Item>}
                    <TabNavigator.Item
                        title="发现"
                        selected={this.state.selectedTab === 'Find'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => <Image source={require('./image/find.png')} style={styles.iconStyle} />} // 图标
                        renderSelectedIcon={() => <Image source={require('./image/find_selected.png')} style={styles.iconStyle} />}   // 选中的图标
                        titleStyle={styles.textStyle}
                        onPress={() => this.setState({ selectedTab: 'Find' })}>
                        <Find {...this.props} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        selected={this.state.selectedTab === 'Mine'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        renderIcon={() => <Image source={require('./image/mine.png')} style={styles.iconStyle} />} // 图标
                        renderSelectedIcon={() => <Image source={require('./image/mine_selected.png')} style={styles.iconStyle} />}   // 选中的图标
                        titleStyle={styles.textStyle}
                        onPress={() => this.setState({ selectedTab: 'Mine' })}>
                        <Mine {...this.props} />
                    </TabNavigator.Item>
                </TabNavigator>

                <TouchableOpacity onPress={() => this.goRoute()} >
                    <Image
                        style={styles.newStyle}
                        source={require('./image/new.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    goRoute =() =>{
        this.props.navigator.push({
            component:New
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    newStyle: {
        position: 'absolute',
        marginLeft: width / 2 - 25,
        width: 50,
        height: 40,
        bottom:2,
        borderRadius: 5
    },
    selectedTitleStyle: {
        color: 'red'
    },
});
