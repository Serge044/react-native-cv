import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AboutMe from "./screens/AboutMe";
import ContactDetails from "./screens/ContactDetails";
import SkillsAndExpertise from "./screens/SkillsAndExpertise";
import WorkExpertise from "./screens/WorkExpertise";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "About me") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Skills And Expertise") {
                iconName = focused ? "star" : "star-outline";
              } else if (route.name === "Work Expertise") {
                iconName = focused ? "briefcase" : "briefcase-outline";
              } else if (route.name === "Contact Details") {
                iconName = focused ? "call" : "call-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="About me" component={AboutMe} />
          <Tab.Screen
            name="Skills And Expertise"
            component={SkillsAndExpertise}
          />
          <Tab.Screen name="Work Expertise" component={WorkExpertise} />
          <Tab.Screen name="Contact Details" component={ContactDetails} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
