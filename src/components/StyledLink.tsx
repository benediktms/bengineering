import React from 'react';
import { Link as ReachLink } from 'gatsby';
import { Link } from '@chakra-ui/layout';

type Props = {
  to: string;
};

export const StyledLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link as={ReachLink} to={to} color="teal.500">
      {children}
    </Link>
  );
};
