import React, { PureComponent } from "react";
import { ScrollView} from 'react-native';
import {Text,View,Thumbnail,Content} from "native-base";
import styles from "./styles";

const eastern = require("../../assets/company/easternlogo.png");
const logo = require("../../assets/splashscreen.png");
const vkc = require("../../assets/company/vkc_logo.jpg");
const arryOfObjTask = [
    {
        img: logo,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },
      {
        img: eastern,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },
      {
        img: vkc,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },
      {
        img: logo,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },
      {
        img: vkc,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },
      {
        img: eastern,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },
      {
        img: vkc,
        text: "Sankhadeep 123456789",
        note: "Its time to build a difference . .",
        route: 'ProductList'
      },];

export default class ListDataSupplierCategory extends PureComponent{
    constructor(props) {
        super(props);
        //this.data =props.data;  
        this.state = {
            isLoading: true,
            data: arryOfObjTask,
            isError: false,
          };
      }
      // if (isLoggedIn) {
      //   button = <LogoutButton onClick={this.handleLogoutClick} />;
      // } else {
      //   button = <LoginButton onClick={this.handleLoginClick} />;
      // }
      
      renderList(arryOfObjTask){
        return(
        arryOfObjTask.map((task,index) =>{
           return(
            <Content key={index} >
               if(task.text.length >=6){

               }
               <Thumbnail  source={task.img} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} ></Thumbnail>
               <Text  style={styles.iconTextCatgory} numberOfLines={1} >{task.text.toString().substr(0, 5)}</Text>
               </Content>
                
              )   
    
          })
    
        )
      }
      render() {
       
         
         
        return (
            
            <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                <Text>Category</Text>
                <Text>Product</Text>
            </View>
            
               <View style={{flex:3}}>
                   
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
        
                    {this.renderList(this.state.data)}
                    </ScrollView>
               </View>
        </View>
        )}
}