import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    conmainer: {
        flex:1,
        backgroundColor: '#f5f5f5',
    },

    ImageStyle:{
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        // alignItems: 'center',
    }
    ,
    wrap_container:{
        
        marginLeft:32,
        marginRight:27,
        marginTop:124,
    },
 
    company_name:{
        color : '#092147',
        fontSize:32,

    },
    button:{
        display:'flex',
        flexDirection:'row',
        columnGap:10,
        justifyContent:'flex-end',
        columnGap:10,
        marginTop:25,

    },
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
    btn2:{
        backgroundColor:'#ffffff',
        color:'#f5f5f5',
        width:122,
        height:40,
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
    
    inputContainer:{
        
        marginTop:52,
        display:'flex',
        rowGap:20,
    },
    item1:{
        display:'flex',
        rowGap:6,
    },
    e:{
        fontSize:18,
        marginLeft:5,
        color:'#343A40',

    },
    p:{
        fontSize:18,
        marginLeft:5,
        color:'#343A40',
    },
    SectionStyle: {
        flexDirection: 'row',
        // justifyContent: 'center',
        paddingLeft:15,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',          
        borderRadius: 10,
        
    },
    item2:{
        display:'flex',
        rowGap:6,
    },
    shadow1:{
        
    },
    emailInput:{
       
        borderRadius:10,
        shadowColor: '#fff',
        shadowOffset: {width: 100, height: 60},
        shadowOpacity: 3.2,
        shadowRadius: 0,
        paddingLeft: 10,
        backgroundColor:'#fff'
    },
    passwordInput:{
       
        borderRadius:10,
        shadowColor: '#f5f5f5',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingLeft: 10,
        backgroundColor:'#fff'
    },

    checkboxContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        columnGap:5,
    },
    remember:{
        color:'#343A40',
        fontSize:16,
        fontWeight:500,
    },
    loginContainer:{
        display:'flex',
        justifyContent:'center',
    },
    loginItem:{
        flex:1,
        justifyContent:'center',
    },
    loginButton:{
        backgroundColor:'#286FDB',
        height:60,
        borderRadius:10,
    },
    loginText:{
        color:'#fff',
        display:'flex',
        alignSelf:'center',
        fontSize:20,
        fontWeight:700,
    },
    accountDetails:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        rowGap:15,
    },
    create:{
        color:'#286FDB',
        textDecorationLine:'underline',
    },
    forget:{
        color : '#343A40',
        textDecorationLine:'underline',
    },

    activeButton:{
        backgroundColor:'#286FDB',
    }

});

export { styles }