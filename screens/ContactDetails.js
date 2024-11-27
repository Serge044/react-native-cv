import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function ContactDetails() {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONTACT DETAILS</Text>

      <View style={styles.detailRow}>
        <MaterialIcons name="phone" size={20} style={styles.icon} />
        <TouchableOpacity onPress={() => openURL("tel:+380634328377")}>
          <Text style={[styles.text, styles.link]}>+380-77-77-77-77</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailRow}>
        <MaterialIcons name="email" size={20} style={styles.icon} />
        <TouchableOpacity onPress={() => openURL("mailto:serge@gmail.com")}>
          <Text style={[styles.text, styles.link]}>serge@gmail.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailRow}>
        <MaterialIcons name="home" size={20} style={styles.icon} />
        <TouchableOpacity onPress={() => openURL("geo:0,0?q=Kyiv,Ukraine")}>
          <Text style={[styles.text, styles.link]}>Kyiv, Ukraine</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailRow}>
        <MaterialCommunityIcons name="web" size={20} style={styles.icon} />
        <TouchableOpacity
          onPress={() => openURL("https://www.serhii-makohon.site")}
        >
          <Text style={[styles.text, styles.link]}>
            www.serhii-makohon.site
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailRow}>
        <MaterialCommunityIcons
          name="file-download"
          size={20}
          style={styles.icon}
        />
        <TouchableOpacity
          onPress={() =>
            openURL("https://www.serhii-makohon.site/SerhiiMakohonCV.pdf")
          }
        >
          <Text style={[styles.text, styles.link]}>Download CV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ContactDetails;

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
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
