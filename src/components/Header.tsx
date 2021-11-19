import React from "react"
import { Link as ReachLink } from "gatsby"
import {
  Container,
  Heading,
  HStack,
  Link,
  useColorMode,
} from "@chakra-ui/react"
import { DarkModeToggle } from "react-dark-mode-toggle-2"

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconStyle: React.CSSProperties = { fontSize: "30px" }

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
            <DarkModeToggle
              onChange={toggleColorMode}
              isDarkMode={colorMode === "light"}
              size={60}
              speed={1.7}
            />
          </HStack>
        </HStack>
      </Container>
    </header>
  )
}

export default Header
