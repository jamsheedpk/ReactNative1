import React, { Component } from "react";
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

class Login extends Component {
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
            <Title>Login </Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item rounded>
              <Icon active name="home" />
              <Input placeholder="User Name" />
            </Item>
            <Item rounded>
                <Icon active name="swap" />
              <Input placeholder="Password" />
              
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
