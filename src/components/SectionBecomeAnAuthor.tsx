import React, { FC } from "react";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Logo from "@/shared/Logo";
import Image from "next/image";
import logo1 from "@/images/companyLogo/logo1.png"

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        {/* <Logo className="w-20" /> */}
        <Image src={logo1} alt="Logo" width={100} height={100}/>
        <img src="" alt="" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Why did you choose us?
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Vacation Saga is a prime vacation holiday rental brand, welcoming
          guests by providing them suitable holiday lettings. We help our
          travellers to find ideal holiday homes and allow you to search holiday
          lettings easily by filtering the price range, date, amenities,
          according to your needs. Stays are extremely affordable in holiday
          apartments and country cottages. 
          {/* From a couch in a holiday apartment
          to an entire villa in Europe, Asia and United States, you’ll find
          everything with us. We provide short term holiday rentals with easy
          ways of bookings. By providing luxurious holiday homes with basic
          touches like balcony, refrigerator, parking, air conditioner and many
          more facilities, we continue to offer the best to our customers. */}
        </span>
        <ButtonPrimary className="mt-6 sm:mt-11 bg-customOrange" >
          Become an Owner
        </ButtonPrimary>
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
