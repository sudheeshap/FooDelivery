import styled from 'styled-components';

import breakpoints from '../../../styles/breakpoints';
import Button from '../button/Button';

export const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and ${breakpoints.device.md} {
    align-items: center;
    flex-direction: row;
  }
`;

export const ToggleButton = styled(Button)`
  margin-bottom: 8px;

  @media screen and ${breakpoints.device.md} {
    margin: 0 8px 0 0;
  }
`;
