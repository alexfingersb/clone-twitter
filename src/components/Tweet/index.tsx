import React from 'react';
import {
  Container,
  Retweeted,
  RocketIcon,
  Body,
  AvatarContainer,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

import Avatar from '../Avatar';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketIcon />
        Voce retweetou
      </Retweeted>

      <Body>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Foguete nao tem re</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              27
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
