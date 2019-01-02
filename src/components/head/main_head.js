import React, { PureComponent } from "react";

import {
  Container,
  Header,
  Title,
  Button,
  Footer,
  FooterTab,
  Icon,
  Left,
  Right,
  Body
  
} from "native-base";

export default class MainHead extends PureComponent{
    constructor(props) {
        super(props);
        this.strTitle =props.strTitle;  
      }
      render() {
       
        return (
            
            <Header>
            <Left>
             <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="ios-menu" />
              </Button>
            </Left>
            <Body>
              <Title>{this.strTitle}</Title>
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
        )}
}