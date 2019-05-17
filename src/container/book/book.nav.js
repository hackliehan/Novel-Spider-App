import React,{ Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import Good from './Good';
import { Image, StyleSheet } from 'react-native';
import { IconFill } from '@ant-design/icons-react-native';
import { r } from '../../utils/layout';
import Search from './Search';
import Trash from './Trash';


const BookNavigator = createBottomTabNavigator({
    Good:{
        screen:Good,
        navigationOptions:props=>({
            tabBarLabel:'追更',
            tabBarIcon:({focused,tintColor})=>(
                <IconFill
                   name="book"
                   size={r(30)}
                   color={tintColor} 
                />
            )
        })
    },
    Search:{
        screen:Search,
        navigationOptions:props=>({
            tabBarLabel:'搜索',
            tabBarIcon:({focused,tintColor})=>(
                <IconFill
                   name="file-search"
                   size={r(30)}
                   color={tintColor} 
                />
            )
        })
    },
    Trash:{
        screen:Search,
        navigationOptions:props=>({
            tabBarLabel:'回收站',
            tabBarIcon:({focused,tintColor})=>(
                <IconFill
                   name="delete"
                   size={r(30)}
                   color={tintColor} 
                />
            )
        })
    }
},{
    initialRouteName:'Good'
})

const styles = StyleSheet.create({
    
})

export default BookNavigator