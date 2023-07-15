import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Forgetpassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children="Forget Password"
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />

        <VStack spacing="8">
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gamil.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />

          <Button type="submit" colorScheme="yellow" w={'full'}>
            Send reset link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Forgetpassword;
