import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Success = () => {
    return (
        <View
            style = {{
                backgroundColor:'#092147',
                height:40,
                width:'70%',
                borderRadius:20,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}
        >
            <Text
                style ={{
                    color:'#fff',
                    fontSize:14,
                    fontWeight:'bold',
                }}
            >OTP sent successfully</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Success;
