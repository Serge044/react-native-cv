// import React from "react";
// import { StyleSheet, Text, View, useColorScheme } from "react-native";

// function WorkExperience() {
//   const colorScheme = useColorScheme();

//   return (
//     <View
//       style={[
//         styles.container,
//         { backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff" },
//       ]}
//     >
//       <Text
//         style={[
//           styles.heading,
//           { color: colorScheme === "dark" ? "#fff" : "#000" },
//         ]}
//       >
//         WORK EXPERIENCE
//       </Text>

//       <Text
//         style={[
//           styles.company,
//           { color: colorScheme === "dark" ? "#fff" : "#000" },
//         ]}
//       >
//         Wix
//       </Text>
//       <Text
//         style={[
//           styles.role,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         AI QA | June 2020 - Present
//       </Text>
//       <Text
//         style={[
//           styles.text,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         AI QA | April 2021 - Present
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Data analytics & curation
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Prompt engineering
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Generative AI
//       </Text>

//       <Text
//         style={[
//           styles.text,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         Data Labeler | June 2020 - April 2021
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Large scale data labeling, categorization
//       </Text>

//       <Text
//         style={[
//           styles.company,
//           { color: colorScheme === "dark" ? "#fff" : "#000" },
//         ]}
//       >
//         Ring
//       </Text>
//       <Text
//         style={[
//           styles.role,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         Data Specialist | October 2017 - September 2019
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Large scale data labeling
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Testing new labeling tools
//       </Text>
//       <Text
//         style={[
//           styles.bullet,
//           { color: colorScheme === "dark" ? "#ccc" : "#000" },
//         ]}
//       >
//         • Mentoring of new employees
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   company: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 15,
//   },
//   role: {
//     fontSize: 17,
//     fontStyle: "italic",
//     marginBottom: 5,
//   },
//   text: {
//     fontSize: 16,
//   },
//   bullet: {
//     fontSize: 16,
//     marginLeft: 10,
//     marginBottom: 5,
//   },
// });

// export default WorkExperience;

import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

function WorkExperience() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>WORK EXPERIENCE</Text>
      </View>

      <View
        style={[
          styles.section,
          { backgroundColor: colorScheme === "dark" ? "#353535" : "#f9f9f9" },
        ]}
      >
        <Text
          style={[
            styles.company,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Wix
        </Text>
        <Text
          style={[
            styles.role,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          AI QA | June 2020 - Present
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Data analytics & curation
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Prompt engineering
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Generative AI
        </Text>
        <Text
          style={[
            styles.role,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          Data Labeler | June 2020 - April 2021
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Large scale data labeling, categorization
        </Text>
      </View>

      <View
        style={[
          styles.section,
          { backgroundColor: colorScheme === "dark" ? "#353535" : "#f9f9f9" },
        ]}
      >
        <Text
          style={[
            styles.company,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Ring
        </Text>
        <Text
          style={[
            styles.role,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          Data Specialist | October 2017 - September 2019
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Large scale data labeling
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Testing new labeling tools
        </Text>
        <Text
          style={[
            styles.bullet,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          • Mentoring of new employees
        </Text>
      </View>
    </View>
  );
}

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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  company: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default WorkExperience;
