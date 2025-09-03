import {useState}from 'react'
import {StyleSheet,View, Text,TextInput,Button} from 'react-native';

function GoalItem(props){
    const [enterText , setEnterText] = useState ('');

    function InputHandler(text){
    setEnterText(text);
   
  };
  function  GoalHundler(){
    props.onAddGoal(enterText);
     setEnterText(''); 
  };
 return(
    

     <View style={styles.ButtonContainer}>
       
        <TextInput  style={styles.InputContainer}
        placeholder='enter your goals:' 
        onChangeText={InputHandler}
        value={enterText}   
        />
        <Button 
        title="Add Goals"
        onPress={GoalHundler}
         />
      </View>
 )
}

export default GoalItem;

const styles=StyleSheet.create({
     ButtonContainer: {
   flexDirection:'row',
   justifyCenter:'space-between',
   paddingBottom:10 ,
   alignItems:'center',
   
   
  },

  InputContainer:{
    flex:2,
    borderWidth:2,
    borderColor: '#1b9cf7',
    padding: 10,
    marginRight:8,
    marginBottom:2,
    borderRadius:18,
  
  },

})