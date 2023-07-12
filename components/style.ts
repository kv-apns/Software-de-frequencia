import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
{
container:{
    backgroundColor:'#131016',
    flex: 1,
    padding:24
},
eventName:{
    color:'#FDFCFE',
    fontSize:24,
    fontWeight:'bold',
    marginTop:48
},
eventDate:{
    color:'#6B6B6B',
    fontSize:16,
},
input:{
    backgroundColor:'#1F1E25',
    color:'#FFFF',
    borderRadius:5,
    fontSize:16,
    padding:10,
    marginRight:12,
    marginTop:10,
    flex:1
}, 
button:{
    backgroundColor:'#31cf67',
    color:'#FFFF',
    borderRadius:5,
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    activeOpacity: 0.7
}, 
form:{
    flexDirection:'row',
},
participantName:{
    color:'#FFFF',
    marginTop: 20,
    fontWeight:'bold'
},
buttonParticipant:{
    backgroundColor:'#E23C44',
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    borderRadius:5,

},
name: {
    color:'#FFF',
    fontSize:20,
    flex:1
},
containerParticipant: {
    width:'100%',
    flexDirection:'row',
    borderRadius:5,
    alignItems:'center',
}, 
listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }

}
)