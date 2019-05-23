import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IconFill } from '@ant-design/icons-react-native';
import { r } from '../../utils/layout';

export default class Trash extends Component {

  static navigationOptions = props=>({
    tabBarLabel:'回收站',
    tabBarIcon:({focused,tintColor})=>(
        <IconFill
          name="delete"
          size={r(30)}
          color={tintColor}
        />
    )
  })

  render() {
    return (
      <View>
        <Text> Trash </Text>
      </View>
    )
  }
}
