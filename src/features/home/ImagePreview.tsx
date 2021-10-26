import React from "react";
import { TouchableOpacity, View, StatusBar, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";


const ImagePreview = ({   
  route
   
}:{
  route:any
} ) => { 
  const {imgData}=route.params
  console.log('Image data',imgData); 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: "100%",
          bottom: 50
        }}
        source={{ uri: imgData ?? "" }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0
        }}
      >
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon name="restart" color="black" size={28} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center"
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
