import { Box, Heading, Text } from '@chakra-ui/layout';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Mdx, Query } from '../../../graphql-types';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

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
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        )}
      </Seo>
    </Layout>
  );
};

export const postData = graphql`
  query GetBlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD. MMMM YYY")
        title
      }
      body
    }
  }
`;

export default BlogPost;
