import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {inc,dec} from './Redux/Actions/Actions'

 class Index extends Component {
 
  
  render(){
  return (
    
    <View style={styles.container}>
     <Text style={{fontSize:25,padding:5}}> CountValue : {this.props.count}</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>this.props.inc()}
      >
        <Text style={styles.txt}>increase</Text>
      </TouchableOpacity>
  
      <TouchableOpacity
      style={styles.button}
      onPress={()=>this.props.dec()}
      >
        <Text style={styles.txt}>decrease</Text>
      </TouchableOpacity>
    </View>
    
  );
  }
}

const mapStateToProps = state => ({
  count:state.root.count
});

const mapDispatchToProps ={
  inc,
  dec
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //margin:5,
    //borderWidth:5,
    borderColor:'black',
    margin:20
   
  },
  txt:{
      fontSize:25,
      color:'white',
      padding:5
  },
  button:{
      borderWidth:2,
      backgroundColor:'rgb(0,120,200)',
      borderColor:'white',
      borderRadius:10,
      margin:5
  }

});

export default connect(mapStateToProps,mapDispatchToProps)(Index);