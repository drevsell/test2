import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundColor: "rgba(251, 251, 254)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
       <br /> <h1
          className={`text-[30px] leading-[1.2] 800px:text-[40px] text-[#433bff] font-[700] capitalize`}
        >
          DREVSELL <br/> MARKETPLACE
        </h1>
        <p className="pt-5 text-[17px] font-[Poppins] font-[400] text-[#050315]">
        Drevsell is the go-to platform for listing and geting buyers, through diverse digital products like eBooks, PDFs, wallpapers, templates, printables, courses, stock photos, audio, social media resources, and stickers. Buyers can message the seller to proceed with purchase.
        <br /><br /> Sellers can list their digital products and reach a wide audience, turning their creativity into skyrocketing income. With digital products shaping the future, Drevsell empowers sellers to thrive while offering buyers an unmatched variety of digital solutions. Start your journey with Drevsell today!{" "}
          <br />
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[roboto-condensed] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
