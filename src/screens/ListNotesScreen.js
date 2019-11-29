import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Body, View } from "native-base";
import Header from '../components/Header';
import API, { graphqlOperation } from '@aws-amplify/api';
import * as queries from '../graphql/queries';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  
  async componentWillMount() {
    const { navigation } = this.props;
    const notes = await API.graphql(graphqlOperation(queries.notesByUserName, {
       username: navigation.getParam("username")
       }));
    this.setState({ notes: notes.data.notesByUserName.items });
  }

  renderItem = ({ item }) => {
    return (
      <ListItem style={{ marginLeft: 0 }}>
        <Body>
          <Text>{item.description}. Created at {item.createdAt}</Text>
        </Body>
      </ListItem>
    );
  };
  render() {
    return (
        <View>
        <Header></Header>
        <Header>My Notes</Header>
        <FlatList
          data={this.state.notes}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        </View>
    );
  }
}