import React from 'react'
import Layout from '../components/layout'
import TextBlock from '../components/textblock'
import CompanyInfo from '../components/companyInfo'

export default ({ data }) => (
  <Layout>

    <TextBlock heading={"💪 Carieer Objective"}>
      <p>
        <strong>Front-end Web Developer position</strong> with working experience in web development in a design agency or a software company. Seeking to utilize my skills in front-end web development.
      </p>
    </TextBlock>

    <TextBlock heading={"👍 Skills & Tools"}>
      <p>
        Lorem Ipsum
      </p>
    </TextBlock>

    <TextBlock heading={"👨‍💻 Work Experience"}>
      <CompanyInfo
        jobtitle="Junior Web Developer"
        company="Signals Design Group"
        period="Sep. 2019 - June 2020"
        location="Vancouver, Canada"
        time="Full-time & Part-time"
        description={[
          'Build responsive websites from scratch with modern HTML, CSS and JavaScript',
          'Create original WordPress custom templates with Advanced Custom Field',
          'Utilize popular libraries and frameworks (React.js, GSAP, ScrollMagic, Barba, Bodymovin, etc.) to create interactive user interface',
          'Deploy websites to staging and live with SSH connection',
          'Closely Work with design and management team to realize functionality, browser compatibility, and usability of the website along with the timeline',
          'Add functions, replace assets, and edit text contents quickly upon client requests',
          'Create HTML email templates for MailChimp, Spark, and Lasso'
        ]}
      />
      <CompanyInfo
        jobtitle="PR Manager & In-house Designer"
        company="KUMONOS Corporation"
        period="Apr. 2015 - Aug. 2018"
        location="Osaka, Japan"
        time="Full-time"
        description={[
          'Designed and managed corporate website and blog',
          'Designed promotional materials (brochures, flyers, exhibition booth, etc.) with Illustrator and Photoshop',
          'SEO optimization and online marketing with Google Analytics and Ads',
          'Business trips: US, Germany, Hong Kong, Vietnam, Malaysia and Indonesia',
          'Market research in Vietnam for three months'
        ]}
      />
      <CompanyInfo
        jobtitle="Intern"
        company="Ministry of Economy, Trade and Industry (The Government of Japan)"
        period="Sep. 2017 - Feb. 2018"
        location="Ho Chi Minh City, Vietnam & Tokyo, Japan"
        description={[
          'Designed and managed corporate website and blog',
          'Designed promotional materials (brochures, flyers, exhibition booth, etc.) with Illustrator and Photoshop',
          'SEO optimization and online marketing with Google Analytics and Ads',
          'Business trips: US, Germany, Hong Kong, Vietnam, Malaysia and Indonesia',
          'Market research in Vietnam for three months'
        ]}
      />
      <CompanyInfo
        jobtitle="CG Designer"
        company="IAO Takeda Associates Architects"
        period="Sep. 2017 - Feb. 2018"
        location="Ho Chi Minh City, Vietnam & Tokyo, Japan"
        time="Part-time"
      />
    </TextBlock>
    
  </Layout>
)