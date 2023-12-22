import { useState } from "react";
import "./location.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Location() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  const position = { lat: 37.159119, lng: -80.420555 };

  // for whatever reason the mapID is not working which is keeping me from being able
  // to style the map and make a pin

  return (
    <div className="locationPage">
      <h2>Location Page</h2>
      <APIProvider apiKey={apiKey}>
        <div className="googleMaps">
          <Map zoom={9} center={position} mapId={mapId}>
            <AdvancedMarker position={position}>
              <Pin background={"red"} borderColor={"white"} />
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
      <p>Tinkerings by Greg</p>
    </div>
  );
}
