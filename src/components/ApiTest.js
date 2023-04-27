import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import Btn from './buttons/Btn'
import { COLORS, SIZES } from '../assets/color'
import { BASE_URL } from '../auth/BaseUrl'
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlNTVhYmQyMWU0Njk5NGVmNjBiODkiLCJlbWFpbCI6Im1hdGFtcm9oaXRoOTcxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiVVNFUiIsImlhdCI6MTY4MTE5MzI0NiwiZXhwIjoxNjgxMjc5NjQ2fQ.fVoZWfdX_Cb_pr0XzGbfjN1bMOB732x9WllGAXQdt1Q


const ApiTest = () => {
    const [data, setData] = useState([]);
    const baseURL = 'https://node.gflightmode.com/api/v1/static/static';
    const baseURL2 = 'https://node-botgfmi.mobiloitte.io/api/v1';

    const getData = () =>{
        axios({
            method:'GET',
            url:`${baseURL}`
        })
        .then(res => setData(res.data.result.docs))
        .catch(err => console.log(err))
    };
    const sendEmail = () =>{
        
        axios({
            method:'POST',
            url:`${BASE_URL}/user/verifyEmailOTP`,
            data:{
                email : 'akash.kumar@indicchain.com',
                 
            }
        }).then(res => console.log(res)).catch(err => console.log(err))
    }
     
  return (
    <View>
      <Text style={{fontSize:SIZES.xxLarge,color:COLORS.primary, textAlign:'center'}}>ApiTest</Text>
        <Btn title={"GET"} BgColor={COLORS.primary} Press={getData}/>
        <Btn title={"POSTEmail"} BgColor={COLORS.primary} Press={sendEmail}/>

        <FlatList
            data={data}
            ListEmptyComponent={() =>(
                <Text style ={{textAlign:'center', color:COLORS.primary, fontSize:SIZES.large}}>List is Empty</Text>
            )}
            showsVerticalScrollIndicator={false}

            renderItem={({item}) =>(
                <View style ={{marginBottom:20,marginLeft:10,marginRight:10,backgroundColor:'#ffa500aa',borderRadius:10}}>
                    <Text style={{fontSize:22, color:'black'}} numberOfLines={1}>Id: {item._id}</Text>
                    <Text style={{fontSize:22, color:'black'}} numberOfLines={1}>Type: {item.type}</Text>
                    <Text style={{fontSize:22, color:'black'}} numberOfLines={1}>Title: {item.title}</Text>
                    <Text style={{fontSize:22, color:'black'}} numberOfLines={1}>Description: {item.description}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default ApiTest

const styles = StyleSheet.create({})