"use client";
import { useEffect, useRef } from "react";
import { Map, Marker } from "@nurmdrafi/bkoi-gl";
import "@nurmdrafi/bkoi-gl/dist/style/bkoi-gl.css";

const MainMap = () => {
  // Refs
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Ensures map initializes only once
    map.current = new Map({
      container: mapContainer.current,
      center: [90.39017821904588, 23.719800220780733], // Dhaka coordinates
      zoom: 10,
      doubleClickZoom: false,
      accessToken: "NDE2NzpVNzkyTE5UMUoy", // Replace with your Barikoi API key
    });
    const marker = new Marker()
      .setLngLat([90.39017821904588, 23.719800220780733]) // Set marker coordinates (Dhaka)
      .addTo(map.current); // Add marker to the map
  }, []);

  return <div ref={mapContainer} style={containerStyles} />;
};

// JSX Styles
const containerStyles = {
  width: "100%",
  height: "100vh",
  minHeight: "400px",
  overflow: "hidden",
};

export default MainMap;
