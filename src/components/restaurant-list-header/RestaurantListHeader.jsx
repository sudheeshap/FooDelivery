import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import FormSelect from '../shared/form-select/FormSelect';
import ToggleButtonGroup from '../shared/toggle-button-group/ToggleButtonGroup';
import {
  getFilterOptions,
  getSortOptions,
} from '../../services/runtime.service';
import {
  RestaurantSortContainer,
  RestaurantFilterContainer,
  RestaurantListHeaderContainer,
  RestaurantListCount,
  RestaurantListActions,
  RestaurantFilterLabel,
  RestaurantFilterButton,
  RestaurantFilterContainerMobile,
} from './RestaurantListHeader.styles';
import Modal from '../shared/modal/Modal';

export default function RestaurantListHeader({
  loadedCount,
  searchlist,
  onChangeFilters,
  onChangeSort,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  // Options
  const filterOptions = getFilterOptions();
  const sortOptions = getSortOptions();

  /**
   * Clicked on filter button
   */
  const handleClickFilterButton = () => {
    setModalOpen(true);
  };

  return (
    <>
      <RestaurantListHeaderContainer>
        <RestaurantListCount>
          {loadedCount} of {searchlist.total} restaurants
        </RestaurantListCount>
        <RestaurantListActions>
          <RestaurantFilterContainer>
            <RestaurantFilterLabel>Filter by</RestaurantFilterLabel>
            <ToggleButtonGroup
              options={filterOptions}
              selected={searchlist.filters.types}
              onClick={onChangeFilters}
            />
          </RestaurantFilterContainer>
          <RestaurantSortContainer>
            <RestaurantFilterLabel>Sort by</RestaurantFilterLabel>
            <FormSelect options={sortOptions} onChange={onChangeSort} />
          </RestaurantSortContainer>
        </RestaurantListActions>
        <RestaurantFilterButton
          color="default"
          icon="filter"
          onClick={handleClickFilterButton}
        >
          <span>Filter</span>
        </RestaurantFilterButton>
      </RestaurantListHeaderContainer>

      <Modal
        title="Filters"
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <RestaurantFilterContainerMobile>
          <RestaurantFilterContainer>
            <RestaurantFilterLabel>Filter by</RestaurantFilterLabel>
            <ToggleButtonGroup
              options={filterOptions}
              selected={searchlist.filters.types}
              onClick={onChangeFilters}
            />
          </RestaurantFilterContainer>
          <RestaurantSortContainer>
            <RestaurantFilterLabel>Sort by</RestaurantFilterLabel>
            <FormSelect options={sortOptions} onChange={onChangeSort} />
          </RestaurantSortContainer>
        </RestaurantFilterContainerMobile>
      </Modal>
    </>
  );
}

RestaurantListHeader.propTypes = {
  loadedCount: PropTypes.number.isRequired,
  searchlist: PropTypes.shape({
    filters: PropTypes.shape({
      types: PropTypes.arrayOf(PropTypes.string),
    }),
    sortBy: PropTypes.string,
    currentPage: PropTypes.number,
    perPage: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  onChangeFilters: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};
