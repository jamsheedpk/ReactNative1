import React, { Component } from "react";
import { ScrollView,Image } from 'react-native';

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
import FooterView from "./FooterView";
import AddModal from "./AddModal";
const logo = require("../../../assets/splashscreen.png");
const sankhadeep = require("../../../assets/contacts/sankhadeep.png");
const supriya = require("../../../assets/contacts/supriya.png");
const himanshu = require("../../../assets/contacts/himanshu.png");
const shweta = require("../../../assets/contacts/shweta.png");
const shruti = require("../../../assets/contacts/shruti.png");
const shivraj = require("../../../assets/contacts/shivraj.png");
const datas = [
  {
    img: sankhadeep,
    strModuleName: "Apple cut",
    strModuleNo: "KL1456",
    strSize: 'XXL',
    intStockCount:5,
    strAmount:'100',
    strRouteProductInfo: 'ProductInfo'
  },
  {
    img: supriya,
    strModuleName: "Mango cheat cut",
    strModuleNo: "JH56236",
    strSize: 'L',
    intStockCount:133,
    strAmount:'200',
    strRouteProductInfo: 'ProductInfo'
  },
  {
    img: shivraj,
    strModuleName: "Lolyi cut",
    strModuleNo: "BGF145",
    strSize: 'S',
    intStockCount:18,
    strAmount:'200',
    strRouteProductInfo: 'ProductInfo'
  },
  {
    img: shruti,
    strModuleName: "KUOOOO ",
    strModuleNo: " MNH4589",
    strSize: 'N',
    intStockCount:999,
    strAmount:'500',
    strRouteProductInfo: 'ProductInfo'
  },
  {
    img: himanshu,
    strModuleName: "Gopppp ",
    strModuleNo: "JKH9563",
    strSize: 'L',
    intStockCount:9999,
    strAmount:'600',
    strRouteProductInfo: 'ProductInfo'
  },
  {
    img: shweta,
    strModuleName: "SUPPPLE Nava",
    strModuleNo: "1256KI",
    strSize: 'M',
    intStockCount:999999,
    strAmount:'120',
    strRouteProductInfo: 'ProductInfo'
}
];
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false
        };
        this.showModelData = this.showModelData.bind(this);
      }
      showModelData(){
        // <ModalExample></ModalExample>
        this.refs.addModal.showAddModel()
      }
      
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>PRODUCT LIST</Title>
          </Body>
          <Right/>
        </Header>

        <Content padder>

        <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                <Text>Category</Text>
                <Text>Product</Text>
            </View>
               <View style={{flex:3}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} ></Thumbnail>
                    
                    <Thumbnail   source={sankhadeep} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={supriya} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={shruti} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={himanshu} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={shweta} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={shruti} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={supriya} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={sankhadeep} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={himanshu} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    </ScrollView>
               </View>
        </View>
         
                

                <Card style={styles.mb}>
                <CardItem>
                <Body>
                    <Text>This is just a basic card with some text to boot.</Text>
                    <Text>Like it? Keep Scrolling...</Text>
                </Body>
                </CardItem>
                </Card>

                <List
                    dataArray={datas}
                    renderRow={data =>   
                    <Card  style={styles.mb}  >
                     <CardItem button onPress={() => this.props.navigation.navigate(data.strRouteProductInfo)}>
                        <Left thumbnail>
                            <Thumbnail square large source={data.img} />
                            </Left>
                            <Body style={{ flex: 1 ,marginLeft:5}}>
                    
                            <Text    style ={styles.textSizeModule}>
                               No : {data.strModuleNo}
                            </Text>
                            <Text numberOfLines={1}  style ={styles.textSizeModule}>
                              Size : {data.strSize}
                            </Text>
                           
                          
                            <Text numberOfLines={1}  style ={styles.textSizeStockCount}>
                            RS :{data.strAmount}</Text>
                            
                            <Text   numberOfLines={1}  style ={styles.textSizeModule}>
                               Name : {data.strModuleName}
                            </Text>
                            </Body>
                            <Right>
                            <Text numberOfLines={1} >STOCK</Text>
                                <Text numberOfLines={1}  style ={styles.textSizeStockCount}>
                                {data.intStockCount}
                                </Text>
                            </Right>
                            
                        </CardItem>
                        
                       <CardItem>
                            <Button transparent onPress={() => this.props.navigation.navigate(data.strRouteProductInfo)}>
                            <Icon name="information-circle" />
                            </Button>
                            <Button transparent onPress={() => this.showModelData()}>
                            <Icon name="ios-cart-outline" />
                            </Button>
                            <Button transparent >
                            <Icon name="thumbs-up" />
                            </Button>
                            <Button transparent >
                            <Icon name="thumbs-down" />
                            </Button>
                        </CardItem> 
                        
              </Card>}
            
          />       

        </Content>
        <AddModal ref={'addModal'} parentFlatList={this}>

        </AddModal>
        <FooterView navigation={this.props.navigation}/>
        
      </Container>
    );
  }
}

export default ProductList;
