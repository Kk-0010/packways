import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Tooltip, Popup, Marker } from "react-leaflet";
import Logo from "@/assets/logo/logo2.png";
import { worldMapPoints } from "@/constants";
import { createLucideIcon, onEachFeature, styleFn } from "./mapUtils";
import { FitToGeoJSON } from "./MapComponents";

const WorldMap = () => {
  const [world, setWorld] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/world.json");
      const raw = await res.json();
      setWorld(raw);
    })();
  }, []);

  return (
    <div className="h-[40vh] sm:h-[70vh] md:h-[55vh] lg:h-[70vh] w-full lg:w-[90vw] xl:w-[67vw] mx-auto">
      <MapContainer
        center={[20, 0]}
        zoom={window.innerWidth < 768 ? 0.5 : 1.5}
        className="h-full w-full"
        preferCanvas
        zoomControl
      >
        {/* Blue world polygons (no base tiles) */}
        {world && (
          <>
            {/* <GeoJSON data={world} style={styleFn} /> */}
            <GeoJSON
              data={world}
              style={styleFn}
              onEachFeature={onEachFeature}
            />
            <FitToGeoJSON data={world} />
          </>
        )}

        {/* Industrial points */}
        {worldMapPoints.map((point) => (
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

export default WorldMap;
