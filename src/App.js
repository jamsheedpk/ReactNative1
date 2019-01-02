import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";






import SupplierDetails from "./screens/main/supplierdetails";
import ProductList from "./screens/main/productlist";
import ProductInfo from "./screens/main/productinfo";
import SupplierInfo from "./screens/main/supplierinfo";
import FooterView from "./screens/main/FooterView";


//Create Page 

import SupplierList from "./screens/main/supplierlist";
 import PurchaseView from "./screens/main/PurchaseView";
import CartView from "./screens/main/CartView";
import Registration from "./screens/main/Registration";
import Login from "./screens/main/Login";


import Home from "./screens/home/";

import SideBar from "./screens/sidebar";


const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    SupplierList: {screen: SupplierList },
    CartView    :{screen:CartView},
     PurchaseView:{screen:PurchaseView},
     Registration:{screen:Registration},
     SupplierInfo :{screen:SupplierInfo},
     Login :{screen:Login}
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    SupplierDetails :{ screen : SupplierDetails},
    ProductList :{screen : ProductList},
    ProductInfo :{screen : ProductInfo},
    SupplierInfo :{screen:SupplierInfo},
    FooterView  :{screen :FooterView},
    SupplierList: {screen: SupplierList}
    
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);


export default () =>
  <Root>
    <AppNavigator />
  </Root>;
