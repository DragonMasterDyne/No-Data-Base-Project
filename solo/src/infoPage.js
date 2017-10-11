import React from 'react'



export default function InfoPage(props){
    return  (
        <div className="card-results">
            <div className="text-coloum">
            <span className="text">Type of card</span>
            <div className="text2">
                <p>Race:  {props.race}</p>
                <p>Type:  {props.type}</p>
                <p>Rarity:      {props.rarity}</p>
            </div>
                <span className="text">Card Info</span>
                <div className="text2">
                    <p>Name:        {props.name}</p>
                    <p>Cost:    {props.cost}</p>
                    <p>Attack:  {props.attack}</p>
                    <p>Health:  {props.health}</p>
                </div>
                </div>
            <div>
            <img src={props.cardd}/>
            </div>
        </div>
    )
}