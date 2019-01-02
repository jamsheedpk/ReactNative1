const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
var screen = Dimensions.get('window');
export default {
    container: {
      backgroundColor: "#FFF"
    },
    mb10: {
      marginBottom: 10
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
      },
      mb: {
        marginBottom: 15
      },
      textSize: {
        fontSize: 25
      },
      textSizeModule: {
        fontSize: 15,
        fontWeight: 'bold',
      },
      textSizeStockCount: {
        fontSize: 28,
        fontWeight: 'bold',
      },
      textSizeOffer: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'red'
      },
      drawerCover: {
        alignSelf: "stretch",
        height:deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
      },
      drawerImage: {
        position: "absolute",
        left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 210,
        height: 75,
        resizeMode: "cover"
      },
      baseText: {
        fontFamily: 'Cochin',
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      iconContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingLeft: 15
      },
      iconText: {
        fontSize: 12
      },
      iconTextCatgory:{
        fontSize: 10,
        flex:1,
        justifyContent: "center",
        alignSelf: "center",
      },
      icon: {
        width: 45,
        height: 45,
        justifyContent: "center"
      },
      col: {
        alignItems: "center",
        paddingHorizontal: 3
      },
      colFirst: {
        alignItems: "flex-start",
        paddingHorizontal: 1,
      },
      colEnd: {
        alignItems: "flex-end",
        paddingHorizontal: 1,
      },
      row: {
        paddingBottom: 20
      },
      titleCategory: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
      },
      map: {
        height: 400,
        marginTop: 80
     },
     subhead:{
       backgroundColor:'#F8F5F4',
       color:'#737272',
       paddingBottom:5,
       paddingTop:5
     },
     Separatordiv:{

      height: 35,
      backgroundColor: '#F0EFF5',
      justifyContent: 'center',
     },
     Separatordiv2:{
      marginTop: 4,
      flex: 1,
      height: 38,
      paddingTop:5,
      justifyContent: 'center',
      marginBottom: 4
     },
     txtNameSize:{
      fontSize: 15,
      fontWeight: 'bold',
      color:'#3E3736'
     },
     Separatordivpurchase2:{

      height: 15,
      backgroundColor: '#F0EFF5',
      justifyContent: 'center',
     },
     modalStyle: {
      justifyContent: 'center',
      borderRadius: Platform.OS == 'ios' ? 30 : 30,
      shadpwRadius:10,
      width:screen.width-80,
      height:280
    },
    modalTextStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign:'center',
      marginTop:40
      
    },
    modalTextInputStyle: {
      height: 35,
     borderBottomColor:'gray',
     marginLeft:30,
     marginBottom:10,
     marginTop:20,
     marginRight:30,
     borderBottomWidth:1
      
    },
    
  };
  