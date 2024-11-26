import { StyleSheet, Text, View } from "react-native";

function AboutMe() {
  return (
    <View style={styles.container}>
      <Text>Separate component About Me</Text>
    </View>
  );
}

export default AboutMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
