import {useState} from 'react';        
import { StyleSheet, View ,Image , TextInput , Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
const [modalVisible, setModalVisible] = useState(false);
const [goalsEntered, setGoalsEntered] = useState([]);

  function ClickModal(){
    setModalVisible(true);
  }

  function CrossModel(){
    setModalVisible(false);
  };

  function  GoalImage(){
    return(
      <View style={{flex:1}}>
    <Image 
     source={require('./assets/goalImage.jpg')}
     style={{ flex:1,width:'auto', resizeMode:'stretch',borderRadius:25}}
   />
   </View>
    );
    
   };
  

  function GoalHundler(enterText ){
    if (enterText.trim().length === 0) return; 

    setGoalsEntered((currentGoals) => [...currentGoals, {text:enterText , id: Math.random().toString()}]); 
    CrossModel();
   
  };
  
    function GoalDeleteandler(id){
       setGoalsEntered((currentGoals) =>{
        return currentGoals.filter((goal)=>goal.id!==id);
       })
    };
   
   
  return (
    <View style={styles.container} >
       <View style={styles.ImageContainer}>
        <GoalImage />
      </View>
      <View style={{flex:0.7,marginBottom:50}}>
        <View style={{marginBottom:10}}>
           <Button title='Add Goals' color="#1b9cf7" onPress={ClickModal}/> 
        </View>
     
        <View >
          <GoalInput
          showModel={modalVisible} 
          onAddGoal={GoalHundler}
          onClose={CrossModel}
          />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
           data={goalsEntered}
           renderItem={(dataItem)=>{
            return <GoalItem 
            text={dataItem.item.text}
            id={dataItem.item.id}
            itemdelete={GoalDeleteandler}/>;
           }}
           keyExtractor={(index,item)=>{
            return item.id;
          }}/>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:'lightblue',
  },
          
 
  ImageContainer:{
    marginBottom:15,
    flex:0.3,
  },
  TextContainer:{
  fontSize: 16,
  color: '#0A2E4E',

  },
  goalsContainer:{
  // flex:0.3,
  marginBottom:20,
  },
  
});
  