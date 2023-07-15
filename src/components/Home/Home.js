import {
  VStack,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import pic from '../../assests/images/pics.jpg';
import './Home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import introvideo from '../../assests/videos/introvideo.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="Learn from me" size="2xl" />
            <Text
              fontFamily={'cursive'}
              textAlign={('center', 'left')}
              children="Find valuable content at reasonalbe price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Enroll Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="imagee"
            boxSize={'md'}
            src={pic}
            objectFit={'contain'}
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          children="OUR CLIENTS"
          textAlign={'center'}
          fontFamily="body"
          color={'white'}
        />

        <HStack
          className="brandsbanner"
          justifyContent={'space-evenly'}
          marginTop={4}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
