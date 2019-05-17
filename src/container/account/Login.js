import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { r } from '../../utils/layout';
import { postUrl } from 'wl-fetch';
import { ACCOUNT_LOGIN } from '../../config/api/account.api';
import { Toast } from '@ant-design/react-native';
import { Portal } from '@ant-design/react-native';
import { List, InputItem, Button } from '@ant-design/react-native';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			password: ''
		};
	}

	handleChange(key, value) {
		this.setState({
			[key]: value
		});
	}

	async handleDoLogin() {
        const toastKey = Toast.loading('正在登录',0);
        const { navigation } = this.props;
        let rs;
		try {
			const { userName, password } = this.state;
			rs = await postUrl(ACCOUNT_LOGIN, {
				userName,
				password
            });
            if(rs.successed){
                navigation.navigate('Book');
            }
		} catch (err) {
            console.log(err);
        }finally{
            Portal.remove(toastKey);
            if(!rs.successed){
                Toast.fail(rs.message);
            }
        }
	}

	render() {
		return (
			<View style={styles.container}>
				<List>
					<InputItem clear value={this.state.userName} onChange={(val) => this.handleChange('userName', val)}>
						用户名
					</InputItem>
					<InputItem
						clear
						type="password"
						value={this.state.password}
						onChange={(val) => this.handleChange('password', val)}
					>
						密码
					</InputItem>
					<List.Item>
						<Button type="primary" onPress={() => this.handleDoLogin()}>
							登录
						</Button>
					</List.Item>
				</List>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: r(750),
		flex: 1
	}
});
