import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

const PreviewPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button title="SAVE PHOTO" color="#841584" onPress={()=>console.log('Clicked')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PreviewPage;
