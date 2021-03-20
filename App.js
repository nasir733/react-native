import React, { useEffect, useState } from "react";
import Loading from "./loader";
import { Alert } from "react-native";
import * as Location from "expo-location";
import { ClippingRectangle } from "react-native";
const API_KEY = "9e2396f594cfed6086369e8fcacac57c";
export default function App() {
  const [loading, setLoading] = useState(true);
  const getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const { coords } = await Location.getCurrentPositionAsync();
      setLoading(false);
      console.log(coords.latitude);
    } catch (error) {
      console.log(error);
      Alert.alert("Cant find you so sad");
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return loading ? <Loading /> : null;
}
