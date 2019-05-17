import { createStackNavigator } from 'react-navigation'
import Login from './Login';

export default AccountNav = createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:props=>({
            header:null
        })
    }
},{
    initialRouteName:'Login'
});