import React from 'react'

export default function Cards(props) {
return(
    <div>
    <div className="card-results">
        <div className="text-coloum">
             <span className="text">Type of card</span>
             <p className="text2">{props.dis}</p>
             <span className="text">Card Info</span>
             <div className="text2">
                <p>{props.how}</p>
             </div>
        </div>
        <img src={props.all}/>
    </div>
        <img src={props.ana}/>
    </div>
)
}
