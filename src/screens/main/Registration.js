import React, { Component } from "react";
//var ReactNative = require('react-native');

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  Text
} from "native-base";
import styles from "./styles";





class Registration extends Component {

  handleSubmit() {
    
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
            <Title>Registration </Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form style={styles.fromStyle}>
            <Text></Text>
            <Item regular>
              <Icon active name="home" />
              <Input placeholder="Name" />
            </Item>
            <Text></Text>
            <Item regular>
                <Icon active name="swap" />
              <Input placeholder="Phone Number" />
              
            </Item >
            <Text></Text>
            <Item regular>
                <Icon active name="swap" />
                <Input placeholder="Password" />
            </Item>
            <Text></Text>
            <Item regular>
                <Icon active name="swap" />
                <Input placeholder="RePassword" />
              
            </Item>
            <Text></Text>
            <Text></Text>
          </Form>

         
          
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handleSubmit}>
            <Text>Sign In</Text>
          </Button>
        </Content>
        
      </Container>
    );
  }
}

export default Registration;

// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
// import React, { Component } from 'react';
// import {  View, StyleSheet } from 'react-native';
// import t from 'tcomb-form-native';
// import {Container,Content,Header,Body,Left,Button,Icon,Title,Right,Text} from "native-base";
// import styles from "./styles";
// const Form = t.form.Form;

// // Form model
// const User = t.struct({
//   email: t.String,
//   password: t.String,
// });
// const options = {
//   fields: {
//     email: {
//       autoCapitalize: 'none',
//       autoCorrect: false
//     },
//     password: {
//       autoCapitalize: 'none',
//       password: true,
//       autoCorrect: false
//     }
//   }
// }
// export default class Registration extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       value: {
//         email: 'sss',
//         password: '000'
//       }
//     }
//   }
//   componentWillUnmount() {
//     this.setState = {
//       value: {
//         email: '',
//         password: null
//       }
//     }
//   }
//   _onChange = (value) => {
//     this.setState({
//       value
//     })
//   }
//   handleSubmit() {
//     //const value = this.registrationform;
//     //alert(this.registrationform)
//     //console.log('value: ', value);
//   }
  
//   render() {
//     return (
//       <Container style={styles.container}>
//         <Header>
//              <Left>
//              <Button transparent onPress={() => this.props.navigation.goBack()}>
//                  <Icon name="arrow-back" />
//                </Button>
//              </Left>
//              <Body>
//                <Title>Registration </Title>
//              </Body>
//              <Right />
//          </Header>
//          <Content padder>
//          <Form ref='form' type={User} options={options}  value={this.state.value} onChange={this._onChange}/>
//             {/* <Button
//               title="Registration"
//               onPress={this.handleSubmit}
//             /> */}
//             <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handleSubmit}>
//               <Text>Sign In</Text>
//             </Button>
//          </Content>
       
//       </Container>
//     );
//   }
// }


