// Settings for the map goes inside this file
import mapStyles from "./mapStyles";

export const containerStyle = {
  width: "100%",
  height: "100vh",
};

// Center on Netherlands
export const center = {
  lat: 52.370216,
  lng: 4.895168,
};

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
