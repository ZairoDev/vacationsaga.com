"use client";
import StayCard from "@/components/StayCard";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import React, { FC, useEffect, useState } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Route } from "@/routers/types";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";

export interface PageAddListing10Props {}

interface Page3State {
  portionName: string[];
  portionSize: number[];
  guests: number[];
  bedrooms: number[];
  beds: number[];
  bathroom: number[];
  kitchen: number[];
}

interface Page2State {
  country: string;
  street: string;
  roomNumber: string;
  city: string;
  state: string;
  postalCode: string;
}

interface CombinedData {
  userId?: string;

  propertyType?: string;
  placeName?: string;
  rentalForm?: string;
  numberOfPortions?: number;

  street?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: string;
  center?: object;

  portionName?: string[];
  portionSize?: number[];
  guests?: number[];
  bedrooms?: number[];
  beds?: number[];
  bathroom?: number[];
  kitchen?: number[];
  childrenAge?: number[];

  basePrice?: number[];
  weekendPrice?: number[];
  monthlyDiscount?: number[];
  currency?: string;

  generalAmenities?: object;
  otherAmenities?: object;
  safeAmenities?: object;

  smoking?: string;
  pet?: string;
  party?: string;
  cooking?: string;
  additionalRules?: string[];

  reviews?: string[];

  propertyCoverFileUrl?: string;
  propertyPictureUrls?: string[];
  portionCoverFileUrls?: string[];
  portionPictureUrls?: string[][];

  night: number[];
  time: number[];
  datesPerPortion: number[][];

  isLive?: boolean;
}

interface checkBoxState {
  [key: string]: any;
}

