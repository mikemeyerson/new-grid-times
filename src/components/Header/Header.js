import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopLeftSpacer>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopLeftSpacer>
        <Logo />
        <DesktopRightSpacer>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <LoginLink>Already a subscriber?</LoginLink>
          </SubscribeWrapper>
        </DesktopRightSpacer>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopSpacer = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex: 1 0 0;
  }
`;

const DesktopLeftSpacer = styled(DesktopSpacer)``;

// Could have absolutely positioned the SubscribeWrapper so that the link is taken out of flow and
// the button is vertically centered within the logo.
const DesktopRightSpacer = styled(DesktopSpacer)`
  align-self: flex-end;
  justify-content: flex-end;
`;

const SubscribeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LoginLink = styled.a`
  color: var(--color-gray-900);
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
`;

// Could use grid with grid-template-columns: 1fr auto 1fr;
// to avoid the need for DesktopLeftSpacer and DesktopRightSpacer
// Use justify-items: start and justify-self: end on Subscribe.
const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
