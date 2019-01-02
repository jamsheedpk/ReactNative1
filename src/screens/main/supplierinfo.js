import React, { Component } from "react";
import { ScrollView,Image } from 'react-native';
// import MapViews from './MapViews'
import FooterView from  "./FooterView";
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
Separator,
Picker,
Form
} from "native-base";
import styles from "./styles";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const Item = Picker.Item;
const arryOfObjDeliverDetails =[{
    datDate: "12/10/2018",
    note: "Wish I had a Time machine . .",
    time: "9:54 pm"
  },
  {
    
    datDate: "01/08/2018",
    note: "Wish I had a Time machine . .",
    time: "7:54 pm"
  },
  {
    
    datDate: "05/08/2018",
    note: "Wish I had a Time machine . .",
    time: "6:54 pm"
  },
  {
    datDate: "18/10/2018",
    note: "Wish I had a Time machine . .",
    time: "9:54 pm"
  },
  {
    
    datDate: "03/08/2018",
    note: "Wish I had a Time machine . .",
    time: "7:54 pm"
  },
  {
    
    datDate: "02/08/2018",
    note: "Wish I had a Time machine . .",
    time: "6:54 pm"
  }
];
const pratik = require("../../../assets/contacts/pratik.png");
const sanket = require("../../../assets/contacts/sanket.png");
const megha = require("../../../assets/contacts/megha.png");
const atul = require("../../../assets/contacts/atul.png");
const saurabh = require("../../../assets/contacts/saurabh.png");
const varun = require("../../../assets/contacts/varun.png");
const arryOfObjStaff = [
  {
    img: pratik,
    strName: "Kumar Pratik",
    strPhone: "+91 95684125523",
    strStatus: "Online"
  },
  {
    img: sanket,
    strName: "Kumar Sanket",
    strPhone: "+91 9958154933",
    strStatus: "Online"
  },
  {
    img: megha,
    strName: "Megha",
    strPhone: "+91 9947144955",
    strStatus: "Leave"
  },
  {
    img: atul,
    strName: "Atul Ranjan",
    strPhone: "+91 99547815363",
    strStatus: "Offline"
  },
  {
    img: saurabh,
    strName: "Saurabh Sahu",
    strPhone: "+91 824536661",
    strStatus: "Online"
  },
  {
    img: varun,
    strName: "Varun Sahu",
    strPhone: "+91 7465152854",
    strStatus: "Leave"
  }
];
class SupplierInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false,
          selected1: "key1"
        };
      }
     
      onValueChange(value) {
        this.setState({
          selected1: value
        });
      }

  render() {
    const { navigation } = this.props;
    const intId = navigation.getParam('_id', 'NO-ID');
    const strTaskListName = navigation.getParam('strTaskListName', 'some default value');

    return (
      <Container style={styles.container}>
         <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>SUPPLIER INFO</Title>
          </Body>
          <Right/>
        </Header>

      
        <Content padder>
         <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

              <Card style={styles.mb}>
              <CardItem>
              <Body>
              <H2 style={styles.fontFamily}>{strTaskListName}</H2>
              <Text > {intId}</Text>
              <H3 style={styles.titleText}>Place Name</H3>
              <Text >Gmail</Text>
              <Text >Phone </Text>
              <Text  >The Business Centre 61 Wellfield Road Roath Cardiff CF24 3DG  NativeBase is a free and source framework that enable
                        developers to build high-quality mobile apps using React
                        Native iOS and Android apps with a fusion of ES6. NativeBase
                        builds a layer on top of React Native that provides you with
                        basic set of components for mobile application development.</Text>
              </Body>
              </CardItem>
              </Card>    


    
            

              <Grid>
                    <Separator bordered ><Text style={styles.titleCategory}>CATEGORY</Text></Separator>
                    <Row>
                    <Col style={styles.col}>
                        <Icon ios="ios-person" android="md-person" />
                        <Text>person</Text>
                    </Col>
                    <Col style={styles.col}>
                        <Icon ios="ios-apps-outline" android="md-apps" />
                        <Text>apps</Text>
                    </Col>
                    <Col style={styles.col}>
                        <Icon ios="ios-alarm" android="md-alarm" />
                        <Text>alarm</Text>
                    </Col>
                    <Col style={styles.col}>
                        <Icon ios="ios-paper" android="md-paper" />
                        <Text>paper</Text>
                    </Col>
                    <Col style={styles.col}>
                        <Icon ios="ios-cart-outline" android="md-cart" />
                        <Text>cart</Text>
                    </Col>
                    </Row>

            </Grid>  
            <Separator bordered ><Text style={styles.titleCategory}>Monthly Delivery Details</Text></Separator>
            <Form>
                <ListItem icon>
                <Left>
                 <Text>Select Place</Text>
                </Left>
                <Body>
                    <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    style={{ width: undefined }}
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Item label="Wallet" value="key0" />
                    <Item label="ATM Card" value="key1" />
                    <Item label="Debit Card" value="key2" />
                    <Item label="Credit Card" value="key3" />
                    <Item label="Net Banking" value="key4" />
                    </Picker>
                </Body>
                </ListItem>

                <List style={styles.mb10}
                    dataArray={arryOfObjDeliverDetails}
                    renderRow={data =>
                    <ListItem>
                        <Left>
                        <Text>
                            {data.datDate}
                        </Text>
                       
                        </Left>
                        <Right>
                        <Text>
                            {data.time}
                        </Text>
                        </Right>
                    </ListItem>}
                />
            <Separator bordered ><Text style={styles.titleCategory}> Delivery Staff</Text></Separator>
            <List
                dataArray={arryOfObjStaff}
                renderRow={data =>
                <ListItem avatar>
                    <Left>
                    <Thumbnail small source={data.img} />
                    </Left>
                    <Body>
                    <Text>
                        {data.strName}
                    </Text>
                    <Text numberOfLines={1} >
                        {data.strPhone}
                    </Text>
                    </Body>
                    <Right>
                    <Text note>
                        {data.strStatus}
                    </Text>
                    </Right>
                </ListItem>}
          />
            </Form>
          
        </Content>


      <FooterView navigation={this.props.navigation}/>

      </Container>
    );
  }
}

export default SupplierInfo;
