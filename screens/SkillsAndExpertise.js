// import React from "react";
// import { StyleSheet, Text, View, useColorScheme } from "react-native";

// function SkillsAndExpertise() {
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
//           styles.header,
//           { color: colorScheme === "dark" ? "#fff" : "#000" },
//         ]}
//       >
//         SKILLS AND EXPERTISE
//       </Text>

//       <View style={styles.section}>
//         <Text
//           style={[
//             styles.subheader,
//             { color: colorScheme === "dark" ? "#fff" : "#000" },
//           ]}
//         >
//           Main stack
//         </Text>
//         <Text
//           style={[
//             styles.text,
//             { color: colorScheme === "dark" ? "#ccc" : "#000" },
//           ]}
//         >
//           HTML, CSS, JS, React, TypeScript
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text
//           style={[
//             styles.subheader,
//             { color: colorScheme === "dark" ? "#fff" : "#000" },
//           ]}
//         >
//           FE related technologies I worked with
//         </Text>
//         <Text
//           style={[
//             styles.text,
//             { color: colorScheme === "dark" ? "#ccc" : "#000" },
//           ]}
//         >
//           NodeJS, Redux, RTK, Zustand, SASS, Bootstrap, Tailwind, React Native
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text
//           style={[
//             styles.subheader,
//             { color: colorScheme === "dark" ? "#fff" : "#000" },
//           ]}
//         >
//           Tools
//         </Text>
//         <Text
//           style={[
//             styles.text,
//             { color: colorScheme === "dark" ? "#ccc" : "#000" },
//           ]}
//         >
//           Git, GitHub, NPM, Jest, Postman, Docker, Terminal
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text
//           style={[
//             styles.subheader,
//             { color: colorScheme === "dark" ? "#fff" : "#000" },
//           ]}
//         >
//           Other
//         </Text>
//         <Text
//           style={[
//             styles.text,
//             { color: colorScheme === "dark" ? "#ccc" : "#000" },
//           ]}
//         >
//           Figma, Photoshop, Jira, Prompt Engineering, Fine-tuning
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   section: {
//     marginBottom: 15,
//   },
//   subheader: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// export default SkillsAndExpertise;

import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

function SkillsAndExpertise() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>SKILLS AND EXPERTISE</Text>
      </View>

      <View
        style={[
          styles.section,
          { backgroundColor: colorScheme === "dark" ? "#353535" : "#f9f9f9" },
        ]}
      >
        <Text
          style={[
            styles.subheader,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Main stack
        </Text>
        <Text
          style={[
            styles.text,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          HTML, CSS, JS, React, TypeScript
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
            styles.subheader,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          FE related technologies I worked with
        </Text>
        <Text
          style={[
            styles.text,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          NodeJS, Redux, RTK, Zustand, SASS, Bootstrap, Tailwind, React Native
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
            styles.subheader,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Tools
        </Text>
        <Text
          style={[
            styles.text,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          Git, GitHub, NPM, Jest, Postman, Docker, Terminal
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
            styles.subheader,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          Other
        </Text>
        <Text
          style={[
            styles.text,
            { color: colorScheme === "dark" ? "#ccc" : "#000" },
          ]}
        >
          Figma, Photoshop, Jira, Prompt Engineering, Fine-tuning
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
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default SkillsAndExpertise;
