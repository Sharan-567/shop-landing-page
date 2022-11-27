import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import career from "../assets/career.png";
// import discover from "../assets/discover.png";
// import enhance from "../assets/enhance.png";
// import improve from "../assets/improve.png";
// import noImage from "../assets/no-img.png";
import landing from "../assets/landing.png";
import logo from "../assets/sphechoLogo.png";
import colorLogo from "../assets/colorlogo.png";
// store
import therapy from "../assets/therapy.png";
import play from "../assets/play.png";
import hearing from "../assets/hearing.png";
import kit from "../assets/kit.png";
// resoure hub
import educational from "../assets/educational.png";
import organised from "../assets/organised.png";
import worksheet from "../assets/worksheets.png";
import bundles from "../assets/bundles.png";
// sell
import support from "../assets/support.png";
import growth from "../assets/growth.png";
import transparent from "../assets/transparency.png";

import apple from "../assets/apple.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import ins from "../assets/in.png";
import playstore from "../assets/playstore.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";
import "./shop.scss";

const Shop = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <Banner />
      <StoreContainer />
      <ResourceHub />
      {/* <TitleContainer /> */}
      <TopCategories />
      {/* <Board />
      <Committe />
      <InternalCommitee /> */}
      {/* <FAQS /> */}
      <Sell />
      <Detail />
      <RequestForm />
      <NewLetter />
      <Footer />
    </div>
  );
};

