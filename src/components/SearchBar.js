/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  // Handle Search Input - Update the search-term state
  handleSearchInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  // Handle Form Submit
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { handleSearchSubmit } = this.props;
    handleSearchSubmit(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <div className='ui segment search-bar'>
          <form action='' className='ui form' onSubmit={this.handleFormSubmit}>
            <div className='field'>
              <label>Video Search</label>
              <input
                type='text'
                name='searchbar'
                id='searchbar'
                value={searchTerm}
                onChange={this.handleSearchInput}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
