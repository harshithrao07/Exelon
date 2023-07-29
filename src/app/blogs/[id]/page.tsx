"use client";

import styles from "./page.module.css";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const Blogs = () => {
  return (
    <div className={styles.Blogs}>
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

      <div className={styles.BlogsLargeContainer}>
        <div className={styles.blogstitle}>
          Title of the blog goes here, it can span multiple lines
        </div>
        <div className={styles.authordiv}>
          <img
            className={styles.blogsauthorpic}
            alt=""
            src="/ellipse-6@2x.png"
          />
          <div className={styles.blogsauthorname}>Ranjini Aithal</div>
        </div>
        <div className={styles.blogsdatetime}>12th June 2023, 09:23 PM</div>

        <div className={styles.BlogsPoster}>
          {/* <img className={styles.rathna3Icon} alt="" src="/rathna-31@2x.png" />
        <img className={styles.rathna2Icon} alt="" src="/rathna21@2x.png" />
        <img className={styles.rathna1Icon} alt="" src="/rathna11@2x.png" />
        <img className={styles.rathna5Icon} alt="" src="/rathna51@2x.png" />
        <img className={styles.rathna4Icon} alt="" src="/rathna41@2x.png" /> */}
        </div>

        <div className={styles.BlogsContent}>
          <div>
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
          <div>
            Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
            lacus egestas. Phasellus augue nulla tristique facilisis in amet
            porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
            quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac
            proin sapien interdum adipiscing morbi nibh risus nullam. Velit
            metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed
            vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor
            risus faucibus elit. Eu consequat leo egestas neque dui condimentum
            ultrices. Lorem ipsum dolor sit amet consectetur. Amet mus
            scelerisque id lacus egestas. Phasellus augue nulla tristique
            facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec
            adipiscing volutpat quam eu. Scelerisque nisi vulputate elit
            pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi
            nibh risus nullam. Velit metus tortor enim quisque egestas
            ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit.
            Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat
            leo egestas neque dui condimentum ultrices.Lorem ipsum dolor sit
            amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus
            augue nulla tristique facilisis in amet porta ipsum. Senectus mattis
            ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi
            vulputate elit pulvinar at diam tellus. Ac proin sapien interdum
            adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque
            egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique
            nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu
            consequat leo egestas neque dui condimentum ultrices.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Amet mus scelerisque id
            lacus egestas. Phasellus augue nulla tristique facilisis in amet
            porta ipsum. Senectus mattis ultrices nisi nec adipiscing volutpat
            quam eu. Scelerisque nisi vulputate elit pulvinar at diam tellus. Ac
            proin sapien interdum adipiscing morbi nibh risus nullam. Velit
            metus tortor enim quisque egestas ullamcorper bibendum morbi ut. Sed
            vestibulum tristique nulla sit. Lectus ullamcorper non mi tempor
            risus faucibus elit. Eu consequat leo egestas neque dui condimentum
            ultrices. Lorem ipsum dolor sit amet consectetur. Amet mus
            scelerisque id lacus egestas. Phasellus augue nulla tristique
            facilisis in amet porta ipsum. Senectus mattis ultrices nisi nec
            adipiscing volutpat quam eu. Scelerisque nisi vulputate elit
            pulvinar at diam tellus. Ac proin sapien interdum adipiscing morbi
            nibh risus nullam. Velit metus tortor enim quisque egestas
            ullamcorper bibendum morbi ut. Sed vestibulum tristique nulla sit.
            Lectus ullamcorper non mi tempor risus faucibus elit. Eu consequat
            leo egestas neque dui condimentum ultrices.Lorem ipsum dolor sit
            amet consectetur. Amet mus scelerisque id lacus egestas. Phasellus
            augue nulla tristique facilisis in amet porta ipsum. Senectus mattis
            ultrices nisi nec adipiscing volutpat quam eu. Scelerisque nisi
            vulputate elit pulvinar at diam tellus. Ac proin sapien interdum
            adipiscing morbi nibh risus nullam. Velit metus tortor enim quisque
            egestas ullamcorper bibendum morbi ut. Sed vestibulum tristique
            nulla sit. Lectus ullamcorper non mi tempor risus faucibus elit. Eu
            consequat leo egestas neque dui condimentum ultrices.
          </div>
        </div>

        <div className={styles.csdiv5}>
          <Grid container maxWidth="1440px" spacing={3} alignContent="center">
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className={styles.csdiv5frameDiv}>
                <div className={styles.csdiv5frameWrapper}>
                  <div className={styles.csdiv5container}>
                    <b className={styles.csdiv5head}>About the author</b>
                    <div className={styles.csdiv5author}>
                      <img
                        className={styles.csdiv5authorpic}
                        alt=""
                        src="/ellipse-7@2x.png"
                      />
                      <div className={styles.csdiv5authorabout}>
                        Lorem ipsum dolor sit amet consectetur. Mi odio lobortis
                        varius sit. Consectetur vitae senectus blandit cras.
                        Donec massa dolor nulla vulputate feugiat blandit. Lorem
                        ipsum dolor sit amet consectetur. Mi odio lobortis
                        varius sit. Consectetur vitae senectus blandit cras.
                        Donec massa dolor nulla vulputate feugiat blandit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className={styles.blogsdiv4in}>
                <div className={styles.blogsdiv4frameparent}>
                  <div className={styles.blogsdiv4incontainer}>
                    <b className={styles.blogsdiv4title}>
                      Want to get a similar project done?
                    </b>
                    <div className={styles.blogsdiv4content}>
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

export default Blogs;
