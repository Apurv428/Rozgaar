import React, { useState } from "react";
import "./Contact.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [telephone, setTelephone] = useState("");
  const [loader, setLoader] = useState(false);
  const contactCollectionRef = collection(db, "contacts");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    await addDoc(contactCollectionRef, {
      name: name,
      email: email,
      message: message,
      telephone: telephone,
      postedOn: serverTimestamp(),
    })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
        navigate("/");
      })
      .catch((error) => {
        setName("");
        setEmail("");
        setTelephone("");
        setMessage("");
        alert(error.message);
        setLoader(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <span className="big-circle"></span>
        {/* <img src="img/shape.png" className="square" alt="" /> */}
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p>VJTI college,Matunga,Mumbai-400019,Maharashtra,India</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>rozgaarr22@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>+91-4754478444</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100080103665295"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/RRozgaarr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/rozgaarr22/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="www.linkedin.com/in/rozgaarr
"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit}>
              <h3 className="title1">CONTACT US!</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                  required
                  onChange={(e) => setTelephone(e.target.value)}
                />
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span>Message</span>
              </div>
              <input
                type="submit"
                style={{ background: loader ? "#ccc" : " #fff",color:loader ? "#fff" :"black"}}
                value="Send"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
