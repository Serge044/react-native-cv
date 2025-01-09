// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Linking,
//   useColorScheme,
// } from "react-native";
// import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// function ContactDetails() {
//   const colorScheme = useColorScheme();

//   const openURL = (url) => {
//     Linking.openURL(url).catch((err) =>
//       console.error("Failed to open URL:", err)
//     );
//   };

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
//         CONTACT DETAILS
//       </Text>

//       <View style={styles.detailRow}>
//         <MaterialIcons name="email" size={20} style={styles.icon} />
//         <TouchableOpacity
//           onPress={() => openURL("mailto:serhiima.work@gmail.com")}
//         >
//           <Text
//             style={[
//               styles.text,
//               styles.link,
//               { color: colorScheme === "dark" ? "#bbb" : "blue" },
//             ]}
//           >
//             serhiima.work@gmail.com
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.detailRow}>
//         <MaterialCommunityIcons name="web" size={20} style={styles.icon} />
//         <TouchableOpacity
//           onPress={() => openURL("https://www.serhii-makohon.site")}
//         >
//           <Text
//             style={[
//               styles.text,
//               styles.link,
//               { color: colorScheme === "dark" ? "#bbb" : "blue" },
//             ]}
//           >
//             www.serhii-makohon.site
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.detailRow}>
//         <MaterialCommunityIcons name="linkedin" size={20} style={styles.icon} />
//         <TouchableOpacity
//           onPress={() => openURL("https://linkedin.com/in/sergemakogon")}
//         >
//           <Text
//             style={[
//               styles.text,
//               styles.link,
//               { color: colorScheme === "dark" ? "#bbb" : "blue" },
//             ]}
//           >
//             LinkedIn
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.detailRow}>
//         <MaterialIcons name="home" size={20} style={styles.icon} />
//         <TouchableOpacity onPress={() => openURL("geo:0,0?q=Kyiv,Ukraine")}>
//           <Text
//             style={[
//               styles.text,
//               styles.link,
//               { color: colorScheme === "dark" ? "#bbb" : "blue" },
//             ]}
//           >
//             Kyiv, Ukraine
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.detailRow}>
//         <MaterialCommunityIcons
//           name="file-download"
//           size={20}
//           style={styles.icon}
//         />
//         <TouchableOpacity
//           onPress={() =>
//             openURL(
//               "https://www.serhii-makohon.site/assets/SerhiiMakohonCV-DkIzDFp0.pdf"
//             )
//           }
//         >
//           <Text
//             style={[
//               styles.text,
//               styles.link,
//               { color: colorScheme === "dark" ? "#bbb" : "blue" },
//             ]}
//           >
//             Download CV
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default ContactDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   detailRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   text: {
//     fontSize: 16,
//   },
//   link: {
//     textDecorationLine: "underline",
//   },
// });

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  useColorScheme,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function ContactDetails() {
  const colorScheme = useColorScheme();

  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>CONTACT DETAILS</Text>
      </View>

      <View
        style={[
          styles.detailSection,
          { backgroundColor: colorScheme === "dark" ? "#353535" : "#f9f9f9" },
        ]}
      >
        <View style={styles.detailRow}>
          <MaterialIcons
            name="email"
            size={20}
            style={[
              styles.icon,
              { color: colorScheme === "dark" ? "#888" : "#353535" },
            ]}
          />
          <TouchableOpacity
            onPress={() => openURL("mailto:serhiima.work@gmail.com")}
          >
            <Text
              style={[
                styles.text,
                styles.link,
                { color: colorScheme === "dark" ? "#fff" : "#1e90ff" },
              ]}
            >
              serhiima.work@gmail.com
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="web"
            size={20}
            style={[
              styles.icon,
              { color: colorScheme === "dark" ? "#888" : "#353535" },
            ]}
          />
          <TouchableOpacity
            onPress={() => openURL("https://www.serhii-makohon.site")}
          >
            <Text
              style={[
                styles.text,
                styles.link,
                { color: colorScheme === "dark" ? "#fff" : "#1e90ff" },
              ]}
            >
              www.serhii-makohon.site
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="linkedin"
            size={20}
            style={[
              styles.icon,
              { color: colorScheme === "dark" ? "#888" : "#353535" },
            ]}
          />
          <TouchableOpacity
            onPress={() => openURL("https://linkedin.com/in/sergemakogon")}
          >
            <Text
              style={[
                styles.text,
                styles.link,
                { color: colorScheme === "dark" ? "#fff" : "#1e90ff" },
              ]}
            >
              LinkedIn
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons
            name="home"
            size={20}
            style={[
              styles.icon,
              { color: colorScheme === "dark" ? "#888" : "#353535" },
            ]}
          />
          <TouchableOpacity onPress={() => openURL("geo:0,0?q=Kyiv,Ukraine")}>
            <Text
              style={[
                styles.text,
                styles.link,
                { color: colorScheme === "dark" ? "#fff" : "#1e90ff" },
              ]}
            >
              Kyiv, Ukraine
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="file-download"
            size={20}
            style={[
              styles.icon,
              { color: colorScheme === "dark" ? "#888" : "#353535" },
            ]}
          />
          <TouchableOpacity
            onPress={() =>
              openURL(
                "https://www.serhii-makohon.site/assets/SerhiiMakohonCV-DkIzDFp0.pdf"
              )
            }
          >
            <Text
              style={[
                styles.text,
                styles.link,
                { color: colorScheme === "dark" ? "#fff" : "#1e90ff" },
              ]}
            >
              Download CV
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    backgroundColor: "#FFD700",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailSection: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
    color: "#888",
  },
  text: {
    fontSize: 16,
  },
  link: {
    textDecorationLine: "underline",
  },
});
