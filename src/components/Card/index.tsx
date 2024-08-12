import React from 'react';
import Image from 'next/image';
import { BoldText, CardContainer, CardFooter, CardHeader, CardImageContainer, CardMetric, CardMetrics, CardTitle, FooterRow, IconButton, StyledImage } from './styles';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ post, onCopyUrl }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <StyledImage src={post.imageUrl} alt={post.account} width={300} height={300} priority sizes="auto" />
        <CardHeader>
          <CardTitle>{post.account}</CardTitle>
          <IconButton onClick={onCopyUrl}>
            <Image src="/svgs/attach.svg" width={20} height={20} alt="Link" />
          </IconButton>
        </CardHeader>
      </CardImageContainer>
      <CardMetrics>
        <CardMetric>
          <Image src="/svgs/hearth.svg" width={10} height={10} alt="Likes" />
          <BoldText>{post.likes}</BoldText>
        </CardMetric>
        <CardMetric>
          <Image src="/svgs/chat.svg" width={10} height={10} alt="Comments" />
          <BoldText>{post.comments}</BoldText>
        </CardMetric>
        <CardMetric>
          <Image src="/svgs/eye.svg" width={10} height={10} alt="Views" />
          {post.isVideo ? (
            <BoldText>{post.videoViewCount}</BoldText>
          ) : (<BoldText>-</BoldText>)}
        </CardMetric>
      </CardMetrics>
      <CardFooter>
        <FooterRow>
          <p>Engagement:</p>
          <BoldText>{post.engagement}</BoldText>
        </FooterRow>
        <FooterRow>
          <p>View Engagement:</p>
          {post.isVideo ? (
            <BoldText>{post.viewEngagement}</BoldText>
          ) : (<BoldText>-</BoldText>)}
        </FooterRow>
        <FooterRow>
          <p>Date:</p>
          <BoldText>{post.formattedDate}</BoldText>
        </FooterRow>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;