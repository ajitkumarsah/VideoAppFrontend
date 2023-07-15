import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  useStatStyles,
  Box,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUplaodCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  ' &::file-selector-button': fileUplaodCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setimagePrev] = useState('');
  const [image, setimage] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setimagePrev(reader.result);
      setimage(file);
    };
  };

  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Registration" textTransform={'uppercase'} />

        <form style={{ width: '100%' }}>
          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Enter Your Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc kk "
              type={'name'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gamil.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Enter your password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="abcdefgh"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseavtar" children="Choose avtar" />
            <Input
              accept="image/*"
              id="chooseavtar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImage}
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Sign Up
          </Button>

          <Box my={'4'}>
            Already User?
            <Link to="/login">
              <Button colorScheme="yellow" variant={Link}>
                Login
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
