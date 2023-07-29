"use client";

import styles from "./page.module.css";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

// export const getStaticPaths= async()=>{
//     const res=await fetch();
//     const data=await res.json();
//     const path=data.map(case=>{
//       return {
//         params:{id:case.id.toString()}
//       }
//     })
//     return{
//       paths,
//       fallback:false
//     }
// }
// export const getStaticProps = async(context)=>{
//   const id=context.params.id;
//   const res=await fetch();
//   const data=await res.json();
//   return{
//     props:{case:data}
//   }
// }

const CaseStudies = () => {
  const [perPage, setPerPage] = useState(4);
  const case_Studies = {
    "case-studies": [
      {
        Name: "Rathna Constructions",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam. Massa ultricies penatibus id tristique ut pharetra enim dolor venenatis.",
        Problem:
          "Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus augue nulla tristique facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat leo egestas neque dui condimentum ultrices.",
        Step: "Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus augue nulla tristique facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat leo egestas neque dui condimentum ultrices.",
        Outcome:
          "Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus augue nulla tristique facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat leo egestas neque dui condimentum ultrices.",
        Year: "2022",
        Domain: "Website Development",
        slide: [
          {
            source: [
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-32@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-32@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
          {
            source: [
              { srcSet: "/rathna-42@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-42@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-42@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-42@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-42@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
          {
            source: [
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-32@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-32@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
          {
            source: [
              { srcSet: "/rathna-43@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-43@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-43@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-43@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-43@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
        ],
      },
      {
        Name: "Cine Galaxy",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam. Massa ultricies penatibus id tristique ut pharetra enim dolor venenatis.",
        Problem:
          "Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus augue nulla tristique facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat leo egestas neque dui condimentum ultrices.",
        Step: "Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus augue nulla tristique facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat leo egestas neque dui condimentum ultrices.",
        Outcome:
          "Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus augue nulla tristique facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat leo egestas neque dui condimentum ultrices.",
        Year: "2022",
        Domain: "Website Development",
        slide: [
          {
            source: [
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-32@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-32@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
          {
            source: [
              { srcSet: "/rathna-42@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-42@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-42@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-42@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-42@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
          {
            source: [
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-32@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-32@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-32@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
          {
            source: [
              { srcSet: "/rathna-43@2x.png", media: "(min-width: 2560px)" },
              { srcSet: "/rathna-43@2x.png", media: "(min-width: 1024px)" },
              { srcSet: "/rathna-43@2x.png", media: "(min-width: 490px)" },
              { srcSet: "/rathna-43@2x.png", media: "(max-width: 489px)" },
            ],
            img: {
              src: "/rathna-43@2x.png",
              alt: "Image",
              className: "{styles.caseStudiesSplidePic}",
            },
          },
        ],
      },
      //add next project here
    ],
  };

  const caseStudy: any = [];
  case_Studies["case-studies"].forEach((cs: any) => {
    const slider: any = [];
    cs.slide.forEach((sl: any) => {
      const sources: any = [];
      let img;
      sl.source.forEach((src: any) => {
        sources.push(<source media={src.media} srcSet={src.srcSet} />);
      });
      img = (
        <img src={sl.img.src} alt={sl.img.alt} className={sl.img.className} />
      );
      slider.push(
        <SplideSlide>
          <picture>
            {sources}
            {img}
          </picture>
        </SplideSlide>
      );
    });
    caseStudy.push(
      <div>
        <div>
          <Grid container maxWidth="1440px" spacing={3}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={styles.csdiv2}>
                <div className={styles.csdiv2container}>
                  <div className={styles.csdiv2title}>{cs.Name}</div>
                  <div className={styles.csdiv2content}>{cs.Description}</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container maxWidth="1440px" spacing={3}>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className={styles.csdiv3in}>
                <div className={styles.csdiv3incontainer}>
                  <b className={styles.csdiv3title}>Problem statement</b>
                  <div className={styles.csdiv3content}>{cs.Problem}</div>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className={styles.csdiv3in}>
                <div className={styles.csdiv3incontainer}>
                  <b className={styles.csdiv3title}>Steps taken to achieve</b>
                  <div className={styles.csdiv3content}>{cs.Step}</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.caseStudiesSplide}>
          <Splide
            options={{
              type: "loop",
              gap: "1rem",
              autoplay: true,
              interval: 0,
              pauseOnHover: false,
              resetProgress: false,
              perPage: perPage,
              perMove: 1,
              speed: 80000,
              // height       : '15rem',
              arrows: false,
              hideToc: true,
              pagination: false,
            }}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <SplideTrack>{slider}</SplideTrack>
          </Splide>
        </div>

        <div className={styles.csdiv5}>
          <Grid container maxWidth="1440px" spacing={3} alignContent="center">
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className={styles.csdiv3in}>
                <div className={styles.csdiv3incontainer}>
                  <b className={styles.csdiv3title}>Outcome of the project</b>
                  <div className={styles.csdiv3content}>{cs.Outcome}</div>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className={styles.csdiv3in}>
                <div className={styles.csdiv3frameparent}>
                  <div className={styles.csdiv3incontainer}>
                    <b className={styles.csdiv3title}>
                      Want to get a similar project done?
                    </b>
                    <div className={styles.csdiv3content}>
                      Contact us using the link below
                    </div>
                  </div>
                  <div className={styles.contactUsWrapper}>
                    <div className={styles.contactUs}>Contact us</div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  });

  useEffect(() => {
    const updatePerPage = () => {
      const screenWidth = window.innerWidth;
      let newPerPage = 3;
      if (screenWidth <= 768 && screenWidth > 375) {
        newPerPage = 2;
      } else if (screenWidth <= 375) {
        newPerPage = 1;
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
    <div className={styles.caseStudies}>
      <div className={styles.div10}>
        <img className={styles.logo31} alt="" src="/logo-3-1.svg" />
        <div className={styles.frameParent16}>
          <button className={styles.aboutUsContainer}>
            <Link href={"/#aboutUs"}>
              <div className={styles.aboutUs1}>ABOUT US</div>
            </Link>
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

      <div className={styles.caseStudiesLargeContainer}>
        <div className={styles.caseStudiesPoster}>
          {/* <img className={styles.rathna3Icon} alt="" src="/rathna-31@2x.png" />
        <img className={styles.rathna2Icon} alt="" src="/rathna21@2x.png" />
        <img className={styles.rathna1Icon} alt="" src="/rathna11@2x.png" />
        <img className={styles.rathna5Icon} alt="" src="/rathna51@2x.png" />
        <img className={styles.rathna4Icon} alt="" src="/rathna41@2x.png" /> */}
        </div>

        {/* <div className={styles.csdiv2}>
        <div className={styles.csdiv2container}>
          <div className={styles.csdiv2title}>Rathna Constructions</div>
          <div className={styles.csdiv2content}>
            Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
            lacus egestas. Phasellus augue nulla tristique facilisis in amet
            porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
            quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac
            proin sapien interdum adipiscing morbi nibh risus nullam. Velit
            metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed
            vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor
            risus faucibus elit. Eu consequat leo egestas neque dui condimentum
            ultrices.
          </div>
        </div>
      </div>

      <div className={styles.csdiv3}>
        <div className={styles.csdiv3in}>
          <div className={styles.csdiv3incontainer}>
            <b className={styles.csdiv3title}>Problem statement</b>
            <div className={styles.csdiv3content}>
              Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
              lacus egestas. Phasellus augue nulla tristique facilisis in amet
              porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
              quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus.
              Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit
              metus tortor enim quisque egestas ullamcorper bibendum morbi ut.
              Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi
              tempor risus faucibus elit. Eu consequat leo egestas neque dui
              condimentum ultrices.
            </div>
          </div>
        </div>
        <div className={styles.csdiv3in}>
          <div className={styles.csdiv3incontainer}>
            <b className={styles.csdiv3title}>Steps taken to achieve</b>
            <div className={styles.csdiv3content}>
              Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
              lacus egestas. Phasellus augue nulla tristique facilisis in amet
              porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
              quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus.
              Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit
              metus tortor enim quisque egestas ullamcorper bibendum morbi ut.
              Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi
              tempor risus faucibus elit. Eu consequat leo egestas neque dui
              condimentum ultrices.
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className={styles.grid}>
      <Grid container spacing={2}  maxWidth="1300px">
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <div className={styles.csdiv2}>
            <div className={styles.csdiv2container}>
              <div className={styles.csdiv2title}>Rathna Constructions</div>
              <div className={styles.csdiv2content}>
                Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
                lacus egestas. Phasellus augue nulla tristique facilisis in amet
                porta ipsum. Senectus mattis ultrices nisi nec adipiscing
                volutpat quam eu. Scelerisque nisi vulputate elit pulvinar at
                diam tellus. Ac proin sapien interdum adipiscing morbi nibh
                risus nullam. Velit metus tortor enim quisque egestas
                ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla
                sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu
                consequat leo egestas neque dui condimentum ultrices.
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className={styles.csdiv3}>
        <div className={styles.csdiv3in}>
          <div className={styles.csdiv3incontainer}>
            <b className={styles.csdiv3title}>Problem statement</b>
            <div className={styles.csdiv3content}>
              Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
              lacus egestas. Phasellus augue nulla tristique facilisis in amet
              porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
              quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus.
              Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit
              metus tortor enim quisque egestas ullamcorper bibendum morbi ut.
              Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi
              tempor risus faucibus elit. Eu consequat leo egestas neque dui
              condimentum ultrices.
            </div>
          </div>
        </div>
        <div className={styles.csdiv3in}>
          <div className={styles.csdiv3incontainer}>
            <b className={styles.csdiv3title}>Steps taken to achieve</b>
            <div className={styles.csdiv3content}>
              Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
              lacus egestas. Phasellus augue nulla tristique facilisis in amet
              porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
              quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus.
              Ac proin sapien interdum adipiscing morbi nibh risus nullam. Velit
              metus tortor enim quisque egestas ullamcorper bibendum morbi ut.
              Sed vestibulum tristique nulla sit. Lectus ullamcorper non mi
              tempor risus faucibus elit. Eu consequat leo egestas neque dui
              condimentum ultrices.
            </div>
          </div>
        </div>
      </div>
        </Grid>
    </Grid>*/}
      </div>
      <div>{caseStudy}</div>

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
                <div className={styles.div1}>
                  +91 1234567890, +91 9876543210
                </div>
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
    </div>
  );
};

export default CaseStudies;
