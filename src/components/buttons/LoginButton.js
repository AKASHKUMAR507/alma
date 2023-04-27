import React from 'react';
import {View, StyleSheet, Text,TouchableOpacity} from 'react-native';

const LoginButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.loginButton}>
                    <View style={styles.loginItem}>
                        <Text style={styles.loginText}>Log in</Text>
                    </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    loginButton:{
        backgroundColor:'#286FDB',
        height:60,
        borderRadius:10,
    },
    loginItem:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignSelf:'center',
    },
    loginText:{
        display : 'flex',
        justifyContent:'center',
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF'
    }
})      

export default LoginButton;
