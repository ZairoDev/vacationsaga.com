"use client";
import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import Checkbox from "@/shared/Checkbox";

export interface PageAddListing4Props {}

interface checkBoxState {
  [key: string]: any;
}

type InnerObject = {
  [key: string]: boolean;
};

type MainState = {
  generalAmenities: InnerObject;
  otherAmenities: InnerObject;
  safeAmenities: InnerObject;
};

const PageAddListing4: FC<PageAddListing4Props> = () => {
  // const [savedAmenities, setSavedAmenities] = useState<checkBoxState[]>(() => {
  //   const savedPage = localStorage.getItem("page4") || "";
  //   if (!savedPage) {
  //     return [[], [], []];
  //   }
  //   const value = JSON.parse(savedPage);
  //   return value || [[], [], []];
  // });

  const savedAmenities = JSON.parse(localStorage.getItem("page4") || "[]");

  const [amenitiesState, setAmenitiesState] = useState<MainState>(() => {
    const savedPage = localStorage.getItem("page4") || "";
    if (!savedPage) {
      return { key1: {}, key2: {}, key3: {} };
    }
    const value = JSON.parse(savedPage);
    return value || { key1: {}, key2: {}, key3: {} };
  });

  // const generalAmenities = useMemo(
  //   () => ({
  //     Wifi: savedAmenities[0]?.Wifi || false,
  //     Internet: savedAmenities[0]?.Internet || true,
  //     TV: savedAmenities[0]?.TV || true,
  //     "Air conditioning": savedAmenities[0]?.["Air conditioning"] || false,
  //     Fan: savedAmenities[0]?.Fan || false,
  //     "Private entrance": savedAmenities[0]?.["Private entrance"] || false,
  //     Dryer: savedAmenities[0]?.Dryer || true,
  //     Heater: savedAmenities[0]?.Heater || false,
  //     "Washing machine": savedAmenities[0]?.["Washing machine"] || false,
  //     Detergent: savedAmenities[0]?.Detergent || true,
  //     "Clothes dryer": savedAmenities[0]?.["Clothes dryer"] || false,
  //     "Baby cot": savedAmenities[0]?.["Baby cot"] || true,
  //     Desk: savedAmenities[0]?.Desk || false,
  //     Fridge: savedAmenities[0]?.Fridge || true,
  //     "Balcony View": savedAmenities[0]?.["Balcony View"] || false,
  //     Bathtub: savedAmenities[0]?.["Bathtub "] || false,
  //     Puzzles: savedAmenities[0]?.["Puzzles"] || false,
  //     "Cleaning Products": savedAmenities[0]?.["Cleaning Products"] || false,
  //     "Dressing Room": savedAmenities[0]?.["Dressing Room"] || false,
  //     "Drying Racks": savedAmenities[0]?.["Drying Racks"] || false,
  //     Soundproofing: savedAmenities[0]?.["Soundproofing"] || false,
  //     Housekeeping: savedAmenities[0]?.["Housekeeping"] || false,
  //     "Electric Grill": savedAmenities[0]?.["Electric grill"] || false,
  //     "Free Parking": savedAmenities[0]?.["Free Parking"] || false,
  //     Microwave: savedAmenities[0]?.Microwave || false,
  //     "Mosquito net": savedAmenities[0]?.["Mosquito net"] || false,
  //     Oven: savedAmenities[0]?.Oven || false,
  //     "Private Bathroom": savedAmenities[0]?.["Private Bathroom"] || false,
  //     Slippers: savedAmenities[0]?.["Slippers"] || false,
  //     "Smoking Area": savedAmenities[0]?.["Smoking Area"] || false,
  //     "Smoking Alarm": savedAmenities[0]?.["Smoking Alarm"] || false,
  //     "Living Area": savedAmenities[0]?.["Living Area"] || false,
  //     "Clothes Stand": savedAmenities[0]?.["Clothes Stand"] || false,
  //     Bathrobe: savedAmenities[0]?.["Bathrobe"] || false,
  //     Mirror: savedAmenities[0]?.["Mirror"] || false,
  //     "CCTV Common Area": savedAmenities[0]?.["CCTV Common Area"] || false,
  //     "CCTV Outside Area": savedAmenities[0]?.["CCTV Outside Area"] || false,
  //     Shower: savedAmenities[0]?.Shower || false,
  //     "Flat TV": savedAmenities[0]?.["Flat TV"] || false,
  //     "Lunch Area": savedAmenities[0]?.["Lunch Area"] || false,
  //     "channels for Children":
  //       savedAmenities[0]?.["TV channel for Children"] || false,
  //     "Cooling Fan": savedAmenities[0]?.["Cooling Fan"] || false,
  //     Verandah: savedAmenities[0]?.Verandah || false,
  //     Balcony: savedAmenities[0]?.Balcony || false,
  //   }),
  //   [savedAmenities]
  // );


	const generalAmenities = useMemo(
    () => ({
      // Wifi: amenitiesState[0]?.Wifi || false,
      "Wifi": amenitiesState?.generalAmenities?.Wifi || false,
			"Internet": amenitiesState?.generalAmenities?.Internet || false,
      "TV": amenitiesState?.generalAmenities?.TV || true,
      "Air conditioning": amenitiesState?.generalAmenities?.["Air conditioning"] || false,
      "Fan": amenitiesState?.generalAmenities?.Fan || false,
      "Private entrance": amenitiesState?.generalAmenities?.["Private entrance"] || false,
      "Dryer": amenitiesState?.generalAmenities?.Dryer || true,
      "Heater": amenitiesState?.generalAmenities?.Heater || false,
      "Washing machine": amenitiesState?.generalAmenities?.["Washing machine"] || false,
      "Detergent": amenitiesState?.generalAmenities?.Detergent || true,
      "Clothes dryer": amenitiesState?.generalAmenities?.["Clothes dryer"] || false,
      "Baby cot": amenitiesState?.generalAmenities?.["Baby cot"] || true,
      "Desk": amenitiesState?.generalAmenities?.Desk || false,
      "Fridge": amenitiesState?.generalAmenities?.Fridge || true,
      "Balcony View": amenitiesState?.generalAmenities?.["Balcony View"] || false,
      "Bathtub": amenitiesState?.generalAmenities?.["Bathtub "] || false,
      "Puzzles": amenitiesState?.generalAmenities?.["Puzzles"] || false,
      "Cleaning Products": amenitiesState?.generalAmenities?.["Cleaning Products"] || false,
      "Dressing Room": amenitiesState?.generalAmenities?.["Dressing Room"] || false,
      "Drying Racks": amenitiesState?.generalAmenities?.["Drying Racks"] || false,
      "Soundproofing": amenitiesState?.generalAmenities?.["Soundproofing"] || false,
      "Smoking Area": amenitiesState?.generalAmenities?.["Smoking Area"] || false,
      "Smoking Alarm": amenitiesState?.generalAmenities?.["Smoking Alarm"] || false,
      "Living Area": amenitiesState?.generalAmenities?.["Living Area"] || false,
      "Clothes Stand": amenitiesState?.generalAmenities?.["Clothes Stand"] || false,
      "Bathrobe": amenitiesState?.generalAmenities?.["Bathrobe"] || false,
      "Mirror": amenitiesState?.generalAmenities?.["Mirror"] || false,
      "CCTV Common Area": amenitiesState?.generalAmenities?.["CCTV Common Area"] || false,
      "CCTV Outside Area": amenitiesState?.generalAmenities?.["CCTV Outside Area"] || false,
      "Housekeeping": amenitiesState?.generalAmenities?.["Housekeeping"] || false,
      "Electric Grill": amenitiesState?.generalAmenities?.["Electric grill"] || false,
      "Free Parking": amenitiesState?.generalAmenities?.["Free Parking"] || false,
      "Microwave": amenitiesState?.generalAmenities?.Microwave || false,
      "Mosquito net": amenitiesState?.generalAmenities?.["Mosquito net"] || false,
      "Oven": amenitiesState?.generalAmenities?.Oven || false,
      "Private Bathroom": amenitiesState?.generalAmenities?.["Private Bathroom"] || false,
      "Slippers": amenitiesState?.generalAmenities?.["Slippers"] || false,
      "Flat TV": amenitiesState?.generalAmenities?.["Flat TV"] || false,
      "Shower": amenitiesState?.generalAmenities?.Shower || false,
      "Lunch Area": amenitiesState?.generalAmenities?.["Lunch Area"] || false,
      "channels for Children":
        amenitiesState?.generalAmenities?.["TV channel for Children"] || false,
      "Cooling Fan": amenitiesState?.generalAmenities?.["Cooling Fan"] || false,
      "Verandah": amenitiesState?.generalAmenities?.Verandah || false,
      "Balcony": amenitiesState?.generalAmenities?.Balcony || false,
    }),
    [savedAmenities]
  );


  // const otherAmenities = useMemo(
  //   () => ({
  //     // Wardrobe: savedAmenities[1]?.Wardrobe || false,
	// 		"Wardrobe": amenitiesState?.otherAmenities?.Wardrobe || false,
  //     "Cloth hook": savedAmenities[1]?.["Cloth hook"] || false,
  //     "Extra cushion": savedAmenities[1]?.["Extra cushion"] || true,
  //     "Gas stove": savedAmenities[1]?.["Gas stove"] || false,
  //     "Toilet paper": savedAmenities[1]?.["Toilet paper"] || true,
  //     "Free toiletries": savedAmenities[1]?.["Free toiletries"] || true,
  //     "Makeup table": savedAmenities[1]?.["Makeup table"] || false,
  //     "Hot pot": savedAmenities[1]?.["Hot pot"] || false,
  //     "Bathroom heaters": savedAmenities[1]?.["Bathroom heaters"] || true,
  //     Kettle: savedAmenities[1]?.Kettle || false,
  //     Dishwasher: savedAmenities[1]?.Dishwasher || false,
  //     "BBQ grill": savedAmenities[1]?.["BBQ grill"] || false,
  //     Toaster: savedAmenities[1]?.Toaster || false,
  //     Towel: savedAmenities[1]?.Towel || true,
  //     "Dining table": savedAmenities[1]?.["Dining table"] || true,
  //     Airport: savedAmenities[1]?.["Airport"] || false,
  //     ATM: savedAmenities[1]?.["ATM"] || false,
  //     Beach: savedAmenities[1]?.["Beach"] || false,
  //     "City view": savedAmenities[1]?.["City view"] || false,
  //     Terrace: savedAmenities[1]?.["Terrace"] || false,
  //     "Tennis Court": savedAmenities[1]?.["Tennis Court"] || false,
  //     "Game Console": savedAmenities[1]?.["Game Console"] || false,
  //     "Garden View": savedAmenities[1]?.["Garden view"] || false,
  //     "Gas Station": savedAmenities[1]?.["Gas Station"] || false,
  //     Gym: savedAmenities[1]?.Gym || false,
  //     "Luggage Trolley": savedAmenities[1]?.["Luggage Trolley"] || false,
  //     "Outdoor Furniture": savedAmenities[1]?.["Outdoor Furniture"] || false,
  //     Park: savedAmenities[1]?.Park || false,
  //     "Play Ground": savedAmenities[1]?.["Play Ground"] || false,
  //     Pool: savedAmenities[1]?.Pool || false,
  //     Sauna: savedAmenities[1]?.Sauna || false,
  //     "Room Service": savedAmenities[1]?.["Room Service"] || false,
  //     "Railway Station": savedAmenities[1]?.["Railway Station"] || false,
  //     "Seating Area": savedAmenities[1]?.["Seating Area"] || false,
  //     Bidet: savedAmenities[1]?.Bidet || false,
  //     "Socket near the bed":
  //       savedAmenities[1]?.["Socker near the bed"] || false,
  //     Books: savedAmenities[1]?.Books || false,
  //     "DVD for children": savedAmenities[1]?.["DVD for children"] || false,
  //     "Cable Channels": savedAmenities[1]?.["Cable Channels"] || false,
  //     "Music for children": savedAmenities[1]?.["Music for children"] || false,
  //     "Fire Place": savedAmenities[1]?.["Fire Place"] || false,
  //     "Sofa Bed": savedAmenities[1]?.["Sofa Bed"] || false,
  //     "Latex Mattresses": savedAmenities[1]?.["Latex Mattresses"] || false,
  //     "Claw Foot Tub": savedAmenities[1]?.["Claw Foot Tub"] || false,
  //     "Hand Held Shower": savedAmenities[1]?.["Hand Held Shower"] || false,
  //     Chocolates: savedAmenities[1]?.Chocolates || false,
  //     "Butler Pantry": savedAmenities[1]?.["Butler Pantry"] || false,
  //     "Private Bathroom": savedAmenities[1]?.["Private Bathroom"] || false,
  //     Linen: savedAmenities[1]?.Linen || false,
  //     Patio: savedAmenities[1]?.Patio || false,
  //     Computer: savedAmenities[1]?.Computer || false,
  //     Playground: savedAmenities[1]?.Playground || false,
  //     "Outdoor Dining Area":
  //       savedAmenities[1]?.["Outdoor Dining Area"] || false,
  //     "Mini Bar": savedAmenities[1]?.["Mini Bar"] || false,
  //     "Outdoor Tub": savedAmenities[1]?.["Outdoor Tub"] || false,
  //     Garden: savedAmenities[1]?.Garden || false,
  //     "Streaming Media": savedAmenities[1]?.["Streaming Media"] || false,
  //     Parasol: savedAmenities[1]?.Parasol || false,
  //     "Sea View": savedAmenities[1]?.["Sea View"] || false,
  //     "Tall Chairs": savedAmenities[1]?.["Tall Chairs"] || false,
  //     Cafeteria: savedAmenities[1]?.Cafeteria || false,
  //     "Room for non Smoker":
  //       savedAmenities[1]?.["Room for non Smoker"] || false,
  //     "Tobacco Detectors": savedAmenities[1]?.["Tobacco Detectors"] || false,
  //     Sunbed: savedAmenities[1]?.Sunbed || false,
  //     "Beach Umbrella": savedAmenities[1]?.["Beach Umbrella"] || false,
  //     "Private Pool": savedAmenities[1]?.["Private Pool"] || false,
  //     "Indoor Pool": savedAmenities[1]?.["Indoor Pool"] || false,
  //     "Outdoor Pool": savedAmenities[1]?.["Outdoor Pool"] || false,
  //     "Small Pool": savedAmenities[1]?.["Small Pool"] || false,
  //     "Beach Chair": savedAmenities[1]?.["Beach Chair"] || false,
  //     Kitchenette: savedAmenities[1]?.Kitchenette || false,
  //     Bicycles: savedAmenities[1]?.Bicycles || false,
  //     "Outdoor Shower": savedAmenities[1]?.["Outdoor Shower"] || false,
  //     "Sun Lounger": savedAmenities[1]?.["Sun Lounger"] || false,
  //   }),
  //   [savedAmenities]
  // );


	const otherAmenities = useMemo(
    () => ({
      // Wardrobe: savedAmenities[1]?.Wardrobe || false,
			"Wardrobe": amenitiesState?.otherAmenities?.Wardrobe || false,
      "Cloth hook": amenitiesState?.otherAmenities?.["Cloth hook"] || false,
      "Extra cushion": amenitiesState?.otherAmenities?.["Extra cushion"] || true,
      "Gas stove": amenitiesState?.otherAmenities?.["Gas stove"] || false,
      "Toilet paper": amenitiesState?.otherAmenities?.["Toilet paper"] || true,
      "Free toiletries": amenitiesState?.otherAmenities?.["Free toiletries"] || true,
      "Makeup table": amenitiesState?.otherAmenities?.["Makeup table"] || false,
      "Hot pot": amenitiesState?.otherAmenities?.["Hot pot"] || false,
      "Bathroom heaters": amenitiesState?.otherAmenities?.["Bathroom heaters"] || true,
      "Kettle": amenitiesState?.otherAmenities?.Kettle || false,
      "Dishwasher": amenitiesState?.otherAmenities?.Dishwasher || false,
      "BBQ grill": amenitiesState?.otherAmenities?.["BBQ grill"] || false,
      "Toaster": amenitiesState?.otherAmenities?.Toaster || false,
      "Towel": amenitiesState?.otherAmenities?.Towel || true,
      "Dining table": amenitiesState?.otherAmenities?.["Dining table"] || true,
      "Airport": amenitiesState?.otherAmenities?.["Airport"] || false,
      "ATM": amenitiesState?.otherAmenities?.["ATM"] || false,
      "Beach": amenitiesState?.otherAmenities?.["Beach"] || false,
      "City view": amenitiesState?.otherAmenities?.["City view"] || false,
      "Terrace": amenitiesState?.otherAmenities?.["Terrace"] || false,
      "Tennis Court": amenitiesState?.otherAmenities?.["Tennis Court"] || false,
      "Game Console": amenitiesState?.otherAmenities?.["Game Console"] || false,
      "Garden View": amenitiesState?.otherAmenities?.["Garden view"] || false,
      "Gas Station": amenitiesState?.otherAmenities?.["Gas Station"] || false,
      "Gym": amenitiesState?.otherAmenities?.Gym || false,
      "Luggage Trolley": amenitiesState?.otherAmenities?.["Luggage Trolley"] || false,
      "Outdoor Furniture": amenitiesState?.otherAmenities?.["Outdoor Furniture"] || false,
      "Park": amenitiesState?.otherAmenities?.Park || false,
      "Play Ground": amenitiesState?.otherAmenities?.["Play Ground"] || false,
      "Pool": amenitiesState?.otherAmenities?.Pool || false,
      "Sauna": amenitiesState?.otherAmenities?.Sauna || false,
      "Room Service": amenitiesState?.otherAmenities?.["Room Service"] || false,
      "Railway Station": amenitiesState?.otherAmenities?.["Railway Station"] || false,
      "Seating Area": amenitiesState?.otherAmenities?.["Seating Area"] || false,
      "Bidet": amenitiesState?.otherAmenities?.Bidet || false,
      "Socket near the bed":
        amenitiesState?.otherAmenities?.["Socket near the bed"] || false,
      "Books": amenitiesState?.otherAmenities?.Books || false,
      "DVD for children": amenitiesState?.otherAmenities?.["DVD for children"] || false,
      "Cable Channels": amenitiesState?.otherAmenities?.["Cable Channels"] || false,
      "Music for children": amenitiesState?.otherAmenities?.["Music for children"] || false,
      "Fire Place": amenitiesState?.otherAmenities?.["Fire Place"] || false,
      "Sofa Bed": amenitiesState?.otherAmenities?.["Sofa Bed"] || false,
      "Latex Mattresses": amenitiesState?.otherAmenities?.["Latex Mattresses"] || false,
      "Claw Foot Tub": amenitiesState?.otherAmenities?.["Claw Foot Tub"] || false,
      "Hand Held Shower": amenitiesState?.otherAmenities?.["Hand Held Shower"] || false,
      "Chocolates": amenitiesState?.otherAmenities?.Chocolates || false,
      "Butler Pantry": amenitiesState?.otherAmenities?.["Butler Pantry"] || false,
      "Private Bathroom": amenitiesState?.otherAmenities?.["Private Bathroom"] || false,
      "Linen": amenitiesState?.otherAmenities?.Linen || false,
      "Patio": amenitiesState?.otherAmenities?.Patio || false,
      "Computer": amenitiesState?.otherAmenities?.Computer || false,
      "Playground": amenitiesState?.otherAmenities?.Playground || false,
      "Outdoor Dining Area":
        amenitiesState?.otherAmenities?.["Outdoor Dining Area"] || false,
      "Mini Bar": amenitiesState?.otherAmenities?.["Mini Bar"] || false,
      "Outdoor Tub": amenitiesState?.otherAmenities?.["Outdoor Tub"] || false,
      "Garden": amenitiesState?.otherAmenities?.Garden || false,
      "Streaming Media": amenitiesState?.otherAmenities?.["Streaming Media"] || false,
      "Parasol": amenitiesState?.otherAmenities?.Parasol || false,
      "Sea View": amenitiesState?.otherAmenities?.["Sea View"] || false,
      "Tall Chairs": amenitiesState?.otherAmenities?.["Tall Chairs"] || false,
      "Cafeteria": amenitiesState?.otherAmenities?.Cafeteria || false,
      "Room for non Smoker":
        amenitiesState?.otherAmenities?.["Room for non Smoker"] || false,
      "Tobacco Detectors": amenitiesState?.otherAmenities?.["Tobacco Detectors"] || false,
      "Sunbed": amenitiesState?.otherAmenities?.Sunbed || false,
      "Beach Umbrella": amenitiesState?.otherAmenities?.["Beach Umbrella"] || false,
      "Private Pool": amenitiesState?.otherAmenities?.["Private Pool"] || false,
      "Indoor Pool": amenitiesState?.otherAmenities?.["Indoor Pool"] || false,
      "Outdoor Pool": amenitiesState?.otherAmenities?.["Outdoor Pool"] || false,
      "Small Pool": amenitiesState?.otherAmenities?.["Small Pool"] || false,
      "Beach Chair": amenitiesState?.otherAmenities?.["Beach Chair"] || false,
      "Kitchenette": amenitiesState?.otherAmenities?.Kitchenette || false,
      "Bicycles": amenitiesState?.otherAmenities?.Bicycles || false,
      "Outdoor Shower": amenitiesState?.otherAmenities?.["Outdoor Shower"] || false,
      "Sun Lounger": amenitiesState?.otherAmenities?.["Sun Lounger"] || false,
    }),
    [savedAmenities]
  );


  // const safeAmenities = useMemo(
  //   () => ({
  //     "Fire Siren": savedAmenities[2]?.["Fire Siren"] || true,
  //     "Fire extinguisher": savedAmenities[2]?.["Fire extinguisher"] || true,
  //     "Antitheft Key": savedAmenities[2]?.["Antitheft Key"] || true,
  //     "Safe Vault": savedAmenities[2]?.["Safe Vault"] || true,
  //   }),
  //   [savedAmenities]
  // );

	
	const safeAmenities = useMemo(
    () => ({
      "Fire Siren": amenitiesState?.safeAmenities?.["Fire Siren"] || true,
      "Fire extinguisher": amenitiesState?.safeAmenities?.["Fire extinguisher"] || true,
      "Antitheft Key": amenitiesState?.safeAmenities?.["Antitheft Key"] || true,
      "Safe Vault": amenitiesState?.safeAmenities?.["Safe Vault"] || true,
    }),
    [savedAmenities]
  );

  const initialState: MainState = {
    generalAmenities,
    otherAmenities,
    safeAmenities,
  };

  // const [amenities, setAmenities] = useState<checkBoxState[]>([
  //   generalAmenities,
  //   otherAmenities,
  //   safeAmenities,
  // ]);

  const [amenities, setAmenities] = useState<MainState>(initialState);

  const handleCheckboxChange = (
    outerKey: keyof MainState,
    innerKey: string,
    checked: boolean
  ) => {
    setAmenities((prevState) => ({
      ...prevState,
      [outerKey]: {
        ...prevState[outerKey],
        [innerKey]: checked,
      },
    }));
  };

  // useEffect(() => {
  //   const AmenitiesToRetrieve = {
  //     generalAmenities,
  //     otherAmenities,
  //     safeAmenities,
  //   };
  //   localStorage.setItem("page4", JSON.stringify(amenities));
  //   localStorage.setItem(
  //     "AmenitiesToRetrieve",
  //     JSON.stringify(AmenitiesToRetrieve)
  //   );
  // }, [amenities, generalAmenities, otherAmenities, safeAmenities]);

  useEffect(() => {
    localStorage.setItem("page4", JSON.stringify(amenities));
  }, [amenities]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Amenities </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Many customers have searched for accommodation based on amenities
          criteria
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            General amenities
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {Object.keys(amenities[0])
              .sort((a, b) => a.localeCompare(b)) // Sort the keys alphabetically
              .map((key) => (
                <Checkbox
                  className="cursor-pointer"
                  key={key}
                  label={key}
                  name={key}
                  onChange={(checked) => handleCheckboxChange(key, checked, 0)}
                  {...(amenities[0][key] && {
                    defaultChecked: true,
                  })}
                />
              ))} */}
            {Object.keys(amenities.generalAmenities)
              .sort((a, b) => a.localeCompare(b))
              .map((key) => (
                <Checkbox
                  className="cursor-pointer"
                  key={key}
                  label={key}
                  name={key}
                  onChange={(checked) =>
                    handleCheckboxChange("generalAmenities", key, checked)
                  }
                  {...(amenities.generalAmenities[key] && {
                    defaultChecked: true,
                  })}
                />
              ))}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Other amenities
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {Object.keys(amenities[0])
              .sort((a, b) => a.localeCompare(b)) // Sort the keys alphabetically
              .map((key) => (
                <Checkbox
                  className="cursor-pointer"
                  key={key}
                  label={key}
                  name={key}
                  onChange={(checked) => handleCheckboxChange(key, checked, 0)}
                  {...(amenities[0][key] && {
                    defaultChecked: true,
                  })}
                />
              ))} */}
            {Object.keys(amenities.otherAmenities)
              .sort((a, b) => a.localeCompare(b))
              .map((key) => (
                <Checkbox
                  className="cursor-pointer"
                  key={key}
                  label={key}
                  name={key}
                  onChange={(checked) =>
                    handleCheckboxChange("otherAmenities", key, checked)
                  }
                  {...(amenities.otherAmenities[key] && {
                    defaultChecked: true,
                  })}
                />
              ))}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Safe amenities
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {Object.keys(amenities[2]).map((key) => (
              <Checkbox
                key={key}
                label={key}
                name={key}
                onChange={(checked) => handleCheckboxChange(key, checked, 2)}
                {...(amenities[2][key] && {
                  defaultChecked: true,
                })}
              />
            ))} */}
            {Object.keys(amenities.safeAmenities)
              .sort((a, b) => a.localeCompare(b))
              .map((key) => (
                <Checkbox
                  className="cursor-pointer"
                  key={key}
                  label={key}
                  name={key}
                  onChange={(checked) =>
                    handleCheckboxChange("safeAmenities", key, checked)
                  }
                  {...(amenities.safeAmenities[key] && {
                    defaultChecked: true,
                  })}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing4;
