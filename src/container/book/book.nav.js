import React,{ Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import Good, { GoodNavigator } from './Good';
import Search from './Search';
import Trash from './Trash';
import { IconFill } from '@ant-design/icons-react-native';
import { r } from '../../utils/layout';


const BookNavigator = createBottomTabNavigator({
    Good:{
        screen:GoodNavigator,
        navigationOptions:props=>({
            title:'追更',
            tabBarIcon:({focused,tintColor})=>(
                <IconFill
                  name="book"
                  size={r(30)}
                  color={tintColor} 
                />
            )
        })
    },
    Search,
    Trash
},{
    initialRouteName:'Good'
})

export default BookNavigator