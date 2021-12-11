import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Box, Text } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import { Query } from '../../graphql-types';
import { PostLink } from '../components/PostLink';
import { PhotoAvatar } from '../components/PhotoAvatar';
import { StyledLink } from '../components/StyledLink';

const IndexPage: React.FC = () => {
  const { allMdx } = useStaticQuery<Query>(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "DD. MMMM YYYY")
            title
          }
          id
          body
          slug
        }
      }
    }
  `);

  const posts = allMdx.nodes;

  return (
    <Layout>
      <Seo />
      <HStack spacing={4} mb={[5, 10, 20]}>
        <PhotoAvatar />
        <Box maxW={{ base: 600 }}>
          <Text>
            Hi there! My name is Benedikt, I'm a full-stack developer working
            for <StyledLink to="https://www.gotu.io">GotU.io</StyledLink>. Here
            I talk about code and other things that interest me. If you spot
            something that is wrong or think something could be better,{' '}
            <StyledLink to="https://github.com/benediktms/bengineering/issues/new">
              let me know
            </StyledLink>
            .
          </Text>
        </Box>
      </HStack>
      {posts.map(p => {
        if (p.frontmatter) {
          return (
            <PostLink
              frontmatter={p.frontmatter}
              slug={p.slug as string}
              key={p.id}
            />
          );
        }
      })}
    </Layout>
  );
};

export default IndexPage;
