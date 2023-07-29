import styles from "./bottomBar.module.css";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const BottomBar = () => {
  return (
    <div className={styles.divx}>
      <div className={styles.frameParent}>
        <div className={styles.logo32Parent}>
          <img
            className={styles.carbonarrowRightIcon}
            alt=""
            src="/logo-3-2.svg"
          />
          <div className={styles.materialSymbolslocationOnOParent}>
            <img
              className={styles.materialSymbolslocationOnOIcon}
              alt=""
              src="/materialsymbolslocationonoutline.svg"
            />
            <div className={styles.loremIpsumDolorSitAmetConParent}>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Velit convallis fusce bibendum pharetra felis id morbi. Pretium dis penatibus justo eu varius senectus volutpat urna elementum. Ullamcorper nulla `}</div>
              <div className={styles.div1}>+91 1234567890, +91 9876543210</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <button className={styles.homeWrapper}>
              <div className={styles.caseStudieszz}>Home</div>
            </button>
            <button className={styles.homeWrapper}>
              <div className={styles.caseStudieszz}>Case studies</div>
            </button>
          </div>
          <div className={styles.frameDiv}>
            <button className={styles.homeWrapper}>
              <div className={styles.caseStudieszz}>About us</div>
            </button>
            <button className={styles.homeWrapper}>
              <div className={styles.caseStudieszz}>Blogs</div>
            </button>
          </div>
          <div className={styles.frameParent1}>
            <button className={styles.homeWrapper}>
              <div className={styles.caseStudieszz}>Our services</div>
            </button>
            <button className={styles.homeWrapper}>
              <div className={styles.caseStudieszz}>Testimonials</div>
            </button>
          </div>
          <button className={styles.privacyPolicyWrapper}>
            <div className={styles.privacyPolicy}>Privacy policy</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
