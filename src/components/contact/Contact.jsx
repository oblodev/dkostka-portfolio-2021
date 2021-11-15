import React from "react";
import "./contact.scss";
import { GitHub, Twitter } from "@material-ui/icons";

function Contact() {
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

            <form
              id="contact-form"
              class="form-border"
              action="php/mail.php"
              method="post"
            >
              <div class="form-group">
                <label for="name">Your Name:</label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  class="form-control"
                  required
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
                ></textarea>
              </div>
              <p class="pt-2 mb-0 text-center text-lg-left">
                <button id="submit-btn" class="btn" type="submit">
                  Send
                  <span class="ml-3">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </p>
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
