import { WrapItem } from '@chakra-ui/layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const PhotoAvatar: React.FC = () => {
  return (
    <WrapItem maxW={{ base: 300, md: 100 }}>
      <StaticImage
        style={{ borderRadius: '50%' }}
        imgStyle={{ borderRadius: '50%' }}
        src="../images/avatar.jpg"
        placeholder="blurred"
        width={400}
        alt="Benedikt"
      />
    </WrapItem>
  );
};
