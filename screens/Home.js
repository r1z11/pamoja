import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "Ugx",
      balance: 380000,
      notificationCount: 3,
      accountName: "Esther Kirabo Account",
      accountType: "Joint Account",
      cardNo: "945 230",
      cardNoLabel: "Card number",
      accountBalance: 105000
    };
  }

  _itemSelected = () => {
    // to do
    return
  }

  render() {
    return (<View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.topLeft}>
            <View style={styles.topLeftTop}>
              <Text style={styles.currency}>{this.state.currency}</Text>
              <Text style={styles.balance}>{this.state.balance}</Text>
            </View>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
          </View>

          <TouchableOpacity style={styles.depositBtn} onPress={this._deposit}>
            <Text style={styles.depositBtnText}>Deposit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accountsContainer}>

          <View style={styles.card}>

            <View style={styles.cardTop}>

              <View sty={styles.cardTitle}>
                <Text style={styles.accountName}>{this.state.accountName}</Text>
                <Text style={styles.accountType}>{this.state.accountType}</Text>
              </View>

              <View style={styles.notification}>
                <Text style={styles.notificationCount}>{this.state.notificationCount}</Text>
              </View>
            </View>

            <View style={styles.cardBottom}>

              <View style={styles.cardNoContainer}>
                <Text style={styles.cardNo}>{this.state.cardNo}</Text>
                <Text style={styles.cardNoLabel}>{this.state.cardNoLabel}</Text>
              </View>

              <View style={styles.cardBalance}>
                <Text style={styles.cardCurrency}>{this.state.currency}</Text>
                <Text style={styles.accountBalance}>{this.state.accountBalance}</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={styles.actions} horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.action}>

            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImg} source={require('../assets/images/deposit.png')}/>
            </View>
            <Text style={styles.actionText}>Deposit</Text>
          </View>

          <View style={styles.action}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImg} source={require('../assets/images/withdrawal.png')}/>
            </View>
            <Text style={styles.actionText}>Withdrawal</Text>
          </View>

          <View style={styles.action}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImg} source={require('../assets/images/transfer.png')}/>
            </View>
            <Text style={styles.actionText}>Transfer</Text>
          </View>

          <View style={styles.action}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImg} source={require('../assets/images/loan.png')}/>
            </View>
            <Text style={styles.actionText}>Loans</Text>
          </View>

        </ScrollView>

        <View style={styles.bottomHalf}>

          <View style={styles.bHalfHeader}>
            <Text style={styles.bHalfHeaderLeft}>Transfer money to</Text>

            <View style={styles.bHalfHeaderRight}>
              <Text style={styles.bHalfHeaderRightText}>Find a contact</Text>
              <Ionicons style={styles.searchIcon} name={Platform.OS === 'ios'
                  ? 'ios-search'
                  : 'md-search'} size={32} color="#555"/>
            </View>
          </View>

          <ScrollView style={styles.bHalfActions} horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={styles.bHalfAction}>
              <Ionicons style={styles.addIcon} name={Platform.OS === 'ios'
                  ? 'ios-add-circle'
                  : 'md-add-circle'} size={42} color="#3C4AB7"/>
              <Text style={styles.bHalfActionText}>New joint account</Text>
            </View>

            <View style={styles.bHalfAction}>
              <Image style={styles.bHalfActionImg} source={require('../assets/images/user-1.jpg')}/>
              <Text style={styles.bHalfActionText}>Amy Armstrong</Text>
            </View>

            <View style={styles.bHalfAction}>
              <Image style={styles.bHalfActionImg} source={require('../assets/images/user-2.jpg')}/>
              <Text style={styles.bHalfActionText}>Adrian Kalema</Text>
            </View>

            <View style={styles.bHalfAction}>
              <Image style={styles.bHalfActionImg} source={require('../assets/images/user-1.jpg')}/>
              <Text style={styles.bHalfActionText}>Keith Naggawa</Text>
            </View>

          </ScrollView>

          <View style={styles.txnsHeader}>
            <Text style={styles.txnsHeaderLeft}>Recent transactions</Text>
            <Text style={styles.txnsHeaderRight}>View all</Text>
          </View>

          <FlatList data={txns} renderItem={({item}) => <TouchableOpacity style={styles.listCard} onPress={this._itemSelected(item)}>
              <View style={styles.listItem}>
                <Image style={styles.avatar} source={item.avatar}/>
                <View style={styles.txNameContainer}>
                  <Text style={styles.txName}>{item.txName}</Text>
                  <Text style={styles.txTime}>{item.txTime}</Text>
                </View>
                <View style={styles.txAmtContainer}>
                  <Text style={styles.txAmount}>{item.txAmount}</Text>
                  <Text style={styles.txStatus}>{item.txStatus}</Text>
                </View>
              </View>
            </TouchableOpacity>}/>

        </View>

      </ScrollView>
    </View>);
  }
}

Home.navigationOptions = {
  header: null
};

