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
      <View style={styles.View_43_798}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dc2/5bf7/fc7c4347948a42dee4113365d3eefa33"
          }}
          style={styles.ImageBackground_43_799}
        />
        <View style={styles.View_43_800} />
        <View style={styles.View_43_801}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca9c/ad8c/64c023e104ef6cae60c8857e71b826fd"
            }}
            style={styles.ImageBackground_43_802}
          />
        </View>
      </View>
      <View style={styles.View_43_825}>
        <Text style={styles.Text_43_825}>
          Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is
          in ruins and must lead a group of survivors to stay alive.
        </Text>
      </View>
      <View style={styles.View_43_826}>
        <Text style={styles.Text_43_826}>
          S01 E01 • 14 November 2010 • Drama/Horror
        </Text>
      </View>
      <View style={styles.View_43_827}>
        <Text style={styles.Text_43_827}>
          Cast : Andrew Lincoln, Norman Reedus, Melissa McBride
        </Text>
      </View>
      <View style={styles.View_43_833}>
        <View style={styles.View_43_834}>
          <Text style={styles.Text_43_834}>Season 1</Text>
        </View>
        <View style={styles.View_43_835}>
          <Text style={styles.Text_43_835}>Season 2</Text>
        </View>
        <View style={styles.View_43_840}>
          <Text style={styles.Text_43_840}>Season 3</Text>
        </View>
        <View style={styles.View_43_841}>
          <Text style={styles.Text_43_841}>Season 4</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec52/779f/03b67e46d2fd69e855501b406d06312d"
          }}
          style={styles.ImageBackground_43_838}
        />
        <View style={styles.View_43_839} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/638b/bf28/9625b3bcfed3fdd548bfbf50e654959c"
        }}
        style={styles.ImageBackground_62_492}
      />
      <View style={styles.View_62_495}>
        <View style={styles.View_62_465}>
          <View style={styles.View_62_466}>
            <Text style={styles.Text_62_466}>Details</Text>
          </View>
          <View style={styles.View_62_467}>
            <Text style={styles.Text_62_467}>Cast Details</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1823/1a71/6ba216a7e690761e451a33dff24c8d26"
            }}
            style={styles.ImageBackground_62_470}
          />
          <View style={styles.View_62_471} />
        </View>
        <View style={styles.View_62_483}>
          <Text style={styles.Text_62_483}>
            The Walking Dead is an American post-apocalyptic horror television
            series based on the comic book series of the same name by Robert
            Kirkman, Tony Moore, and Charlie Adlard. The series features a large
            ensemble cast as survivors of a zombie apocalypse, trying to stay
            alive under near-constant threat of attacks from zombies,
            colloquially known as &quot;walkers&quot;. However, with the fall of
            humanity, these survivors also face conflict from other living
            survivors who have formed groups and communities with their own sets
            of laws and morals, often leading to hostile conflict between the
            human communities. Andrew Lincoln played the series&#39;s lead
            character, Rick Grimes, until his departure during the ninth season.
            Other long-standing cast members have included Norman Reedus, Steven
            Yeun, Chandler Riggs, Melissa McBride, Lauren Cohan, Danai Gurira,
            Josh McDermitt and Christian Serratos.
          </Text>
        </View>
        <View style={styles.View_62_484}>
          <Text style={styles.Text_62_484}>
            The Walking Dead by Robert Kirkman
          </Text>
        </View>
        <View style={styles.View_62_485}>
          <Text style={styles.Text_62_485}>8.2 Rating</Text>
        </View>
        <View style={styles.View_62_486}>
          <Text style={styles.Text_62_486}>
            Horror/Neo-Western/Serial drama/Zombie apocalypse
          </Text>
        </View>
        <View style={styles.View_62_487}>
          <Text style={styles.Text_62_487}>AMC</Text>
        </View>
        <View style={styles.View_62_488}>
          <Text style={styles.Text_62_488}>Based on : </Text>
        </View>
        <View style={styles.View_62_489}>
          <Text style={styles.Text_62_489}>Imbd Rating : </Text>
        </View>
        <View style={styles.View_62_490}>
          <Text style={styles.Text_62_490}>Genre : </Text>
        </View>
        <View style={styles.View_62_491}>
          <Text style={styles.Text_62_491}>Network : </Text>
        </View>
      </View>
      <View style={styles.View_110_1080}>
        <View style={styles.View_I110_1080_20_234} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a6/08fa/433441267c02ab2c9066c0878c806f6a"
          }}
          style={styles.ImageBackground_I110_1080_20_235}
        />
        <View style={styles.View_I110_1080_20_283}>
          <View style={styles.View_I110_1080_20_273}>
            <Text style={styles.Text_I110_1080_20_273}>Home</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/093a/7c2a/26479a772a812953cb3102902eca0b13"
            }}
            style={styles.ImageBackground_I110_1080_20_277}
          />
        </View>
        <View style={styles.View_I110_1080_20_285}>
          <View style={styles.View_I110_1080_20_276}>
            <Text style={styles.Text_I110_1080_20_276}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd72/0c09/db2cff5479ade20bb50ff05e47bc50b9"
            }}
            style={styles.ImageBackground_I110_1080_20_281}
          />
        </View>
        <View style={styles.View_I110_1080_20_287}>
          <View style={styles.View_I110_1080_20_274}>
            <Text style={styles.Text_I110_1080_20_274}>Search</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e261/5b80/b145624699c3b6b42235deebfde45a32"
            }}
            style={styles.ImageBackground_I110_1080_20_269}
          />
        </View>
      </View>
      <View style={styles.View_62_329}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a512/6adb/1f215a051bcdfcc52fc7223ad8b85753"
          }}
          style={styles.ImageBackground_46_557}
        />
        <View style={styles.View_46_564} />
        <View style={styles.View_46_561}>
          <Text style={styles.Text_46_561}>
            A highly dysfunctional blended family is forced together when th...
          </Text>
        </View>
        <View style={styles.View_62_328}>
          <Text style={styles.Text_62_328}>Episode 1</Text>
        </View>
        <View style={styles.View_46_559}>
          <Text style={styles.Text_46_559}>Pilot</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d743/bd7c/f040ca52843a52e5d24108288dc9d34d"
          }}
          style={styles.ImageBackground_46_560}
        />
      </View>
      <View style={styles.View_62_496}>
        <View style={styles.View_62_497}>
          <Text style={styles.Text_62_497}>Customer also watched</Text>
        </View>
        <View style={styles.View_62_499}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ba6/5bf4/d08fe1186cabdcb72ac2a5e9c1510fea"
            }}
            style={styles.ImageBackground_62_500}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1542/50b5/ff1692ee3b7dc9f21a63a21f1827e515"
            }}
            style={styles.ImageBackground_62_501}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6855/95a7/7aa1dd1861d4ebe74746ad30f0290471"
            }}
            style={styles.ImageBackground_62_502}
          />
        </View>
      </View>
      <View style={styles.View_62_330}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddbc/3bc9/2b3852e8c43938b6f90756457c776380"
          }}
          style={styles.ImageBackground_62_337}
        />
        <View style={styles.View_62_332} />
        <View style={styles.View_62_333}>
          <Text style={styles.Text_62_333}>
            While Madison struggles to keep Nick from crippling withdrawal,
            Trav...
          </Text>
        </View>
        <View style={styles.View_62_334}>
          <Text style={styles.Text_62_334}>Episode 2</Text>
        </View>
        <View style={styles.View_62_335}>
          <Text style={styles.Text_62_335}>So Close, Yet So Far</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d743/bd7c/f040ca52843a52e5d24108288dc9d34d"
          }}
          style={styles.ImageBackground_62_336}
        />
      </View>
      <View style={styles.View_43_828}>
        <View style={styles.View_43_829} />
        <View style={styles.View_43_830}>
          <Text style={styles.Text_43_830}>18+</Text>
        </View>
      </View>
      <View style={styles.View_43_831}>
        <Text style={styles.Text_43_831}>Tell It to the Frogs</Text>
      </View>
      <View style={styles.View_43_832}>
        <Text style={styles.Text_43_832}>The Walking Dead</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf9c/d6d9/5fe3e4d996403554edb7b28ae3dde9ba"
        }}
        style={styles.ImageBackground_43_771}
      />
      <View style={styles.View_43_772}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e390/ec6e/f32160f0634c8539fdcf8093d4f2312d"
          }}
          style={styles.ImageBackground_I43_772_3_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
          }}
          style={styles.ImageBackground_I43_772_3_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I43_772_3_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I43_772_3_80}
        />
        <View style={styles.View_I43_772_3_85}>
          <Text style={styles.Text_I43_772_3_85}>4:21</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_43_798: {
    width: wp("100.00001627604166%"),
    minWidth: wp("100.00001627604166%"),
    height: hp("36.33882282861595%"),
    minHeight: hp("36.33882282861595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_43_799: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00002501440829918033%"),
    resizeMode: "cover"
  },
  View_43_800: {
    width: wp("100.00001627604166%"),
    minWidth: wp("100.00001627604166%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_43_801: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("16.80327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_43_802: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_43_825: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.27322404371585%")
  },
  Text_43_825: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_826: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("2.8413553706935195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.03825136612022%")
  },
  Text_43_826: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_827: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("59.01639344262295%")
  },
  Text_43_827: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_833: {
    width: wp("91.46666666666667%"),
    height: hp("4.2349726775956285%"),
    top: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_43_834: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%")
  },
  Text_43_834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_835: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("0%")
  },
  Text_43_835: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_840: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("0%")
  },
  Text_43_840: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_841: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("0%")
  },
  Text_43_841: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_43_838: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879793%")
  },
  View_43_839: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_62_492: {
    width: wp("100%"),
    height: hp("5.577796143912226%"),
    top: hp("185.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_495: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("65.98360655737704%"),
    minHeight: hp("65.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("119.26229508196722%")
  },
  View_62_465: {
    width: wp("91.46666666666667%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_466: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("0%")
  },
  Text_62_466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_467: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666666%"),
    top: hp("0%")
  },
  Text_62_467: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_62_470: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.9617486338797647%")
  },
  View_62_471: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_62_483: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("41.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.180327868852444%")
  },
  Text_62_483: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_484: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("10.245901639344268%")
  },
  Text_62_484: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_485: {
    width: wp("18.370794677734377%"),
    minWidth: wp("18.370794677734377%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("6.420765027322403%")
  },
  Text_62_485: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_486: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("14.07103825136609%")
  },
  Text_62_486: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_487: {
    width: wp("8.786032104492188%"),
    minWidth: wp("8.786032104492188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("20.355191256830594%")
  },
  Text_62_487: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_488: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%")
  },
  Text_62_488: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_489: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%")
  },
  Text_62_489: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_490: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.07103825136609%")
  },
  Text_62_490: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_491: {
    width: wp("17.03957722981771%"),
    minWidth: wp("17.03957722981771%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.355191256830594%")
  },
  Text_62_491: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_1080: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("180.05464480874315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I110_1080_20_234: {
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
  ImageBackground_I110_1080_20_235: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%")
  },
  View_I110_1080_20_283: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.185792349726796%")
  },
  View_I110_1080_20_273: {
    width: wp("16.266666666666666%"),
    top: hp("4.030054644808729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I110_1080_20_273: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I110_1080_20_277: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%")
  },
  View_I110_1080_20_285: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.185792349726796%")
  },
  View_I110_1080_20_276: {
    width: wp("16.266666666666666%"),
    top: hp("4.030054644808729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I110_1080_20_276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I110_1080_20_281: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_I110_1080_20_287: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.957164660177596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%"),
    top: hp("2.185792349726796%")
  },
  View_I110_1080_20_274: {
    width: wp("16.266666666666666%"),
    top: hp("4.044596354166657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I110_1080_20_274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I110_1080_20_269: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_62_329: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("71.99453551912568%")
  },
  ImageBackground_46_557: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_46_564: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("9.699457720980618%"),
    minHeight: hp("9.699457720980618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%")
  },
  View_46_561: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%")
  },
  Text_46_561: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_328: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999999%"),
    top: hp("12.43169398907105%")
  },
  Text_62_328: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_559: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999999%"),
    top: hp("10.382513661202196%")
  },
  Text_46_559: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_46_560: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("11.612021857923509%")
  },
  View_62_496: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("96.58469945355192%")
  },
  View_62_497: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_62_497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_499: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169392%")
  },
  ImageBackground_62_500: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_62_501: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_62_502: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_62_330: {
    width: wp("49.33334554036458%"),
    minWidth: wp("49.33334554036458%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("71.99453551912568%")
  },
  ImageBackground_62_337: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_62_332: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("9.699457720980618%"),
    minHeight: hp("9.699457720980618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%")
  },
  View_62_333: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295083%")
  },
  Text_62_333: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_334: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12.43169398907105%")
  },
  Text_62_334: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_335: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("10.382513661202196%")
  },
  Text_62_335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_62_336: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("11.612021857923509%")
  },
  View_43_828: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.111960718540546%"),
    minHeight: hp("3.111960718540546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("40.30054644808743%")
  },
  View_43_829: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.111960718540546%"),
    minHeight: hp("3.111960718540546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_43_830: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("2.435448130623239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.40590880347080116%")
  },
  Text_43_830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_831: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("41.80327868852459%")
  },
  Text_43_831: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_832: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.07103825136612%")
  },
  Text_43_832: {
    color: "rgba(42, 173, 227, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_43_771: {
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
  View_43_772: {
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
  ImageBackground_I43_772_3_71: {
    flexGrow: 1,
    width: wp("99.99984537760417%"),
    height: hp("6.010914891143965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_772_3_72: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_I43_772_3_76: {
    flexGrow: 1,
    width: wp("4.072659301757812%"),
    height: hp("1.4980325281945732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.71822916666667%"),
    top: hp("2.3223960334486%")
  },
  ImageBackground_I43_772_3_80: {
    flexGrow: 1,
    width: wp("4.533317057291667%"),
    height: hp("1.4571991123136927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.84440104166667%"),
    top: hp("2.3224127097207994%")
  },
  View_I43_772_3_85: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.5027322404371584%")
  },
  Text_I43_772_3_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1402 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
