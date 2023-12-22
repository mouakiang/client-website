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
  const position = { lat: 38.40345602761793, lng: -78.90998065876424 };

  //still not able to update the map styles on the google cloud website. annoying.

  return (
    <div className="locationPage">
      <h2>Location Page</h2>
      <APIProvider apiKey={apiKey}>
        <div className="googleMaps">
          <Map zoom={17} center={position} mapId={mapId}>
            <AdvancedMarker position={position}>
              <Pin
                background={"green"}
                glyphColor={"#0D5A27"}
                borderColor={"#0D5A27"}
              />
              <InfoWindow />
              {/* address in here  */}
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
      <p>Tinkerings by Greg</p>
    </div>
  );
}
