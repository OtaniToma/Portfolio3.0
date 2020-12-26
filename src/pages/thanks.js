import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextBlock from '../components/textblock'

const Thanks = ({ location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="Thanks"
        pagedesc="Test for Netlify form"
        pagepath={location.pathname}
      />

      <TextBlock heading={"Get in Touch"} pagetop={true}>
        Thank you!
      </TextBlock>
    </Layout>
  );
};

export default Thanks;
