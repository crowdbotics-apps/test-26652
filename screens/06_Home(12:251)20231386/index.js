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
      <View style={styles.View_12_252}>
        <View style={styles.View_12_254}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69bc/f1dd/994b0e5b032afe673c55f186d000d230"
            }}
            style={styles.ImageBackground_12_255}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23e9/7bfe/186a6888addcc3db2690cd7eea34c3ed"
            }}
            style={styles.ImageBackground_12_267}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53b1/bd92/428910bd48dfbf6dcb3bfd255a99603c"
            }}
            style={styles.ImageBackground_12_270}
          />
        </View>
      </View>
      <View style={styles.View_13_238}>
        <View style={styles.View_13_237} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b58/309a/fe22c25775d2efa2c57c4cfd55fbe93a"
          }}
          style={styles.ImageBackground_13_232}
        />
        <View style={styles.View_13_236}>
          <Text style={styles.Text_13_236}>Subscribe</Text>
        </View>
      </View>
      <View style={styles.View_12_271}>
        <View style={styles.View_12_272}>
          <View source={{ uri: "null" }} style={styles.View_12_273} />
          <View style={styles.View_12_274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3523/9534/87fef6d6f418fbeaa90af9bcd11df113"
              }}
              style={styles.ImageBackground_12_275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_12_278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_12_279}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_12_280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_12_281}
          />
          <View style={styles.View_12_282}>
            <View style={styles.View_12_283}>
              <Text style={styles.Text_12_283}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_12_284}>
        <View style={styles.View_12_285}>
          <Text style={styles.Text_12_285}>HOME</Text>
        </View>
        <View style={styles.View_12_286}>
          <Text style={styles.Text_12_286}>MOVIES</Text>
        </View>
        <View style={styles.View_12_287}>
          <Text style={styles.Text_12_287}>SHOWS</Text>
        </View>
        <View style={styles.View_12_288}>
          <Text style={styles.Text_12_288}>WEB SERIES</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a87/664a/04568a54b7b1e3abd9ab65b9213438e1"
          }}
          style={styles.ImageBackground_12_289}
        />
      </View>
      <View style={styles.View_12_290}>
        <View style={styles.View_12_291}>
          <View style={styles.View_16_34}>
            <View style={styles.View_16_32} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3060/99aa/43d5216ade92e0f261239e8255692009"
              }}
              style={styles.ImageBackground_16_33}
            />
          </View>
          <View style={styles.View_16_35}>
            <View style={styles.View_16_36}>
              <Text style={styles.Text_16_36}>Kabali</Text>
            </View>
            <View style={styles.View_16_37}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be2d/b449/3be30ca2d22cb4ade987afefd694ba44"
                }}
                style={styles.ImageBackground_16_38}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ead/1b0e/876fe27f76a33a74fb4fd1380b246b6a"
                }}
                style={styles.ImageBackground_16_41}
              />
            </View>
            <View style={styles.View_16_42}>
              <Text style={styles.Text_16_42}>Exclusive</Text>
            </View>
            <View style={styles.View_16_43}>
              <Text style={styles.Text_16_43}>superstar rajinikanth</Text>
            </View>
            <View style={styles.View_16_44}>
              <View style={styles.View_16_46}>
                <Text style={styles.Text_16_46}>Watch Now</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d743/bd7c/f040ca52843a52e5d24108288dc9d34d"
                }}
                style={styles.ImageBackground_16_48}
              />
            </View>
            <View style={styles.View_16_47}>
              <Text style={styles.Text_16_47}>an</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba54/d9de/5372a4d1808b1808858ab11a69e93faa"
          }}
          style={styles.ImageBackground_12_294}
        />
      </View>
      <View style={styles.View_16_124}>
        <View style={styles.View_16_102}>
          <Text style={styles.Text_16_102}>Premium Movies</Text>
        </View>
        <View style={styles.View_16_113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a287/d296/649274a74102cb849ca07269a83d58a7"
            }}
            style={styles.ImageBackground_16_106}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c03/3314/3381ddb0edc7f156630807d59c51e609"
            }}
            style={styles.ImageBackground_16_118}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7e8/de3b/a9b55238f64ab0ad9d5b233a78c9ae4a"
            }}
            style={styles.ImageBackground_16_107}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c03/3314/3381ddb0edc7f156630807d59c51e609"
            }}
            style={styles.ImageBackground_16_115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fef/2525/4775bc147d9d3929be54cf7ada1cff0a"
            }}
            style={styles.ImageBackground_16_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f430/6cf3/0798d006114a9e09b6002a3ee35e7dcd"
            }}
            style={styles.ImageBackground_16_109}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c03/3314/3381ddb0edc7f156630807d59c51e609"
            }}
            style={styles.ImageBackground_16_121}
          />
        </View>
      </View>
      <View style={styles.View_18_68}>
        <View style={styles.View_18_69}>
          <Text style={styles.Text_18_69}>New Trending Movies</Text>
        </View>
        <View style={styles.View_18_71}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3b0/da64/82ac501c88d52066bf2e9912ff06a43c"
            }}
            style={styles.ImageBackground_18_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff36/ab0b/1dc43a48642538e760d8e5f7098fec02"
            }}
            style={styles.ImageBackground_18_90}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/599c/fc66e81bb4d99b64c389ee6f219093e0"
            }}
            style={styles.ImageBackground_18_91}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f0e/e9db/db3f78fe5a415786fcfdbc26f05e5beb"
            }}
            style={styles.ImageBackground_18_92}
          />
        </View>
      </View>
      <View style={styles.View_18_159}>
        <View style={styles.View_18_160}>
          <Text style={styles.Text_18_160}>Evergreen</Text>
        </View>
        <View style={styles.View_18_162}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc3c/99a8/614e7db24c785702cf361973310f6203"
            }}
            style={styles.ImageBackground_18_171}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5765/2669/f478d2cb91b7e837430f8b8c2ad6ed59"
            }}
            style={styles.ImageBackground_18_172}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2343/e829/c14f512fe11b6603524c28a4df071193"
            }}
            style={styles.ImageBackground_18_173}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9102/2b24/ca88b8e8d78142e464cdd61e1fbaa792"
            }}
            style={styles.ImageBackground_18_174}
          />
        </View>
      </View>
      <View style={styles.View_18_198}>
        <View style={styles.View_18_199}>
          <Text style={styles.Text_18_199}>Evergreen</Text>
        </View>
        <View style={styles.View_18_201}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed70/4b60/1d8b997c22218c1ac67e9eb5bca9ca48"
            }}
            style={styles.ImageBackground_18_210}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88ad/6256/35930f6d888639c9e16886cb57f80c34"
            }}
            style={styles.ImageBackground_18_211}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/444a/9582/65867290ee254958deeb3d7fae7b7751"
            }}
            style={styles.ImageBackground_18_212}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/647e/3c47/2c27916af95d464e0b9849457a804620"
            }}
            style={styles.ImageBackground_18_213}
          />
        </View>
      </View>
      <View style={styles.View_18_21}>
        <View style={styles.View_18_22}>
          <Text style={styles.Text_18_22}>Continue Watching</Text>
        </View>
        <View style={styles.View_18_56}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c7e/42ba/181350fa1ffb06456d0c40c56fcc90ea"
            }}
            style={styles.ImageBackground_18_57}
          />
          <View style={styles.View_18_58} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c182/43d6/fbb8ddf7de3bbbb57c310fb9bd4dfc21"
            }}
            style={styles.ImageBackground_18_59}
          />
        </View>
        <View style={styles.View_18_106}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/852c/614d/9a1df1cfe201dfb7fbc8616fb453664d"
            }}
            style={styles.ImageBackground_18_107}
          />
          <View style={styles.View_18_108} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0540/3201/e0801796662c6eb5c2e71f77981377ba"
            }}
            style={styles.ImageBackground_18_109}
          />
        </View>
        <View style={styles.View_18_62}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fef/6004/fc553c78989efda3801d2a8339c3da65"
            }}
            style={styles.ImageBackground_18_63}
          />
          <View style={styles.View_18_64} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02cb/537d/5eab19290a136538005cf28efff794ec"
            }}
            style={styles.ImageBackground_18_65}
          />
        </View>
      </View>
      <View style={styles.View_18_112}>
        <View style={styles.View_18_113}>
          <Text style={styles.Text_18_113}>Most Watch Movies</Text>
        </View>
        <View style={styles.View_18_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8050/0cc4/30d741f9102d878208a1b67d8275237b"
            }}
            style={styles.ImageBackground_18_135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d4a/55b3/a72d3eca6b83caa794dbf9c916f3668f"
            }}
            style={styles.ImageBackground_18_136}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0bf/c7e1/130ebb7a4fa7cfaf0761e9b9a3af64d3"
            }}
            style={styles.ImageBackground_18_134}
          />
        </View>
      </View>
      <View style={styles.View_18_175}>
        <View style={styles.View_18_176}>
          <Text style={styles.Text_18_176}>
            TV shows we think you&#39;ll like
          </Text>
        </View>
        <View style={styles.View_18_178}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ba6/5bf4/d08fe1186cabdcb72ac2a5e9c1510fea"
            }}
            style={styles.ImageBackground_18_188}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1542/50b5/ff1692ee3b7dc9f21a63a21f1827e515"
            }}
            style={styles.ImageBackground_18_189}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6855/95a7/7aa1dd1861d4ebe74746ad30f0290471"
            }}
            style={styles.ImageBackground_18_190}
          />
        </View>
      </View>
      <View style={styles.View_18_137}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7e2/52f0/6a6b55971808a856849c19a5f33a8d6c"
          }}
          style={styles.ImageBackground_18_138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/35e9/e2a1ba6ca8d8d91b090526515e24a394"
          }}
          style={styles.ImageBackground_18_139}
        />
        <View style={styles.View_18_158} />
        <View style={styles.View_18_146}>
          <View style={styles.View_18_152}>
            <Text style={styles.Text_18_152}>bahubali 2</Text>
          </View>
          <View style={styles.View_18_153}>
            <Text style={styles.Text_18_153}>
              the conclusion || S. S. Rajamouli
            </Text>
          </View>
          <View style={styles.View_18_154}>
            <View style={styles.View_18_155}>
              <Text style={styles.Text_18_155}>Watch Now</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d743/bd7c/f040ca52843a52e5d24108288dc9d34d"
              }}
              style={styles.ImageBackground_18_156}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_20_289}>
        <View style={styles.View_I20_289_20_234} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a6/08fa/433441267c02ab2c9066c0878c806f6a"
          }}
          style={styles.ImageBackground_I20_289_20_235}
        />
        <View style={styles.View_I20_289_20_283}>
          <View style={styles.View_I20_289_20_273}>
            <Text style={styles.Text_I20_289_20_273}>Home</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/093a/7c2a/26479a772a812953cb3102902eca0b13"
            }}
            style={styles.ImageBackground_I20_289_20_277}
          />
        </View>
        <View style={styles.View_I20_289_20_285}>
          <View style={styles.View_I20_289_20_276}>
            <Text style={styles.Text_I20_289_20_276}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd72/0c09/db2cff5479ade20bb50ff05e47bc50b9"
            }}
            style={styles.ImageBackground_I20_289_20_281}
          />
        </View>
        <View style={styles.View_I20_289_20_287}>
          <View style={styles.View_I20_289_20_274}>
            <Text style={styles.Text_I20_289_20_274}>Search</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e261/5b80/b145624699c3b6b42235deebfde45a32"
            }}
            style={styles.ImageBackground_I20_289_20_269}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_12_252: {
    width: wp("38.90995279947917%"),
    height: hp("3.142076763298993%"),
    top: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_12_254: {
    width: wp("38.90995279947917%"),
    height: hp("3.142076763298993%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_12_255: {
    width: wp("24.63630574544271%"),
    minWidth: wp("24.63630574544271%"),
    height: hp("2.9745995672674126%"),
    minHeight: hp("2.9745995672674126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.2736328125%"),
    top: hp("0%")
  },
  ImageBackground_12_267: {
    width: wp("12.185384114583334%"),
    minWidth: wp("12.185384114583334%"),
    height: hp("3.115703759949064%"),
    minHeight: hp("3.115703759949064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.026373524483435773%")
  },
  ImageBackground_12_270: {
    width: wp("1.8773169199625652%"),
    minWidth: wp("1.8773169199625652%"),
    height: hp("1.0096679619752644%"),
    minHeight: hp("1.0096679619752644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.395670572916667%"),
    top: hp("1.0636043027450484%")
  },
  View_13_238: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("7.240437158469945%")
  },
  View_13_237: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 199, 26, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  ImageBackground_13_232: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_236: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    top: hp("0.4098360655737716%")
  },
  Text_13_236: {
    color: "rgba(255, 199, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_271: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_272: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_273: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_274: {
    width: wp("6.487466430664063%"),
    height: hp("1.5482240687302553%"),
    top: hp("2.367897242144809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_12_275: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482240687302553%"),
    minHeight: hp("1.5482240687302553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_12_278: {
    width: wp("0.35413331985473634%"),
    minWidth: wp("0.35413331985473634%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.5009552168715845%")
  },
  ImageBackground_12_279: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0017759812985612%"),
    minHeight: hp("1.0017759812985612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_12_280: {
    width: wp("4.0732363382975265%"),
    minWidth: wp("4.0732363382975265%"),
    height: hp("1.4979008117008732%"),
    minHeight: hp("1.4979008117008732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18489583333333%"),
    top: hp("2.367805522647712%")
  },
  ImageBackground_12_281: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4572404121440616%"),
    minHeight: hp("1.4572404121440616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31119791666666%"),
    top: hp("2.413523522882514%")
  },
  View_12_282: {
    width: wp("7.466666666666668%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.9808743169398908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.279459635416666%")
  },
  View_12_283: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_12_283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_284: {
    width: wp("91.2%"),
    height: hp("4.2349726775956285%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_12_285: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("0%")
  },
  Text_12_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_286: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("0%")
  },
  Text_12_286: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_287: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  Text_12_287: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_288: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%")
  },
  Text_12_288: {
    color: "rgba(163, 169, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_289: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.9617486338797825%")
  },
  View_12_290: {
    width: wp("100%"),
    height: hp("31.420765027322407%"),
    top: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_291: {
    width: wp("100%"),
    height: hp("31.420765027322407%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_16_34: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_16_32: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_16_33: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_16_35: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("7.377049180327866%")
  },
  View_16_36: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442621%")
  },
  Text_16_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_37: {
    width: wp("6.067081197102865%"),
    height: hp("1.551305400869234%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%")
  },
  ImageBackground_16_38: {
    width: wp("6.067081197102865%"),
    minWidth: wp("6.067081197102865%"),
    height: hp("1.551305400869234%"),
    minHeight: hp("1.551305400869234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_16_41: {
    width: wp("0.9347126007080079%"),
    minWidth: wp("0.9347126007080079%"),
    height: hp("0.502711762496031%"),
    minHeight: hp("0.502711762496031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1928059895833325%"),
    top: hp("0.5164391356087776%")
  },
  View_16_42: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("0%")
  },
  Text_16_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_16_43: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("9.289617486338802%")
  },
  Text_16_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8099999999999999,
    textTransform: "uppercase"
  },
  View_16_44: {
    width: wp("24.8%"),
    height: hp("2.73224043715847%"),
    top: hp("12.704918032786882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%")
  },
  View_16_46: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("0%")
  },
  Text_16_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_48: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%")
  },
  View_16_47: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("0%")
  },
  Text_16_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_12_294: {
    width: wp("22.66666463216146%"),
    minWidth: wp("22.66666463216146%"),
    height: hp("1.1059067939799991%"),
    minHeight: hp("1.1059067939799991%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("28.948736972496153%")
  },
  View_16_124: {
    width: wp("115.73333333333333%"),
    minWidth: wp("115.73333333333333%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.825136612021865%")
  },
  View_16_102: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_113: {
    width: wp("115.73333333333333%"),
    minWidth: wp("115.73333333333333%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169392%")
  },
  ImageBackground_16_106: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_16_118: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.199999999999996%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_16_107: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
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
  ImageBackground_16_115: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666664%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_16_108: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_16_109: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333335%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_16_121: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("0.8196721311475414%")
  },
  View_18_68: {
    width: wp("115.99999999999999%"),
    minWidth: wp("115.99999999999999%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("105.4781387412483%")
  },
  View_18_69: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_71: {
    width: wp("115.99999999999999%"),
    minWidth: wp("115.99999999999999%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311464%")
  },
  ImageBackground_18_89: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
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
  ImageBackground_18_90: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_91: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_92: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333335%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_18_159: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("184.8360655737705%")
  },
  View_18_160: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_162: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311464%")
  },
  ImageBackground_18_171: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
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
  ImageBackground_18_172: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_173: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_174: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.2%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_18_198: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("236.47540983606555%")
  },
  View_18_199: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_199: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_201: {
    width: wp("116.26666666666668%"),
    minWidth: wp("116.26666666666668%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311464%")
  },
  ImageBackground_18_210: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
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
  ImageBackground_18_211: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_212: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.2%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_213: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_18_21: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("18.59149828634627%"),
    minHeight: hp("18.59149828634627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("82.78688524590164%")
  },
  View_18_22: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_56: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.946689543176872%"),
    minHeight: hp("13.946689543176872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("4.644808743169392%")
  },
  ImageBackground_18_57: {
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
  View_18_58: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("7.050408431089641%"),
    minHeight: hp("7.050408431089641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.896280590953722%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_59: {
    width: wp("38.875223795572914%"),
    minWidth: wp("38.875223795572914%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.12819010416667%"),
    top: hp("12.429067476199634%")
  },
  View_18_106: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.946381032141181%"),
    minHeight: hp("13.946381032141181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("4.644808743169392%")
  },
  ImageBackground_18_107: {
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
  View_18_108: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("7.050250006503746%"),
    minHeight: hp("7.050250006503746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.89613050450393%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_109: {
    width: wp("38.874348958333336%"),
    minWidth: wp("38.874348958333336%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1281250000000114%"),
    top: hp("12.428792317708343%")
  },
  View_18_62: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.946689543176872%"),
    minHeight: hp("13.946689543176872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169392%")
  },
  ImageBackground_18_63: {
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
  View_18_64: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("7.050408431089641%"),
    minHeight: hp("7.050408431089641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.896280590953722%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_18_65: {
    width: wp("38.875223795572914%"),
    minWidth: wp("38.875223795572914%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.12822265625%"),
    top: hp("12.429067476199634%")
  },
  View_18_112: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("18.565577105746243%"),
    minHeight: hp("18.565577105746243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("134.43988737512805%")
  },
  View_18_113: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_127: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.631150876238081%")
  },
  ImageBackground_18_135: {
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
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_18_136: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_18_134: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_18_175: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("213.7978142076503%")
  },
  View_18_176: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_18_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_178: {
    width: wp("132.26666666666665%"),
    minWidth: wp("132.26666666666665%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169364%")
  },
  ImageBackground_18_188: {
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
  ImageBackground_18_189: {
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
  ImageBackground_18_190: {
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
  View_18_137: {
    width: wp("100%"),
    height: hp("23.633879781420767%"),
    top: hp("157.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_138: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.1345628415300544%"),
    minHeight: hp("2.1345628415300544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_18_139: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_158: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("0%")
  },
  View_18_146: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    top: hp("5.191256830601105%")
  },
  View_18_152: {
    width: wp("48.8%"),
    minWidth: wp("48.8%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.79999999999999%"),
    top: hp("0%")
  },
  Text_18_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_153: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%")
  },
  Text_18_153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8099999999999999,
    textTransform: "uppercase"
  },
  View_18_154: {
    width: wp("24.8%"),
    height: hp("2.73224043715847%"),
    top: hp("10.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%")
  },
  View_18_155: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("0%")
  },
  Text_18_155: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_156: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%")
  },
  View_20_289: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("265.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_289_20_234: {
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
  ImageBackground_I20_289_20_235: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322375%")
  },
  View_I20_289_20_283: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.185792349726796%")
  },
  View_I20_289_20_273: {
    width: wp("16.266666666666666%"),
    top: hp("4.030054644808729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I20_289_20_273: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I20_289_20_277: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%")
  },
  View_I20_289_20_285: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("2.185792349726796%")
  },
  View_I20_289_20_276: {
    width: wp("16.266666666666666%"),
    top: hp("4.030054644808729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I20_289_20_276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I20_289_20_281: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_I20_289_20_287: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    height: hp("5.957164660177596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%"),
    top: hp("2.185792349726796%")
  },
  View_I20_289_20_274: {
    width: wp("16.266666666666666%"),
    top: hp("4.044596354166629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I20_289_20_274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I20_289_20_269: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_2: { height: 2027 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
