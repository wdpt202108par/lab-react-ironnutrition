import { Component } from 'react';
/*
class FlatListDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchItems = (text) => {
    const newData = this.arrayNew.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
        placeholder="   Type Here...Key word"
        onChangeText={(text) => this.searchItems(text)}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 25,
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={{ padding: 10 }}>{item.name} </Text>
          )}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default FlatListDropDown;

*/
class SearchBar extends Component {
  state = {
    input: '',
  };

  handleSearch = (event) => {
    event.preventDefault(); // prevent page refresh

    this.setState({
      input: ' ',
    });
  };

  handleFood = (event) => {
    let input = event.target.value;
    this.props.filterFood(this.state.input);
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <label>
          Search:
          <input
            type="text"
            name="text"
            value={this.state.input}
            placeholder={'search food'}
            //control component
            onChange={this.handleFood}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
