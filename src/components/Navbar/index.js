import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

// import { useEffect, useRef, useState } from "react";
// import { FaMicrophone } from "react-icons/fa";
// import { BrowserRouter,Navigate } from "react-router-dom";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 40rem;
  max-width: 60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.2rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem;
    cursor: pointer;
  }
`;
const Navbar = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  // const commands = [
  //   {
  //     command: ["Go to * page", "Go to *", "Open * page", "Open *"],
  //     callback: (redirectPage) => setRedirectUrl(redirectPage),
  //   },
  // ];

  // const { transcript } = useSpeechRecognition({ commands });
  // console.log(transcript);
  // const [redirectUrl, setRedirectUrl] = useState("");
  // const pages = ["home", "about", "contact"];
  // const urls = {
  //   home: "/",
  //   about: "/login",
  //   contact: "/",
  // };

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null;
  // }

  // let redirect = "";

  // if (redirectUrl) {
  //   if (pages.includes(redirectUrl)) {
  //     console.log(redirectUrl);
  //    <Navigate replace={true} to="/" />;
  //   }
  //   redirect = <p>Could not find page: {redirectUrl}</p>;

  // }

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="Rozgaarr" />
        <h3>Rozgaarr</h3>
      </Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Services</a>
        {/* <a href="/company">Recruiters</a>
        <a href="/user">Job Seekers</a> */}
        <a href="/jobs">Jobs</a>
        <a href="/contact">Contact Us</a>
        <a href="/faq">
          FAQ
        </a>
        {/* <a href="/login">
          <Button>Login</Button>
        </a> */}
        <a href="/">
          <Button>Welcome</Button>
        </a>
        {/* <a>
          <Button onClick={SpeechRecognition.startListening}>
            <FaMicrophone />
          </Button>
        </a> */}
        {/* <a href="/login">{transcript}</a> */}
      </Nav>
      <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Services</a>
        {/* <a href="/company">Recruiters</a>
        <a href="/user">Job Seekers</a> */}
        <a href="/jobs">Jobs</a>
        <a href="/contact">Contact Us</a>
        <a href="/faq">
          FAQ
        </a>
        {/* <a href="/login">
          <Button>Login</Button>
        </a> */}
        <a href="/">
          <Button>Welcome</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Navbar;
