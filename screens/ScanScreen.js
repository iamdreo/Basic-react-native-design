import React, { Component } from "react";
import { Text, View } from 'react-native';
import { Container, Header, Content, Picker, Form } from "native-base";

export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
           <Text style={{fontSize: 20}}>Select your scan type </Text>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
             
              <Picker.Item label="Card" value="key0" />
              <Picker.Item label="Tax" value="key1" />
              <Picker.Item label="Document" value="key2" />             
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}