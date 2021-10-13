import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import {
  Button,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import {
  Colors,
  Header,
  LearnMoreLinks,
} from "react-native/Libraries/NewAppScreen"
import { RootStackParamsList } from "../navigation/Navigator"

declare let global: { HermesInternal: null | {} }

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, "Landing">
}

const Landing = ({ navigation }: Props) => {
  const goHome = () => navigation.navigate("Home")

  return (
    <View style={styles.body}>
      <Text style={styles.textLine}>Take your picture</Text>
      <View style={styles.signinBtn}>
        <Button
          title="Open Camera"
          onPress={goHome}
          testID="goHomeBtn"
          color="blue"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signinBtn: {
    minWidth: 100,
    right: 10,
    top: 10,
  },
  textLine: {
    fontSize: 24,
    padding: 15,
    fontWeight: 'bold'

  }
})

export default Landing
