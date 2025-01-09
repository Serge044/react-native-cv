import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  useColorScheme,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AboutMe() {
  const colorScheme = useColorScheme();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff",
      }}
    >
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image source={require("../images/Serge.jpg")} style={styles.image} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.name}>SERHII MAKOHON</Text>
          <Text style={styles.role}>FRONT END DEVELOPER</Text>
        </View>
      </View>

      <View style={styles.socialIcons}>
        <TouchableOpacity
          onPress={() => openLink("https://github.com/Serge044")}
        >
          <Icon
            name="github"
            size={30}
            color="#000"
            style={{ color: colorScheme === "dark" ? "#fff" : "#000" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink("https://linkedin.com/in/sergemakogon")}
        >
          <Icon
            name="linkedin"
            size={30}
            color="#000"
            style={[
              styles.iconMargin,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          />
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.aboutMeSection,
          { backgroundColor: colorScheme === "dark" ? "#353535" : "#f9f9f9" },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          ABOUT ME
        </Text>
        <Text
          style={[
            styles.paragraph,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          I have over 6 years of experience in IT. I am a team player who values
          collaboration, but also works effectively independently. In my free
          time, I volunteer, ride a bike and a motorcycle.
        </Text>
        <Text
          style={[
            styles.paragraph,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          I am looking for a Front-End developer position to apply my knowledge
          and experience in creating quality interfaces.
        </Text>
        <Text
          style={[
            styles.paragraph,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
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
    justifyContent: "center",
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
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconMargin: {
    marginLeft: 35,
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
