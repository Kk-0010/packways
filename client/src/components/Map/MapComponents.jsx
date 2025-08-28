import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

// Function to fit the map to the loaded India geometry (and lock bounds)
const FitToGeoJSON = ({ data }) => {
  const map = useMap();
  useEffect(() => {
    if (!data) return;
    const layer = L.geoJSON(data);
    const bounds = layer.getBounds();
    map.setMaxBounds(bounds.pad(0.1));
  }, [data, map]);
  return null;
};

export { FitToGeoJSON };
