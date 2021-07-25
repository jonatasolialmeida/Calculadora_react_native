import { Dimensions, StyleSheet } from "react-native";

export const styleHead = StyleSheet.create({
    disp:{
        height:50,
        backgroundColor:'#0fafaf',
        justifyContent:'center',
        alignItems:'center',
        fontSize:10
    },
    textDisp:{
    fontSize:30,
    fontWeight:"bold",
    color: '#fff'    
    }
})

export const styleDisplay = StyleSheet.create({
    display1:{
        marginTop:70,
        marginBottom:30

    },
    display:{
        borderWidth:1,
        backgroundColor:'#fff',
        height:45,
        fontSize:20,
        fontWeight:"bold",
        
    },

})

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7b68ee',
      },

    btns:{
        flexDirection:'row',
        flexWrap:'wrap'
    },  
    btn:{
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        backgroundColor:'#0fafaf',
        marginTop:1,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1
    },
    btnTxt:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})

export const styleFoot = StyleSheet.create({
    disp:{
        height:30,
        backgroundColor:'#0fafaf',
        justifyContent:'center',
        alignItems:'center',
        fontSize:10
    },
    textDisp:{
        fontSize:15,
        fontWeight:"bold",
        color: '#fff'    
        }
})

export const styleStatus = StyleSheet.create({
    fundo:{
        backgroundColor:'white'
    }
})