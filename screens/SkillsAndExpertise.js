import { StyleSheet, Text, View } from "react-native";

function SkillsAndExpertise() {
  return (
    <View style={styles.container}>
      <Text>Separate component SkillsAndExpertise</Text>
    </View>
  );
}

export default SkillsAndExpertise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
