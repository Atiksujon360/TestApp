import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ImagePreview = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { imgData } = route.params;

  const handleConfirm = () => {
    setTimeout(() => {
      navigation.navigate("PreviewPage", { imgData });
    });
  };
  const handleRetake = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: "100%",
          bottom: 50,
        }}
        source={{ uri: imgData ?? "" }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={handleRetake}
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="restart" color="black" size={28} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleConfirm}
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="check" color="black" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ImagePreview;
