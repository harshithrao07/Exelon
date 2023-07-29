"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import { createContext } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [perPage, setPerPage] = useState(4);
  const data = {
    domains: [
      {
        title: "Web design and development",
        description:
          "We offer customized design with Interactive UI that provides the best user experience.",
      },
      {
        title: "Mobile app Development",
        description:
          "We develop interactive business apps that are useful in day-to-day business activities.",
      },
      {
        title: "E-commerce solutions",
        description:
          "Delight you with our enterprise eCommerce solutions fully tailored to your business requirements.",
      },
      {
        title: "Industry 4.0",
        description:
          "We offer solutions for various industrial needs like automation, IIOT, traceability, machine connectivity etc.",
      },
      {
        title: "Educational portal Development",
        description:
          "We provide you a single platform where you can easily store  and track all student information, including grades, attendance records, and more.",
      },
      {
        title: "Embedded system design",
        description:
          "A full range of design services for embedded system development that include electronic circuit design & analysis, printed circuit board design etc.",
      },
      {
        title: "Iot systems solutions",
        description:
          "We provide IoT solutions, services and products to bring digital transformation to your business.",
      },
      {
        title: "Product Design and Development",
        description:
          "We help our customers convert their ideas into products. We take care of the complete product development process right from conceptualization to prototyping.",
      },
    ],
    slides: [
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
      {
        slide: [
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/240/116",
              media: "(min-width: 1024px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/160/80",
              media: "(min-width: 490px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/44/100/50",
              media: "(max-width: 489px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/44/240/116",
          alt: "Image",
          className: "{styles.frameChild10}",
        },
      },
    ],
    member: [
      {
        sources: [
          {
            source: {
              srcSet: "https://picsum.photos/id/64/285/285",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/200/200",
              media: "(min-width: 900px) and (max-width: 1230px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/130/130",
              media: "(min-width: 320px) and (max-width: 899px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/80/80",
              media: "(max-width: 320px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/64/285/285",
          alt: "Image",
          className: "{styles.frameChild6}",
        },
        name: "Melroy Pinto",
        Role: "Database Expert",
      },
      {
        sources: [
          {
            source: {
              srcSet: "https://picsum.photos/id/64/285/285",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/200/200",
              media: "(min-width: 900px) and (max-width: 1230px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/130/130",
              media: "(min-width: 320px) and (max-width: 899px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/80/80",
              media: "(max-width: 320px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/64/285/285",
          alt: "Image",
          className: "{styles.frameChild6}",
        },
        name: "Melroy Pinto",
        Role: "Database Expert",
      },
      {
        sources: [
          {
            source: {
              srcSet: "https://picsum.photos/id/64/285/285",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/200/200",
              media: "(min-width: 900px) and (max-width: 1230px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/130/130",
              media: "(min-width: 320px) and (max-width: 899px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/80/80",
              media: "(max-width: 320px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/64/285/285",
          alt: "Image",
          className: "{styles.frameChild6}",
        },
        name: "Melroy Pinto",
        Role: "Database Expert",
      },
      {
        sources: [
          {
            source: {
              srcSet: "https://picsum.photos/id/64/285/285",
              media: "(min-width: 2560px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/200/200",
              media: "(min-width: 900px) and (max-width: 1230px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/130/130",
              media: "(min-width: 320px) and (max-width: 899px)",
            },
          },
          {
            source: {
              srcSet: "https://picsum.photos/id/64/80/80",
              media: "(max-width: 320px)",
            },
          },
        ],
        img: {
          src: "https://picsum.photos/id/64/285/285",
          alt: "Image",
          className: "{styles.frameChild6}",
        },
        name: "Melroy Pinto",
        Role: "Database Expert",
      },
    ],
    "case-studies": [
      {
        Name: "Rathna Constructions",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam. Massa ultricies penatibus id tristique ut pharetra enim dolor venenatis.",
        Year: "2022",
        Domain: "Website Development",
        to: "/case_studies/rathna-constructions",
      },
      {
        Name: "Cine Galaxy",
        Description:
          "Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam. Massa ultricies penatibus id tristique ut pharetra enim dolor venenatis.",
        Year: "2022",
        Domain: "Website Development",
        to: "/case_studies/cine-galaxy",
      },
    ],

    blogs: [
      {
        sources: [
          {
            srcSet: "https://picsum.photos/id/2/285/285",
            media: "(min-width: 2560px)",
          },
          {
            srcSet: "https://picsum.photos/id/2/113/113",
            media: "(min-width: 701px) and (max-width: 1230px)",
          },
          {
            srcSet: "https://picsum.photos/id/2/142/142",
            media: "(min-width: 320px) and (max-width: 700px)",
          },
          {
            srcSet: "https://picsum.photos/id/11/80/80",
            media: "(max-width: 320px)",
          },
        ],
        img: {
          src: "https://picsum.photos/id/65/285/285",
          alt: "Image",
          className: "{styles.rectangleIcon}",
        },
        blogTitle: "Blog title goes here, it can be a long sentence",
        blogcontent:
          "Fostering true agile software development and delivery through DevOps",
      },
      {
        sources: [
          {
            srcSet: "https://picsum.photos/id/2/285/285",
            media: "(min-width: 2560px)",
          },
          {
            srcSet: "https://picsum.photos/id/2/113/113",
            media: "(min-width: 701px) and (max-width: 1230px)",
          },
          {
            srcSet: "https://picsum.photos/id/2/142/142",
            media: "(min-width: 320px) and (max-width: 700px)",
          },
          {
            srcSet: "https://picsum.photos/id/11/80/80",
            media: "(max-width: 320px)",
          },
        ],
        img: {
          src: "https://picsum.photos/id/65/285/285",
          alt: "Image",
          className: "{styles.rectangleIcon}",
        },
        blogTitle: "Blog title goes here, it can be a long sentence",
        blogcontent:
          "Fostering true agile software development and delivery through DevOps",
      },
      {
        sources: [
          {
            srcSet: "https://picsum.photos/id/2/285/285",
            media: "(min-width: 2560px)",
          },
          {
            srcSet: "https://picsum.photos/id/2/113/113",
            media: "(min-width: 701px) and (max-width: 1230px)",
          },
          {
            srcSet: "https://picsum.photos/id/2/142/142",
            media: "(min-width: 320px) and (max-width: 700px)",
          },
          {
            srcSet: "https://picsum.photos/id/11/80/80",
            media: "(max-width: 320px)",
          },
        ],
        img: {
          src: "https://picsum.photos/id/65/285/285",
          alt: "Image",
          className: "{styles.rectangleIcon}",
        },
        blogTitle: "Blog title goes here, it can be a long sentence",
        blogcontent:
          "Fostering true agile software development and delivery through DevOps",
      },
    ],
  };

  const domains: any = [];
  data.domains.forEach((domain: any) => {
    domains.push(
      <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
        <div className={styles.rectangleParent11}>
          <div className={styles.rectangleDiv} />
          <div className={styles.blogTitleGoesHereItCanBParent7}>
            <b className={styles.webDesignAnd}>{domain.title}</b>
            <div className={styles.weDevelopInteractive}>
              {domain.description}
            </div>
          </div>
        </div>
      </Grid>
    );
  });

  const slides: any = [];
  data.slides.forEach((slid: any) => {
    const sources: any = [];
    let img;
    slid.slide.forEach((src: any) => {
      sources.push(
        <source srcSet={src.source.srcSet} media={src.source.media} />
      );
    });
    img = (
      <img
        alt={slid.img.alt}
        src={slid.img.src}
        className={slid.img.className}
      />
    );
    slides.push(
      <SplideSlide>
        <picture>
          {sources}
          {img}
        </picture>
      </SplideSlide>
    );
  });

  const members: any = [];
  data.member.forEach((mem: any) => {
    const sources: any = [];
    let img, name, role;
    mem.sources.forEach((src: any) => {
      sources.push(
        <source srcSet={src.source.srcSet} media={src.source.media} />
      );
    });
    img = (
      <img alt={mem.img.alt} src={mem.img.src} className={mem.img.className} />
    );
    role = mem.Role;
    name = mem.name;
    members.push(
      <div className={styles.whoWeAreParent}>
        <picture>
          {sources}
          {img}
        </picture>
        <div className={styles.melroyPintoParent}>
          <div className={styles.melroyPinto}>{name}</div>
          <div className={styles.databaseExpert}>{role}</div>
        </div>
      </div>
    );
  });

  const caseStudies: any = [];
  data["case-studies"].forEach((cs: any) => {
    caseStudies.push(
      <Link href={cs.to}>
        <div className={styles.inner4} key={cs.Name}>
          <div className={styles.frameParent44}>
            <div className={styles.frameParent54}>
              <div className={styles.frameWrapper4}>
                <div className={styles.rathnaConstructionsParent4}>
                  <div className={styles.rathnaConstructions4}>{cs.Name}</div>
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
            <div className={styles.frameChild44}>
              <div className={styles.infiniteScrollContainer}>
                <img
                  src="https://picsum.photos/id/65/285/285"
                  alt="Portrait Image"
                  className={styles.portraitImage}
                />
                <img
                  src="https://picsum.photos/id/2/142/142"
                  alt="Portrait Image"
                  className={styles.portraitImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  const blogs: any = [];
  data.blogs.forEach((b: any) => {
    const sources: any = [];
    b.sources.forEach((src: any) => {
      sources.push(<source srcSet={src.srcSet} media={src.media} />);
    });
    blogs.push(
      <div className={styles.whoWeAreParent}>
        <picture>
          {sources}
          <img src={b.img.src} alt={b.img.alt} className={b.img.className} />
        </picture>
        <div className={styles.blogTitleGoesHereItCanBParent}>
          <b className={styles.blogTitleGoes}>{b.blogTitle}</b>
          <div className={styles.fosteringTrueAgile}>{b.blogcontent}</div>
        </div>
      </div>
    );
  });

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
            <Link href={"#aboutUs"} className={styles.aboutUs1}>
              ABOUT US
            </Link>
          </button>
          <button className={styles.aboutUsContainer}>
            <Link href={"#services"} className={styles.aboutUs1}>
              <div className={styles.aboutUs1}>OUR SERVICES</div>
            </Link>
          </button>
          <button className={styles.aboutUsContainer}>
            <Link href={"#caseStudies"} className={styles.aboutUs1}>
              <div className={styles.aboutUs1}>case studies</div>
            </Link>
          </button>
          <button className={styles.aboutUsContainer}>
            <Link href={"#blogs"} className={styles.aboutUs1}>
              <div className={styles.aboutUs1}>BLOGS</div>
            </Link>
          </button>
          <button className={styles.aboutUsContainer}>
            <Link href={"#testimonials"} className={styles.aboutUs1}>
              <div className={styles.aboutUs1}>testimonials</div>
            </Link>
          </button>
        </div>
        <img
          id="menuToggle"
          className={styles.menuham}
          alt=""
          src="/menuham.png"
        />
      </div>

      <div className={styles.div9}>
        <div className={styles.excellencyIsThe}>
          EXCELLENCY IS THE KEY IN ALL OUR ENDEAVOURS
        </div>
        <div className={styles.loremIpsumDolor7}>
          Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer diam.
          Massa ultricies penatibus id tristique ut pharetra enim dolor
          venenatis. Duis pellentesque porta odio sodales sit ultricies.
        </div>
        <button className={styles.frameButton}>
          <div className={styles.learnMoreParent}>
            <div className={styles.learnMore}>Learn more</div>
            <img
              className={styles.carbonarrowRightIcon}
              alt=""
              src="/carbonarrowright.svg"
            />
          </div>
        </button>
      </div>

      <div className={styles.div8} id="aboutUs">
        <div className={styles.inner1}>
          <div className={styles.whoWeAreParent}>
            <div className={styles.whoWeAre}>WHO WE ARE</div>
            <div className={styles.weAreAll}>
              WE ARE ALL ABOUT PERFECTION AND EXCELLENCY
            </div>
            <div className={styles.loremIpsumDolor6}>
              Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer
              diam. Massa ultricies penatibus id tristique ut pharetra enim
              dolor venenatis. Duis pellentesque porta odio sodales sit
              ultricies. Tempus vulputate sit id metus suspendisse.
            </div>
          </div>
        </div>
        <div className={styles.frameParent15}>
          <img className={styles.frameIcon} alt="" src="/frame-97.svg" />
          <div className={styles.weAreAll1}>
            WE ARE ALL ABOUT PERFECTION AND EXCELLENCY
          </div>
        </div>
      </div>

      <div className={styles.div7} id="services">
        <div className={styles.aFewGoodThingsWeveHeardParent1}>
          <b className={styles.caseStudiesAnd1}>
            We help our partners harness the power of internet and technologies
          </b>
          <div className={styles.aSentenceGoes1}>
            From startups to established enterprises.
          </div>
        </div>
        <Grid
          container
          spacing={5}
          className={styles.grid7}
          justifyContent="center"
          alignItems="flex-start"
          maxWidth="xl"
        >
          {domains}
        </Grid>
      </div>

      <div className={styles.div6}>
        <div className={styles.haveALookContainer6}>
          <p className={styles.haveALook6}>
            Powering the world’s best product teams.
          </p>
          <p className={styles.theseBlogsFeature6}>
            From next-gen startups to established enterprises.
          </p>
        </div>
      </div>

      <div className={styles.div6splide}>
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            interval: 1000,
            pauseOnHover: false,
            resetProgress: false,
            perPage: perPage,
            perMove: 1,
            speed: 50000,
            // height       : '15rem',
            arrows: false,
            hideToc: true,
            pagination: false,
          }}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
        >
          <SplideTrack>{slides}</SplideTrack>
        </Splide>
      </div>

      <div className={styles.div5}>
        <div className={styles.haveALookContainer5}>
          <p className={styles.haveALook5}>
            Our team consists of the best in the industry
          </p>
          <p className={styles.theseBlogsFeature5}>
            Each with their unique skillset forming a strong group of experts
          </p>
        </div>
        <div className={styles.frameParent10}>{members}</div>
      </div>

      <div className={styles.div4} id="caseStudies">
        <div className={styles.caseStudiesAndASentenceToParent4}>
          <b className={styles.caseStudiesAnd4}>
            Case studies and a sentence to go along with it
          </b>
          <div className={styles.aSentenceGoes4}>A sentence goes here</div>
        </div>
        <div>{caseStudies}</div>
      </div>

      <div className={styles.div3} id="blogs">
        <div className={styles.haveALookContainer}>
          <p className={styles.haveALook}>Have a look at a few of our blogs</p>
          <p className={styles.theseBlogsFeature}>
            These blogs feature our methodologies and some good practises
          </p>
        </div>
        <div className={styles.frameParent3}>{blogs}</div>
      </div>

      <div className={styles.div2} id="testimonials">
        <div className={styles.aFewGoodThingsWeveHeardParent}>
          <b className={styles.aFewGood}>A few good things we’ve heard</b>
          <div className={styles.aSentenceGoes}>A sentence goes here</div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.rectangleParent}>
            <picture>
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 2560px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 701px) and (max-width: 1230px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 320px) and (max-width: 700px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(max-width: 320px)"
              />
              <img
                src="/rectangle-41@2x.png"
                alt="Image"
                className={styles.frameChild}
              />
            </picture>
            <div className={styles.loremIpsumDolor1}>
              “ Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer
              diam. Massa ultricies penatibus id tristique ut pharetra enim
              dolor venenatis. “
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <picture>
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 2560px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 701px) and (max-width: 1230px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 320px) and (max-width: 700px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(max-width: 320px)"
              />
              <img
                src="/rectangle-41@2x.png"
                alt="Image"
                className={styles.frameChild}
              />
            </picture>
            <div className={styles.loremIpsumDolor1}>
              “ Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer
              diam. Massa ultricies penatibus id tristique ut pharetra enim
              dolor venenatis. “
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <picture>
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 2560px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 701px) and (max-width: 1230px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(min-width: 320px) and (max-width: 700px)"
              />
              <source
                srcSet="/rectangle-41@2x.png"
                media="(max-width: 320px)"
              />
              <img
                src="/rectangle-41@2x.png"
                alt="Image"
                className={styles.frameChild}
              />
            </picture>
            <div className={styles.loremIpsumDolor1}>
              “ Lorem ipsum dolor sit amet consectetur. Donec nisl ut integer
              diam. Massa ultricies penatibus id tristique ut pharetra enim
              dolor venenatis. “
            </div>
          </div>
        </div>
      </div>

      <div className={styles.div}>
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
                <div className={styles.caseStudies}>Home</div>
              </button>
              <button className={styles.homeWrapper}>
                <div className={styles.caseStudies}>Case studies</div>
              </button>
            </div>
            <div className={styles.frameDiv}>
              <button className={styles.homeWrapper}>
                <div className={styles.caseStudies}>About us</div>
              </button>
              <button className={styles.homeWrapper}>
                <div className={styles.caseStudies}>Blogs</div>
              </button>
            </div>
            <div className={styles.frameParent1}>
              <button className={styles.homeWrapper}>
                <div className={styles.caseStudies}>Our services</div>
              </button>
              <button className={styles.homeWrapper}>
                <div className={styles.caseStudies}>Testimonials</div>
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
}
