import React  from "react";



function Lis () {
    const el = ['12', '23', '563', '44'];

    return (
        <div>
        <h2>Lis eleman :</h2>
      <ul>
        {
            el.map((ele,i) => (
                <li key={i}>{ele}</li>
            ))
        }
      </ul>
      </div>
    )
}

export default Lis;