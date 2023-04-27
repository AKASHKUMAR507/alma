import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

const EmailButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn1}>
            <View style={styles.btn1Email}>
              <Text style={styles.email}>Email</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn1:{
        backgroundColor:'#286FDB',
        color:'#ffffff',
        height:40,
        width:94,
        borderRadius:7,
        
    },
    btn1Email:{
        flex:1,
        justifyContent:'center',
    },
    email:{
        display : 'flex',
        justifyContent:'center',
        alignSelf:'center',
        color : '#f5f5f5',   
    },
})

export default EmailButton;
