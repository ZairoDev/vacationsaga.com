"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC, useEffect, useRef, useState } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import axios from "axios";
import { Library, Loader } from "@googlemaps/js-api-loader";
import { P } from "@clerk/clerk-react/dist/controlComponents-CzpRUsyv";
import AutocompleteInput from "@/components/AutoCompleteInput";
import dynamic from 'next/dynamic';
import { NextPage } from 'next';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });


export interface PageAddListing2Props {}

interface Page2State {
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  center: Object;
}

type Center = {
  lat: number;
  lng: number;
};

const PageAddListing2: FC<PageAddListing2Props> = () => {

  const [address, setAddress] = useState<string>("");


  const [country, setCountry] = useState<string>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (!savedPage) {
      return "Viet Nam";
    }
    const value = JSON.parse(savedPage)["country"];
    return value || "Viet Nam";
  });

  const [state, setState] = useState<string>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (!savedPage) {
      return "";
    }
    const value = JSON.parse(savedPage)["state"];
    return value || "";
  });

  const [city, setCity] = useState<string>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (!savedPage) {
      return "";
    }
    const value = JSON.parse(savedPage)["city"];
    return value || "";
  });

  const [center, setCenter] = useState<Center>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (!savedPage) {
      return { lat: 0, lng: 0 };
    }
    const value = JSON.parse(savedPage)["center"];
    return value || { lat: 0, lng: 0 };
  })

  const [street, setStreet] = useState<string>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (!savedPage) {
      return "";
    }
    const value = JSON.parse(savedPage)["street"];
    return value || "";
  });

  const [postalCode, setPostalCode] = useState<string>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (!savedPage) {
      return "";
    }
    const value = JSON.parse(savedPage)["postalCode"];
    return value || "";
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const handleAddressUpdate = (address: any) => {
    console.log("Address updated:", address);
    setAddress(address || "");
    setCountry(address.country || "");
    setState(address.state || "");
    setCity(address.city || "");
    setStreet(address.street || "");
    // Assuming postalCode and center are also available from the suggestion
    if (address.lat && address.lng) {
      setCenter({ lat: address.lat, lng: address.lng });
    }
    getPostalCodeFromLatLng(address.lat, address.lng);
    console.log(country, state, city, center);
  };

  const getPostalCodeFromLatLng = async (lat:number, lng:number) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
          lat,
          lon: lng,
          format: 'json',
        },
      });
  
      const address = response.data.address;
      if (address && address.postcode) {
        return address.postcode;
      } else {
        throw new Error('Postal code not found in response.');
      }
    } catch (error) {
      console.error('Error fetching postal code:', error);
      return null;
    }
  };



  const [page2, setPage2] = useState<Page2State>({
    country: country,
    street: street,
    city: city,
    state: state,
    postalCode: postalCode,
    center: center,
  });

  useEffect(() => {
    const newPage2: Page2State = {
      country: country,
      street: street,
      city: city,
      state: state,
      postalCode: postalCode,
      center: center,
    };
    setPage2(newPage2);
    localStorage.setItem("page2", JSON.stringify(newPage2));
  }, [country, street, city, state, postalCode, center]);


  return (
    <>
      <h2 className="text-2xl font-semibold">Your place location</h2>
      <AutocompleteInput onAddressSelect={handleAddressUpdate} />
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 "></div>
      <div className="space-y-8">
        <ButtonSecondary>
          <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="ml-3">Use current location</span>
        </ButtonSecondary>
        <FormItem label="Country/Region">
          <Select onChange={(e) => setCountry(e.target.value)} value={country}>
            <option value="Greece">Greece</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Thailand">Thailand</option>
            <option value="France">France</option>
            <option value="Singapore">Singapore</option>
            <option value="Japan">Japan</option>
            <option value="Korea">Korea</option>
          </Select>
        </FormItem>
        <FormItem label="Street">
          <Input
            placeholder="..."
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </FormItem>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="City">
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </FormItem>
          <FormItem label="State">
            <Input value={state} onChange={(e) => setState(e.target.value)} />
          </FormItem>
          <FormItem label="Postal code">
            <Input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </FormItem>
          <div>
            <h1>Coordinates</h1>
            <div className="flex gap-32 w-full mt-2">
              <div className="flex gap-2">
                <h4 className=" text-sm">Latitude: </h4>
                <h4 className=" text-sm">{center.lat}</h4>
              </div>
              <div className="flex gap-2">
                <h4 className="text-sm">Longitude: </h4>
                <h4 className="text-sm">{center.lng}</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Label>Detailed address</Label>
          <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 flex gap-1">
            {/* 1110 Pennsylvania Avenue NW, Washington, DC 20230 */}
            <h2>{street},</h2>
            <h2>{city},</h2>
            <h2>{state},</h2>
            <h2>{country}</h2>
          </div>
          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <div className="rounded-xl overflow-hidden">
                <Map latitude={center.lat} longitude={center.lng} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
