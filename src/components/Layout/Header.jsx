import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
  ghost,
  HStack,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logouthandler = () => {
    console.log('logout');
    onClose();
  };

  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Course</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/course" title="Course" />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request Courses"
              />

              <LinkButton onClose={onClose} url="/contact" title="Contact us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent="space-evenly"
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose}>
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logouthandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard" onClick={onclose}>
                          <Button colorScheme={'purple'}>
                            <RiDashboardFill />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
