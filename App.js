import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, ImageBackground, View } from 'react-native';
// import { TextInput } from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  componentDidMount() {
    // console.log('\nComponent has mounted');
    this.handleUpdateLocation('San Francisco');
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city
    });
  };

  render() {
    // const location = 'San Francisco';
    const { location } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
          <SearchInput
            placeholder="Search Any City"
            onSubmit={this.handleUpdateLocation}
          />
          {/* <TextInput
          autoCorrect={false}
          placeholder="Search Any City"
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always" // Allows (x) at end of input (iOS)
        /> */}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// Flex - expand to room remaining in parent container (relation to sibling components)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E'
  },
  imageContainer: {
    flex: 1
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  red: {
    color: 'red'
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
    // fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 10,
    alignSelf: 'center'
  }
});
