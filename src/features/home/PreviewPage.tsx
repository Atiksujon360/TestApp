import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Modal } from "react-native";
import { Button, Card } from "react-native-paper";
import RNFS from "react-native-fs";
import LottieView from "lottie-react-native";
import { useNetInfo } from "@react-native-community/netinfo";

const PreviewPage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { imgData } = route.params;
  const goBack = () => {
    navigation.navigate("Landing");
  };

  interface Details {
    status: string;
    message: string;
    images: Image[];
    result: Result[];
    documentType: string;
  }

  interface Image {
    Base64ImageString: string;
    Format: string;
    LightIndex: number;
    PageIndex: number;
  }
  interface Result {
    ListVerifiedFields: ListVerified;
  }
  interface ListVerified {
    pFieldMaps: PFieldMap[];
  }
  interface PFieldMap {
    wLCID: number;
    FieldType: number;
    wFieldType: number;
    Field_MRZ: string;
    Field_Visual: string;
  }

  const [details, setDetails] = useState<Details>();
  const [isLoading, setIsLoading] = useState(false);
  const netInfo = useNetInfo();

  //COnversion of japg to base64

  useEffect(() => {
    RNFS.readFile(imgData, "base64").then((response) => {
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
      setIsLoading(true);
      fetch("https://okayiddemo.innov8tif.com/okayid/api/v3/ocr", requestPost)
        .then((res) => res.json())
        .then((res) => {
          console.log(
            "POST Response",
            "Response Body -> " + JSON.stringify(res)
          );
          setDetails(res);
          setIsLoading(false);
        })
        .catch((error) => {
          console.warn(error);
        });
    });
  }, [imgData, setDetails]);

  const First_name =
    details?.result[0].ListVerifiedFields.pFieldMaps[9].Field_Visual;
  const nationality =
    details?.result[0].ListVerifiedFields.pFieldMaps[11].Field_Visual;
  const documentType = details?.documentType;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            opacity: 2,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        >
          <LottieView
            style={{ height: "100%", width: "100%" }}
            source={require("../../../assets/animations/scanner.json")}
            autoPlay
            speed={2}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              fontSize: 15,
              fontWeight: "bold",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Loading Info...
          </Text>
        </View>
      ) : (
        <>
          <View>
            {Alert.alert("Internet connection:", netInfo.type)}
            <Card>
              <Card.Cover
                source={{
                  uri: imgData,
                }}
              />
              <Card.Content style={styles.content}>
                <Text style={styles.fonstyle}>Name: </Text>
                <Text>{First_name}</Text>
              </Card.Content>
              <Card.Content style={styles.content}>
                <Text style={styles.fonstyle}>Nationality: </Text>
                <Text>{nationality}</Text>
              </Card.Content>
              <Card.Content style={styles.content}>
                <Text style={styles.fonstyle}>Document Type: </Text>
                <Text> {documentType}</Text>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Button onPress={goBack}> Go Back Landing Page</Button>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flexDirection: "row",
    marginTop: 5,
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
