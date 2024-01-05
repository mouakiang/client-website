import { useState } from "react";
import "./location.css";
import { Link } from "react-router-dom";
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
  const position = { lat: 38.403256, lng: -78.909981 };
  const stevenKiaLink =
    "https://www.google.com/maps/place/Steven+Kia/@38.403456,-78.909981,17z/data=!4m6!3m5!1s0x89b49394272b7d37:0x3caba5359e4e59c1!8m2!3d38.4033133!4d-78.909974!16s%2Fg%2F1tdcsdvt?hl=en-US&entry=ttu";
  const [open, setOpen] = useState(false);

  //still not able to update the map styles on the google cloud website. annoying.

  return (
    <>
      <div className="locationPage">
        <h2>Location Page</h2>
        <APIProvider apiKey={apiKey}>
          <div className="map-frame">
            <span className="map-text">
              <p className="address">
                3340 S Main St <br />
                Harrisonburg, VA 22801
              </p>

              <span className="hours">
                <h5 className="hours">Hours:</h5> <br />
                <p className="hours">Monday: 10AM-7PM</p> <br />
                <p className="hours">Tuesday: 12:30PM-7PM</p> <br />
                <p className="hours">Wednesday: 10AM-5:30PM</p> <br />
                <p className="hours">Thursday: CLOSED</p> <br />
                <p className="hours">Friday: 10AM-7PM</p> <br />
                <p className="hours">Saturday: 9AM-6PM</p> <br />
                <p className="hours">Sunday: CLOSED</p> <br />
              </span>
            </span>
            <div className="googleMaps">
              <Map zoom={17} center={position} mapId={mapId}>
                <AdvancedMarker
                  position={position}
                  onClick={() => setOpen(true)}
                >
                  <Pin
                    background={"green"}
                    glyphColor={"#0D5A27"}
                    borderColor={"#0D5A27"}
                  />
                </AdvancedMarker>
                {open ? (
                  <InfoWindow
                    position={position}
                    onCloseClick={() => setOpen(false)}
                  >
                    <Link
                      to={stevenKiaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Steven Kia
                    </Link>
                    <br />
                    3340 S Main St <br />
                    Harrisonburg, VA 22801
                  </InfoWindow>
                ) : null}
              </Map>
            </div>
          </div>
        </APIProvider>
      </div>
    </>
  );
}
