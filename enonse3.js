import React from 'react';


class Enonse3 extends React.Component {
    render () {
       const ane="2023";
       const total=10;
        return (
            <div>
                <h2>Rezilta operasyon  {ane} + {total} lan se :</h2>
                {parseInt(ane) + total}                
            </div>
        )
    }
}

export default Enonse3;