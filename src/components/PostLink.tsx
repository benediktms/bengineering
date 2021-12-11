import { Box, Heading } from '@chakra-ui/layout';
import { Link as ReachLink } from 'gatsby';
import { Link } from '@chakra-ui/react';
import React from 'react';
import { Mdx, MdxFrontmatter } from '../../graphql-types';
import { StyledLink } from './StyledLink';

type Props = {
  frontmatter: MdxFrontmatter;
  slug: NonNullable<Mdx['slug']>;
};

export const PostLink: React.FC<Props> = ({ frontmatter, slug }) => {
  return (
    <>
      <Heading size="md" variant="h3">
        <StyledLink to={`/blog/${slug}`}>{frontmatter.title}</StyledLink>
      </Heading>
      <Box mb={5}>{frontmatter.date}</Box>
    </>
  );
};