const NavBar = () => {
  return (
    <Navbar
      className="nav-bar-container"
      style={{
        position: "absolute",
        top: "1%",
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="170rem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="search-container">
          <input className="search-input" type="search" placeholder="search" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              STORE
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              RESOURCE HUB
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              SELL
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              SUPPORT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="login"
              className="text-white b-700 link-nav"
            >
              REGISTER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Banner = () => {
  return (
    <div
      className="banner-container position-relative"
      style={{ height: "130vh", width: "100%" }}
    >
      <svg
        id="svgPath"
        viewBox="0 0 1438 693"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.001390820584, 0.00144300144)"
              d="M153 598C56.6 601.2 56.5 630 0.5 660V0.5H1437.5V566C1413.05 580.421 1210.85 695.396 1066.5 692C913.885 688.409 817.872 566 758 566C641.5 566 550.202 680 465.5 680C341.5 680 273.5 594 153 598Z"
              stroke="black"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="clip-container w-100 position-relative">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block coursel-img"
              src={landing}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <div className="banner-title">
          <h1 className="container">
            YOU CAN ALWAYS
            <i>
              <b style={{ fontSize: "3rem" }}> FIND</b>
            </i>{" "}
            <br></br>
            SOMETHING YOU
            <i>
              <b style={{ fontSize: "3rem" }}> WANT</b>
            </i>
          </h1>
        </div>
      </div>
    </div>
  );
};

const TitleContainer = () => {
  return (
    <div className="title-content">
      <p>
        The SPHECHO curriculum and cerification program is for professionals who
        are responsible for the support and/or services provided to people of
        determination. The program's objective is to offer a comprehensive,
        multidisciplinary training program and specialized credential to
        professionals in order to supplement their existing knowledge, make sure
        they are up to date on best practices and research, and ensure they
        incorporate new knowledge into professional practice.
      </p>
    </div>
  );
};

const StoreContainer = () => {
  const store = [
    {
      name: "THERAPY MATERIALS",
      img: therapy,
    },
    {
      name: `PLAY & DEVELOPMENT`,
      img: play,
    },
    {
      name: `HEARING AIDS & ACCESSSORIES`,
      img: hearing,
    },
    {
      name: `STARTER KIT`,
      img: kit,
    },
  ];

  return (
    <div className="container w-75 text-center">
      <h2 className="benefits-title bg-600 text-center mb-4 pb-4">STORE</h2>
      <Row>
        {store.map((s) => (
          <Col key={s.name} sm="3" className="mb-4">
            <img className="shop-img" src={s.img} />
            <p className="m-auto b-600 w-50 mt-3">{s.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const ResourceHub = () => {
  const hubImgs = [educational, organised, worksheet, bundles];
  return (
    <div className="container w-75 text-center" style={{ marginTop: "7rem" }}>
      <h2 className="benefits-title bg-600 text-center mb-4 pb-4">
        RESOURCE HUB
      </h2>
      <Row>
        {hubImgs.map((h) => (
          <Col key={h} sm="3">
            <Link to="">
              <img src={h} style={{ width: "15rem" }} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const TopCategories = () => {
  const categories = [
    {
      title: "SHOP BY DEPARTMENT",
      items: [
        "SHOP BY DEPARTMENT",
        "SHOP BY DEPARTMENT",
        "OCCUPATIONAL THERAPY",
        "BEHAVIORAL & PSYCHOLOGICAL",
        "PHYSIOTHERAPY",
        "COUNCELLING",
        "---",
        "COUNCELLING",
        "---",
      ],
    },
    {
      title: "POPULAR WITH PROVIDERS",
      items: [
        "ORAL MOTOR TOOL",
        "SPEECH KIT",
        "BOARD GAMES",
        "PUZZLES",
        "PEPPAPIG BUBBLES",
        "FLUENCY KIT",
        "---",
        "FINGER PUPPETS",
        "---",
      ],
    },
    {
      title: "TOP SELLERS",
      items: [
        "FINGER PUPPETS",
        "PUZZLES",
        "PEPPAPIG BUBBLES",
        "SPEECH KIT",
        "FLUENCY KIT",
        "ORAL MOTOR TOOL",
        "---",
        "BOARD GAMES",
        "---",
      ],
    },
  ];
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F1F0EE"
          d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,74.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div
        className="m-auto"
        style={{ background: "#F1F0EE", marginTop: "-10%", zIndex: 19 }}
      >
        <h2 className="benefits-title bg-600 text-center mb-4">
          TOP CATEGORIES
        </h2>
        <Row className="mt-4 m-auto p-3" style={{ maxWidth: "1150px" }}>
          {categories.map((c) => (
            <Col key={c.title} sm="4" className="p-3">
              <div
                className="br-3 bg-white shadow"
                style={{ overflow: "hidden" }}
              >
                <h5 className="text-center p-3 text-white bg-landingPrimary">
                  {c.title}
                </h5>
                <div className="d-flex flex-wrap p-2 py-4 my-4">
                  {c.items.map((item) =>
                    item !== "---" ? (
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <div
                          style={{
                            borderRadius: "7rem",
                            backgroundColor: "gray",
                            width: "5.5rem",
                            height: "5.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: "1",
                            margin: ".5rem",
                            marginBottom: "1em",
                          }}
                        >
                          <p
                            className="text-center text-white"
                            style={{
                              fontSize: ".55rem",
                              width: "70%",
                              marginTop: "1em",
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div style={{ width: "5.5rem", margin: ".5em" }}></div>
                    )
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <svg
        style={{ marginTop: "-1rem", zIndex: "-400" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F1F0EE"
          d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

const Sell = () => {
  const sellimgs = [support, growth, transparent];
  return (
    <div className="container ">
      <h2 className="benefits-title bg-600 text-center mb-4 pb-4">
        SELL ON SPHECHO
      </h2>
      <div className="w-75 m-auto">
        <Row>
          {sellimgs.map((image, idx) => (
            <Col key={idx} sm="4">
              <img src={image} width="250rem" />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

// const Board = () => {
//   return (
//     <div className="text-center w-75 m-auto">
//       <h1 className="text-landingPrimary b-600 mb-4">SPHECHO BOARD</h1>
//       <p className="my-4" style={{ fontSize: "1.2rem" }}>
//         The SPHECHO certification procedures and content undergo various reviews
//         and validation, pursuant to the professions that are eligible for
//         certification, as well as standards established by content experts in
//         the field across the globe. Please click on a topic below to view common
//         questions. Once you have chosen your topic simply click any question to
//         reveal the answer. Can’t find an answer to your question? Contact us
//         today. Our board at SPHECHO is commitied to ensuring the creation and
//         implementation of world-class training and certification programs that
//         will enhance the general standard of care and instruction for
//         professionals, parents, and caregivers. The Board is made up of a
//         variety of the world's top experts, researchers from prestigious
//         universities, special education directors, corporate leaders, clinicians
//         in the field of mental health, speech therapists, occupational
//         therapists, physiotherapists, behavioral therapists and psychologists,
//         counsellors, audiologists, and parents.
//       </p>
//     </div>
//   );
// };

// const Member = ({
//   name,
//   title,
//   img,
// }: {
//   name: string;
//   title: string;
//   img?: string;
// }) => {
//   return (
//     <div>
//       <img
//         className="fluid shadow mb-3"
//         src={noImage}
//         width="180rem"
//         style={{ borderRadius: "50%" }}
//       />
//       <p className="mb-1 b-600" style={{ fontSize: "1.4rem" }}>
//         {name}
//       </p>
//       <p>
//         <i style={{ fontSize: "1.2rem" }}>{title}</i>
//       </p>
//     </div>
//   );
// };

// const Committe = () => {
//   const advaisoryMemebers = [
//     {
//       id: 1,
//       name: "Dr. Swaleha Mohamedali",
//       title: "Educational consultant",
//     },
//     {
//       id: 2,
//       name: "Dr. Aamir Khamis Al Toubi",
//       title: "Consultant Speech Language Pathologist",
//     },
//     {
//       id: 3,
//       name: "Udaya Kiran Guttarlapalle",
//       title: "Senior Speech Language Pathologist",
//     },
//   ];

//   return (
//     <div className="container" style={{ marginTop: "7rem" }}>
//       <div
//         style={{ width: "90%" }}
//         className="m-auto br-4 bg-landingGary text-center py-5 px-4"
//       >
//         <h5 className="mb-4 pb-3">ADVISORY PANEL MEMBERS</h5>
//         <Row className="mb-2">
//           {advaisoryMemebers.map((member) => (
//             <Col key={member.id} sm="4" className="text-center">
//               <Member {...{ ...member }} />
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// const InternalCommitee = () => {
//   const members = [
//     [
//       {
//         id: 1,
//         name: "Sathish Chandra Segar",
//         title: `Clinical Director at the Qatar Institute for Speech & Hearing`,
//       },
//       {
//         id: 2,
//         name: "Hebatulla Ibrahim Farrag",
//         title: `Clinical Director and Speech and Language Pathologist at the Qatar Institute for Speech & Hearing`,
//       },
//       {
//         id: 3,
//         name: "Varun G Rai",
//         title: `Clinical Audiologist and Application
// Specialist at the Qatar Institute for
// Speech & Hearing`,
//       },
//     ],
//     [
//       {
//         id: 1,
//         name: "Jaseena NK",
//         title: `Human Resource Manager at
// Qatar Institute for Speech & Hearing`,
//       },
//       {
//         id: 2,
//         name: "Mahmoud El Abassiry",
//         title: `Manager at Qatar Institute for
// Speech & Hearing`,
//       },
//       {
//         id: 3,
//         name: "Tamer Rashed",
//         title: `Manager at Qatar Institute for
// Speech & Hearing Rehabilitation Center`,
//       },
//     ],
//   ];

//   return (
//     <div
//       className="container"
//       style={{ marginTop: "7rem", marginBottom: "6rem" }}
//     >
//       <div
//         style={{ width: "90%" }}
//         className="m-auto br-4 bg-landingGary text-center py-5 px-4"
//       >
//         <h5 className="mb-4 pb-3">INTERNAL REVIEW COMMITTEE</h5>
//         <Row className="mb-4">
//           {members[0].map((member) => (
//             <Col key={member.id} sm="4" className="text-center">
//               <Member {...{ ...member }} />
//             </Col>
//           ))}
//         </Row>
//         <Row className="mb-2">
//           {members[1].map((member) => (
//             <Col key={member.id} sm="4" className="text-center">
//               <Member {...{ ...member }} />
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

const FAQS = () => {
  const faqs = [
    {
      id: 1,
      header: "What is the SPHECHO Certification Program",
    },
    {
      id: 2,
      header: "Who verifies the SPHECHO credentials?",
    },
    {
      id: 3,
      header: "What is the value in becoming certified?",
    },
    {
      id: 4,
      header: "What job can I get with this certification?",
    },
    {
      id: 5,
      header:
        "Once I register to begin my certification program, how long do I have to complete the training and exam?",
    },
    {
      id: 6,
      header: "Is the online learning available on demand?",
    },
    {
      id: 7,
      header: "When do the courses start?",
    },
    {
      id: 8,
      header: "When do the courses start?",
    },
    {
      id: 9,
      header:
        "After I complete my final exam and submit my application, how long will it be before I get my certification?",
    },
  ];

  return (
    <div
      className="container m-auto text-center"
      style={{ marginBottom: "5rem" }}
    >
      <div className="w-75 m-auto ">
        <h1 className="text-landingPrimary my-4">FREQUENTLY ASKED QUESTIONS</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "6rem" }}>
          Please click on a topic below to view common questions. Once you have
          chosen your topic simply click any question to reveal the answer.
          Can’t find an answer to your question? Contact us today
        </p>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              eventKey={`${faq.id}`}
              className="accordion-item"
            >
              <Accordion.Header>
                <p className="accordin-title">{faq.header}</p>
              </Accordion.Header>
              <Accordion.Body
                className="accordin-content"
                style={{ fontSize: "1.2rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const RequestForm = () => {
  return (
    <div className="bg-image" style={{ margin: "8rem 0rem" }}>
      <div className="container p-2">
        <div className="m-auto text-center py-4 my-4" style={{ zIndex: 10 }}>
          <h2 className="text-white mb-3 b-700">CONTACT US</h2>

          <div className="input-container">
            <Row>
              <Col sm="6" className="p-3">
                <input className="input px-2" placeholder="Name" />
              </Col>
              <Col sm={6} className="p-3">
                <input className="input px-2" placeholder="Phone" />
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="p-3">
                <input className="input" placeholder="Email address" />
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <p className="text-white">Your Message</p>
                <textarea className="input px-4" style={{ height: "6rem" }} />
              </Col>
            </Row>
            <Button className="bg-white text-black">Sumbit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <div
      className="container position-relative"
      style={{ marginTop: "6rem", marginBottom: "5rem" }}
    >
      <Row>
        <Col sm="6">
          <img
            src={landing}
            width="650px"
            height="650px"
            style={{
              borderRadius: "40rem",
              objectFit: "cover",
              marginLeft: "-10rem",
              marginBottom: "2rem",
            }}
          />
        </Col>
        <Col
          sm="6"
          style={{ fontSize: "1.1rem" }}
          className="d-flex justify-content-center align-items-center b-500 p-2"
        >
          <div className="position-relative">
            <p>
              SPHECHO Shop is a growing platform for selling online. Be it a
              manufacturer, vendor or supplier, simply sell your products online
              on SPHECHO and become a top e-commerce player with minimum
              investment. Through a team of experts offering exclusive at
              support@sphecho.com, SPHECHO focuses on empowering sellers across
              the globe.
            </p>
            <p>
              Selling on SPHECHO is effortless. All you need is to register, and
              the assigned account manager will get in touch with you.
            </p>
            <div className="circle"></div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const NewLetter = () => {
  return (
    <div className="mb-5 pb-4">
      <div className="container mb-4">
        <div className="m-auto w-75">
          <h2
            className=" text-center mb-4 b-700"
            style={{ color: "rgb(163, 160, 160)" }}
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <Row>
            <Col sm="9" className="p-2">
              <input
                className="newLetter-input"
                placeholder="Enter your Email Address"
              ></input>
            </Col>
            <Col sm="3" className="p-2 m-auto">
              <Button className="newsLetter-btn">Subscribe</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const speechLinks = [
    {
      title: "SPEECH THERAPY",
    },
    {
      title: "EDUCATIONAL CONSULTATION",
    },
    {
      title: "OCCUPATIONAL THERAPY",
    },
    {
      title: "BEHAVIORAL & PSYCHOLOGICAL",
    },
    {
      title: "PHYSIOTHERAPY",
    },
    {
      title: "COUNSELLING",
    },
    {
      title: "AUDIOLOGY",
    },
  ];

  const usefullLinks = [
    {
      title: "PROVIDERS",
    },
    {
      title: "SPHECHO SERVICE",
    },
    {
      title: "SPHECHO SHOP",
    },
    {
      title: "SPHECHO SCHOLAR",
    },
  ];

  const aboutUs = [
    {
      title: "BLOG",
    },
    {
      title: "PRIVACY POLICY",
    },
    {
      title: "TERMS & CONDITIONS",
    },
    {
      title: "RENEWAL POLICY",
    },
    {
      title: "CERTIFICATION PROCESS",
    },
    {
      title: "DIGITAL BADGES",
    },
  ];

  return (
    <footer>
      <div className="">
        <Row>
          <Col sm="3" className="p-4">
            <div className="d-flex flex-column align-items-center">
              <img src={colorLogo} width="126rem" />
              <div className="d-flex mt-2">
                <img
                  src={fb}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={ig}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={ins}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={tw}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={yt}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
              </div>
              <img
                src={playstore}
                width="150rem"
                style={{ display: "block", marginTop: "1rem" }}
              />
              <img
                src={apple}
                width="150rem"
                style={{ display: "block", marginTop: "1rem" }}
              />
            </div>
          </Col>
          <Col sm="9">
            <div className="navlinks-container-footer p-3">
              <Row>
                <Col sm="2"></Col>
                <Col sm="4" className="p-2">
                  <p className="b-700 mb-2 link-header">DEPARTMENTS</p>
                  {speechLinks.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
                <Col sm="3">
                  <p className="b-700 mb-2 link-header">USEFUL LINKS</p>
                  {usefullLinks.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
                <Col sm="3">
                  <p className="b-700 mb-2 link-header">ABOUT US</p>
                  {aboutUs.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Shop;
