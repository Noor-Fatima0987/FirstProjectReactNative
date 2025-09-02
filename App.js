import {useState} from 'react';
import { StyleSheet, Text, View ,Image , TextInput ,ScrollView, FlatList, Button} from 'react-native';


export default function App() {
const [enterText , setEnterText] = useState ('');
const [goalsEntered, setGoalsEntered] = useState([]);


  function InputHandler(text){
    setEnterText(text);
   
  };

  function GoalHundler(){
   if (enterText.trim().length === 0) return; 

    setGoalsEntered((currentGoals) => [...currentGoals, {text: enterText, id:Math.random().toString()}]); 
    setEnterText('');
    
    
   
  };
   function  GoalImage(){
    return(
    <Image
      source={require('./assets/goalImage.jpg')}  
        style={{ width: 360, height: 200 ,borderRadius:25}}
   />
    );
    
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
        <Button style={styles.button}
        title="Add Goals"
        onPress={GoalHundler}
         />
      </View>
      <View style={styles.goalstyles}>
      <FlatList data={goalsEntered} renderItem={(Dataitem)=>{
        return(
           <View   style={styles.goalsContainer}>
            <Text style={styles.goalsTextContainer}> {Dataitem.item.text} </Text>
            </View >
          );
       
      }}
      keyExtractor={(item,index)=>{
        return item.id;
      }}
      alwaysBounceVertical={false}/>
         
          
           
    
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
    margin:8,
    padding: 8,
    backgroundColor:'#1b9cf7',
    borderRadius:18,

  },
  goalsTextContainer:{
  color: 'white'

  },
  button:{
    borderRadius:18,
  },
  goalstyles:{
    flex:5,
  }
});
 