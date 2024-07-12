"use client";

import React, { Fragment, FC, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "@/components/NcInputNumber";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import ClearDataButton from "@/app/(client-components)/(HeroSearchForm)/ClearDataButton";
import { GuestsObject } from "@/app/(client-components)/type";

export interface GuestsInputProps {
  className?: string;
  onGuestsChange?: (totalGuests: number) => void;
}

interface guestsState {
  adults: number;
  children: number;
  infants: number;
}

const GuestsInput: FC<GuestsInputProps> = ({
  className = "flex-1",
  onGuestsChange,
}) => {

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState<number>(
    () => {
      const savedPage = localStorage.getItem("guestsState") || "";
      if (!savedPage) {
        return 2;
      }
      const value = JSON.parse(savedPage)["adults"];
      return value || 2;
    }
  );

  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState<number>(() => {
      const savedPage = localStorage.getItem("guestsState") || "";
      if (!savedPage) {
        return 1;
      }
      const value = JSON.parse(savedPage)["children"];
      return value || 1;
    });

  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState<number>(
    () => {
      const savedPage = localStorage.getItem("guestsState") || "";
      if (!savedPage) {
        return 0;
      }
      const value = JSON.parse(savedPage)["infants"];
      return value || 0;
    }
  );

  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    let newValue = {
      guestAdults: guestAdultsInputValue,
      guestChildren: guestChildrenInputValue,
      guestInfants: guestInfantsInputValue,
    };
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
      newValue.guestAdults = value;
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
      newValue.guestChildren = value;
    }
    if (type === "guestInfants") {
      setGuestInfantsInputValue(value);
      newValue.guestInfants = value;
    }
    updateTotalGuests(newValue);
  };

  const updateTotalGuests = (newValue: GuestsObject) => {
    const totalGuests =
      (newValue.guestChildren ? newValue.guestChildren : 0) +
      (newValue.guestAdults ? newValue.guestAdults : 0) +
      (newValue.guestInfants ? newValue.guestInfants : 0);

    const newGuests : guestsState = {
      adults: newValue.guestAdults || 0,
      children: newValue.guestChildren || 0,
      infants: newValue.guestInfants || 0,
    };
    localStorage.setItem("guestsState", JSON.stringify(newGuests));

    if (onGuestsChange) {
      onGuestsChange(totalGuests);
    }
  };

  useEffect(() => {
    updateTotalGuests({
      guestAdults: guestAdultsInputValue,
      guestChildren: guestChildrenInputValue,
      guestInfants: guestInfantsInputValue,
    });
  }, [guestAdultsInputValue, guestChildrenInputValue, guestInfantsInputValue, updateTotalGuests]);

  const guests = localStorage.getItem("totalGuests") || "";
  const totalGuests = guests ? JSON.parse(guests) : 0;

  const [allGuests, setAllGuests] = useState<guestsState>(() => {
    const savedPage = localStorage.getItem("guestsState") || "";
    if (!savedPage) {
      return {
        adults: 2,
        children: 1,
        infants: 0,
      };
    }
    const value = JSON.parse(savedPage);
    return value;
  });

  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }) => (
        <>
          <div
            className={`flex-1 flex items-center focus:outline-none rounded-b-3xl ${
              open ? "shadow-lg" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 flex-1 flex text-left items-center p-3 space-x-3 focus:outline-none`}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <UserPlusIcon className="w-5 h-5 lg:w-7 lg:h-7" />
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {/* {totalGuests || ""} Guests */}
                  {(guestAdultsInputValue || 0) + (guestChildrenInputValue || 0) + (guestInfantsInputValue || 0) || ""} Guests
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {totalGuests ? "Guests" : "Add guests"}
                </span>
              </div>

              {!!totalGuests && open && (
                <ClearDataButton
                  onClick={() => {
                    setGuestAdultsInputValue(0);
                    setGuestChildrenInputValue(0);
                    setGuestInfantsInputValue(0);
                  }}
                />
              )}
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 ">
              <NcInputNumber
                className="w-full"
                defaultValue={guestAdultsInputValue}
                onChange={(value) => handleChangeData(value, "guestAdults")}
                max={10}
                min={1}
                label="Adults"
                desc="Ages 13 or above"
              />
              <NcInputNumber
                className="w-full mt-6"
                defaultValue={guestChildrenInputValue}
                onChange={(value) => handleChangeData(value, "guestChildren")}
                max={4}
                label="Children"
                desc="Ages 2–12"
              />

              <NcInputNumber
                className="w-full mt-6"
                defaultValue={guestInfantsInputValue}
                onChange={(value) => handleChangeData(value, "guestInfants")}
                max={4}
                label="Infants"
                desc="Ages 0–2"
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default GuestsInput;
