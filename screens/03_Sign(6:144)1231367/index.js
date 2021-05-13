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
      <View style={styles.View_6_228}>
        <Text style={styles.Text_6_228}>Already have an account? Sign in</Text>
      </View>
      <View style={styles.View_6_147}>
        <View style={styles.View_I6_147_2_289} />
        <View style={styles.View_I6_147_2_290}>
          <Text style={styles.Text_I6_147_2_290}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_6_148}>
        <View style={styles.View_I6_148_2_292}>
          <Text style={styles.Text_I6_148_2_292}>Your Email ID (Optional)</Text>
        </View>
        <View style={styles.View_I6_148_2_293}>
          <View style={styles.View_I6_148_2_294} />
          <View style={styles.View_I6_148_2_295}>
            <Text style={styles.Text_I6_148_2_295}>
              akshaysyal123@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_198}>
        <View style={styles.View_I6_198_2_292}>
          <Text style={styles.Text_I6_198_2_292}>Your Full Name</Text>
        </View>
        <View style={styles.View_I6_198_2_293}>
          <View style={styles.View_I6_198_2_294} />
          <View style={styles.View_I6_198_2_295}>
            <Text style={styles.Text_I6_198_2_295}>Akshay Syal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_149}>
        <View style={styles.View_I6_149_2_297}>
          <Text style={styles.Text_I6_149_2_297}>Password</Text>
        </View>
        <View style={styles.View_I6_149_2_298}>
          <View style={styles.View_I6_149_2_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f2/0478/6c162656c8ce30917588119428633f3f"
            }}
            style={styles.ImageBackground_I6_149_2_300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85b/ff9d/7cea69c3c1760129879fc6aadde64ba6"
            }}
            style={styles.ImageBackground_I6_149_2_309}
          />
        </View>
      </View>
      <View style={styles.View_6_208}>
        <View style={styles.View_I6_208_2_297}>
          <Text style={styles.Text_I6_208_2_297}>Confirm Password</Text>
        </View>
        <View style={styles.View_I6_208_2_298}>
          <View style={styles.View_I6_208_2_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f2/0478/6c162656c8ce30917588119428633f3f"
            }}
            style={styles.ImageBackground_I6_208_2_300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85b/ff9d/7cea69c3c1760129879fc6aadde64ba6"
            }}
            style={styles.ImageBackground_I6_208_2_309}
          />
        </View>
      </View>
      <View style={styles.View_6_222}>
        <View style={styles.View_6_223}>
          <Text style={styles.Text_6_223}>
            By continuing you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
        <View style={styles.View_6_224} />
      </View>
      <View style={styles.View_6_150}>
        <View style={styles.View_6_151}>
          <Text style={styles.Text_6_151}>Sign up to Infunite</Text>
        </View>
        <View style={styles.View_6_152}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfa4/ca01/5d4d8e597d6dab5955594ac7a106e4c3"
            }}
            style={styles.ImageBackground_6_153}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2782/43c6/95669414d0edda32ff45061dc4d29857"
            }}
            style={styles.ImageBackground_6_156}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf9c/d6d9/5fe3e4d996403554edb7b28ae3dde9ba"
        }}
        style={styles.ImageBackground_6_225}
      />
      <View style={styles.View_6_157}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e390/ec6e/f32160f0634c8539fdcf8093d4f2312d"
          }}
          style={styles.ImageBackground_I6_157_3_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
          }}
          style={styles.ImageBackground_I6_157_3_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I6_157_3_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I6_157_3_80}
        />
        <View style={styles.View_I6_157_3_85}>
          <Text style={styles.Text_I6_157_3_85}>4:21</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a6/08fa/433441267c02ab2c9066c0878c806f6a"
        }}
        style={styles.ImageBackground_6_158}
      />
      <View style={styles.View_109_387}>
        <View style={styles.View_109_381} />
        <View style={styles.View_109_384} />
        <View style={styles.View_109_377}>
          <Text style={styles.Text_109_377}>9876543210</Text>
        </View>
        <View style={styles.View_109_385}>
          <Text style={styles.Text_109_385}>IN +91</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56a8/b78d/a13870e719cd5f8b7163b3fbcef68424"
          }}
          style={styles.ImageBackground_109_386}
        />
        <View style={styles.View_109_379}>
          <Text style={styles.Text_109_379}>Your Phone number</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_228: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("119.80874316939891%")
  },
  Text_6_228: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_6_147: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("108.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_147_2_289: {
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
  View_I6_147_2_290: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("3.1420765027322375%")
  },
  Text_I6_147_2_290: {
    color: "rgba(255, 249, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_148: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_148_2_292: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I6_148_2_292: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_148_2_293: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%")
  },
  View_I6_148_2_294: {
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
  View_I6_148_2_295: {
    width: wp("58.666666666666664%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  Text_I6_148_2_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_198: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("59.699453551912576%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_198_2_292: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I6_198_2_292: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_198_2_293: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%")
  },
  View_I6_198_2_294: {
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
  View_I6_198_2_295: {
    width: wp("26.13333333333333%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  Text_I6_198_2_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_149: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("73.49726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_149_2_297: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I6_149_2_297: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_149_2_298: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%")
  },
  View_I6_149_2_299: {
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
  ImageBackground_I6_149_2_300: {
    width: wp("30.666666666666664%"),
    height: hp("1.366120218579235%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  ImageBackground_I6_149_2_309: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%")
  },
  View_6_208: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("87.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I6_208_2_297: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I6_208_2_297: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_208_2_298: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%")
  },
  View_I6_208_2_299: {
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
  ImageBackground_I6_208_2_300: {
    width: wp("30.666666666666664%"),
    height: hp("1.366120218579235%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  ImageBackground_I6_208_2_309: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%")
  },
  View_6_222: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("101.09289617486338%")
  },
  View_6_223: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    top: hp("0%")
  },
  Text_6_223: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_224: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(6, 8, 24, 1)",
    borderColor: "rgba(219, 219, 219, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_6_150: {
    width: wp("79.2%"),
    minWidth: wp("79.2%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.071038251366119%")
  },
  View_6_151: {
    width: wp("79.2%"),
    minWidth: wp("79.2%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%")
  },
  Text_6_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_152: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5.113836715781623%"),
    minHeight: hp("5.113836715781623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_153: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5.113836194648117%"),
    minHeight: hp("5.113836194648117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_156: {
    width: wp("3.081260172526042%"),
    minWidth: wp("3.081260172526042%"),
    height: hp("1.6571786234287615%"),
    minHeight: hp("1.6571786234287615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9320312500000005%"),
    top: hp("1.7024222618895166%")
  },
  ImageBackground_6_225: {
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
  View_6_157: {
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
  ImageBackground_I6_157_3_71: {
    flexGrow: 1,
    width: wp("99.99984537760417%"),
    height: hp("6.010914891143965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I6_157_3_72: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_I6_157_3_76: {
    flexGrow: 1,
    width: wp("4.072659301757812%"),
    height: hp("1.4980325281945732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.7181640625%"),
    top: hp("2.3223960334486%")
  },
  ImageBackground_I6_157_3_80: {
    flexGrow: 1,
    width: wp("4.533317057291667%"),
    height: hp("1.4571991123136927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.84439290364583%"),
    top: hp("2.3224127097207994%")
  },
  View_I6_157_3_85: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.5027322404371584%")
  },
  Text_I6_157_3_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_158: {
    width: wp("100%"),
    height: hp("5.05464480874317%"),
    top: hp("125.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_109_387: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.10382513661202%")
  },
  View_109_381: {
    width: wp("63.733333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.733333333333334%"),
    backgroundColor: "rgba(26, 39, 62, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_109_384: {
    width: wp("25.6%"),
    height: hp("7.650273224043716%"),
    top: hp("3.415300546448087%"),
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
  View_109_377: {
    width: wp("25.333333333333336%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%")
  },
  Text_109_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_109_385: {
    width: wp("12.8%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  Text_109_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_109_386: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.9498500433124479%"),
    minHeight: hp("0.9498500433124479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("7.110262177681008%")
  },
  View_109_379: {
    width: wp("34.66666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_109_379: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 955 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
