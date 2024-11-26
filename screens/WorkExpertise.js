import { StyleSheet, Text, View } from "react-native";

function WorkExpertise() {
  return (
    <View style={styles.container}>
      <Text>Separate component WorkExpertise</Text>
    </View>
  );
}

export default WorkExpertise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
