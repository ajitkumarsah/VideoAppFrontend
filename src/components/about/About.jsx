import {
  Avatar,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Box,
  Button,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introvideo from '../../assests/videos/introvideo.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import Termsandcondition from '../../assests/docs/Termsandcondition.js';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar boxSize={['40', '48']} />
      <Text children="Co-founder" opacity={0.7} />
    </VStack>

    <VStack>
      <Heading children="Rony R..." size={['md', 'xl']} />
      <Text
        alignItems={['center', 'left']}
        children="Hii, I am a React Developer. Our mission is to provide you a good react web application."
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay={true}
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introvideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms and Condition"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable within 10 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />

      <Founder />

      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontStyle={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming paltfrom can be view on MERN stack project in
          my Github Portfolio.
        </Text>

        <Link to="/subscribe">
          <Button colorScheme="yellow" variant={'ghost'}>
            Checkout the Plans
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={Termsandcondition} />

      <HStack my="4" p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured by Rozerpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
