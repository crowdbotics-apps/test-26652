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
        style={styles.ImageBackground_228_2202}
      />
      <View style={styles.View_228_2203}>
        <Text style={styles.Text_228_2203}>Change Password</Text>
      </View>
      <View style={styles.View_228_2233}>
        <View style={styles.View_I228_2233_2_297}>
          <Text style={styles.Text_I228_2233_2_297}>Current Password</Text>
        </View>
        <View style={styles.View_I228_2233_2_298}>
          <View style={styles.View_I228_2233_2_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f2/0478/6c162656c8ce30917588119428633f3f"
            }}
            style={styles.ImageBackground_I228_2233_2_300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85b/ff9d/7cea69c3c1760129879fc6aadde64ba6"
            }}
            style={styles.ImageBackground_I228_2233_2_309}
          />
        </View>
      </View>
      <View style={styles.View_228_2234}>
        <View style={styles.View_I228_2234_2_297}>
          <Text style={styles.Text_I228_2234_2_297}>New Password</Text>
        </View>
        <View style={styles.View_I228_2234_2_298}>
          <View style={styles.View_I228_2234_2_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f2/0478/6c162656c8ce30917588119428633f3f"
            }}
            style={styles.ImageBackground_I228_2234_2_300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85b/ff9d/7cea69c3c1760129879fc6aadde64ba6"
            }}
            style={styles.ImageBackground_I228_2234_2_309}
          />
        </View>
      </View>
      <View style={styles.View_228_2261}>
        <View style={styles.View_I228_2261_2_297}>
          <Text style={styles.Text_I228_2261_2_297}>Re-type New Password</Text>
        </View>
        <View style={styles.View_I228_2261_2_298}>
          <View style={styles.View_I228_2261_2_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f2/0478/6c162656c8ce30917588119428633f3f"
            }}
            style={styles.ImageBackground_I228_2261_2_300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85b/ff9d/7cea69c3c1760129879fc6aadde64ba6"
            }}
            style={styles.ImageBackground_I228_2261_2_309}
          />
        </View>
      </View>
      <View style={styles.View_228_2208}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e390/ec6e/f32160f0634c8539fdcf8093d4f2312d"
          }}
          style={styles.ImageBackground_I228_2208_3_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
          }}
          style={styles.ImageBackground_I228_2208_3_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I228_2208_3_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I228_2208_3_80}
        />
        <View style={styles.View_I228_2208_3_85}>
          <Text style={styles.Text_I228_2208_3_85}>4:21</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a6/08fa/433441267c02ab2c9066c0878c806f6a"
        }}
        style={styles.ImageBackground_228_2209}
      />
      <View style={styles.View_228_2210}>
        <View style={styles.View_I228_2210_2_289} />
        <View style={styles.View_I228_2210_2_290}>
          <Text style={styles.Text_I228_2210_2_290}>Change</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_228_2202: {
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
  View_228_2203: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("7.786885245901639%")
  },
  Text_228_2203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_2233: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("15.163934426229508%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I228_2233_2_297: {
    flexGrow: 1,
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I228_2233_2_297: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I228_2233_2_298: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448089%")
  },
  View_I228_2233_2_299: {
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(26, 39, 62, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I228_2233_2_300: {
    width: wp("30.666666666666664%"),
    height: hp("1.366120218579235%"),
    top: hp("3.2786885245901622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  ImageBackground_I228_2233_2_309: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%")
  },
  View_228_2234: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I228_2234_2_297: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I228_2234_2_297: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I228_2234_2_298: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%")
  },
  View_I228_2234_2_299: {
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(26, 39, 62, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I228_2234_2_300: {
    width: wp("30.666666666666664%"),
    height: hp("1.366120218579235%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  ImageBackground_I228_2234_2_309: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%")
  },
  View_228_2261: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("42.759562841530055%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I228_2261_2_297: {
    flexGrow: 1,
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I228_2261_2_297: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I228_2261_2_298: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%")
  },
  View_I228_2261_2_299: {
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(26, 39, 62, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I228_2261_2_300: {
    width: wp("30.666666666666664%"),
    height: hp("1.366120218579235%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  ImageBackground_I228_2261_2_309: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%")
  },
  View_228_2208: {
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
  ImageBackground_I228_2208_3_71: {
    flexGrow: 1,
    width: wp("99.99984537760417%"),
    height: hp("6.010914891143965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I228_2208_3_72: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_I228_2208_3_76: {
    flexGrow: 1,
    width: wp("4.072659301757812%"),
    height: hp("1.4980325281945732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.7181640625%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_I228_2208_3_80: {
    flexGrow: 1,
    width: wp("4.533317057291667%"),
    height: hp("1.4571991123136927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.84440104166667%"),
    top: hp("2.3224043715846996%")
  },
  View_I228_2208_3_85: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.5027322404371584%")
  },
  Text_I228_2208_3_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_2209: {
    width: wp("100%"),
    height: hp("5.05464480874317%"),
    top: hp("105.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_228_2210: {
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
  View_I228_2210_2_289: {
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
  View_I228_2210_2_290: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("3.1420765027322517%")
  },
  Text_I228_2210_2_290: {
    color: "rgba(255, 249, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
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
