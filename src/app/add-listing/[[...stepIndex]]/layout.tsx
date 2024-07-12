"use client";
import React, { useEffect } from "react";
import { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { Route } from "@/routers/types";

export interface CommonLayoutProps {
  children: React.ReactNode;
  params: {
    stepIndex: string;
  };
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, params }) => {
  const index = Number(params.stepIndex) || 1;
  const nextHref = (
    index < 10 ? `/add-listing/${index + 1}` : `/add-listing/${1}`
  ) as Route;
  const backtHref = (
    index > 1 ? `/add-listing/${index - 1}` : `/add-listing/${1}`
  ) as Route;
  const nextBtnText = index > 9 ? "Publish listing" : "Continue";

  useEffect(() => {
    if (index === 9 && nextBtnText === "Publish listing") {
      // Get data from local storage
      const data = localStorage.getItem("yourStorageKey");
      if (data) {
        // Convert data to JSON format
        const jsonData = JSON.parse(data);

        // Create a new Blob object containing the JSON data
        const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
          type: "application/json",
        });

        // Create a link element to download the JSON file
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "yourData.json";
        document.body.appendChild(a);
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    }
  }, [index, nextBtnText]);

  return (
    <>
      {/* <div
        className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      > */}
      <div
        className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
        // className={`nc-PageAddListing1 px-4 pb-24 pt-14 sm:py-24 lg:pb-32`}
      >
        <div className="space-y-11">
          <div className="text-center">
            <span className="text-4xl font-semibold">{index}</span>{" "}
            <span className="text-lg text-neutral-500 dark:text-neutral-400">
              / 10
            </span>
          </div>

          {/* --------------------- */}
          {/* <div className="listingSection__wrap" style={{'border':'1px solid white', 'width': '80vw'}}>{children} */}
          <div className="listingSection__wrap" style={{ border: "none" }}>
              {children}
          </div>

          {/* --------------------- */}
          <div className="flex justify-end space-x-5">
            <ButtonSecondary href={backtHref}>Go back</ButtonSecondary>
            <ButtonPrimary href={nextHref}>
              {nextBtnText || "Continue"}
            </ButtonPrimary>
          </div>
        </div>
      </div>
      </>
  );
};

export default CommonLayout;
