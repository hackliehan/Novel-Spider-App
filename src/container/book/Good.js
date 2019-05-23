import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { postUrl } from 'wl-fetch';
import { r } from '../../utils/layout';
import { IconFill } from '@ant-design/icons-react-native';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import { TouchableHighlight } from 'react-native-gesture-handler';

class GoodScreen extends Component{

	// static navigationOptions = props=>({
	// 	title:'测试头'
	// })

	render(){
		return (
			<View>
				<Text>
					GoodList
				</Text>
			</View>
		)
	}
}

export const GoodNavigator = createStackNavigator({
	GoodScreen:{
		screen:GoodScreen,
		navigationOptions:{
			title:'测试头'
		}
	}
},{
	initialRouteName:'GoodScreen'
});

export default class Good extends Component {
	
	static navigationOptions = props=>({
		title:'追更',
		tabBarIcon:({focused,tintColor})=>(
			<IconFill
			  name="book"
			  size={r(30)}
			  color={tintColor} 
			/>
		)
	})

    componentDidMount(){
        // postUrl('')
    }

    render() {
		return (
			<View>
				{/* <GoodContainer/> */}
			</View>
		);
	}
}
