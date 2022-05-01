import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, changeFilter } from 'redux/filter/slice';
import { nanoid } from 'nanoid';
import { FilterWrapper, FilterInputLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterInputId = nanoid();

  const onFilterChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterInputLabel htmlFor={filterInputId}>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Search field"
          id={filterInputId}
          value={filterValue}
          onChange={onFilterChange}
        />
      </FilterInputLabel>
    </FilterWrapper>
  );
}
