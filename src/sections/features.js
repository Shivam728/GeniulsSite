// import React from 'react';
// import Image from 'next/image';
// import { Box, Container, Flex, Heading, Text } from 'theme-ui';
// import image1 from 'assets/features-1.svg';
// import image2 from 'assets/features-2.svg';
// import image3 from 'assets/features-3.svg';
// const FEATURES_DATA = {
//   title: 'Go beyond ultimate features',
//   text: 'Ideal solutions for you',
//   posts: [
//     {
//       image: image3,
//       title: 'For Individuals',
//       text:
//         'Get your info tests delivered at home collect a sample from the your pogress tests.',
//     },
//     {
//       image: image2,
//       title: 'For Small Team',
//       text:
//         'Get your info tests delivered at home collect a sample from the your pogress tests.',
//     },
//     {
//       image: image1,
//       title: 'For Organization',
//       text:
//         'Get your info tests delivered at home collect a sample from the your pogress tests.',
//     },
//   ],
// };
// const Features = () => {
//   const { title, text, posts } = FEATURES_DATA;
//   return (
//     <Box as="section" id="features" sx={styles.section}>
//       <Container sx={styles.container}>
//         <Box sx={styles.sectionTitle}>
//           <Text as="p">{text}</Text>
//           <Heading as="h2">{title}</Heading>
//         </Box>
//         <Flex sx={styles.flex}>
//           {posts.map(({ image, title, text }, index) => (
//             <Box sx={styles.post} key={`feature-post-key-${index}`}>
//               <Box className="image">
//                 <Image width="70" height="70" src={image} alt={title} />
//               </Box>
//               <Box sx={styles.postContent}>
//                 <Heading as="h3">{title}</Heading>
//                 <Text as="p">{text}</Text>
//               </Box>
//             </Box>
//           ))}
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// export default Features;

// const styles = {
//   section: {
//     overflow: 'hidden',
//     pt: ['70px', null, null, '100px'],
//     pb: ['40px', null, null, '70px'],
//   },
//   container: {},
//   flex: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   sectionTitle: {
//     textAlign: 'center',
//     mb: ['40px', null, null, '70px'],
//     h2: {
//       color: '#0F2137',
//       fontWeight: 500,
//       fontSize: ['22px', null, null, '24px'],
//       lineHeight: 1,
//       letterSpacing: '-0.5px',
//       mt: '15px',
//     },
//     p: {
//       color: 'secondary',
//       fontSize: '16px',
//       lineHeight: 1.87,
//     },
//   },
//   post: {
//     mb: '30px',
//     mx: ['0', null, null, null, null, '15px'],
//     display: 'flex',
//     flex: ['0 0 100%', null, null, '0 0 calc(33.333% - 30px)'],
//     flexDirection: ['column', null, null, null, 'row'],
//     justifyContent: ['center', null, 'flex-start'],
//     textAlign: ['center', null, null, 'left'],
//     '>.image': {
//       flexShrink: 0,
//       width: '70px',
//       height: '70px',
//       mx: ['auto', null, null, '0'],
//     },
//   },
//   postContent: {
//     ml: ['0', null, null, null, '30px'],
//     mt: ['20px', null, null, null, '0'],
//     h3: {
//       fontSize: '18px',
//       fontWeight: 700,
//       lineHeight: 1,
//       color: '#0F2137',
//       mb: '15px',
//     },
//     p: {
//       color: '#343D48',
//       lineHeight: 1.87,
//       fontSize: ['14px', null, null, '16px'],
//       maxWidth: ['100%', '300px', null, '100%'],
//       mx: [null, 'auto', null],
//     },
//   },
// };


