import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { postUrl } from 'wl-fetch';

export default class Good extends Component {
    
    componentDidMount(){
        postUrl('')
    }

    render() {
		return (
			<View>
				<Text> GoodList </Text>
			</View>
		);
	}
}
