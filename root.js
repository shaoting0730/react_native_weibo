/**
 * Created by shaotingzhou on 2017/4/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import  TabBar from './tabBar'
export default class Root extends Component {
    configureScene(e) {
        if(e.component.name == "New"){  //如果点击的按钮是new,则是从底部推出
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return conf = Navigator.SceneConfigs.HorizontalSwipeJump;
        conf.gestures = null;   //去除手滑动走push和pop
        return conf;
    }
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{component: TabBar}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        );
    }
}