const PageAddListing10: FC<PageAddListing10Props> = () => {
  const { user } = useUser();

  const clearLocalStorage = () => {
    localStorage.removeItem("page1");
    localStorage.removeItem("page2");
    localStorage.removeItem("page3");
    localStorage.removeItem("page4");
    localStorage.removeItem("page5");
    localStorage.removeItem("page6");
    localStorage.removeItem("page8");
    localStorage.removeItem("page9");
    localStorage.removeItem("propertyCoverFileUrl");
    localStorage.removeItem("propertyPictureUrls");
    localStorage.removeItem("portionCoverFileUrls");
    localStorage.removeItem("portionPictureUrls");
    localStorage.removeItem("AmenitiesToRetrieve");
    localStorage.removeItem("isImages");
    localStorage.removeItem("isPortionPictures");
    localStorage.removeItem("isPropertyPictures");
  };

  const [propertyCoverFileUrl, setPropertyCoverFileUrl] = useState<string>(
    () => {
      const savedPage = localStorage.getItem("propertyCoverFileUrl") || "";
      return savedPage || "";
    }
  );

  const [page3, setPage3] = useState<Page3State>(() => {
    const savedPage = localStorage.getItem("page3") || "";
    if (savedPage) {
      return JSON.parse(savedPage);
    }
    return "";
  });

  const [page2, setPage2] = useState<Page2State>(() => {
    const savedPage = localStorage.getItem("page2") || "";
    if (savedPage) {
      return JSON.parse(savedPage);
    }
    return "";
  });

  const [basePrice, setBasePrice] = useState<number>(() => {
    const saved = localStorage.getItem("page8");
    if (!saved) {
      return 0;
    }
    const value = JSON.parse(saved);
    return parseInt(value.basePrice[0]) || 0;
  });

  const [combinedData, setCombinedData] = useState<CombinedData>();

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      const page1 = JSON.parse(localStorage.getItem("page1") || "{}");
      const page2 = JSON.parse(localStorage.getItem("page2") || "{}");
      const page3 = JSON.parse(localStorage.getItem("page3") || "{}");
      const page4 = JSON.parse(localStorage.getItem("page4") || "[{}, {}, {}]");
      const page5 = JSON.parse(localStorage.getItem("page5") || "{}");
      const page6 = JSON.parse(localStorage.getItem("page6") || "{}");
      // const page7 = JSON.parse(localStorage.getItem('page7') || '{}');
      const page8 = JSON.parse(localStorage.getItem("page8") || "{}");
      const page9 = JSON.parse(localStorage.getItem("page9") || "{}");
      const AmenitiesToRetrieve = JSON.parse(
        localStorage.getItem("AmenitiesToRetrieve") || "{}"
      );

      const propertyPictureUrls = JSON.parse(
        localStorage.getItem("propertyPictureUrls") || "[]"
      );
      const portionCoverFileUrls = JSON.parse(
        localStorage.getItem("portionCoverFileUrls") || "[]"
      );
      const portionPictureUrls = JSON.parse(
        localStorage.getItem("portionPictureUrls") || "[[]]"
      );

      console.log("page4: ", page4);
      // Combine all the data from the pages
      const combinedData = {
        ...page1,
        ...page2,
        ...page3,
        ...page4,
        ...page5,
        ...page6,
        ...page8,
        ...page9,
        propertyCoverFileUrl,
        propertyPictureUrls,
        portionCoverFileUrls,
        portionPictureUrls,
        // generalAmenities: {
        //   ...AmenitiesToRetrieve["generalAmenities"],
        // },
        // otherAmenities: { ...AmenitiesToRetrieve["otherAmenities"] },
        // safeAmenities: { ...AmenitiesToRetrieve["safeAmenities"] },
        userId: user?.id,
      };
      setCombinedData(combinedData);
      return combinedData;
    };

    const data = fetchDataFromLocalStorage();
    console.log("fetched data: ", data);
  }, [user, propertyCoverFileUrl]);

  const handleGoLive = async () => {
    // console.log('clicked go live', combinedData);
    console.log("user id before request: ", user?.id);
    const data = {
      userId: user?.id,

      propertyType: combinedData?.propertyType,
      placeName: combinedData?.placeName,
      rentalForm: combinedData?.rentalForm,
      numberOfPortions: combinedData?.numberOfPortions,

      street: combinedData?.street,
      postalCode: combinedData?.postalCode,
      city: combinedData?.city,
      state: combinedData?.state,
      country: combinedData?.country,
      center: combinedData?.center,

      portionName: combinedData?.portionName,
      portionSize: combinedData?.portionSize,
      guests: combinedData?.guests,
      bedrooms: combinedData?.bedrooms,
      beds: combinedData?.beds,
      bathroom: combinedData?.bathroom,
      kitchen: combinedData?.kitchen,
      childrenAge: combinedData?.childrenAge,

      basePrice: combinedData?.basePrice,
      weekendPrice: combinedData?.weekendPrice,
      monthlyDiscount: combinedData?.monthlyDiscount,
      currency: combinedData?.currency,

      // generalAmenities: { ...combinedData?.generalAmenities },
      // otherAmenities: { ...combinedData?.otherAmenities },
      // safeAmenities: { ...combinedData?.safeAmenities },
      generalAmenities: combinedData?.generalAmenities,
      otherAmenities: combinedData?.otherAmenities,
      safeAmenities: combinedData?.safeAmenities,

      smoking: combinedData?.smoking,
      pet: combinedData?.pet,
      party: combinedData?.party,
      cooking: combinedData?.cooking,
      additionalRules: combinedData?.additionalRules,

      reviews: combinedData?.reviews,

      propertyCoverFileUrl: combinedData?.propertyCoverFileUrl,
      propertyPictureUrls: combinedData?.propertyPictureUrls,
      portionCoverFileUrls: combinedData?.portionCoverFileUrls,
      portionPictureUrls: combinedData?.portionPictureUrls,

      night: combinedData?.night,
      time: combinedData?.time,
      datesPerPortion: combinedData?.datesPerPortion,

      isLive: true,
    };

    console.log("data: ", data);

    try {
      console.log("data in try: ", data);
      const response = await axios.post("/api/users", data);
      console.log("id: ", data?.userId, typeof data?.userId);
      if (data?.userId) {
        toast.success("Property is successfully live!");
      } else {
        toast.error("User must be logged in to go live");
      }
      console.log("response: ", response);
    } catch (error) {
      console.log("error");
      toast.error("User must be logged in to go live");
      throw error;
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Congratulations 🎉</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Excellent, congratulations on completing the listing, it is waiting to
          be reviewed for publication
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div>
        <h3 className="text-lg font-semibold mb-4">This is your listing</h3>
        {/* <div className="max-w-xs">
          <StayCard
            className="mt-8"
            data={{ ...DEMO_STAY_LISTINGS[0], reviewStart: 0 }}
          />
        </div> */}

        <Link href={"/listing-stay-detail"}>
          <div
            className="card"
            style={{
              width: "15rem",
              border: "1px solid gray",
              borderRadius: "10px",
              height: "22rem",
            }}
          >
            {/* <img
              src={propertyCoverFileUrl}
              className="card-img-top h-56 w-96 rounded-xl"
              alt="..."
            /> */}
            <Image src={propertyCoverFileUrl} className="card-img-top h-56 w-96 rounded-xl" alt="..." width={200} height={300} layout="responsive" />
            <div className="card-body mt-2 ml-2">
              <h1 className="mt-2">{page3.portionName[0]}</h1>
            </div>
            <div className="flex gap-2 ml-2 mt-2 items-center">
              <FaLocationDot />
              <h6>
                {page2.city}, {page2.country}
              </h6>
            </div>
            <hr className=" w-16 border-gray-600 boder-2 my-2" />
            <div className=" mt-1 font-medium text-xl ml-2">
              € {basePrice ? basePrice : "--/--"} /night
            </div>
          </div>
        </Link>

        <div className="flex items-center space-x-2 mt-8">
          <ButtonSecondary
            href={"/add-listing/1" as Route}
            className=" -ml-1 -p-8"
          >
            <PencilSquareIcon className="h-3 w-3 -ml-4" />
            <span className="ml-3 text-sm">Edit</span>
          </ButtonSecondary>

          <Link href={"/listing-stay-detail"}>
            <ButtonPrimary className="-p-4">
              <EyeIcon className="h-3 w-3 -ml-4" />
              <span className="ml-3 text-sm -p-2   -mr-2">Preview</span>
            </ButtonPrimary>
          </Link>

          {/* <Link href={"/listing-stay-detail"}> */}
          <ButtonSecondary className="-p-4" onClick={handleGoLive}>
            {/* <img
              src="https://img.icons8.com/?size=100&id=fJXFbcW0WrW9&format=png&color=000000"
              alt=""
              className="bg-green-400 w-4 h-4 -ml-4 ronded-xl"
            /> */}
						<Image src="https://img.icons8.com/?size=100&id=fJXFbcW0WrW9&format=png&color=000000" alt="" className="bg-green-400 w-4 h-4 -ml-4 ronded-xl"/>
            <span className="ml-3 text-sm -p-2 -mr-4">Go Live</span>
          </ButtonSecondary>
          {/* </Link> */}

          {/* <h1>User Id: {user?.id}</h1> */}
        </div>
      </div>
      <ToastContainer />
      {/*  */}
    </>
  );
};

export default PageAddListing10;
