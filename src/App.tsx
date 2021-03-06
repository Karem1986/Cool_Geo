import React from "react";
//API calls
import { fetchNearbyPlaces } from "./Api";
// Styles
import { Wrapper, LoadingView } from "./App.styles";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useQuery } from "react-query"; //to fetch the data from the api
import { containerStyle, center, options } from "./settings";

export type MarkerType = {
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  website: string;
  phone_number: string;
};

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  const mapRef = React.useRef<google.maps.Map<Element> | null>(null);

  const onLoad = (map: google.maps.Map<Element>): void => {
    mapRef.current = map;
  };

  const onUnmount = (): void => {
    mapRef.current = null;
  };

  if (!isLoaded) return <div>Map is loading</div>;
  return (
    <Wrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options as google.maps.MapOptions}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
    </Wrapper>
  );
};

export default App;
