import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  FormLabel,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Request a Course" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Enter your name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abcdefgh"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="eamil"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gamil.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the course"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Send mail
          </Button>

          <Box my={'4'}>
            See avilable courses! ?
            <Link to="/course">
              <Button colorScheme="yellow" variant={Link}>
                Click
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;
