import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/actions";
import styled from "styled-components";

const FilterFormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
`;

const ClearFiltersButton = styled.button`
  background-color: #ff5555;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }
`;
const Select = styled.select`
  margin-right: 10px;
`;
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
    dispatch(
      setFilters({
        movies: "",
        name: "",
        gender: "",
        minMass: "",
        maxMass: "",
      })
    );
  };
  const genderLabels = ["male", "female", "other"];
  return (
    <FilterFormContainer>
      <label>
        Movies:
        <Select name="movies" value={filters.movies} onChange={handleInputChange}>
          <option value="">All</option>
          {movies.map((movie) => (
            <option key={movie.url} value={movie.url}>
              {movie.title}
            </option>
          ))}
        </Select>
      </label>

      <label>
        Name:
        <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
      </label>

      <RadioGroup>
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

      <label>
        Mass (Min):
        <input type="number" name="minMass" value={filters.minMass} onChange={handleInputChange} />
      </label>

      <label>
        Mass (Max):
        <input type="number" name="maxMass" value={filters.maxMass} onChange={handleInputChange} />
      </label>

      <ClearFiltersButton onClick={handleClearFilters}>Clear Filters</ClearFiltersButton>
    </FilterFormContainer>
  );
};

export default FilterForm;
