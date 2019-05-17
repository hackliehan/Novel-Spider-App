/**
 * @format
 */

import React,{ Component } from 'react'
import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigator'
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import { Provider } from '@ant-design/react-native';
import { addHttpResHandler } from 'wl-fetch';


const NavigatorContainer = createAppContainer(AppNavigator);

class App extends Component{

    componentWillMount(){
        addHttpResHandler((res)=>{
            console.log(res)
        })
    }

    render(){
        return (
            <Provider>
                <NavigatorContainer/>
            </Provider>
        )
    }

}

AppRegistry.registerComponent(appName, () => App);
