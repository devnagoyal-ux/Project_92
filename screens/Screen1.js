import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class Screen1 extends React.Component{
    goToScreen2(){
        this.props.navigation.navigate('Screen2');
    }
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style ={{paddingTop:30,paddingBottom:30,fontSize:40}}> Screen1</Text>
                <Text> Click the navigate button</Text>
                <TouchableOpacity onPress={()=>{
                    this.goToScreen2();
                }}>
                    <Text style ={{paddingTop:30,paddingBottom:30,fontSize:30,color: 'red'}}> Navigate </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
