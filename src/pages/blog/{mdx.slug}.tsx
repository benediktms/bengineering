import { Box, Heading } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Query } from '../../../graphql-types';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { MDXProvider } from '@mdx-js/react';
import { StyledLink } from '../../components/StyledLink';
import { Heading1, Heading2, Heading3 } from '../../components/Headings';

type Props = {
  data: Query;
};

const BlogPost: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.mdx?.frontmatter?.title}>
        <Heading as="h1" variant="h1">
          {data.mdx?.frontmatter?.title}
        </Heading>
        <Box mb={5}>{data.mdx?.frontmatter?.date}</Box>
        {data.mdx && data.mdx.body && (
          <MDXProvider
            components={{
              h1: Heading1,
              h2: Heading2,
              h3: Heading3,
            }}
          >
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        )}
      </Seo>
    </Layout>
  );
};

export const postData = graphql`
  query GetBlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD. MMMM YYYY")
        title
      }
      body
    }
  }
`;

export default BlogPost;
