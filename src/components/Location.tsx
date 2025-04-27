"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const Location = () => {
  const position = [24.957058766829388, 90.35903514021152];
  const icon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356230.png",
    iconSize: [40, 43],
  });
  return (
    <div className="pt-16">
      <h2 className="font-bold pb-10 text-center text-4xl">Our Location</h2>
      <div className="flex justify-between gap-5 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <MapContainer
            center={[position[0], position[1]]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position[0], position[1]]} icon={icon}>
              <Popup>New Bally Road,Phulpur</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="lg:w-1/2 custom-glass-card py-20 md:px-16 px-8 rounded-md w-full text-white">
          <h1 className="white font-bold text-3xl mb-5">Deluxe Portion</h1>
          <p className="mb-4">
            Our building is located in the heart of the city, offering easy
            access to all major attractions and transportation hubs.
            Conveniently situated near shopping centers, restaurants, and parks,
            you’ll have everything you need within reach.
          </p>
          <p className="mb-4">
            <span className="font-semibold text-lg">Address :</span> New Bally
            Road,Phulpur
          </p>
          <p className="mb-8">
            How to get there: Easily accessible by public transportation. The
            nearest subway station is just a 5-minute walk away. Parking is
            available on-site for residents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
