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
      <View style={styles.View_228_1760}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b4/0602/5a328b0667c58be668fd26a46b3d88ea"
          }}
          style={styles.ImageBackground_228_1761}
        />
        <View style={styles.View_228_1762}>
          <Text style={styles.Text_228_1762}>AS</Text>
        </View>
      </View>
      <View style={styles.View_228_1730}>
        <View style={styles.View_228_1731} />
        <View style={styles.View_228_1732}>
          <Text style={styles.Text_228_1732}>Subscription </Text>
        </View>
        <View style={styles.View_228_1733}>
          <Text style={styles.Text_228_1733}>chevron-right</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a930/6359/9590824afa73f5b24fb0f06f406c01a1"
          }}
          style={styles.ImageBackground_228_1769}
        />
      </View>
      <View style={styles.View_228_1735}>
        <View style={styles.View_228_1736} />
        <View style={styles.View_228_1737}>
          <Text style={styles.Text_228_1737}>Profile </Text>
        </View>
        <View style={styles.View_228_1738}>
          <Text style={styles.Text_228_1738}>chevron-right</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3565/7b3f/d35bffd2371d3576914fa60f21063642"
          }}
          style={styles.ImageBackground_228_1768}
        />
      </View>
      <View style={styles.View_228_1740}>
        <View style={styles.View_228_1741} />
        <View style={styles.View_228_1742}>
          <Text style={styles.Text_228_1742}>Device Management</Text>
        </View>
        <View style={styles.View_228_1743}>
          <Text style={styles.Text_228_1743}>chevron-right</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9a9/3155/514dccd3bf3c64479237f0e040dce3bf"
          }}
          style={styles.ImageBackground_228_1770}
        />
      </View>
      <View style={styles.View_228_1745}>
        <View style={styles.View_228_1746} />
        <View style={styles.View_228_1747}>
          <Text style={styles.Text_228_1747}>Language </Text>
        </View>
        <View style={styles.View_228_1748}>
          <Text style={styles.Text_228_1748}>chevron-right</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c200/b8b3/704d8e0541841ffd66e904d073c39e0e"
          }}
          style={styles.ImageBackground_228_1771}
        />
      </View>
      <View style={styles.View_228_1750}>
        <View style={styles.View_228_1751} />
        <View style={styles.View_228_1752}>
          <Text style={styles.Text_228_1752}>Autoplay Control</Text>
        </View>
        <View style={styles.View_228_1753}>
          <Text style={styles.Text_228_1753}>chevron-right</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4354/e355/af4cf7b7aff889df64aef402c128931d"
          }}
          style={styles.ImageBackground_228_1772}
        />
      </View>
      <View style={styles.View_228_1882}>
        <View style={styles.View_228_1883} />
        <View style={styles.View_228_1884}>
          <Text style={styles.Text_228_1884}>Change Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af60/d80e/68c8665142054f89db11e26f06e0dd4c"
          }}
          style={styles.ImageBackground_228_1888}
        />
        <View style={styles.View_228_1885}>
          <Text style={styles.Text_228_1885}>chevron-right</Text>
        </View>
      </View>
      <View style={styles.View_228_1755}>
        <View style={styles.View_228_1756} />
        <View style={styles.View_228_1757}>
          <Text style={styles.Text_228_1757}>Log out</Text>
        </View>
        <View style={styles.View_228_1758}>
          <Text style={styles.Text_228_1758}>chevron-right</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bda/1b55/da632e464b280876684b84f9216291f9"
          }}
          style={styles.ImageBackground_228_1773}
        />
      </View>
      <View style={styles.View_228_501}>
        <View style={styles.View_I228_501_20_234} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a6/08fa/433441267c02ab2c9066c0878c806f6a"
          }}
          style={styles.ImageBackground_I228_501_20_235}
        />
        <View style={styles.View_I228_501_20_283}>
          <View style={styles.View_I228_501_20_273}>
            <Text style={styles.Text_I228_501_20_273}>Home</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/093a/7c2a/26479a772a812953cb3102902eca0b13"
            }}
            style={styles.ImageBackground_I228_501_20_277}
          />
        </View>
        <View style={styles.View_I228_501_20_285}>
          <View style={styles.View_I228_501_20_276}>
            <Text style={styles.Text_I228_501_20_276}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd72/0c09/db2cff5479ade20bb50ff05e47bc50b9"
            }}
            style={styles.ImageBackground_I228_501_20_281}
          />
        </View>
        <View style={styles.View_I228_501_20_287}>
          <View style={styles.View_I228_501_20_274}>
            <Text style={styles.Text_I228_501_20_274}>Search</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e261/5b80/b145624699c3b6b42235deebfde45a32"
            }}
            style={styles.ImageBackground_I228_501_20_269}
          />
        </View>
      </View>
      <View style={styles.View_228_502}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e390/ec6e/f32160f0634c8539fdcf8093d4f2312d"
          }}
          style={styles.ImageBackground_I228_502_3_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
          }}
          style={styles.ImageBackground_I228_502_3_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I228_502_3_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I228_502_3_80}
        />
        <View style={styles.View_I228_502_3_85}>
          <Text style={styles.Text_I228_502_3_85}>4:21</Text>
        </View>
      </View>
      <View style={styles.View_228_1766}>
        <Text style={styles.Text_228_1766}>Akshay Syal</Text>
      </View>
      <View style={styles.View_228_1767}>
        <Text style={styles.Text_228_1767}>+91 9876543210</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_228_1760: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("10.10928961748634%")
  },
  ImageBackground_228_1761: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_228_1762: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    top: hp("3.688524590163933%")
  },
  Text_228_1762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1730: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.85792349726776%")
  },
  View_228_1731: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1732: {
    width: wp("24.317421468098956%"),
    minWidth: wp("24.317421468098956%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.7322404371584668%")
  },
  Text_228_1732: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1733: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016388%")
  },
  Text_228_1733: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1769: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.421354166666666%"),
    top: hp("2.971311475409834%")
  },
  View_228_1735: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("37.56830601092896%")
  },
  View_228_1736: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1737: {
    width: wp("12.711380004882814%"),
    minWidth: wp("12.711380004882814%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.732240437158474%")
  },
  Text_228_1737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1738: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016402%")
  },
  Text_228_1738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1768: {
    width: wp("4.666666666666667%"),
    minWidth: wp("4.666666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.250358072916668%"),
    top: hp("2.800546448087431%")
  },
  View_228_1740: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("56.14754098360656%")
  },
  View_228_1741: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1742: {
    width: wp("40.62114664713541%"),
    minWidth: wp("40.62114664713541%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.732240437158474%")
  },
  Text_228_1742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1743: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016388%")
  },
  Text_228_1743: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1770: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.145019531249999%"),
    top: hp("2.800546448087424%")
  },
  View_228_1745: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("65.43715846994536%")
  },
  View_228_1746: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1747: {
    width: wp("19.61973876953125%"),
    minWidth: wp("19.61973876953125%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.7322404371584668%")
  },
  Text_228_1747: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1748: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016381%")
  },
  Text_228_1748: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1771: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.421354166666666%"),
    top: hp("3.3128415300546408%")
  },
  View_228_1750: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("74.72677595628416%")
  },
  View_228_1751: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1752: {
    width: wp("32.607452392578125%"),
    minWidth: wp("32.607452392578125%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.7322404371584668%")
  },
  Text_228_1752: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1753: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016381%")
  },
  Text_228_1753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1772: {
    width: wp("5.166666666666667%"),
    minWidth: wp("5.166666666666667%"),
    height: hp("2.646857923497268%"),
    minHeight: hp("2.646857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.33369140625%"),
    top: hp("2.8432377049180246%")
  },
  View_228_1882: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.01639344262296%")
  },
  View_228_1883: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1884: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.7322404371584668%")
  },
  Text_228_1884: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1888: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("2.800546448087431%")
  },
  View_228_1885: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016381%")
  },
  Text_228_1885: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1755: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("93.30601092896174%")
  },
  View_228_1756: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 24, 44, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_228_1757: {
    width: wp("14.369385782877602%"),
    minWidth: wp("14.369385782877602%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.474723307291669%"),
    top: hp("2.732240437158481%")
  },
  Text_228_1757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1758: {
    width: wp("2.4870091756184896%"),
    minWidth: wp("2.4870091756184896%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45297037760417%"),
    top: hp("2.868852459016395%")
  },
  Text_228_1758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_228_1773: {
    width: wp("5.330729166666667%"),
    minWidth: wp("5.330729166666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9740234375000005%"),
    top: hp("3.1420765027322517%")
  },
  View_228_501: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.59562841530054%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I228_501_20_234: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 39, 62, 1)"
  },
  ImageBackground_I228_501_20_235: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.4207650273224175%")
  },
  View_I228_501_20_283: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.185792349726782%")
  },
  View_I228_501_20_273: {
    width: wp("16.266666666666666%"),
    top: hp("4.030054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I228_501_20_273: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I228_501_20_277: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%")
  },
  View_I228_501_20_285: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.185792349726782%")
  },
  View_I228_501_20_276: {
    width: wp("16.266666666666666%"),
    top: hp("4.030054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I228_501_20_276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I228_501_20_281: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_I228_501_20_287: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.957164660177596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%"),
    top: hp("2.185792349726782%")
  },
  View_I228_501_20_274: {
    width: wp("16.266666666666666%"),
    top: hp("4.044596354166671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I228_501_20_274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I228_501_20_269: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_228_502: {
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
  ImageBackground_I228_502_3_71: {
    flexGrow: 1,
    width: wp("99.99984537760417%"),
    height: hp("6.010914891143965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I228_502_3_72: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_I228_502_3_76: {
    flexGrow: 1,
    width: wp("4.072659301757812%"),
    height: hp("1.4980325281945732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.7181640625%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_I228_502_3_80: {
    flexGrow: 1,
    width: wp("4.533317057291667%"),
    height: hp("1.4571991123136927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.84439290364583%"),
    top: hp("2.3224043715846996%")
  },
  View_I228_502_3_85: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.5027322404371584%")
  },
  Text_I228_502_3_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1766: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("26.50273224043716%")
  },
  Text_228_1766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_228_1767: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("30.601092896174865%")
  },
  Text_228_1767: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 835 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
