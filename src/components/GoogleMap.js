import React from "react";
import GoogleMapReact from "google-map-react";

function GoogleMap(props){

    return (
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{lat: 59.95 , lng: 30.33}}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }

export default GoogleMap;