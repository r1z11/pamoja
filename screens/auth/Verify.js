import React from 'react';
import {
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
import { isNumeric } from '../../helpers/Validation';


export default class VerifyScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            otp: "",
            otpError: false,
            timer: 60,
            phone: '+256-782-888-888'
        };
    }

    // Verify OTP
    _verify = () => {
        // if (this.validate && this.state.otp.length == 4)
            this.props.navigation.navigate('Main');
    }

    // Wrong number
    _wrongNumber = () => {
        this.props.navigation.navigate('Auth');
    }

    // Validate form
    validate = () => {
        let valid = true;

        if (!isNumeric(this.state.otp)) {
            valid = false;
            this.setState({ otpError: true });
        }
        return valid;
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>

                    <View style={styles.titleContainer}>

                        <Text style={styles.headerText}>Verify your mobile</Text>

                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subTitle}>We have sent an SMS with the OTP code to {this.state.phone}</Text>
                            <TouchableOpacity style={styles.wrongNo} onPress={this._wrongNo}><Text style={styles.wrongNoText}>wrong number?</Text></TouchableOpacity>
                        </View>

                    </View>

                    <TextInput
                        style={styles.textInput}
                        onChangeText={otp => this.setState({ otp: otp })}
                        onFocus={() => this.setState({ otpError: false })}
                        value={this.state.otp}
                        keyboardType="number-pad"
                    />
                    {this.state.phoneError ? <Text style={styles.error}>Please enter a valid OTP code</Text> : null}

                    <Text style={styles.timer}>{this.state.timer}</Text>

                    <TouchableOpacity style={styles.resend} onPress={this._resendOtp}><Text style={styles.resendText}>Resend</Text></TouchableOpacity>

                    <TouchableOpacity
                        onPress={this._verify}
                        style={styles.btnContainer}>
                        {/* <LinearGradient
              colors={['#764ba2', '#667eea']}
              start={[0, 0.5]}
              end={[1, 0.5]}> */}
                        <Text style={styles.btnText}>Verify Now</Text>
                        {/* </LinearGradient> */}
                    </TouchableOpacity>

                </ScrollView>

                <KeyboardSpacer />

            </View>
        );
    }
}

VerifyScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#F0F0F0',
    },
    headerText: {
        flex: .5,
        color: "#AAA",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 150,
        marginBottom: 20
    },
    subTitleContainer: {
        marginLeft: 30,
        marginRight: 30,
    },
    subTitle: {
        fontSize: 17,
        color: "#BBB",
        marginBottom: 20
    },
    wrongNo: {
        marginBottom: 20
    },
    wrongNoText: {
        color: "blue",
        fontSize: 17,
        textAlign: "center"
    },
    resend: {
        marginBottom: 20,
    },
    resendText: {
        fontSize: 17,
        color: "blue",
        textAlign: "center"
    },
    textInput: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        paddingVertical: 15,
        borderBottomColor: "#BBB",
        borderBottomWidth: 1,
        fontSize: 17,
        color: "#BBB"
    },
    timer: {
        fontSize: 15,
        color: "#BBB",
        marginBottom: 20,
        textAlign: "center"
    },
    btnContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        height: 50,
        borderRadius: 30,
        marginBottom: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
    },
    btnText: {
        color: "#FFF",
        fontSize: 17,
    },
    error: {
        marginTop: 20,
        fontSize: 17,
        color: "#D46A6A"
    },
});
