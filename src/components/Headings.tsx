import { Heading } from '@chakra-ui/layout';
import React from 'react';

export const Heading1: React.FC = ({ children }) => {
  return (
    <Heading as="h1" variant="h1" mt={5}>
      {children}
    </Heading>
  );
};

export const Heading2: React.FC = ({ children }) => {
  return (
    <Heading as="h2" variant="h2" size="lg" mt={5}>
      {children}
    </Heading>
  );
};

export const Heading3: React.FC = ({ children }) => {
  return (
    <Heading as="h3" variant="h3" size="md" mt={5}>
      {children}
    </Heading>
  );
};
