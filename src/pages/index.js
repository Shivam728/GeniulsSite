import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
// import { Home } from 'sections/home.screen';
// import Features from 'sections/features';
import FaqOne from 'sections/faq-one';
import FaqTwo from 'sections/faq-two';
import FaqThree from 'sections/faq-three';
import FaqSix from 'sections/faq-six';
// import Video from 'sections/video';
import Pricing from 'sections/pricing';
import Services from 'sections/services';
// import ProductFeature from 'sections/product-feature';
// import CustomerSupport from 'sections/customer-support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Startup Hosting Classic Landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />
          <Banner />
          {/* <Home /> */}
          <Services />
          {/* <Features /> */}
          {/* <ProductFeature /> */}
          <FaqOne />
          <FaqTwo />
          <FaqThree />
          <Pricing />
          {/* <CustomerSupport /> */}
          {/* <Video /> */}
          <FaqSix />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
