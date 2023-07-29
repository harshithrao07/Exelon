"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import { createContext } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";

import { useRouter } from 'next/router'

const case_Studies={"case-studies":[{"id":"rathna_constrcutions","Name":"Rathna Constructions",
"Description":"Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam. Massa ultricies penatibus id tristique ut pharetra enim dolor venenatis.",
"Year":"2022",
"Domain":"Website Development"},
{"id":"cine_galaxy","Name":"Cine Galaxy",
"Description":"Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam. Massa ultricies penatibus id tristique ut pharetra enim dolor venenatis.",
"Year":"2022",
"Domain":"Website Development"},]}
const handleClick = (e) => {
  e.preventDefault()
  router.push(href)
}

// export const getStaticProps = async () => {
//   const res = await fetch();
//   const data = await res.json();
//   return {
//     props: {case:data}
//   }
// }

export default function AllCase() {
  const [perPage, setPerPage] = useState(4);



    const caseStudies:any=[]
    case_Studies["case-studies"].forEach((cs:any)=>{
      caseStudies.push(
      <div className={styles.inner4}>
        <div className={styles.frameParent44}>
          <div className={styles.frameParent54}>
            <div className={styles.frameWrapper4}>
              <div className={styles.rathnaConstructionsParent4}>
                <div className={styles.rathnaConstructions4}>
                  {cs.Name}
                </div>
                <div className={styles.loremIpsumDolor44}>
                  {cs.Description}
                </div>
              </div>
            </div>
            <div className={styles.frameParent64}>
              <div className={styles.yearParent4}>
                <div className={styles.year4}>Year</div>
                <b className={styles.b4}>{cs.Year}</b>
              </div>
              <div className={styles.yearParent4}>
                <div className={styles.year4}>Domain</div>
                <b className={styles.b4}>{cs.Domain}</b>
              </div>
            </div>
          </div>
          <div className={styles.frameChild44} />
        </div>
      </div>
    
      )
    })
    

  useEffect(() => {
    const updatePerPage = () => {
      const screenWidth = window.innerWidth;
      let newPerPage = 4;
      if (screenWidth <= 768 && screenWidth > 375) {
        newPerPage = 3;
      } else if (screenWidth <= 375) {
        newPerPage = 2;
      }
      setPerPage(newPerPage);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => {
      window.removeEventListener("resize", updatePerPage);
    };
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.div10}>
        <img className={styles.logo31} alt="" src="/logo-3-1.svg" />
        <div className={styles.frameParent16}>
          <button className={styles.aboutUsContainer}>
            <div className={styles.aboutUs1}>ABOUT US</div>
          </button>
          <button className={styles.aboutUsContainer}>
            <div className={styles.aboutUs1}>OUR SERVICES</div>
          </button>
          <button className={styles.aboutUsContainer}>
            <div className={styles.aboutUs1}>case studies</div>
          </button>
          <button className={styles.aboutUsContainer}>
            <div className={styles.aboutUs1}>BLOGS</div>
          </button>
          <button className={styles.aboutUsContainer}>
            <div className={styles.aboutUs1}>testimonials</div>
          </button>
        </div>
        <img
          id="menuToggle"
          className={styles.menuham}
          alt=""
          src="/menuham.png"
        />
      </div>
      <div className={styles.div4}>
        <div className={styles.caseStudiesAndASentenceToParent4}>
          <b className={styles.caseStudiesAnd4}>
            Case studies and a sentence to go along with it
          </b>
          <div className={styles.aSentenceGoes4}>A sentence goes here</div>
        </div>
        <div onClick={handleClick}>
          {caseStudies}
        </div>
      </div>
    </div>
  );
}
