import React from 'react';
import Image from 'next/image';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import image from 'assets/datasci.jpg';
const FAQ_ONE_DATA = {
  sectionImage: image,
  tagline: 'Premium Courses',
  title: 'Web Development',
  text:
    ' Web Development is Lorem ipsum dolor sit altrices tincidunt arcu non. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Id diam maecenas ultricies mi eget mauris pharetra et. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Amet aliquam id diam maecenas. Et sollicitudin ac orci phasellus egestas tellus rutrum. Consequat semper viverra nam libero justo laoreet sit amet. Arcu risus quis varius quam quisque id diam vel quam. Malesuada fames ac turpis egestas integer. Tincidunt arcu non sodales neque sodales ut etiam. Sit amet nisl purus in mollis nunc sed id. Fames ac turpis egestas integer eget aliquet nibh praesent. ',
 
};
const FaqThree = () => {
  const { sectionImage, title, text, tagline } = FAQ_ONE_DATA;
  return (
    <Box  sx={styles.section}>
      <Box sx={styles.sectionImage}>
        <Image
          src={sectionImage}
          width="1000"
          height="500"
          alt="sectionImage"
        />
      </Box>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Box sx={styles.sectionTitle}>
              <Text as="span">{tagline}</Text>
              <Heading as="h2">{title}</Heading>
              <Text as="p">{text}</Text>
            </Box>
            {/* <Accordion items={faqs} /> */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FaqThree;

const styles = {
  section: {
    position: 'relative',
  },
  container: {
    maxWidth: ['100%', null, null, null, null, '1170px', '1280px'],
    position: 'relative',
  },
  sectionImage: {
    display: ['none', null, null, null, 'block'],
    position: ['relative', null, null, null, 'absolute'],
    top: 0,
    left: [0, null, null, null, '-55%', '-15%', '0%'],
    maxWidth: ['80%', null, null, '94%', null, '100%'],
    mx: ['auto', null, null, null, 0],
    '@media(min-width: 1240px)': {
      left: '-20%',
    },
    '@media(min-width: 1440px)': {
      left: '-17%',
    },
    '@media(min-width: 1650px)': {
      left: '-10%',
    },
    '@media(min-width: 1850px)': {
      left: '0%',
    },
  },
  flex: {
    display: 'flex',
    gap: 0,
    justifyContent: ['flex-start', null, null, null, 'flex-end'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 60%', '0 0 45%'],
    pl: ['0', null, null, null, '80px'],
    pt: ['60px', null, null, null, '80px'],
    pb: ['50px', null, null, '70px', null, null, '90px'],
  },
  sectionTitle: {
    mb: '30px',
    textAlign: ['left', null, 'center', null, 'left'],
    h2: {
      color: 'black',
      fontWeight: 500,
      fontWeight: 'bold',
      fontSize: ['25px', null, null, '28px', '32px', '36px', '40px'],
      lineHeight: 1.5,
      letterSpacing: '-1.5px',
      mt: '10px',
      maxWidth: ['100%', '300px', '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
    },
    span: {
      color: 'secondary',
      fontSize: ['15px', '16px'],
      lineHeight: 1.87,
      display: 'block',
    },
    p: {
      color: '#0F2137',
      fontSize: '16px',
      lineHeight: 2.19,
      maxWidth: ['100%', '340px', '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
      mt: ['15px', null, null, '25px'],
    },
  },
};
