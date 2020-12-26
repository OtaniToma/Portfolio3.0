import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextBlock from '../components/textblock'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = ({ location }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = event => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "subject":
        setSubject(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        console.log("key not found");
    }
  };

  const canSubmit = () => {
    if (name === "") return true;
    if (email === "") return true;
    if (subject === "") return true;
    if (message === "") return true;

    return false;
  };

  return (
    <Layout>
      <SEO
        pagetitle="Contact"
        pagedesc="Test for Netlify form"
        pagepath={location.pathname}
      />

      <TextBlock heading={"Get in Touch"} pagetop={true}>
        <div className="contact">
          <form
            name="contact"
            action="/thanks"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="contact__area">
              <TextField
                id="name"
                className="contact__field"
                name="name"
                label="Name"
                type="text"
                variant="outlined"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__area">
              <TextField
                id="email"
                className="contact__field"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__area">
              <TextField
                id="subject"
                className="contact__field"
                name="subject"
                label="Subject"
                type="text"
                variant="outlined"
                value={subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact__area">
              <TextField
                id="message"
                className="contact__field"
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                value={message}
                onChange={handleChange}
              />
            </div>
            <div className="contact__btn">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={canSubmit()}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </TextBlock>
    </Layout>
  );
};

export default Contact;