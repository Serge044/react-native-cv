import { StyleSheet, Text, View } from "react-native";

function WorkExperience() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WORK EXPERIENCE</Text>

      <Text style={styles.company}>Wix</Text>
      <Text style={styles.role}>AI QA | June 2020 - Present</Text>
      <Text style={styles.text}>AI QA | April 2021 - Present</Text>
      <Text style={styles.bullet}>• Data analytics & curation</Text>
      <Text style={styles.bullet}>• Prompt engineering</Text>
      <Text style={styles.bullet}>• Generative AI</Text>

      <Text style={styles.text}>Data Labeler | June 2020 - April 2021</Text>
      <Text style={styles.bullet}>
        • Large scale data labeling, categorization
      </Text>

      <Text style={styles.company}>Ring</Text>
      <Text style={styles.role}>
        Data Specialist | October 2017 - September 2019
      </Text>
      <Text style={styles.bullet}>• Large scale data labeling</Text>
      <Text style={styles.bullet}>• Testing new labeling tools</Text>
      <Text style={styles.bullet}>• Mentoring of new employees</Text>
    </View>
  );
}

export default WorkExperience;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  company: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  role: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
  bullet: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
});
