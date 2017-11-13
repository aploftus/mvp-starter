import React from 'react';

let AgeSelector = ({age, selectAge}) => (
  <div>
    <form>
      <select name="age" value={age} onChange={(e) => selectAge(e.target.value)}>
        <option value="child">Child</option>
        <option value="teen">Teen</option>
        <option value="adult">Adult</option>
      </select>
    </form>
  </div>
)

export default AgeSelector;