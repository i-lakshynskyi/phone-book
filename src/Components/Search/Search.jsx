import React from 'react';

function Search({searchInputValue,onSearchInput}) {

    return (
        <div>
            <input
                value={searchInputValue}
                onChange={onSearchInput}
                type="text"
                className="contacts__sidebar-search"
                placeholder="enter name to search"/>
        </div>
    );
}

export default Search;