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
        <form
          name="contact"
          action="/thanks"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="form-group">
            <label>お名前<abbr title="required">*</abbr>
              <input type="text" className="form-control" id="name" name="name" placeholder="お名前" maxlength="30" minlength="2" required autocomplete="name" />
            </label>
          </div>
          <div className="form-group">
            <label>メールアドレス<abbr title="required">*</abbr>
              <input type="email" className="form-control" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" />
            </label>
          </div>
          <div className="form-group">
            <label>お問い合わせ内容<abbr title="required">*</abbr>
              <textarea className="form-control" id="contact" name="content" rows="8" required></textarea>
            </label>
          </div>

          <div className="form-group">
            <button type="submit">送信</button>
          </div>
        </form>
      </TextBlock>
    </Layout>
  );
};

export default Contact;
