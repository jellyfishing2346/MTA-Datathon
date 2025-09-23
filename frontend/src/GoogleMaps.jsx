"use client";

import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

// Assign the env variable to a constant at the top level
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Intro() {
    const position = { lat: 40.7128, lng: -74.0060 };
    const [infoOpen, setInfoOpen] = useState(false);
    const [mapCenter, setMapCenter] = useState(position);
    return (
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "100vh", width: "50vw" }}>
                <Map zoom={11} center={mapCenter} mapId={"181496049de10d4f8807568e"}>
                    <AdvancedMarker position={position} onClick={() => setInfoOpen(true)}>
                        <Pin 
                            background={"red"} 
                            borderColor={"darkred"} 
                            glyphColor={"white"} 
                        />
                    </AdvancedMarker>

                    {infoOpen && <InfoWindow position={position} onCloseClick={() => setInfoOpen(false)}><p style={{ color: "black" }}>Theres hella rats here</p></InfoWindow>}
                </Map>
            </div>
        </APIProvider>
    );
}
