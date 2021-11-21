import { Box, Heading } from '@chakra-ui/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Query } from '../../../graphql-types';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { MDXProvider } from '@mdx-js/react';
import { StyledLink } from '../../components/StyledLink';

type Props = {
  data: Query;
};

const BlogPost: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.mdx?.frontmatter?.title}>
        <Heading>{data.mdx?.frontmatter?.title}</Heading>
        <Box mb={5}>{data.mdx?.frontmatter?.date}</Box>
        {data.mdx && data.mdx.body && (
          <MDXProvider
            components={{
              a: StyledLink,
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
