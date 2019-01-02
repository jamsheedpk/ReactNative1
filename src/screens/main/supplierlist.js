import React, { PureComponent } from "react";
import {ActivityIndicator,Alert} from 'react-native';

import {
  Container,
  Content,
  Text,
  View,
  List
} from "native-base";
import styles from "./styles";
import FooterView from  "./FooterView";
import {getArticles} from "../../services/supplierservices";
import DataListSupplier from "../../components/list_supplier";
import DataListSupplierCategory  from "../../components/list_supplier_category";
import MainHead from "../../components/head/main_head";

class SupplierList extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
          isLoading: true,
          data: null,
          isError: false,
          strTitle: 'SUPPLIER LIST'
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
       <DataListSupplier data={item} navigation={this.props.navigation}/>}
          />
    )
    return ( 
        <Container style={styles.container}> 
        <MainHead strTitle={this.state.strTitle} navigation={this.props.navigation}></MainHead>
       <DataListSupplierCategory ></DataListSupplierCategory>
        <Content contentContainerStyle ={{flex:1 ,backgroundColor:"#fff"}} padder={false} 
           children={view}/>
            <FooterView navigation={this.props.navigation}/>
         </Container>
      
     
    );
  }
}

export default SupplierList;
