import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Container, Header, Content, Left, Body, Right, Button, Icon, List, ListItem} from 'native-base';

export default class TaxScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
            
             <Text style={{fontFamily:  'sans-serif-condensed', fontSize: 15, marginLeft: 110, marginTop: 20}}>ALL TAX PAYMENTS </Text>
            <List>
             <ListItem >
              <Body>
                <Text style={{fontFamily: 'sans-serif-thin'}}>Friday, September 10th, 2018</Text>
                <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 20}}>FIRS JULY PAYMENT FOR..</Text>
              </Body>
             
              <Right>
                <Text style={{ color: '#008000', fontFamily: 'sans-serif-condensed'}}>₦4,750.00</Text>
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
          
             <ListItem >
              <Body>
                <Text style={{fontFamily: 'sans-serif-thin'}}>Friday, September 10th, 2018</Text>
                <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 20}}>FIRS JULY PAYMENT FOR..</Text>
              </Body>
             
              <Right>
                <Text style={{ color: '#008000', fontFamily: 'sans-serif-condensed'}}>₦4,750.00</Text>
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
      </Container>
    );
  }
}