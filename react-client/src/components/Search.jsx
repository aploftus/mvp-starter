import React from 'react';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <div>
//         <h4> Search Component </h4>
//         <input type="text" placeholder="Enter a food" />
//         <input type="submit" value="Search" />
//       </div>
//     )
//   }
// }

const Search = ({updateQuery, handleSubmit}) => (
  <div>
    <h4> Search Component </h4>
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