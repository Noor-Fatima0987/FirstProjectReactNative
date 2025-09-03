import {useState} from 'react';
import { StyleSheet, View ,Image , TextInput , Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {

const [goalsEntered, setGoalsEntered] = useState([]);


  

  function GoalHundler(enterText ){
    if (enterText.trim().length === 0) return; 

    setGoalsEntered((currentGoals) => [...currentGoals, {text:enterText , id: Math.random().toString()}]); 
   
   
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
      <GoalInput onAddGoal={GoalHundler}/>
      <View style={styles.goalsContainer}>
        <FlatList
        data={goalsEntered}
        renderItem={(dataItem)=>{
          return <GoalItem text={dataItem.item.text}/>;
        }}
        keyExtractor={(index,item)=>{
          return item.id;
        }}/>
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

 
  ImageContainer:{
    marginBottom:15,
    
  },
  TextContainer:{
  fontSize: 16,
  color: '#0A2E4E',

  },
  goalsContainer:{
  flex:5,
  },
  
});
 