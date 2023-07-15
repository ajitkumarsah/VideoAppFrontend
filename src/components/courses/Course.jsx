import {
  Container,
  Input,
  Heading,
  HStack,
  Stack,
  Text,
  Button,
  VStack,
  Image,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sampleimg from '../../assests/images/courseimg.png';

const Courses = ({
  views,
  title,
  imagesrc,
  id,
  addToPlaylist,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imagesrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        noOfLines={3}
        children={title}
      />
      <Text children={description} />
      <HStack>
        <Text fontWeight={'bold'} children={'Created by: '} />

        <Text fontFamily={'body'} children={creator} />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
      />

      <Heading size={'xs'} children={`Views - ${views}`} />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylist(id)}
        >
          Add to Playlist{' '}
        </Button>
      </Stack>
    </VStack>
  );
};

const addToPlaylist = () => {
  console.log('Added video');
};

const Course = () => {
  const [keyword, setkeyword] = useState('');
  const [category, setcategory] = useState();

  const categories = [
    'Webdevelopment',
    'Android app',
    'React',
    'MonogoDb',
    'Node js',
    'Express js',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setkeyword(e.target.value)}
        placeholder="Search for a course"
        type="text"
      />

      <HStack overflow={'auto'} paddingY={'8'}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setcategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Courses
          title={'Sample'}
          description={'Sample'}
          views={23}
          imagesrc={Sampleimg}
          id={'Sample'}
          creator={'Sample Boy'}
          lectureCount={2}
          addToPlaylist={addToPlaylist}
        />
      </Stack>
    </Container>
  );
};

export default Course;
