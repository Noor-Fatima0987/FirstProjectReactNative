import {StyleSheet,Text,View } from 'react-native';

function GoalItem(props){
return(
 <View style={styles.itemContainer}>
    <Text style={{color:'white'}}> {props.text}</Text>
 </View>
   )
}
 
export default GoalItem;

const styles=StyleSheet.create({
itemContainer:{
  margin:2,
  padding:8,
  borderRadius:18,
  backgroundColor:'#1b9cf7',
  },

})