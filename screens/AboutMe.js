import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

function AboutMe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image source={require("../images/Serge.jpg")} style={styles.image} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.name}>SERHII MAKOHON</Text>
          <Text style={styles.role}>FRONT END DEVELOPER</Text>
        </View>
      </View>

      <View style={styles.aboutMeSection}>
        <Text style={styles.sectionTitle}>ABOUT ME</Text>
        <Text style={styles.paragraph}>
          I have over 6 years of experience in IT. I am a team player who values
          collaboration, but also works effectively independently. In my free
          time, I volunteer, ride a bike and a motorcycle.
        </Text>
        <Text style={styles.paragraph}>
          I am looking for a Front-End developer position to apply my knowledge
          and experience in creating quality interfaces.
        </Text>
        <Text style={styles.paragraph}>
          My main stack: HTML, CSS, JavaScript, React and TypeScript. I am ready
          for new challenges and strive to achieve high results together with
          your team, so let's collaborate together ;)
        </Text>
      </View>
    </ScrollView>
  );
}

export default AboutMe;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  imageWrapper: {
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textWrapper: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  role: {
    fontSize: 18,
    color: "#333",
  },
  aboutMeSection: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
});
