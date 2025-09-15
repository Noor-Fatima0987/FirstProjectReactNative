import { Image,View ,StyleSheet} from 'react-native';


function  GoalImage(){
    return(
      <View style={{flex:1}}>
      <Image 
        source={require('../assets/goalImage.jpg')}
        style={{ flex:1,width:'auto', resizeMode:'stretch',borderRadius:25}}
      />
      </View>
    );
    
   };
  
export default GoalImage;
   