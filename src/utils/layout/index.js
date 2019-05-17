import { Dimensions } from 'react-native';

const {width:ScreenWidth} = Dimensions.get('window');

export function r(current,designSize = 750){
    return current*(ScreenWidth/designSize);
}