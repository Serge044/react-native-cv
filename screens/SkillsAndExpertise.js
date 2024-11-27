import { StyleSheet, Text, View } from "react-native";

function SkillsAndExpertise() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SKILLS AND EXPERTISE</Text>

      <View style={styles.section}>
        <Text style={styles.subheader}>Main stack</Text>
        <Text style={styles.text}>HTML, CSS, JS, React, TypeScript</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>
          FE related technologies I worked with
        </Text>
        <Text style={styles.text}>
          NodeJS, Redux, RTK, Zustand, SASS, Bootstrap, Tailwind, React Native
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Tools</Text>
        <Text style={styles.text}>
          Git, GitHub, NPM, Jest, Postman, Docker, Terminal
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Other</Text>
        <Text style={styles.text}>
          Figma, Photoshop, Jira, Prompt Engineering, Fine-tuning
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default SkillsAndExpertise;
