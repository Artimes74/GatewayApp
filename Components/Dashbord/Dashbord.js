import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import temp from "../../assets/img/temp.png";
import shock from "../../assets/img/shock.png";
import voltage from "../../assets/img/voltage.png";
import battery from "../../assets/img/battery.png";
import plug from "../../assets/img/plug.png";

const Screen = Dimensions.get("screen");
const Window = Dimensions.get("window");
const colorViewHeghit = Screen.height * 0.0685;

export default function SplashScreen() {
  const [currentTab, setCurrentTab] = useState("Temperature");
  const Navigation = useNavigation();

  useEffect(() => {}, []);

  const tabButtons = (currentTab, setCurrentTab, title, image) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentTab(title);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            // paddingLeft: 13,
            // paddingRight: 35,
            // borderRadius: 8,
            // marginTop: 15,
          }}
        >
          <View
            style={{
              width: Screen.width / 2,
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 30,
            }}
          >
            <View
              style={{
                width: Screen.width / 4.5,
                height: Screen.width / 4.5,
                backgroundColor: currentTab == title ? "#493D8A" : "#9B9B9B",
                borderRadius: Screen.width / 9,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={image}
                style={{
                  width: "50%",
                  height: "50%",
                  tintColor: currentTab == title ? "#ffffff" : "#D2D2D2",
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: Screen.width / 2,
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 30,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
                color: currentTab == title ? "#493D8A" : "#D2D2D2",
              }}
            >
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Fragment = (Tab) => {
    if (currentTab == "Temperature") {
      return (
        <View
          style={{
            width: "98%",
            height: "95%",
            borderRadius: 12,
            borderColor: "black",
            borderWidth: 3,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "45%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "45%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Average
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 56,
                  marginVertical: 8,
                }}
              >
                35°C
              </Text>
            </View>
            <View
              style={{
                width: "27.5%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                max
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  marginVertical: 8,
                  alignItems: "flex-start",
                }}
              >
                49°C
              </Text>
            </View>
            <View
              style={{
                width: "27.5%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                min
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  marginVertical: 8,
                }}
              >
                21°C
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", height: "55%" }}>
            <View
              style={{
                width: "100%",
                height: "35%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 20,
              }}
            >
              <Text
                style={{ color: "#000000", fontSize: 28, fontWeight: "bold" }}
              >
                Current
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "65%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: 60,
              }}
            >
              <Text
                style={{ color: "#EF476F", fontSize: 72, fontWeight: "bold" }}
              >
                28°C
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (currentTab == "Shock") {
      return (
        <View
          style={{
            width: "98%",
            height: "95%",
            borderRadius: 12,
            borderColor: "black",
            borderWidth: 3,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "45%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "45%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Day
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 56,
                  marginVertical: 8,
                }}
              >
                2
              </Text>
            </View>
            <View
              style={{
                width: "27.5%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                1 hours
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  marginVertical: 8,
                  alignItems: "flex-start",
                }}
              >
                2
              </Text>
            </View>
            <View
              style={{
                width: "27.5%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                10 min
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  marginVertical: 8,
                }}
              >
                1
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", height: "55%" }}>
            <View
              style={{
                width: "100%",
                height: "35%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 20,
              }}
            >
              <Text
                style={{ color: "#000000", fontSize: 28, fontWeight: "bold" }}
              >
                Current
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "65%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: 60,
              }}
            >
              <Text
                style={{ color: "#EF476F", fontSize: 72, fontWeight: "bold" }}
              >
                off
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (currentTab == "Voltage") {
      return (
        <View
          style={{
            width: "98%",
            height: "95%",
            borderRadius: 12,
            borderColor: "black",
            borderWidth: 3,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "45%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "45%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                V1
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 56,
                  marginVertical: 8,
                }}
              >
                on
              </Text>
            </View>
            <View
              style={{
                width: "27.5%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                V2
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  marginVertical: 8,
                  alignItems: "flex-start",
                }}
              >
                on
              </Text>
            </View>
            <View
              style={{
                width: "27.5%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                V3
              </Text>

              <Text
                style={{
                  color: "#6C63FF",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  marginVertical: 8,
                }}
              >
                off
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", height: "55%" }}>
            <View
              style={{
                width: "100%",
                height: "35%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 20,
              }}
            >
              <Text
                style={{ color: "#000000", fontSize: 28, fontWeight: "bold" }}
              >
                Current
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "65%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: 60,
              }}
            >
              <Text
                style={{ color: "#EF476F", fontSize: 72, fontWeight: "bold" }}
              >
                on
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.Container}>
      <View
        style={{
          width: Screen.width,
          height: Screen.height / 2,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "95%",
            height: "90%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "25%",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image
                source={battery}
                style={{ width: 30, height: 30, marginTop: 4 }}
              />
              <Text
                style={{
                  color: "#493D8A",
                  marginHorizontal: 6,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Battery
              </Text>
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#ffffff",
                  borderRadius: 6,
                  marginTop: 4,
                }}
              />
            </View>
            <View
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image
                source={plug}
                style={{ width: 30, height: 30, marginTop: 4 }}
              />
              <Text
                style={{
                  color: "#493D8A",
                  marginHorizontal: 6,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                plug
              </Text>
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#159E59",
                  borderRadius: 6,
                  marginTop: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "75%",
              justifyContent: "flex-end",
              alignSelf: "center",
            }}
          >
            <View>{Fragment(currentTab)}</View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: Screen.width,
          height: Screen.height / 2,
        }}
      >
        <View
          style={{
            width: Screen.width,
            height: Screen.height / 6.55,
            flexDirection: "row",
          }}
        >
          {tabButtons(currentTab, setCurrentTab, "Temperature", temp)}
        </View>
        <View
          style={{
            width: Screen.width,
            height: Screen.height / 6.55,
            flexDirection: "row",
          }}
        >
          {tabButtons(currentTab, setCurrentTab, "Shock", shock)}
        </View>
        <View
          style={{
            width: Screen.width,
            height: Screen.height / 6.6,
            flexDirection: "row",
          }}
        >
          {tabButtons(currentTab, setCurrentTab, "Voltage", voltage)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
