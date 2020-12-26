import React, { useState } from 'react'
import { Link, graphql } from "gatsby";
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextBlock from '../components/textblock'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = ({ location }) => {

  return (
    <Layout>
      <SEO
        pagetitle="Contact"
        pagedesc="Test for Netlify form"
        pagepath={location.pathname}
      />

      <TextBlock heading={"Get in Touch"} pagetop={true}>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </TextBlock>
    </Layout>
  );
};

export default Contact;
