import * as React from "react"
import { Link as ReachLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Box, Text, WrapItem } from "@chakra-ui/layout"
import { HStack, Link } from "@chakra-ui/react"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HStack spacing={4} mb={5}>
        <WrapItem>
          <StaticImage
            style={{ borderRadius: "50%" }}
            src="../images/avatar.jpg"
            width={400}
            alt="Benedikt"
          />
        </WrapItem>

        <Box>
          <Text>
            My name is Benedikt, I'm a full-stack developer working for{" "}
            <Link as={ReachLink} to="https://www.gotu.io" color="teal.500">
              GotU.io
            </Link>
            . Here I talk about code and other things that interest me. If you
            spot something that is wrong or think something could be better,{" "}
            <Link
              as={ReachLink}
              to="https://github.com/benediktms/bengineering/issues/new"
              color="teal.500"
            >
              let me know
            </Link>
            .
          </Text>
          <Text></Text>
        </Box>
      </HStack>
    </Layout>
  )
}

export default IndexPage
