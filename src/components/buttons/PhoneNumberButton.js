import React from 'react';
import {View, StyleSheet, Text , TouchableOpacity} from 'react-native';

const EmailButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn2}>
                <View style={styles.btn2Phone}>
                <Text style={styles.phone_number}>Phone number</Text>
                </View>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn2:{
        backgroundColor:'#ffffff',
        color:'#f5f5f5',
        height:40,
        width:122,
        borderRadius:7,
    },
    btn2Phone:{
        flex:1,
        display:'flex',
        justifyContent:'center',
    },
    phone_number:{
        display : 'flex',
        justifyContent:'center',
        alignSelf:'center',
        color:'#343A40'
    },
})

export default EmailButton;
