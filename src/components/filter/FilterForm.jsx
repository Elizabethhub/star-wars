import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/actions";
import { initialState } from "../../redux/reducers";
import { ClearFiltersButton, FilterFormContainer, FilterSection, RadioGroup, Select } from "./FilterFormStyled";

const FilterForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const movies = useSelector((state) => state.movies);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    dispatch(setFilters(updatedFilters));
  };
  const handleClearFilters = () => {
    dispatch(setFilters(initialState.filters));
  };
  const genderLabels = ["male", "female", "other"];
  return (
    <FilterFormContainer>
      <FilterSection>
        <label>Movies:</label>
        <Select name="movies" value={filters.movies} onChange={handleInputChange}>
          <option value="">All</option>
          {movies.map((movie) => (
            <option key={movie.url} value={movie.url}>
              {movie.title}
            </option>
          ))}
        </Select>
      </FilterSection>
      <FilterSection>
        <label>Name:</label>
        <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
      </FilterSection>

      <FilterSection>
        <label>Mass (Min): </label>
        <input type="number" name="minMass" value={filters.minMass} onChange={handleInputChange} />
      </FilterSection>
      <FilterSection>
        <label>Mass (Max): </label>
        <input type="number" name="maxMass" value={filters.maxMass} onChange={handleInputChange} />
      </FilterSection>
      <FilterSection>
        <RadioGroup>
          <label>Gender:</label>
          {genderLabels.map((label) => (
            <label key={label}>
              <input
                type="radio"
                name="gender"
                value={label}
                checked={filters.gender === label}
                onChange={handleInputChange}
              />
              {label}
            </label>
          ))}
        </RadioGroup>
      </FilterSection>
      <ClearFiltersButton onClick={handleClearFilters}>Reset</ClearFiltersButton>
    </FilterFormContainer>
  );
};

export default FilterForm;
