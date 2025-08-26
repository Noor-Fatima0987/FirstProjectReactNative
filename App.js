import {useState} from 'react';
import { StyleSheet, Text, View ,Image , TextInput , Button} from 'react-native';


export default function App() {
const [enterText , setEnterText] = useState ('');
const [goalsEntered, setGoalsEntered] = useState([]);


  function InputHandler(text){
    setEnterText(text);
   
  };

  function GoalHundler(){
    if (enterText.trim().length === 0) return; 

    setGoalsEntered((currentGoals) => [...currentGoals, enterText]); 
    setEnterText(''); 
   
  };
   function  GoalImage(){
    return(
    <Image
      source={require('./assets/goalImage.jpg')}  
        style={{ width: 380, height: 200 ,borderRadius:25}}
   />
    );
    
   };

   function GoalsList(){
    console.log(goalsEntered);

   };


  return (
    <View style={styles.container} >
      <View style={styles.ImageContainer}>
         <GoalImage />
         </View>    
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
      <View style={styles.goalsContainer}>
        <Button  title="Your goals list .."
        onPress={GoalsList}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'lightblue',
  },

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
  ImageContainer:{
    marginBottom:15,
    
  },
  TextContainer:{
  fontSize: 16,
  color: '#0A2E4E',

  },
  goalsContainer:{

  },
});
 