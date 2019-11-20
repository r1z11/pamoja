import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';
import { isPhone, isRange, isAllLetters } from '../../helpers/Validation';

const android = Platform.OS;

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fullName: "",
      fullNameError: false,
      phone: "",
      phoneError: false,
      password: "",
      passwordError: false,
      hidePassword: true,
      isSignIn: true,
      isRegister: false,
      loginTabHeader: {
        flex: .5,
        borderTopRightRadius: 15,
        backgroundColor: "#FFF"
      },
      registerTabHeader: {
        flex: .5,
        borderTopLeftRadius: 15
      },
      passwordHidden: true,
      termsChecked: false
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  // Navigate to home screen
  _signIn = () => {
    // if (this.validate)
      this.props.navigation.navigate("Main");
  }
  // Navigate to home screen
  _register = () => {
    // if (this.validate && this.state.termsChecked)
      this.props.navigation.navigate("Verify");
  }

  // Navigate to forgot password screen
  _forgotPassword = () => { }

  // Manage tab navigation
  _switchtabs = () => {
    if (this.state.isSignIn) {
      this.setState({
        isSignIn: false,
        isRegister: true,
        loginTabHeader: {
          flex: .5,
          borderTopRightRadius: 15
        },
        registerTabHeader: {
          flex: .5,
          borderTopLeftRadius: 15,
          backgroundColor: "#FFF"
        }
      });
    } else {
      this.setState({
        isSignIn: true,
        isRegister: false,
        loginTabHeader: {
          flex: .5,
          borderTopRightRadius: 15,
          backgroundColor: "#FFF"
        },
        registerTabHeader: {
          flex: .5,
          borderTopLeftRadius: 15
        }
      });
    }
  }

  // Validate form
  validate = () => {
    let valid = true;

    if (!isAllLetters(this.state.fullName)) {
      valid = false;
      this.setState({ fullNameError: true });
    }
    if (!isPhone(this.state.phone)) {
      valid = false;
      this.setState({ phoneError: true });
    }
    if (!isRange(this.state.password, 6, 255)) {
      valid = false;
      this.setState({ passwordError: true });

    }
    return valid;
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={styles.topHalf}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <Text style={styles.welcomeText}>Pamoja Wallet</Text>
            </View>

            <Image style={styles.logo} source={require('../../assets/images/pamoja-icon.png')} />

          </View>

          {/* Tab header */}
          <View style={styles.header}>

            <TouchableWithoutFeedback
              style={this.state.loginTabHeaderContainer}
              onPress={this._switchtabs}>
              <View style={this.state.loginTabHeader}>
                <Text style={styles.headerText}>Sign In</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={this._switchtabs}>
              <View style={this.state.registerTabHeader}>
                <Text style={styles.headerText}>Register</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.bottomHalf}>

            {/* Login tab */}
            {this.state.isSignIn ?
              <View style={styles.loginTab}>

                <View style={styles.spacer} />

                <View style={styles.phoneContainer}>

                  {android ?
                    <Ionicons name="md-phone-portrait" size={27} color="#AAA" /> :
                    <Ionicons name="ios-phone-portrait" size={27} color="#AAA" />}

                  <Text style={styles.countryCode}>+256</Text>

                  <TextInput
                    style={styles.textInput}
                    onChangeText={phone => this.setState({ phone: phone })}
                    onFocus={() => this.setState({ phoneError: false })}
                    value={this.state.phone}
                    keyboardType="phone-pad"
                  />
                </View>
                {this.state.phoneError ? <Text style={styles.error}>Please enter a valid phone number</Text> : null}

                <View style={styles.passwordContainer}>

                  {android ?
                    <Ionicons name="md-lock" size={27} color="#AAA" /> :
                    <Ionicons name="ios-lock" size={27} color="#AAA" />}

                  <TextInput
                    style={styles.passwordInput}
                    onChangeText={password => this.setState({ password: password })}
                    onFocus={() => this.setState({ passwordError: false })}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry={this.state.passwordHidden}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        passwordHidden: !this.state.passwordHidden
                      })
                    }}>
                    <Image style={styles.hideIcon}
                      source={require("../../assets/images/hide.png")}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.passwordError ? <Text style={styles.error}>Password should be atleast 6 characters</Text> : null}

                <TouchableOpacity
                  onPress={this._signIn}
                  style={styles.btnContainer}>
                  {/* <LinearGradient
              colors={['#764ba2', '#667eea']}
              start={[0, 0.5]}
              end={[1, 0.5]}> */}
                  <Text style={styles.btnText}>Sign in</Text>
                  {/* </LinearGradient> */}
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.forgotPasswordContainer}
                  onPress={this._forgotPassword}
                >
                  <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
                </TouchableOpacity>

              </View> : null}

            {/* Register tab */}
            {this.state.isRegister ?
              <View style={styles.registerTab}>

                <View style={styles.spacer} />

                <View style={styles.nameContainer}>

                  {android ?
                    <Ionicons name="md-person" size={27} color="#AAA" /> :
                    <Ionicons name="ios-person" size={27} color="#AAA" />}

                  <TextInput
                    style={styles.textInput}
                    onChangeText={fullName => this.setState({ fullName: fullName })}
                    onFocus={() => this.setState({ fullNameError: false })}
                    value={this.state.fullName}
                    placeholder="Full name"
                  />
                </View>
                {this.state.fullNameError ? <Text style={styles.error}>Please enter a valid name</Text> : null}

                <View style={styles.phoneContainer}>

                  {android ?
                    <Ionicons name="md-phone-portrait" size={27} color="#AAA" /> :
                    <Ionicons name="ios-phone-portrait" size={27} color="#AAA" />}

                  <Text style={styles.countryCode}>+256</Text>

                  <TextInput
                    style={styles.textInput}
                    onChangeText={phone => this.setState({ phone: phone })}
                    onFocus={() => this.setState({ phoneError: false })}
                    value={this.state.phone}
                    keyboardType="phone-pad"
                  />
                </View>
                {this.state.phoneError ? <Text style={styles.error}>Please enter a valid phone number</Text> : null}

                <View style={styles.passwordContainer}>

                  {android ?
                    <Ionicons name="md-lock" size={27} color="#AAA" /> :
                    <Ionicons name="ios-lock" size={27} color="#AAA" />}

                  <TextInput
                    style={styles.passwordInput}
                    onChangeText={password => this.setState({ password: password })}
                    onFocus={() => this.setState({ passwordError: false })}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry={this.state.passwordHidden}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        passwordHidden: !this.state.passwordHidden
                      })
                    }}>
                    <Image style={styles.hideIcon}
                      source={require("../../assets/images/hide.png")}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.passwordError ? <Text style={styles.error}>Password should be atleast 6 characters</Text> : null}

                <View style={styles.terms}>
                  <CheckBox
                    onClick={() => {
                      this.setState({
                        termsChecked: !this.state.termsChecked
                      })
                    }}
                    isChecked={this.state.termsChecked}
                    checkBoxColor="#73B55B"
                    unCheckedBoxColor="#AAA" />
                  <Text style={styles.termsText}>I agree to the terms and conditions</Text>
                </View>

                <TouchableOpacity
                  onPress={this._register}
                  style={styles.btnContainer}>
                  {/* <LinearGradient
              colors={['#764ba2', '#667eea']}
              start={[0, 0.5]}
              end={[1, 0.5]}> */}
                  <Text style={styles.btnText}>Register</Text>
                  {/* </LinearGradient> */}
                </TouchableOpacity>
              </View> : null}

          </View>

        </ScrollView>

        <KeyboardSpacer />

      </View>
    );
  }
}

AuthScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  topHalf: {
    flex: .3,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#F0F0F0"
  },
  welcomeTextContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    color: "#3C4AB7",
    fontSize: 31
  },
  logo: {
    width: 50,
    height: 100,
    marginLeft: 20
  },
  header: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#F0F0F0"
  },
  headerText: {
    color: "#3C4AB7",
    fontSize: 19,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15
  },
  bottomHalf: {
    flex: 1
  },
  spacer: {
    height: 20
  },
  loginTabHeader: {
    flex: .5,
    borderTopRightRadius: 15,
    backgroundColor: "#FFF"
  },
  loginTab: {
    flex: 1
  },
  phoneContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: "#BBB",
    borderBottomWidth: 1,
  },
  countryCode: {
    fontSize: 17,
    color: "#BBB",
    alignSelf: "center",
    marginLeft: 10
  },
  nameContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: "#BBB",
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    marginLeft: 20,
    fontSize: 17,
    color: "#BBB"
  },
  passwordContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    paddingVertical: 10,
    borderBottomColor: "#BBB",
    borderBottomWidth: 1,
  },
  passwordInput: {
    flex: .9,
    color: "#BBB",
    fontSize: 17,
    marginLeft: 20
  },
  hideIcon: {
    width: 27,
    height: 27,
    alignSelf: "center"
  },
  registerTabHeader: {
    flex: .5,
    borderTopLeftRadius: 15,
  },
  btnContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    height: 50,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C4AB7",
  },
  btnText: {
    color: "#FFF",
    fontSize: 17,
  },
  registerTab: {
    flex: 1
  },
  error: {
    marginTop: 20,
    fontSize: 17,
    color: "#D46A6A"
  },
  forgotPasswordContainer: {
    marginBottom: 50,
  },
  forgotPasswordText: {
    color: "#3C4AB7",
    fontSize: 17,
    textAlign: "center"
  },
  terms: {
    flexDirection: "row",
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20
  },
  termsText: {
    fontSize: 17,
    color: "#BBB",
    marginLeft: 20
  }
});
