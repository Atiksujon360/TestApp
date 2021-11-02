import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import RNFS from "react-native-fs";

const PreviewPage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { imgData } = route.params;
  console.log("ImgData", imgData);

  const goBack = () => {
    navigation.navigate("Landing");
  };
const [photo, setphoto] = useState('')
  RNFS.readFile(imgData, "base64").then((response) => {
    //  console.log( 'file string',response);
    const requestPost = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        base64ImageString: response,
        backImage: "",
        apiKey: "JumChNRS7yiq6JAtLLDxL31yr0kw4r0d",
        imageFormat: ".jpg",
        imageEnabled: true,
        faceImageEnabled: true,
        docTypeEnabled: true,
      }),
    };
    fetch("https://okayiddemo.innov8tif.com/okayid/api/v3/ocr", requestPost)
      .then((res) => res.json())
      .then((res) => {
        console.log("POST Response", "Response Body -> " + JSON.stringify(res));
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // useEffect(() => {
  //   const requestPost = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       base64ImageString: "",
  //       backImage: "",
  //       apiKey: "JumChNRS7yiq6JAtLLDxL31yr0kw4r0d",
  //       imageFormat: ".jpg",
  //       imageEnabled: true,
  //       faceImageEnabled: true,
  //       docTypeEnabled: true,
  //     }),
  //   };
  //   fetch("https://okayiddemo.innov8tif.com/okayid/api/v3/ocr", requestPost)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("response object:", res);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [100]);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover
          source={{
            uri: "#",
          }}
        />
        <Card.Content style={styles.content}>
          <Title style={styles.fonstyle}>Name: </Title>
          <Title>---</Title>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Title style={styles.fonstyle}>Passport Number: </Title>
          <Title>---</Title>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Title style={styles.fonstyle}>DOB: </Title>
          <Title>---</Title>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Title style={styles.fonstyle}>documentType </Title>
          <Title>---</Title>
        </Card.Content>
      </Card>
      <View>
        <Button onPress={goBack}> Go Back Landing Page</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  content: {
    flexDirection: "row",
    marginRight: 5,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  fonstyle: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "green",
  },
});

export default PreviewPage;
