import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image
} from "react-native";
import {Container, Header, Content, Footer, Left, Body, Right, FooterTab, Button, Icon, List, ListItem} from 'native-base';
import {
  LineChart
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import ScanScreen from './ScanScreen'


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#33AD88'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body >
            <Button rounded style={{backgroundColor: '#33AD88', marginLeft: 80}}>
              <Icon name='mic' />
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='person' />
            </Button>
          </Right>
        </Header>
        <Content>
        <Content style={{backgroundColor: '#33AD88'}}>
         <Text style={{marginLeft: 125, color: '#FFFFFF', fontFamily: 'sans-serif-thin'}}>
    TOTAL BALANCE
  </Text>
   <Text style={{marginLeft: 100, color: '#FFFFFF', fontFamily: 'sans-serif-thin', fontSize: 30}}>
    ₦50,000.38
  </Text>
  </Content>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={200}
    chartConfig={{
      backgroundColor: '#33AD88',
      backgroundGradientFrom: '#33AD88',
      backgroundGradientTo: '#33AD88',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
   
  />
        <List>
             <ListItem >
              <Body>
                <Text style={{fontFamily: 'sans-serif-thin'}}>Friday, September 10th, 2018</Text>
                <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 20}}>FIRS JULY PAYMENT FOR..</Text>
              </Body>
             
              <Right>
                <Text style={{ color: '#FF0000', fontFamily: 'sans-serif-condensed'}}>-₦4,750.00</Text>
              </Right>
            </ListItem>

             <ListItem >
              <Body>
                <Text style={{fontFamily: 'sans-serif-thin'}}>Wednesday, September 8th, 2018</Text>
                <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 20}}>ELIZABETH SMITH O...</Text>
              </Body>
             
              <Right>
                <Text style={{color: '#008000', fontFamily: 'sans-serif-condensed'}}>₦5,000.89</Text>
              </Right>
            </ListItem>
             <ListItem >
              <Body>
                <Text style={{fontFamily: 'sans-serif-thin'}}>Monday, September 5th, 2018</Text>
                <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 20}}>PAUL ADEWALE A...</Text>
              </Body>
             
              <Right>
                <Text style={{ color: '#008000', fontFamily: 'sans-serif-condensed'}}>₦1,500.00</Text>
              </Right>
            </ListItem>
          </List>


        </Content>
        <Footer style={{backgroundColor: '#33AD88'}}>
          <FooterTab style={{backgroundColor: '#33AD88'}}>
            <Button vertical  onPress={() => this.props.navigation.navigate("ScanScreen")}>
              <Icon name="camera" />
              <Text style={{ color: 'white' }}>Scan</Text>
              
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate("InvoiceScreen")}>
              <Icon name="trending-up" />
              <Text style={{ color: 'white' }}>Invoice</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate("TaxScreen")} >
              <Icon active name="paper" />
              <Text style={{ color: 'white' }}>Tax</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate("TransferScreen")}>
              <Icon name="cash" />
              <Text style={{ color: 'white' }}>Transfer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}