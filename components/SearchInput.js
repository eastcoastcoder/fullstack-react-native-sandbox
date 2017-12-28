import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchInput extends React.Component {
  // Implementation w/i constructor
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  /* Implementation as class properties
  state = {
    text: ''
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: ''
  };
  */

  // Property initializer
  handleChangeText = text => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent" // rm default dark underline (Android)
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText} // Event-driven prop
          // onChangeText={this.handleChangeText.bind(this)} // Event-driven prop
          onSubmitEditing={this.handleSubmitEditing} // Event-driven prop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'white'
  }
});

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: ''
};
