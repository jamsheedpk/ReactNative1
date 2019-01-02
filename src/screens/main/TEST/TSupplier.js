import React, { PureComponent } from "react";
import { ScrollView,Image,ActivityIndicator,Alert} from 'react-native';

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
import FooterView from  "./FooterView";
import {getArticles} from "../../services/supplierservices";

const eastern = require("../../../assets/company/easternlogo.png");
const logo = require("../../../assets/splashscreen.png");
const vkc = require("../../../assets/company/vkc_logo.jpg");
const popado = require("../../../assets/company/popado_logo.png");




class SupplierList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          data: null,
          isError: false
        };
      }
  componentDidMount(){
    getArticles().then(arrysupplierList=>{

      this.setState({
        isLoading:false,
        data:arrysupplierList
      
      })
    
    },error=>{
      Alert.alert(JSON.stringify(error))
    })
  }   

  render() {
    const view = this.state.isLoading ? (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator animating ={this.state.isLoading} color="#00f0ff"/>
        <Text style={{marginTop:8}} children="Please wait....."></Text>
      </View>
    ):(
      <List
      dataArray={this.state.data}
      renderRow={item =>
         
      <Card  style={styles.mb}  >
        <CardItem button onPress={() => this.props.navigation.navigate('SupplierInfo')}>
          <Left thumbnail>
              <Thumbnail large source={popado} />
              </Left>
              <Body style={{ flex: 3 ,marginLeft:5}}>
              <Text numberOfLines={1}  style ={styles.textSize}>
                  {item.strTaskListName}
              </Text>
              <Text numberOfLines={3} note>
                  {item._id}
              </Text>
              </Body>
          </CardItem>
          
        
          
       </Card>}
          />
    )
    return (
        
        <Container style={styles.container}>
        <Header>
          <Left>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>SUPPLIER LIST </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        {/* <Content padder>

        <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                <Text>Category</Text>
                <Text>Product</Text>
            </View>
               <View style={{flex:3}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} ></Thumbnail>
                    
                    <Thumbnail   source={vkc} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={popado} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={shruti} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={himanshu} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={shweta} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={shruti} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={popado} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={vkc} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
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
                     <CardItem button onPress={() => this.props.navigation.navigate(data.route)}>
                        <Left thumbnail>
                            <Thumbnail large source={data.img} />
                            </Left>
                            <Body style={{ flex: 3 ,marginLeft:5}}>
                            <Text numberOfLines={1}  style ={styles.textSize}>
                                {data.text}
                            </Text>
                            <Text numberOfLines={3} note>
                                {data.note}
                            </Text>
                            </Body>
                        </CardItem>
                        
                      
                        
              </Card>}
            
          />

                

        </Content> */}
       
        <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                <Text>Category</Text>
                <Text>Product</Text>
            </View>
               <View style={{flex:3}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
                    <Thumbnail   source={eastern} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} ></Thumbnail>
                    
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={vkc} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={eastern} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={vkc} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={eastern} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={vkc} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={eastern} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    </ScrollView>
               </View>
        </View>
        
        <Content contentContainerStyle ={{flex:1 ,backgroundColor:"#fff"}} padder={false} 
           children={view}/>

        
            <FooterView/>

        

      </Container>
      
     
    );
  }
}

export default SupplierList;
