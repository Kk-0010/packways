import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Tooltip, Popup, Marker } from "react-leaflet";
import Logo from "@/assets/logo/logo2.png";
import { indiaMapPoints } from "@/constants";
import { createLucideIcon, onEachFeature, styleFn } from "./mapUtils";
import { FitToGeoJSON } from "./MapComponents";

const IndiaMap = () => {
  const [india, setIndia] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/in.json");
      const raw = await res.json();
      setIndia(raw);
    })();
  }, []);

  return (
    <div className="h-[40vh] sm:h-[70vh] md:h-[55vh] lg:h-[70vh] w-full lg:w-[90vw] xl:w-[67vw] mx-auto">
      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={window.innerWidth >= 1920 ? 5 : 4}
        className="h-full w-full"
        preferCanvas
        zoomControl
      >
        {/* India polygons only (no base tiles) → shows "India only" cleanly */}
        {india && (
          <>
            <GeoJSON
              data={india}
              style={styleFn}
              onEachFeature={onEachFeature}
            />
            <FitToGeoJSON data={india} />
          </>
        )}

        {/* Office/partner points */}
        {indiaMapPoints.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={createLucideIcon()}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1}>
              {point.name}
            </Tooltip>
            <Popup>
              <div className="px-1">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-full min-w-36 w-36 object-contain mb-1"
                />
                <h1 className="text-base font-bold">{point.name}</h1>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
