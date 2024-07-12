"use client";
import { useEffect, useState } from "react";
import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing8Props {}

interface Page8State {
  currency: string;
  isPortion: Boolean;
  basePrice: number[];
  weekendPrice: number[];
  monthlyDiscount: number[];
}

const PageAddListing8: FC<PageAddListing8Props> = () => {

  let portions = 0;
  const data = localStorage.getItem("page1") || "";
  if (data) {
    const value = JSON.parse(data)["numberOfPortions"];
    if (value) {
      portions = parseInt(value, 10);
    }
  }

  const emptyStringArrayGenerator = (size: number) => {
    const emptyStringArray = Array.from({ length: size }, () => "");
    return emptyStringArray;
  };
  const emptyNumberArrayGenerator = (size: number) => {
    const emptyNumberArray = Array.from({ length: size }, () => 0);
    return emptyNumberArray;
  };

  const [myArray, setMyArray] = useState<number[]>(Array(portions).fill(1));
  const [isPortion, setIsPortion] = useState<Boolean>(() => {
    return portions > 1 ? true : false;
  });

  const [currency, setCurrency] = useState<string>("EURO");

  const [basePrice, setBasePrice] = useState<number[]>(() => {
    const savedPage = localStorage.getItem("page8") || "";
    if (!savedPage) {
      return emptyNumberArrayGenerator(portions);
    }
    const value = JSON.parse(savedPage)["basePrice"];
    return value || emptyNumberArrayGenerator(portions);
  });

  const [weekendPrice, setWeekendPrice] = useState<number[]>(() => {
    const savedPage = localStorage.getItem("page8") || "";
    if (!savedPage) {
      return emptyNumberArrayGenerator(portions);
    }
    const value = JSON.parse(savedPage)["weekendPrice"];
    return value || emptyNumberArrayGenerator(portions);
  });

  const [monthlyDiscount, setMonthlyDiscount] = useState<number[]>(() => {
    const savedPage = localStorage.getItem("page8");
    if (!savedPage) {
      return emptyNumberArrayGenerator(portions);
    }
    const value = JSON.parse(savedPage)["monthlyDiscount"];
    return value || emptyNumberArrayGenerator(portions);
  });

  const [page8, setPage8] = useState<Page8State>(() => {
    const savedPage = localStorage.getItem("page8");
    return savedPage
      ? JSON.parse(savedPage)
      : {
          currency: "EURO",
          isPortion: false,
          basePrice: emptyNumberArrayGenerator(portions),
          weekendPrice: emptyNumberArrayGenerator(portions),
          monthlyDiscount: emptyNumberArrayGenerator(portions),
        };
  });

  useEffect(() => {
    const newPage = {
      currency: currency,
      isPortion: isPortion,
      basePrice: basePrice,
      weekendPrice: weekendPrice,
      monthlyDiscount: monthlyDiscount,
    };
    setPage8(newPage);
    localStorage.setItem("page8", JSON.stringify(newPage));
  }, [isPortion, basePrice, weekendPrice, monthlyDiscount, currency]);

  return (
    <div className=" flex flex-col gap-12">
      {myArray.map((item, index) => (
        <div key={index}>
          <div>
            <h2 className="text-2xl font-semibold">
                Price for{" "}
              {isPortion ? `Portion ${index + 1}` : "Property"}
            </h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              {` The host's revenue is directly dependent on the setting of rates and
                          regulations on the number of guests, the number of nights, and the
                          cancellation policy.`}
            </span>
          </div>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* FORM */}
          <div className="space-y-8">
            {/* ITEM */}
            <FormItem label="Currency">
              <Select>
                {/* <option value="USD">USD</option>
                <option value="VND">VND</option> */}
                <option value="EURRO">EURO</option>
              </Select>
            </FormItem>
            <FormItem label="Base price  (Monday -Thursday)">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">€</span>
                </div>
                <Input
                  className="!pl-8 !pr-10"
                  placeholder="0.00"
                  value={basePrice[index]}
                  onChange={(e) =>
                    setBasePrice((prev) => {
                      const newBasePriceArray = [...prev];
                      newBasePriceArray[index] = parseInt(e.target.value) || 0;
                      return newBasePriceArray;
                    })
                  }
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">EURO</span>
                </div>
              </div>
            </FormItem>
            {/* ----- */}
            <FormItem label="Base price  (Friday-Sunday)">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">€</span>
                </div>
                <Input
                  className="!pl-8 !pr-10"
                  placeholder="0.00"
                  value={weekendPrice[index]}
                  onChange={(e) =>
                    setWeekendPrice((prev) => {
                      const newWeekendArray = [...prev];
                      newWeekendArray[index] = parseInt(e.target.value) || 0;
                      return newWeekendArray;
                    })
                  }
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">EURO</span>
                </div>
              </div>
            </FormItem>
            {/* ----- */}
            <FormItem label="Weekly Discounts ">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
                <Input
                  className="!pl-8 !pr-10"
                  placeholder="0.00"
                  value={monthlyDiscount[index]}
                  onChange={(e) =>
                    setMonthlyDiscount((prev) => {
                      const newMonthlyArray = [...prev];
                      newMonthlyArray[index] = parseInt(e.target.value) || 0;
                      return newMonthlyArray;
                    })
                  }
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">every month</span>
                </div>
              </div>
            </FormItem>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageAddListing8;
