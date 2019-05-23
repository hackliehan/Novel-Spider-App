import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IconFill } from '@ant-design/icons-react-native';
import { r } from '../../utils/layout';

export default class Search extends Component {

  static navigationOptions = {
    tabBarLabel:'搜索',
    tabBarIcon:({focused,tintColor})=>(
        <IconFill
          name="query"
          size={r(30)}
          color={tintColor} 
        />
    )
  }

  render() {
    return (
      <View>
        <Text> Search </Text>
      </View>
    )
  }
}
