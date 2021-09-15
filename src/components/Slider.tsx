import React from "react";
import VerticalSlider from "rn-vertical-slider";
import { StyleSheet, Text, View } from "react-native";
import { SliderType } from "../types/types";
import { colors } from "../styles/colors";

export const Slider = (props: SliderType) => {
  const [sliderChanging, setSliderChanging] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(props.appVolume);

  return (
    <View>
      <View style={styles.sliderName}>
        {props.appName && (
          <Text style={{ color: "#fff", fontFamily: "Karla_400Regular" }}>
            {props.appName}
          </Text>
        )}
      </View>
      <View style={styles.handle}>
        <Text style={{ color: "#fff" }}>---</Text>
      </View>
      <View style={styles.track}>
        <VerticalSlider
          value={sliderValue}
          disabled={false}
          min={0}
          max={100}
          onChange={(value: number) => {
            console.log("appName value: ", value);
            setSliderValue(value);
          }}
          onComplete={(value: number) => {}}
          width={26}
          height={190}
          step={1}
          minimumTrackTintColor={colors.vividGreen}
          maximumTrackTintColor={colors.darkGrey}
          showBallIndicator={false}
          ballIndicatorPosition={50}
          borderRadius={3}
          // ballIndicatorColor={"gray"}
          // ballIndicatorTextColor={"white"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    alignItems: "center",
  },
  sliderName: {
    // backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  handle: {
    // backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
