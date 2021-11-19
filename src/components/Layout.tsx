/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { Container, Link } from "@chakra-ui/react"
import { Site } from "../../graphql-types"

const Layout: React.FC = ({ children }) => {
  const { siteMetadata } = useStaticQuery<Site>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={siteMetadata?.title || `Bengineering`} />

      <Container>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          Built with <i className="fas fa-heart" style={{ color: "red" }}></i>{" "}
          using{" "}
          <Link isExternal href="https://www.gatsbyjs.com" color="purple.500">
            Gatsby
          </Link>
        </footer>
      </Container>
    </>
  )
}

export default Layout
