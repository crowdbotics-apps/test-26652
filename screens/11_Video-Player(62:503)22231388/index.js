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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45dc/b9e1/f5d18fb5d051d068a1669d088fe28f36"
        }}
        style={styles.ImageBackground_62_505}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fce/0fe7/de0da653876269239d91268f65043f32"
        }}
        style={styles.ImageBackground_62_576}
      />
      <View style={styles.View_62_523}>
        <View style={styles.View_62_524}>
          <View source={{ uri: "null" }} style={styles.View_62_525} />
        </View>
        <View source={{ uri: "null" }} style={styles.View_62_527} />
        <View style={styles.View_62_529}>
          <Text style={styles.Text_62_529}>The Walking Dead - S01 E01 </Text>
        </View>
        <View style={styles.View_62_531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a4e/287c/9adcf803ff8e8b8edd7aa6b2f73dfd02"
            }}
            style={styles.ImageBackground_62_507}
          />
          <View style={styles.View_62_532}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/523a/18cf/44c14da958663036be08dcb629359805"
              }}
              style={styles.ImageBackground_62_535}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f666/876e/552b04df4b72b59e9807d93ff8bc49e5"
            }}
            style={styles.ImageBackground_62_508}
          />
        </View>
        <View style={styles.View_62_579}>
          <Text style={styles.Text_62_579}>12:54</Text>
        </View>
        <View style={styles.View_62_581}>
          <Text style={styles.Text_62_581}>54:32</Text>
        </View>
        <View style={styles.View_62_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac2/71bd/c7c97ae469e75b139c6338ba9c8c9415"
            }}
            style={styles.ImageBackground_62_573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1608/c308/bc2f7f8ecea847b3495737986e85c3fe"
            }}
            style={styles.ImageBackground_62_574}
          />
          <View style={styles.View_62_575}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0837/9458/8c7250e6b51d4df89ea885e8fd2ff0a5"
              }}
              style={styles.ImageBackground_62_578}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d18/d28f/158266a1fc94f5c1f859c8def4ca1795"
          }}
          style={styles.ImageBackground_62_553}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf9c/d6d9/5fe3e4d996403554edb7b28ae3dde9ba"
          }}
          style={styles.ImageBackground_62_559}
        />
        <View style={styles.View_62_563}>
          <View style={styles.View_62_564}>
            <View style={styles.View_62_565}>
              <View style={styles.View_62_566} />
              <View style={styles.View_62_567} />
            </View>
            <View style={styles.View_62_568}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b542/5d7d/164b4ffd316b0646223e43637e64903f"
                }}
                style={styles.ImageBackground_62_569}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_62_505: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_576: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99.99999186197984%"),
    minHeight: hp("99.99999186197984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_62_523: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_524: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_525: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_527: {
    width: wp("100%"),
    height: hp("21.333341769747577%"),
    top: hp("78.66666026475747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_529: {
    width: wp("26.354679802955665%"),
    top: hp("8.799999283854225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5615763546798%")
  },
  Text_62_529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_531: {
    width: wp("82.75862068965517%"),
    height: hp("4.800007238768942%"),
    top: hp("89.33333420138881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.620689655172415%")
  },
  ImageBackground_62_507: {
    width: wp("82.75862068965517%"),
    height: hp("0.000007833079961626817%"),
    top: hp("2.4000079427077026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_532: {
    width: wp("2.2167487684729066%"),
    height: hp("4.799999609375032%"),
    top: hp("0.00000813802019195009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.073891625615765%")
  },
  ImageBackground_62_535: {
    width: wp("2.2167487684729066%"),
    height: hp("4.799999609375032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_508: {
    width: wp("20.073891625615765%"),
    height: hp("0%"),
    top: hp("2.399991666667347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_579: {
    width: wp("3.4482758620689653%"),
    top: hp("89.33333420138881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6945812807881775%")
  },
  Text_62_579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_581: {
    width: wp("3.6945812807881775%"),
    top: hp("89.33333420138881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.85714285714286%")
  },
  Text_62_581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_546: {
    width: wp("36.81807494515856%"),
    height: hp("17.066669346787975%"),
    top: hp("41.59999661458361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.71410772013547%")
  },
  ImageBackground_62_573: {
    width: wp("3.393587103030952%"),
    height: hp("7.34814749364034%"),
    top: hp("4.740738546489375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_574: {
    width: wp("3.393586633240648%"),
    height: hp("7.34814749364034%"),
    top: hp("4.740738546489375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.4244751577894%")
  },
  View_62_575: {
    width: wp("7.8817733990147785%"),
    minWidth: wp("7.8817733990147785%"),
    height: hp("17.06666527777789%"),
    minHeight: hp("17.06666527777789%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.46815828971675%"),
    top: hp("0%")
  },
  ImageBackground_62_578: {
    width: wp("7.8817733990147785%"),
    height: hp("17.06666527777789%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_553: {
    width: wp("2.586206896551724%"),
    height: hp("1.3333334791395282%"),
    top: hp("11.199999088541741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.64285714285714%")
  },
  ImageBackground_62_559: {
    width: wp("3.4482758620689653%"),
    minWidth: wp("3.4482758620689653%"),
    height: hp("7.466666059027826%"),
    minHeight: hp("7.466666059027826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.955665024630542%"),
    top: hp("8.266665993923667%")
  },
  View_62_563: {
    width: wp("2.3399017127276642%"),
    height: hp("40.26666338975721%"),
    top: hp("29.866664236111305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.32512315270936%")
  },
  View_62_564: {
    width: wp("2.3399017127276642%"),
    height: hp("40.26666338975721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_565: {
    width: wp("0.49261118978115137%"),
    height: hp("33.8666639105905%"),
    top: hp("6.399999479166716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8620689655172407%")
  },
  View_62_566: {
    width: wp("0.49261083743842365%"),
    height: hp("33.8666639105905%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.30000001192092896,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_62_567: {
    width: wp("0.49261083743842365%"),
    height: hp("19.199998437500128%"),
    top: hp("14.666665473090369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_62_568: {
    width: wp("2.3399014778325125%"),
    height: hp("5.066666254340311%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_62_569: {
    width: wp("1.7549261083743841%"),
    height: hp("3.799999690755233%"),
    top: hp("0.6333332817925452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29248768472906406%")
  },
  View_2: { height: 375.0000305175781 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
