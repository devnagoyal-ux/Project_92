import React from 'react';
import {View,Text} from 'react-native';

export default class Screen2 extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style ={{paddingTop:30,paddingBottom:30,fontSize:40}}> Screen2</Text>
            </View>
        );
    }
}
