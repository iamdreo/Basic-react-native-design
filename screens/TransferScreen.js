import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Item, Input, Button } from 'native-base';

export default class TransferScreen extends React.Component {
  render() {
    return (
       <Container>
        <Header />
        <Content style={{backgroundColor: '#F8F9F9'}}>
        <Text style={{fontFamily:  'sans-serif-condensed', fontSize: 15, marginLeft: 90, marginTop: 20}}>ACCOUNT TYPE: STANDARD </Text>
        <Text style={{fontFamily: 'sans-serif-thin', marginLeft: 50}}>Maximum withdrawal limit ₦10,000 daily</Text>
          <Item rounded style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
            <Input style={{backgroundColor: '#F2F3F4', borderRadius: 25, fontFamily:  'sans-serif-condensed' }} placeholderTextColor="#85929E" placeholder='Bank'/>
          </Item>
            <Item rounded style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
            <Input style={{backgroundColor: '#F2F3F4', borderRadius: 25, fontFamily:  'sans-serif-condensed' }} placeholderTextColor="#85929E" placeholder='Account No.'/>
          </Item>
          <Text style={{marginTop: 40, fontFamily: 'sans-serif-condensed', marginLeft: 220, fontSize: 10}}>Transfer limit: ₦10,000.00</Text>
            <Item rounded style={{marginLeft: 15, marginRight: 15}}>
            <Input style={{backgroundColor: '#F2F3F4', borderRadius: 25, fontFamily:  'sans-serif-condensed' }} placeholderTextColor="#85929E" placeholder='Enter an amount..'/>
          </Item>
            <Item rounded style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
            <Input style={{backgroundColor: '#F2F3F4', borderRadius: 25, fontFamily:  'sans-serif-condensed' }} placeholderTextColor="#85929E" placeholder='Description..'/>
          </Item>

           <Button style={{backgroundColor: '#148F77',marginTop: 30, marginLeft: 120, borderRadius: 25, width: 120, height: 50}}>
            <Text style={{fontFamily:  'sans-serif-condensed', fontSize: 20, color: 'white',  marginLeft: 38}}>SEND</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}