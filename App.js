import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { View, useColorScheme } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AboutMe from "./screens/AboutMe";
import ContactDetails from "./screens/ContactDetails";
import SkillsAndExpertise from "./screens/SkillsAndExpertise";
import WorkExperience from "./screens/WorkExperience";

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log("Current theme:", colorScheme);
  }, [colorScheme]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff",
      }}
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "About me") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Skills And Expertise") {
                iconName = focused ? "star" : "star-outline";
              } else if (route.name === "Work Experience") {
                iconName = focused ? "briefcase" : "briefcase-outline";
              } else if (route.name === "Contact Details") {
                iconName = focused ? "call" : "call-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colorScheme === "dark" ? "tomato" : "tomato",
            tabBarInactiveTintColor:
              colorScheme === "dark" ? "lightgray" : "gray",
            tabBarStyle: {
              backgroundColor: colorScheme === "dark" ? "#1e1e1e" : "#fff",
            },
          })}
        >
          <Tab.Screen name="About me" component={AboutMe} />
          <Tab.Screen
            name="Skills And Expertise"
            component={SkillsAndExpertise}
          />
          <Tab.Screen name="Work Experience" component={WorkExperience} />
          <Tab.Screen name="Contact Details" component={ContactDetails} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
