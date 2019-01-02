import React, { Component } from "react";
import { ListView,Image } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Form,
  Icon,
  Left,
  Right,
  Body,
  Text,
  List,
  H3,
  Grid,
  Col,
  Row,
  DatePicker,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";
import FooterView from "./FooterView";


const arryOfObjstrCartData = [
    {
     
      strProductName: "Kumar PratikMegha2222",
      intQty:211,
      dblAmount: 100,
      strSupplierName :1,
    },
    {
     
        strProductName: "Kumar Sanket",
        intQty:3,
        dblAmount: 5660,
        strSupplierName :1,
    },
    {
     
        strProductName: "Megha",
        intQty: 50,
        dblAmount: 650,
        strSupplierName :1,
    },
    {
     
        strProductName: "Atul Ranjan",
        intQty: 15,
        dblAmount: 55.5,
        strSupplierName :2,
    },
    {
      
        strProductName: "Saurabh Sahu",
        intQty: 22,
        dblAmount: 614,
        strSupplierName :2,
    },
    {
     
        strProductName: "Varun Sahu",
        intQty: 155,
        dblAmount: 99,
        strSupplierName :3,
    }
  ];

  
  
class PurchaseView extends Component {
    constructor(props) {
        super(props);
       
        this.state = { chosenDate: new Date() };

        this.setDate = this.setDate.bind(this);
      }
      
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
            <Title>PURCHASE DETAILS</Title>
            
          </Body>
          <Right/>
        </Header>
      
      
        <Content padder>
        
        
        <Form> 

             <Card  style={styles.mb}>
                     <CardItem >
                        <Left >
                        <Text>From </Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                            />
                            <Text>To</Text>
                            </Left>
                            <Right>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                            />
                            </Right>
                            
                        </CardItem>
              </Card>
       
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>


                <Grid style={styles.subhead}>
                    
                    <Row>
                    <Col style={styles.colFirst}>
                        <H3>Name</H3>
                    </Col>
                    <Col style={styles.colEnd}>
                        <H3>Qty</H3>
                    </Col>
                    <Col style={styles.colEnd}>
                        <H3>Rate</H3> 
                    </Col>
                    <Col style={styles.colEnd}>
                        <H3>Total</H3> 
                    </Col>
                    
                    </Row>

                </Grid> 

               

               

                <List
                    dataArray={arryOfObjstrCartData}
                    renderRow={data =>
                    
                        <Grid>  
                            <Row style={styles.Separatordiv2}>
                            <Col style={styles.colFirst}>
                                <Text style={styles.txtNameSize} numberOfLines={2} > {data.strProductName} </Text>
                            </Col>
                            <Col style={styles.colEnd}>
                                <Text> {data.intQty} </Text>
                            </Col>
                            <Col style={styles.colEnd}>
                                <Text> {data.dblAmount} </Text>
                            </Col>
                            <Col style={styles.colEnd}>
                                <Text> {data.intQty *data.dblAmount} </Text>
                            </Col>
                            
                            </Row>
                            <Row style={styles.Separatordivpurchase2}></Row>
                            </Grid> 
                    
                    }
                />

                
           
           <Grid style={styles.subhead}>
                    
            <Row>
            <Col style={styles.colEnd}>
            <H3 style={styles.baseText}> Total </H3>
            </Col>
            <Col style={styles.colEnd}>
                
            </Col>
            <Col style={styles.colEnd}>
                
            </Col>
            <Col style={styles.colEnd}>
                <H3>666666</H3> 
            </Col>
            
            </Row>

                </Grid> 
            </Form>    
              
        </Content>


        <FooterView navigation={this.props.navigation}/>

      </Container>
    );
  }
}

export default PurchaseView;
