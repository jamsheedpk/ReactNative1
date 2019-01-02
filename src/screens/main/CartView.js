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
  SwipeRow,
  Segment,
Separator
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

  
  
class CartView extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: arryOfObjstrCartData,
            seg: 2,
            strDefultSupplier:0
          };
      }
      
      deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
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
            <Title>CART DETAILS</Title>
            
          </Body>
          <Right/>
        </Header>
      
      
        <Content padder>
        
        
        <Form>    
                <Grid style={styles.subhead}>
                    
                    <Row>
                    <Col style={styles.col}>
                        <H3>Name</H3>
                    </Col>
                    <Col style={styles.col}>
                        <H3>Qty</H3>
                    </Col>
                    <Col style={styles.col}>
                        <H3>Rate</H3> 
                    </Col>
                    <Col style={styles.col}>
                        <H3>Total</H3> 
                    </Col>
                    
                    </Row>

                </Grid> 

               

               

                <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem >
                 <Grid>  
                    <Row style={styles.Separatordiv2}>
                    <Col style={styles.col}>
                        <Text style={styles.txtNameSize} numberOfLines={2} > {data.strProductName} </Text>
                    </Col>
                    <Col style={styles.col}>
                        <Text> {data.intQty} </Text>
                    </Col>
                    <Col style={styles.col}>
                        <Text> {data.dblAmount} </Text>
                    </Col>
                    <Col style={styles.col}>
                        <Text> {data.intQty *data.dblAmount} </Text>
                    </Col>
                    
                    </Row>
     
                     </Grid> 
              </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button
                    full
                    onPress={() => alert(data)}
                    style={{
                      backgroundColor: "#092A00",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                <Icon active name="add" />
              </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button
                    full
                    danger
                    onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
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

export default CartView;
