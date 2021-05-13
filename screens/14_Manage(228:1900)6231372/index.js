import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf9c/d6d9/5fe3e4d996403554edb7b28ae3dde9ba"
        }}
        style={styles.ImageBackground_228_1901}
      />
      <View style={styles.View_228_1968}>
        <View style={styles.View_228_1973} />
        <View style={styles.View_228_1974} />
        <View style={styles.View_228_1969}>
          <Text style={styles.Text_228_1969}>Manage</Text>
        </View>
        <View style={styles.View_228_1970}>
          <Text style={styles.Text_228_1970}>Order History</Text>
        </View>
      </View>
      <View style={styles.View_228_1957}>
        <View style={styles.View_228_1958} />
        <View style={styles.View_228_1959}>
          <Text style={styles.Text_228_1959}>My current activated plan</Text>
        </View>
        <View style={styles.View_228_1967}>
          <Text style={styles.Text_228_1967}>Expiry Date: 23 Nov 2021</Text>
        </View>
        <View style={styles.View_505_895}>
          <Text style={styles.Text_505_895}>Cancel Subscription</Text>
        </View>
        <View style={styles.View_228_1960}>
          <Text style={styles.Text_228_1960}>Premium Subscription Plan</Text>
        </View>
      </View>
      <View style={styles.View_228_1909}>
        <View style={styles.View_I228_1909_2_289} />
        <View style={styles.View_I228_1909_2_290}>
          <Text style={styles.Text_I228_1909_2_290}>Change Plan</Text>
        </View>
      </View>
      <View style={styles.View_228_1925}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e390/ec6e/f32160f0634c8539fdcf8093d4f2312d"
          }}
          style={styles.ImageBackground_I228_1925_3_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
          }}
          style={styles.ImageBackground_I228_1925_3_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I228_1925_3_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I228_1925_3_80}
        />
        <View style={styles.View_I228_1925_3_85}>
          <Text style={styles.Text_I228_1925_3_85}>4:21</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a6/08fa/433441267c02ab2c9066c0878c806f6a"
        }}
        style={styles.ImageBackground_228_1926}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_228_1901: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.5136612021857925%")
  },
  View_228_1968: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.071038251366119%")
  },
  View_228_1973: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 39, 62, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_228_1974: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_228_1969: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("1.50273224043716%")
  },
  Text_228_1969: {
    color: "rgba(6, 8, 24, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1970: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("1.50273224043716%")
  },
  Text_228_1970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1957: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("22.131147540983605%")
  },
  View_228_1958: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 39, 62, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1959: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.4590163934426243%")
  },
  Text_228_1959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1967: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("9.153005464480877%")
  },
  Text_228_1967: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_505_895: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("13.251366120218584%")
  },
  Text_505_895: {
    color: "rgba(43, 172, 226, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1960: {
    width: wp("66.4%"),
    minWidth: wp("66.4%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.191256830601098%")
  },
  Text_228_1960: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_228_1909: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("97.54098360655738%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I228_1909_2_289: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(42, 173, 227, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I228_1909_2_290: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.400000000000006%"),
    top: hp("3.1420765027322517%")
  },
  Text_I228_1909_2_290: {
    color: "rgba(255, 249, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_228_1925: {
    width: wp("99.99984537760417%"),
    minWidth: wp("99.99984537760417%"),
    height: hp("6.010914891143965%"),
    minHeight: hp("6.010914891143965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I228_1925_3_71: {
    flexGrow: 1,
    width: wp("99.99984537760417%"),
    height: hp("6.010914891143965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I228_1925_3_72: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_I228_1925_3_76: {
    flexGrow: 1,
    width: wp("4.072659301757812%"),
    height: hp("1.4980325281945732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.7181640625%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_I228_1925_3_80: {
    flexGrow: 1,
    width: wp("4.533317057291667%"),
    height: hp("1.4571991123136927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.84439290364583%"),
    top: hp("2.3224043715846996%")
  },
  View_I228_1925_3_85: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.5027322404371584%")
  },
  Text_I228_1925_3_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1926: {
    width: wp("100%"),
    height: hp("5.05464480874317%"),
    top: hp("105.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
