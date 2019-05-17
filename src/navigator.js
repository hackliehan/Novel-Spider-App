import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import AccountNav from './container/account/account.nav';
import BookNavigator from './container/book/book.nav';

const AppNavidator = createStackNavigator({
	Account:{
        screen:AccountNav,
        navigationOptions:props=>({
            header:null
        })
    },
    Book:{
        screen:BookNavigator,
        navigationOptions:props=>({
            header:null
        })
    }
},{
    initialRouteName:'Account'
});

export default AppNavidator;