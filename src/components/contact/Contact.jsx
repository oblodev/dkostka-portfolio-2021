import React from "react";
import "./contact.scss";
import { GitHub, Twitter, ArrowForwardIos } from "@material-ui/icons";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3kk9tlp",
        "template_j143vi8",
        formRef.current,
        "user_rBqyeDZjKyFf6rddCecp2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2 className="contact-title">Let's get in touch</h2>
            <div className="contact-info">
              <div className="contact-info-item">
                <p>
                  If you have a project that you want to get started, think you
                  need my help with something or just fancy saying hey, then get
                  in touch.{" "}
                </p>
                <p class="bolded">Available for freelance work: </p>
                <a href="www.google.com" className="mail">
                  hello@dkostka.dev
                </a>
              </div>
              <div className="icon-wrapper">
                <div className="contact-info-icons">
                  <a href="www.github.com">
                    <GitHub className="c-icon" />
                  </a>
                </div>
                <div className="contact-info-icons">
                  <a href="www.twitter.com">
                    <Twitter className="c-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h2 className="contact-title">Contact</h2>

            <form ref={formRef}>
              <div class="form-group">
                <label for="name">Your Name:</label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  class="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Email Address:</label>
                <input
                  id="email"
                  name="user_email"
                  type="text"
                  class="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label for="form-message">How can I Help you?</label>
                <textarea
                  id="form-message"
                  name="message"
                  class="form-control py-1"
                  rows="5"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>

              <button className="btn" type="submit" onClick={handleSubmit}>
                Send
                <span>
                  <ArrowForwardIos className="arrow" />
                </span>
              </button>
              {done && <p> Your message was successfully sent!</p>}
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2021 All Rights Reserved. </p>
        <p>
          Designed by <span className="kostka">dkostka.dev</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
