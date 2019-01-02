import React, { Component } from "react";
import {
  Container,
  Button,
  Footer,
  FooterTab,
  Icon,
  Text,
  Badge
} from "native-base";
import styles from "./styles";
class FooterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tab1: false,
          tab2: false,
          tab3: false,
          tab4: true,
          tab5: false
        };
        
      }
      toggleTab1() {
        this.setState({
          tab1: true,
          tab2: false,
          tab3: false,
          tab4: false,
          tab5: false
        });
        this.props.navigation.navigate('SupplierList')
      }
      toggleTab2() {
        this.setState({
          tab1: false,
          tab2: true,
          tab3: false,
          tab4: false,
          tab5: false
        });
       // this.props.navigation.navigate('CartView')
      }
      toggleTab3() {
        this.setState({
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false,
          tab5: false
        });
        //this.props.navigation.navigate('CartView')
      }
      toggleTab4() {
        
        this.setState({
          tab1: false,
          tab2: false,
          tab3: false,
          tab4: true,
          tab5: false
        });
       this.props.navigation.navigate('PurchaseView')
      }
        toggleTab5() {
        
          this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: true
          });
        
          this.props.navigation.navigate('CartView')
        
      }
      

  render() {
   
    return (
    
        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()}
              vertical
              badge
            >
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon active={this.state.tab1} name="home" />
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="apps" />
             
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="camera" />
             
            </Button>
            <Button
              active={this.state.tab4}
              onPress={() => this.toggleTab4()}
              vertical
              badge
            >
              <Badge style={{ backgroundColor: "green" }}>
                <Text>51</Text>
              </Badge>
              <Icon active={this.state.tab4} name="compass" />
              
            </Button>
            <Button active={this.state.tab5} onPress={() => this.toggleTab5()}>
              <Icon active={this.state.tab5} name="contact" />
              
            </Button>
          </FooterTab>
        </Footer>

  
    );
  }
}

export default FooterView;
