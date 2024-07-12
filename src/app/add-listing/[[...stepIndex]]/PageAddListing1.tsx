"use client";
import React, { FC, useEffect } from "react";
import { useState } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import { PortionsContext } from "@/app/Store/portionStore";

export interface PageAddListing1Props {}

interface Page1State {
  propertyType: string;
  placeName: string;
  rentalForm: string;
  numberOfPortions: number;
  showPortionsInput: boolean;
}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  const [propertyType, setPropertyType] = useState<string>(() => {
    const savedPage = localStorage.getItem("page1") || "";
    if (!savedPage) {
      return "Hotel";
    }
    const value = JSON.parse(savedPage)["propertyType"];
    return value || "Hotel";
  });

  const [placeName, setPlaceName] = useState<string>(() => {
    const savedPage = localStorage.getItem("page1") || "";
    if (!savedPage) {
      return "";
    }
    const value = JSON.parse(savedPage)["placeName"];
    return value || "";
  });

  const [rentalForm, setRentalForm] = useState<string>(() => {
    const savedPage = localStorage.getItem("page1") || "";
    if (!savedPage) {
      return "Private Room";
    }
    const value = JSON.parse(savedPage)["rentalForm"];
    return value || "Private Room";
  });

  const [numberOfPortions, setNumberOfPortions] = useState<number>(() => {
    const savedPage = localStorage.getItem("page1") || "";
    if (!savedPage) {
      return 1;
    }
    const value = JSON.parse(savedPage)["numberOfPortions"];
    return value ? parseInt(value, 10) : 1;
  });

  const [showPortionsInput, setShowPortionsInput] = useState<boolean>(() => {
    const savedPage = localStorage.getItem("page1") || "";
    if (!savedPage) {
      return false;
    }
    const value = JSON.parse(savedPage)["showPortionsInput"];
    return value ? JSON.parse(value) : false;
  });

  const [page1, setPage1] = useState<Page1State>({
    propertyType: propertyType,
    placeName: placeName,
    rentalForm: rentalForm,
    numberOfPortions: numberOfPortions,
    showPortionsInput: showPortionsInput,
  });

  const handlePropertyTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPropertyType = e.target.value;
    console.log('selected Property Type: ', selectedPropertyType)
    setPropertyType(selectedPropertyType);
  };

  const handlePlaceName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };

  const handleRentalFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const value = 1;
    if (selectedValue === "Private room") {
      setNumberOfPortions(value);
    }
    // Example logic to handle when to show portions input
    if (selectedValue === "Private room by portion") {
      setNumberOfPortions(2);
      setShowPortionsInput(true);
    } else {
      setNumberOfPortions(1);
      setShowPortionsInput(false);
    }
    setRentalForm(e.target.value);
  };

  const handlePortionsInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value, 10); // Ensure input value is parsed to an integer
    setNumberOfPortions(value);
  };

  useEffect(() => {
    // localStorage.setItem("numberOfPartition", numberOfPortions.toString());
    setPage1((prev) => {
      const newObj = { ...prev };
      newObj.numberOfPortions = numberOfPortions;
      return newObj;
    });
  }, [numberOfPortions]);

  useEffect(() => {
    setPage1((prev) => {
      const newObj = { ...prev };
      newObj.propertyType = propertyType;
      return newObj;
    });
    // localStorage.setItem("propertyType", propertyType);
  }, [propertyType]);

  useEffect(() => {
    // localStorage.setItem("placeName", placeName);
    setPage1((prev) => {
      const newObj = { ...prev };
      newObj.placeName = placeName;
      return newObj;
    });
  }, [placeName]);

  useEffect(() => {
    // localStorage.setItem("rentalForm", rentalForm);
    setPage1((prev) => {
      const newObj = { ...prev };
      newObj.rentalForm = rentalForm;
      return newObj;
    });
  }, [rentalForm]);

  useEffect(() => {
    const newPage1: Page1State = {
      propertyType: propertyType,
      placeName: placeName,
      rentalForm: rentalForm,
      numberOfPortions: numberOfPortions,
      showPortionsInput: showPortionsInput,
    };
    setPage1(newPage1);
    localStorage.setItem("page1", JSON.stringify(newPage1));
  }, [
    propertyType,
    placeName,
    rentalForm,
    numberOfPortions,
    showPortionsInput,
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem
          label="Choose a property type"
          desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
        >
          <Select onChange={handlePropertyTypeChange} value={propertyType}>
            <option value="Hotel">Hotel</option>
            <option value="Cottage">Cottage</option>
            <option value="Villa">Villa</option>
            <option value="Cabin">Cabin</option>
            <option value="Farm stay">Farm stay</option>
            <option value="Houseboat">Houseboat</option>
            <option value="Lighthouse">Lighthouse</option>
            <option value="Studio">Studio</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Detached House">Detached House</option>
            <option value="Loft">Loft</option>
            <option value="Maisonette">Maisonette</option>
            <option value="Farmhouse">Farmhouse</option>
            <option value="Holiday Homes">Holiday Homes</option>
            <option value="Farmstay">Farmstay</option>
            <option value="Resort">Resort</option>
            <option value="Lodge">Lodge</option>
            <option value="Apart Hotel">Apart Hotel</option>
          </Select>
        </FormItem>
        <FormItem
          label="Place name"
          desc="A catchy name usually includes: House name + Room name + Featured property + Tourist destination"
        >
          <Input
            placeholder="Places name"
            onChange={handlePlaceName}
            value={placeName}
          />
        </FormItem>
        <FormItem
          label="Rental form"
          desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included."
        >
          <Select onChange={handleRentalFormChange} value={rentalForm}>
            {/* <option value="Share room">Share room</option> */}
            <option value="Private room">Private Area</option>
            <option value="Private room by portion">
              Private Area by portion
            </option>
            <option value="Shared Room">Shared Room</option>
            <option value="Hotel Room">Hotel Room </option>
          </Select>
          {showPortionsInput && (
            <input
              className=" mt-4 rounded-lg text-black cursor-pointer text-sm"
              type="number"
              value={numberOfPortions}
              onChange={handlePortionsInputChange}
              placeholder="Number of portions"
              min={2}
              title="Number of portions can not be less than 2"
            />
          )}
        </FormItem>
      </div>
    </div>
  );
};
export const useClient = true;

export default PageAddListing1;
