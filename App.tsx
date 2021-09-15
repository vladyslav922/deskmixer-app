import React, {useEffect} from "react";
import { Dimensions, StyleSheet, SafeAreaView, View, ActivityIndicator } from "react-native";
import { Slider } from "./src/components/Slider";
import { DragSortableView } from "react-native-drag-sort";
import { SliderType } from "./src/types/types";
import { sliderData } from "./src/types/data";
import { colors } from "./src/styles/colors";
// import {
//   useFonts,
//   Karla_400Regular,
//   Karla_600SemiBold,
// } from "@expo-google-fonts/karla";

import Zeroconf from "react-native-zeroconf";

const zeroconf = new Zeroconf();

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const childrenWidth = deviceWidth / 12;

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Karla_400Regular,
  //   Karla_600SemiBold,
  // });

  // if (!fontsLoaded) {
  //   return <ActivityIndicator />;
  // }

  useEffect(() => {
    zeroconf.scan('http', 'tcp', 'local.')
    setTimeout(() => {
      zeroconf.stop()
    }, 50000)
    
    addListeners();
  }, []);

  const addListeners = () => {
    zeroconf.on('start', () => {
      console.log('Zero Conf Scan [Start]')
    })

    zeroconf.on('stop', () => {
      console.log('Zero Conf Scan [Stop]')
    })

    zeroconf.on('resolved', service => {
      console.log('[Resolve]', JSON.stringify(service, null, 2))
    })

    zeroconf.on('error', err => {
      console.log('[Error]', err)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <DragSortableView
        dataSource={sliderData}
        parentWidth={deviceWidth - 50}
        childrenWidth={childrenWidth}
        childrenHeight={deviceHeight - 20}
        // fixedItems={fixedItems}
        marginChildrenBottom={10}
        marginChildrenRight={10}
        marginChildrenLeft={10}
        marginChildrenTop={10}
        onDataChange={(data) => {
          console.log("change ", data);
        }}
        keyExtractor={(item: SliderType, index) => item.appName}
        renderItem={(item: SliderType, index) => {
          return renderItem(item, index);
        }}
      />
    </SafeAreaView>
  );
}

const renderItem = (item: SliderType, index: any) => {
  return (
    <View
      style={{
        height: deviceHeight - 20,
        justifyContent: "center",
      }}
    >
      <Slider
        appName={item.appName}
        appVolume={item.appVolume}
        appIcon={item.appIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 50,
    // flexDirection: "row",
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
