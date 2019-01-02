import React, { Component } from "react";
import { AppRegistry,FlatList,StyleSheet,Text,Image,Alert,Platform,TouchableHighlight,Dimensions,TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import styles from "./styles";


export default  class AddModal extends Component {

    constructor(props) {
        super(props);

        this.state ={
          strSupplierId :1,
          strProductId:1,
          intBookingProductCount:'',
         
        }
      }
      showAddModel =() =>{
          this.refs.myModal.open();
      }
    render() {
      return (
       <Modal 
       ref={"myModal"}
       style={styles.modalStyle} 
       position ='center' 
       backdrop ={true}
       onClosed ={()=>{
           //alert("Closed model view");
       }}>
        <Text style={styles.modalTextStyle}> Booking data to  Chart </Text>
        <TextInput style={styles.modalTextInputStyle} 
                  onChangeText={(intCount) => this.setState({intBookingProductCount:intCount})}
                  placeholder="Enter  puchase Count " 
                  value={this.state.intBookingProductCount}>
          
        </TextInput>
        <Button style={{fontSize:18,color:'white'}}
        containerStyle={{
          padding:8,
          marginLeft:70,
          marginRight:70,
          height:40,
          borderRadius:6,
          backgroundColor:'mediumseagreen'
        }}
        onPress={()=>{
          if(this.state.intBookingProductCount.length ==0){
            alert("You must enter booking count ")
            return;
          }
          else{
            const newBookingDetails ={
              intId:"",
              strProductName:"Pen",
              strSupplierName:"Pop",
              intBookingProductCount:this.state.intBookingProductCount
            };
            const arryData =[];
             arryData.push(newBookingDetails)
            //props 
            this.refs.myModal.close();
          }
        }}
        >
        Save
        </Button>
       </Modal>
      );
    }
  }
  
