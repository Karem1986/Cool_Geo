import React from 'react';
// Styles
import { Wrapper } from './App.styles';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const App: React.FC = () => {
const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
});

//useRef to access the map:
// const mapRef = React.useRef<google.maps.Map<Element> | null>(null);
const mapRef = React.useRef<google.maps.Map>();


  return (
    <Wrapper>
      <p>Start here!</p>
    </Wrapper>
  );
};

export default App;
