import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  useStatStyles,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Welcome to Aisha.pvt.ltd " />

        <form style={{ width: '100%' }}>
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

          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password
              </Button>
            </Link>
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Login
          </Button>

          <Box my={'4'}>
            New User?
            <Link to="/register">
              <Button colorScheme="yellow" variant={Link}>
                Sign Up
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
