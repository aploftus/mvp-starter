import React from 'react';

let AgeSelector = ({age, selectAge}) => (
  <div>
    <form>
      <select name="age" value={age} onChange={(e) => selectAge(e.target.value)}>
        <option value="Child">Child</option>
        <option value="Teen">Teen</option>
        <option value="Adult">Adult</option>
      </select>
    </form>
  </div>
)

export default AgeSelector;