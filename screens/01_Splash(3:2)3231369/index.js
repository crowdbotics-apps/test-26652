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
      <View style={styles.View_3_50}>
        <View style={styles.View_3_9}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cc8/e5c1/895899d343ae922daa26297590524bd7"
            }}
            style={styles.ImageBackground_3_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf06/45bd/090642ef74ddc94fccbdb49fcdfd37fb"
            }}
            style={styles.ImageBackground_3_25}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f252/6023/16159c8f6627e6c349dfb7340f6c430a"
          }}
          style={styles.ImageBackground_3_38}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_50: {
    width: wp("51.576542154947916%"),
    minWidth: wp("51.576542154947916%"),
    height: hp("15.325166879455901%"),
    minHeight: hp("15.325166879455901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("47.81420765027322%")
  },
  View_3_9: {
    width: wp("25.510316975911458%"),
    minWidth: wp("25.510316975911458%"),
    height: hp("6.52277951683503%"),
    minHeight: hp("6.52277951683503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666663%"),
    top: hp("0%")
  },
  ImageBackground_3_22: {
    width: wp("25.510316975911458%"),
    height: hp("6.52277951683503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_25: {
    width: wp("3.930196126302083%"),
    height: hp("2.1137576285607174%"),
    top: hp("2.171467431907452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.015364583333337%")
  },
  ImageBackground_3_38: {
    width: wp("51.576542154947916%"),
    height: hp("6.227376552227416%"),
    top: hp("9.097790327228488%"),
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
