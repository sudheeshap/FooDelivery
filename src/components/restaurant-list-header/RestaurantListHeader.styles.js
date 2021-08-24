import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';
import Button from '../shared/button/Button';

export const RestaurantListHeaderContainer = styled.div`
  width: 100%;
  margin: 30px 10px 20px;
  color: #666666;
  font-weight: bold;
  font-size: 12px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const RestaurantFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and ${breakpoints.device.lg} {
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
  }
`;

export const RestaurantSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0 50px;

  @media only screen and ${breakpoints.device.lg} {
    margin: 0 5px 0 0;
    flex-direction: row;
    align-items: center;
  }
`;

export const RestaurantListCount = styled.div`
  font-size: 14px;
  display: flex;
`;

export const RestaurantListActions = styled.div`
  display: none;

  @media only screen and ${breakpoints.device.lg} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const RestaurantFilterLabel = styled.span`
  margin-bottom: 20px;

  @media only screen and ${breakpoints.device.lg} {
    margin-bottom: 0;
    margin-right: 12px;
  }
`;

export const RestaurantFilterButton = styled(Button)`
  margin-left: 12px;

  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

export const RestaurantFilterContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and ${breakpoints.device.lg} {
    flex-direction: row;
  }
`;
