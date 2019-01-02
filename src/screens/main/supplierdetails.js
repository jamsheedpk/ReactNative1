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
  ListItem,
  H2,
  H3,
  Grid,
  Col,
  Row,
Separator
} from "native-base";
import styles from "./styles";
import FooterView from "./FooterView";
const logo = require("../../../assets/splashscreen.png");
const sankhadeep = require("../../../assets/contacts/sankhadeep.png");
const supriya = require("../../../assets/contacts/supriya.png");
const himanshu = require("../../../assets/contacts/himanshu.png");
const shweta = require("../../../assets/contacts/shweta.png");
const shruti = require("../../../assets/contacts/shruti.png");
const shivraj = require("../../../assets/contacts/shivraj.png");
const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    img: sankhadeep,
    text: "Sankhadeep 123456789",
    note: "Its time to build a difference . .",
    route: 'ProductList'
  },
  {
    img: supriya,
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . ",
    route: 'ProductList'
  },
  {
    img: shivraj,
    text: "Shivraj",
    note: "Time changes everything . .",
    route: 'ProductList'
  },
  {
    img: shruti,
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!",
    route: 'ProductList'
  },
  {
    img: himanshu,
    text: "Himanshu",
    note: "Live a life style that matchs your vision",
    route: 'ProductList'
  },
  {
    img: shweta,
    text: "വിൽപ്പന",
    note: "ഏതാണ്ടെല്ലാ കാര്യങ്ങളും അതിൽ ഒരു തരത്തിലുള്ള അപകടസാധ്യതയുണ്ട്, അത് ഒരു പുതിയ ബിസിനസ് ആരംഭിക്കുന്നുവോ, വീട്ടിലേക്ക് പോകുകയോ, വിവാഹം കഴിക്കുന്നുവോ, അല്ലെങ്കിൽ അത് സ്പെയ്സിൽ പറക്കുന്നോ എന്നത്.",
    route: 'ProductList'
}
];

class SupplierDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false
        };
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
            <Title>SUPPLIER DETAILS</Title>
          </Body>
          <Right/>
        </Header>

      
        <Content padder>
          <Card style={styles.mb}>
                <CardItem bordered button onPress={() => this.props.navigation.navigate('SupplierInfo')}>
                  <Left>
                      <Thumbnail source={logo} />
                      <Body>
                        <H2 style={styles.fontFamily}>Company Name</H2>
                        <H3 style={styles.titleText}>Place Name</H3>
                        <Text >Gmail</Text>
                        <Text numberOfLines={3} note >The Business Centre 61 Wellfield Road Roath Cardiff CF24 3DG</Text>
                      </Body>
                    
                  </Left>
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Left>

                    <Button transparent >
                      <Icon  name="thumbs-up" />
                      <Text>4923</Text>
                    </Button>
                    <Button transparent onPress={() => this.props.navigation.navigate('SupplierInfo')} >
                    <Icon name="information-circle" />
                      <Text>info</Text>
                    </Button>
                  </Left>  
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
          </Card>

             

            <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                <Text>Category Name</Text>
                <Text>....</Text>
            </View>
               <View style={{flex:3}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} ></Thumbnail>
                    
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    <Thumbnail   source={logo} style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} />
                    </ScrollView>
               </View>
            </View>

              <Grid>
              

              <Separator bordered ><Text style={styles.titleCategory}>BUSINESS</Text></Separator>
              
                <Row style={styles.row}>
                  <Col style={styles.col}  button onPress={() => this.props.navigation.navigate('ProductList')}>
                    <Icon name="logo-apple" style={{ color: "#999" }} />
                    <Text numberOfLines={1} style={styles.iconText}>
                      logo-apple
                    </Text>
                  </Col>
                  <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                    <Icon name="pizza" style={{ color: "#ffc125" }} />
                    <Text numberOfLines={1} style={styles.iconText}>
                      pizza
                    </Text>
                  </Col>
                  <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                    <Icon active name="person" style={{ color: "#387ef5" }} />
                    <Text numberOfLines={1} style={styles.iconText}>
                      person
                    </Text>
                  </Col>
                  <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                    <Icon name="beer" style={{ color: "#000" }} />
                    <Text numberOfLines={1} style={styles.iconText}>
                      beer
                    </Text>
                  </Col>
                  <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                    <Icon name="bicycle" style={{ color: "#663399" }} />
                    <Text numberOfLines={1} style={styles.iconText}>
                      bicycle
                    </Text>
                  </Col>
                </Row> 


                <Row style={styles.row}>
              <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                <Icon name="navigate" style={{ color: "#32db64" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  navigate
                </Text>
              </Col>
              <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                <Icon active name="cloud-circle" style={{ color: "#27a" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  cloud-circle
                </Text>
              </Col>
              <Col style={styles.col} button onPress={() => this.props.navigation.navigate('ProductList')}>
                <Icon name="pie" style={{ color: "#fac125" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pie
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bookmarks" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bookmarks
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pulse" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pulse
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon active name="camera" style={{ color: "#aaa" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  camera
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="mic-off" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  mic-off
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="film" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  film
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="flame" style={{ color: "orange" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  flame
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="paper" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  paper
                </Text>
              </Col>
            </Row>
            <Separator bordered ><Text style={styles.titleCategory}>PLAN </Text></Separator>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="paper-plane" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  paper-plane
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="cart" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  cart
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flask" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  flask
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="paw" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  paw
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="rose" style={{ color: "pink" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  rose
                </Text>
              </Col>
            </Row>
           
            <Separator bordered ><Text style={styles.titleCategory}>PRINT</Text></Separator>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="pint" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pint
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="shuffle" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  shuffle
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="keypad" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  keypad
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="eye" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  eye
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="glasses" style={{ color: "#aaa" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  glasses
                </Text>
              </Col>
            </Row>
            <Separator bordered ><Text style={styles.titleCategory}>PHONE </Text></Separator>
            
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="microphone" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  microphone
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="color-filter" style={{ color: "purple" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  color-filter
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="alarm" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  alarm
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="medkit" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  medkit
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="ionic" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  ionic
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="refresh" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  refresh
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="star-half" style={{ color: "gold" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  star-half
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="train" style={{ color: "#E14343" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  train
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="wine" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  wine
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="partly-sunny" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  partly-sunny
                </Text>
              </Col>
            </Row>
            <Separator bordered ><Text style={styles.titleCategory}>BOXES</Text></Separator>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon active name="nutrition" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  nutrition
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="grid" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  grid
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="settings" style={{ color: "#555" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  settings
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="chatbubbles" style={{ color: "#27a" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  chatbubbles
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="speedometer" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  speedometer
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon active name="chatboxes" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  chatboxes
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="cog" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  cog
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="baseball" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  baseball
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bulb" style={{ color: "gold" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bulb
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="calculator" style={{ color: "#889" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  calculator
                </Text>
              </Col>
            </Row>
            <Separator bordered ><Text style={styles.titleCategory}>CAMERA</Text></Separator>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="rainy" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  rainy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="videocam" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  videocam
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="play" style={{ color: "#f53d3d" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  play
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="disc" style={{ color: "#c76" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  disc
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="body" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  body
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="lock" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  lock
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="key" style={{ color: "gold" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  key
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flag" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  flag
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="skip-forward" style={{ color: "#999" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  skip-forward
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-github" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-github
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="barcode" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  barcode
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-tux" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-tux
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="copy" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  copy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="stopwatch" style={{ color: "#1df" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  stopwatch
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="medical" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  medical
                </Text>
              </Col>
            </Row>
            <Separator bordered ><Text style={styles.titleCategory}>BABY</Text></Separator>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="archive" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  archive
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="bookmark" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bookmark
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="clipboard" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  clipboard
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="happy" style={{ color: "#ffc125" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  happy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="share" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  share
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="bluetooth" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bluetooth
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="search" style={{ color: "#777" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  search
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="wifi" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  wifi
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="hand" style={{ color: "#EBAB7F" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  hand
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="trash" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  trash
                </Text>
              </Col>
            </Row>
            <Separator bordered ><Text style={styles.titleCategory}>IMAGES</Text></Separator>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="images" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  images
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="attach" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  attach
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-facebook" style={{ color: "#46639E" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-facebook
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-googleplus" style={{ color: "#DC4A38" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-googleplus
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-twitter" style={{ color: "#1DA1F2" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-twitter
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="logo-github" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-github
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-whatsapp" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-whatsapp
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-wordpress" style={{ color: "#46639E" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-wordpress
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-youtube" style={{ color: "#DC4A38" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-youtube
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="mail" style={{ color: "#1DA1F2" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  mail
                </Text>
              </Col>
            </Row>
            </Grid>  

        </Content>


       <FooterView navigation={this.props.navigation}/>

      </Container>
    );
  }
}

export default SupplierDetails;
