import React from "react";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin } from "lucide-react";

// Utility function to create Leaflet divIcon from a Lucide React icon
const createLucideIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    React.createElement(MapPin, {
      className: "size-7 text-gray-500 fill-white",
    })
  );

  return L.divIcon({
    html: iconMarkup,
    className: "lucide-marker",
    iconSize: [28, 28],
    iconAnchor: [14, 28], // adjust so bottom is anchor
    popupAnchor: [0, -28],
  });
};

// Utility function to get state name regardless of property key
const getStateName = (props = {}) => {
  return (
    props.st_nm ||
    props.STATE_NAME ||
    props.STATE ||
    props.name ||
    props.NAME_1 ||
    props.NAME ||
    ""
  );
};

// Style function
const styleFn = () => {
  return {
    color: "#fff",
    weight: 1.5,
    fillOpacity: 0.75,
    fillColor: "#1875e6",
  };
};

const onEachFeature = (feature, layer) => {
  const name = getStateName(feature.properties);
  layer.bindTooltip(name, { sticky: true });
};

export { createLucideIcon, getStateName, styleFn, onEachFeature };
