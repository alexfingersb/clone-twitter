import React from 'react';

import {
  Container,
  Banner,
  ProfileData,
  LocationIcon,
  CakeIcon,
  CalendarIcon,
  Followage,
  EditButton,
  AvatarContainer,
} from './styles';

import Avatar from '../Avatar';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  // Typescript function void
  function handleClick(): void {
    alert('Sorry but Profile Edition isn`t yet implemented!');
  }

  // Typescript arrow function
  const editProfile = (): void => {
    alert('On click with arrow functions');
  };

  return (
    <Container>
      <Banner>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
      </Banner>

      <ProfileData>
        <EditButton outlined onClick={editProfile}>
          Editar perfil
        </EditButton>
        <h1>Alex Finger</h1>
        <h2>@alex_fingersb</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Porto Alegre, Brasil
          </li>
          <li>
            <CakeIcon />
            Born October 23, 1975
          </li>
          <li>
            <CalendarIcon />
            Joined March 2013
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
