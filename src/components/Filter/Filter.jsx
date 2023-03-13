import PropTypes from 'prop-types';
import {
    FilterContainer,
    FilterLabel,
    FilterInput,
    LabelInfo,
} from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <FilterContainer>
            <FilterLabel htmlFor="filter">
                <LabelInfo>Find contacts by name</LabelInfo>
                <FilterInput
                    id="filter"
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                />
            </FilterLabel>
        </FilterContainer>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