import React from 'react';
import Image from 'next/image';
import { Container, Link, Box, Grid, Heading, Text } from 'theme-ui';
import { IoIosArrowForward } from 'react-icons/io';
import SectionHeading from 'components/section-heading';
import feature1 from 'assets/service-1.svg';
import feature2 from 'assets/service-2.svg';
import feature3 from 'assets/service-3.svg';
import feature4 from 'assets/service-4.svg';
import feature5 from 'assets/service-5.svg';
import feature6 from 'assets/service-6.svg';

const PRODUCT_FEATURE = {
  sectionTitle: {
    text: 'Product features',
    title: 'Ultimate features that  works',
  },
  posts: [
    {
      label: 'Most Popular',
      icon: feature1,
      title: 'Email Hosting',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress actual tests.',
      button: {
        link: '#',
        label: 'Buy Now',
      },
    },
    {
      icon: feature2,
      title: 'Dedicated Hosting',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress actual tests.',
      button: {
        link: '#',
        label: 'Buy Now',
      },
    },
    {
      icon: feature3,
      title: 'VPS Services',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress actual tests.',
      button: {
        link: '#',
        label: 'Buy Now',
      },
    },
    {
      icon: feature4,
      title: 'WP Website Builder',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress actual tests.',
      button: {
        link: '#',
        label: 'Buy Now',
      },
    },
    {
      label: 'Latest',
      icon: feature5,
      title: 'CMS Hosting',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress actual tests.',
      button: {
        link: '#',
        label: 'Buy Now',
      },
    },
    {
      icon: feature6,
      title: 'Cloud Hosting',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress actual tests.',
      button: {
        link: '#',
        label: 'Buy Now',
      },
    },
  ],
};

const Feature = () => {
  const { sectionTitle, posts } = PRODUCT_FEATURE;
  return (
    <Box sx={styles.section}>
      <Container>
        <SectionHeading slogan={sectionTitle.text} title={sectionTitle.title} />

        <Grid sx={styles.grid}>
          {posts.map(({ label, icon, title, text, button }, index) => (
            <Box key={`feature-key-${index}`} sx={styles.items}>
              <Box className="image">
                <Image src={icon} alt={title} width="70" height="70" />
              </Box>
              <Box sx={styles.itemContent}>
                <Heading as="h3">
                  {title}
                  {label ? <Text as="span">{label}</Text> : null}
                </Heading>
                <Text as="p">{text}</Text>
                <Link href={button.link}>
                  {button.label}
                  <IoIosArrowForward />
                </Link>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  section: {
    pt: ['70px', null, null, null, '100px', null, '150px'],
    pb: ['40px', null, null, null, '70px', null, '90px'],
    backgroundColor: '#F9FAFC',
  },
  grid: {
    gridColumnGap: '30px',
    gridTemplateColumns: ['1fr', null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
  items: {
    display: 'flex',
    mb: ['30px', null, null, null, null, null, '60px'],
    '.image': {
      flexShrink: '0',
      width: '70px',
      height: '70px',
      mr: ['20px', null, null, '30px'],
    },
  },
  itemContent: {
    h3: {
      fontSize: ['17px', null, null, null, '18px'],
      color: '#0F2137',
      fontWeight: 700,
      lineHeight: 1,
      alignItems: 'center',
      display: 'inline-flex',
      flexWrap: 'wrap',
      span: {
        backgroundColor: '#28A5FF',
        fontSize: '13px',
        color: '#fff',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        lineHeight: '26px',
        borderRadius: '30px',
        letterSpacing: '-0.5px',
        px: '10px',
        ml: ['10px', null, '10px', '10px'],
        mt: ['0', null, '5px', '0'],
      },
    },
    p: {
      color: '#343D48',
      fontSize: ['14px', null, null, '16px'],
      lineHeight: 1.87,
      mt: '5px',
      mb: '10px',
    },
    a: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '15px',
      color: '#3183FF',
      fontWeight: 500,
      transition: 'all 500ms ease',
      '&:hover': {
        color: 'black',
      },
      svg: {
        fontSize: '17px',
        ml: '5px',
      },
    },
  },
};
