import { StyleSheet, Text, View } from "react-native";

function ContactDetails() {
  return (
    <View style={styles.container}>
      <Text>Separate component ContactDetails</Text>
    </View>
  );
}

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
