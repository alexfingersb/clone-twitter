import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez voce curta"
            elements={[
              <FollowSugestion name="Luis Batanero" nickname="@luizbatanero" />,
              <FollowSugestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSugestion
                name="Camila Magalhaes"
                nickname="@camilaamgl"
              />,
            ]}
          />
          <List
            title="Talvez voce goste"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez voce goste"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez voce goste"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez voce goste"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
