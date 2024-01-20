"use client";

import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { useMapEvents, Marker, TileLayer, MapContainer } from "react-leaflet";
import L from "leaflet";
import { useFormikContext, Field } from "formik";

export const Map = () => {
  const [marker, setMarker] = useState();
  const [pos, setPos] = useState([51, 19]);
  const { setFieldValue } = useFormikContext();

  const markerSvgBase64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACW0lEQVR4nO2WPUiWURiGr6y0glwaFF0qaovCIYIwLCistlJrKyEoh6AfoiQdHCKNBlEHi6ZaSm2RkP6gIehvEikKHSOXpozKUst44BYOr+ec9/Pze5284YHvO/f9/Jz3nPOcA8vIH+uBE0ATUM4SYgXQAHwGZmU/gTagJOvkO4E3TuJXwKDz/xNwIIvEG4AuYEaJxvX57WsY9gIfnEIeARsLkXgVcA74psBTKqTUo10t7YS0v7Qsa/JNvh/4mJjVlhz8KoH7jt8YcHAhiYs0y38KMAocymMCtizvnUK6FTsVHXL4DTQDxSxuCS8plsVsT3PYBEwDf4FaCodaxZxO25xNqvQBhUefYp+Jia5LdDWDAloV+1pMdEei0xkUMPd1b8VEAxLVZ1DAMcW2pQjioUR1GRTQkMv+6pPIqk3DSqBCjceOWxqOK7Y1qSDuSWR93ocS7eInwB+nyViLfg6cjdyIJ6W9GyvgpkSXA/wpJ6n1+mHZD2c8dMyaxd+IFXBRos4A3+3s5HXO+FqgV5y1cR+6xJ+PFVDvXDw+PBZ/NLLJhgK+Q+KPxArYKtGXAP9W/C4Pt1vc64DvuPjNsQKKgO8Slnn4EXHbPNx2cbYnkigTN+E8YoIYlLjFw70Tt8PDVYmzJ1uoDVvsVOxzruPqBPdU3B6PX404O6Iuqp3r2GLnhE45TAIXnCfY7UifaEz0+lL5TqacLC+ss/U4Z9vsq8x+v9R774qsTWNJ3Zz15Ngt5+Ew8EKdbnaBNiXffJ5z81CsTdaoZ5UtRT/wTNavsXa13KpFPuWWwZLhPzyOx416KtY7AAAAAElFTkSuQmCC";

  function InvalidateState() {
    const map = useMapEvents({
      move() {
        map.invalidateSize();
      },
      load() {
        map.invalidateSize();
      },
      click(event) {
        const { lat, lng } = event.latlng;

        const HomeIcon = L.icon({
          iconUrl: markerSvgBase64,
          iconSize: [32, 32],
          iconAnchor: [12, 12],
          popupAnchor: [0, 0],
        });

        setPos([lat, lng]);
        setFieldValue("lat", lat);
        setFieldValue("lng", lng);
        setMarker(<Marker position={[lat, lng]} icon={HomeIcon} />);
      },
    });

    return null;
  }

  return (
    <>
      <Field type="hidden" name="lat" value={pos[0]} />
      <Field type="hidden" name="lng" value={pos[1]} />

      <MapContainer
        center={[55.4, 12.33]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <InvalidateState />
        {marker}
      </MapContainer>
    </>
  );
};
