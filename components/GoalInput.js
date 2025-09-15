import {useState} from 'react'
import {StyleSheet,View, Text,TextInput,Button, Modal,Image} from 'react-native';
import GoalImage from './GoalImage';

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
    
     <Modal visible={props.showModel} animationType="slide">
     <View style={styles.MainContainer}>
      <View style={{flex:0.3, marginBottom:15,}}>
       <GoalImage />
      </View>
      <View style={{flex:0.7,paddingTop:5}}>
        <TextInput  style={styles.InputContainer}
        placeholder='  Enter your goals:' 
        onChangeText={InputHandler}
        value={enterText}   
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.Button}>
           <Button title="Add Goals" onPress={GoalHundler}/>
          </View>
          <View style={styles.Button}>
           <Button title="cancel" onPress={props.onClose}/>
          </View>
        </View>
      </View>
    </View>
    </Modal>
 )
}

export default GoalItem;

const styles=StyleSheet.create({
  MainContainer: {
   flex:1,
  //  paddingTop:50,
   padding:20,
   backgroundColor:'lightblue',
  },

  InputContainer:{
    height:40,
    borderWidth:2,
    borderColor: '#1b9cf7',
    borderRadius:18,
    width:'100%',
  

  },
  ButtonContainer:{
    flexDirection:'row',
    marginTop:10,
  
  },
  Button:{
    width:100,
    marginHorizontal:8
  }

})