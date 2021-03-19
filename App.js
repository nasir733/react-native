import React, { useEffect, useState } from "react";
import Loading from "./loader";
import * as Loaction from "expo-location";
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const getLoaction = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  useEffect(() => {
    getLocation();
  });
  return <Loading location={location} />;
}
