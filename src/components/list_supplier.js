import React, { PureComponent } from "react";
import {TouchableOpacity,StackNavigator} from 'react-navigation';


import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Badge,
  View,
  Thumbnail,
  Card,
  CardItem,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const popado = require("../../assets/company/popado_logo.png");

export default class ListDataSupplier extends PureComponent{
    constructor(props) {
        super(props);
        this.data =props.data;  
      }
      render() {
       
          //console.log("lllllllllllll",this.data)
         
        return (
            
            <Card  style={styles.mb}  >
            <CardItem button onPress={() => this.props.navigation.navigate('SupplierDetails')}>
              <Left thumbnail>
                  <Thumbnail large source={popado} />
                  </Left>
                  <Body style={{ flex: 3 ,marginLeft:5}}>
                  <Text numberOfLines={1}  style ={styles.textSize}>
                      {this.data.strTaskListName}
                  </Text>
                  <Text numberOfLines={3} note>
                      {this.data._id}
                  </Text>
                  </Body>
              </CardItem>
              
           </Card>
        )}
}