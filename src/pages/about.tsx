import React from "react"
import { Heading, Link, Text } from "@chakra-ui/layout"
import { Link as ReachLink } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const about: React.FC = () => {
  return (
    <Layout>
      <Seo title="About">
        <Heading>About</Heading>
        <Text>This is the about page</Text>
        <Link as={ReachLink} to="/" color="teal.500">
          Go back to the homepage
        </Link>
      </Seo>
    </Layout>
  )
}

export default about