// Transactions sample data
const txns = [
  {
    key: "1",
    avatar: require("../assets/images/user-1.jpg"),
    txName: "Amy Service",
    txTime: "25 mins ago",
    txAmount: "Ugx 1,800,000",
    txStatus: "Pending"
  }, {
    key: "2",
    avatar: require("../assets/images/user-2.jpg"),
    txName: "Mariam Card Bill",
    txTime: "2 days ago",
    txAmount: "Ugx 321,900",
    txStatus: "Received"
  }, {
    key: "3",
    avatar: require("../assets/images/user-1.jpg"),
    txName: "Derrick November",
    txTime: "22nd March",
    txAmount: "Ugx 50,000",
    txStatus: "Sent"
  }, {
    key: "4",
    avatar: require("../assets/images/user-2.jpg"),
    txName: "Amy Deposit",
    txTime: "19th December, 2018",
    txAmount: "Ugx 89,000",
    txStatus: "Sent"
  }
]

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  contentContainer: {
    paddingBottom: 50
  },
  header: {
    marginTop: 20,
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  topLeft: {
    flexDirection: "column",
    flex: .7
  },
  topLeftTop: {
    flexDirection: "row"
  },
  currency: {
    fontSize: 15,
    color: "#AAA"
  },
  balance: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#555",
    marginLeft: 5
  },
  balanceLabel: {
    fontSize: 15,
    color: "#AAA",
    marginTop: 5,
    marginLeft: 40
  },
  depositBtn: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    borderRadius: 30,
    position: "absolute",
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C4AB7"
  },
  depositBtnText: {
    fontSize: 17,
    color: "#FFF"
  },
  accountsContainer: {
    flex: 1,
    paddingVertical: 15,
    flexDirection: "row",
    paddingHorizontal: 20
  },
  card: {
    flex: 1,
    borderRadius: 17,
    backgroundColor: "#555",
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  cardTop: {
    flexDirection: "row",
    marginBottom: 20
  },
  cardTitle: {
    flexDirection: "column",
    flex: .7,
    paddingRight: 20
  },
  accountName: {
    fontSize: 19,
    color: "#FFF",
    marginRight: 20
  },
  accountType: {
    fontSize: 17,
    color: "#BBB"
  },
  notification: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },
  notificationCount: {
    fontSize: 17,
    color: "#FFF"
  },
  cardBottom: {
    flex: 1,
    flexDirection: "row"
  },
  cardNoContainer: {
    flex: .5,
    flexDirection: "column"
  },
  cardNo: {
    fontSize: 19,
    color: "#FFF"
  },
  cardNoLabel: {
    fontSize: 15,
    color: "#BBB"
  },
  cardBalance: {
    flex: .5,
    flexDirection: "row"
  },
  cardCurrency: {
    color: "#BBB",
    fontSize: 15
  },
  accountBalance: {
    color: "#FFF",
    fontSize: 25,
    marginLeft: 5,
    marginRight: 20
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  action: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  actionImgContainer: {
    width: 70,
    height: 70,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
      },
      android: {
        elevation: 5
      }
    })
  },
  actionImg: {
    width: 50,
    height: 50
  },
  actionText: {
    fontSize: 15,
    color: "#AAA",
    marginTop: 15
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20
  },
  bHalfHeader: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20
  },
  bHalfHeaderLeft: {
    flex: .5,
    fontSize: 17,
    fontWeight: "bold",
    color: "#555",
    marginRight: 20
  },
  bHalfHeaderRight: {
    flex: .5,
    flexDirection: "row"
  },
  bHalfHeaderRightText: {
    fontSize: 17,
    color: "#3C4AB7",
    marginRight: 10
  },
  searchIcon: {
    marginRight: 20
  },
  bHalfActions: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  bHalfAction: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEE",
    borderRadius: 7,
    padding: 10
  },
  addIcon: {},
  bHalfActionImg: {
    width: 70,
    height: 70,
    borderRadius: 7
  },
  bHalfActionText: {
    marginTop: 10,
    fontSize: 15,
    color: "#555",
    width: 100,
    textAlign: "center"
  },
  txnsHeader: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15
  },
  txnsHeaderLeft: {
    flex: .5,
    fontSize: 17,
    fontWeight: "bold",
    color: "#555"
  },
  txnsHeaderRight: {
    flex: .5,
    fontSize: 17,
    color: "#3C4AB7",
    textAlign: "right"
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 15,
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    marginBottom: 20
  },
  avatar: {
    flex: .2,
    height: 50,
    width: 50,
    borderRadius: 7
  },
  txNameContainer: {
    flex: .4,
    flexDirection: "column",
    marginLeft: 10
  },
  txName: {
    fontSize: 15,
    color: "#555"
  },
  txTime: {
    fontSize: 14,
    color: "#BBB",
    marginTop: 10
  },
  txAmtContainer: {
    flex: .4,
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 20
  },
  txAmount: {
    fontSize: 15,
    color: "#555"
  },
  txStatus: {
    fontSize: 14,
    color: "#BBB",
    marginTop: 10
  }
});
