import React from 'react';

const Search = ({updateQuery, handleSubmit}) => (
  <div>
    <form>
      <input
        type="text"
        placeholder="Enter a food"
        onChange={(e) => updateQuery(e.target.value)} />
      <input type="submit" value="Search" onClick={(e) => handleSubmit(e)}/>
    </form>
  </div>
)

export default Search;