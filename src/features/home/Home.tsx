import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from "react-native"
import { RootStackParamsList } from "../navigation/Navigator"

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, "Home">
}

const Home = ({ }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Click picture</Text>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "white" },
  innerContainer: { marginHorizontal: 12 },
  scrollView: {
    flexGrow: 1,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#e9e9e9",
  },
  pingPong: {
    flexDirection: "row",
    flex: 1,
  },
  header: {
    alignSelf: "flex-start",
    fontSize: 20,
  },
})

export default Home
