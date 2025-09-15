import {StyleSheet,Text,View ,Pressable} from 'react-native';

function GoalItem(props){

   return(
     <View style={styles.itemContainer}>
     <Pressable  android_ripple={{color:'#054878ff'}}
     onPress={props.itemdelete.bind(this,props.id)}
     style={({pressed})=>pressed && styles.pressedItem}
     >
      
         <Text style={styles.textContainer}> {props.text}</Text>
       
     </Pressable>
     </View>
  )
}
 
export default GoalItem;

const styles=StyleSheet.create({
itemContainer:{
  margin:4,
  borderRadius:18,
  backgroundColor:'#1b9cf7',
  },
  textContainer:{
    color:'white',
    padding:8,
   
  },
  
  pressedItem:{
    opacity: 0.5,
  }

})