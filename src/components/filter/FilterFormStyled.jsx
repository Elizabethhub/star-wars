import styled from "styled-components";

export const FilterFormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }
`;
export const RadioGroup = styled.div`
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    label {
      flex: 1 1 100%;
      margin-bottom: 5px;
    }
  }
`;
export const Select = styled.select`
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const ClearFiltersButton = styled.button`
  background-color: #ff5555;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;
