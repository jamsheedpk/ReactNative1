import React, { Component } from "react";
import { Dimensions,Image } from 'react-native';

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
  Thumbnail,
  Card,
  CardItem,
  List,
  ListItem,
  Grid,
  Row,
  Col
} from "native-base";
import styles from "./styles";
import FooterView from "./FooterView";
const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

class ProductInfo extends Component {
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
            <Title>PRODUCT  INFO</Title>
          </Body>
          <Right/>
        </Header>

        <Content padder>
            <Card style={styles.mb}>
                <CardItem bordered>
                <Left>
                    <Thumbnail source={logo} />
                    <Body>
                    <Text>NativeBase</Text>
                    <Text note>April 15, 2016</Text>
                    </Body>
                </Left>
                </CardItem>

                <CardItem>
                <Body>
                    <Image
                    style={{
                        alignSelf: "center",
                        height: 300,
                        resizeMode: "cover",
                        width: deviceWidth / 1.18,
                        marginVertical: 5
                    }}
                    source={cardImage}
                    />
                    <Text style ={styles.textSizeModule}> Model No :  JHU1000</Text>
                    <Text numberOfLines={1}  style ={styles.textSizeModule}>STOCK    :   52 </Text>
                    <Text numberOfLines={1} style ={styles.textSizeModule}>Size    :  XXL </Text>
                    <Text style ={styles.textSizeModule}> Color    :   RED </Text>
                    <Text numberOfLines={1}  style ={styles.textSizeStockCount}>
                            RS :500</Text>
                    <Text numberOfLines={1}  style ={styles.textSizeOffer}>OFF : 20%</Text>
                    <Text>
                        NativeBase is a free and source framework that enable
                        developers to build high-quality mobile apps using React
                        Native iOS and Android apps with a fusion of ES6. NativeBase
                        builds a layer on top of React Native that provides you with
                        basic set of components for mobile application development.
                    </Text>
                </Body>
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                <Left>
                    <Button transparent>
                    <Icon name="thumbs-up" />
                    <Text>4,923 </Text>
                    </Button>
                    <Button transparent onPress={() => alert("Add")}>
                    <Icon name="ios-cart-outline" />
                    </Button>
                </Left>
                </CardItem>
            </Card>    

        </Content>
        <FooterView navigation={this.props.navigation}/>

      </Container>
    );
  }
}

export default ProductInfo;
