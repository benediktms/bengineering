import React from 'react';
import { Link as ReachLink } from 'gatsby';
import {
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconStyle: React.CSSProperties = { fontSize: '30px' };

  return (
    <header>
      <Container mt={5} mb={10}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="2xl" variant="h1">
            <Link as={ReachLink} to="/">
              {siteTitle}
            </Link>
          </Heading>
          <HStack alignItems="center">
            <Link isExternal href="https://github.com/benediktms">
              <i className="fab fa-github" style={iconStyle}></i>
            </Link>
            <Link
              isExternal
              href="https://twitter.com/benediktms"
              style={iconStyle}
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <IconButton
              aria-label="toggle-color-mode"
              onClick={toggleColorMode}
            >
              {colorMode === 'dark' ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </IconButton>
          </HStack>
        </HStack>
      </Container>
    </header>
  );
};

export default Header;
