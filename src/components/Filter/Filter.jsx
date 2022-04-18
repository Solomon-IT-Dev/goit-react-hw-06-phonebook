import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterWrapper, FilterInputLabel, FilterInput } from './Filter.styled';

export default function Filter({ label, value, onChange }) {
    const filterInputId = nanoid();

    return (
        <FilterWrapper>
            <FilterInputLabel htmlFor={filterInputId}>{label}
                <FilterInput type="text" placeholder="Search field" id={filterInputId} value={value} onChange={onChange} />
           </FilterInputLabel>
        </FilterWrapper>
    );
};

Filter.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};