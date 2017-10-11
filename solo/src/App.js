import React, { Component } from 'react';
import axios from 'axios';
import Logo from './Logo';
import Cards from './cards'
import InfoPage from './infoPage'
import './server/controlers'
import './index'
import './App.css';

// var instance = axios.create({
//   baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com',
//   headers: {"X-Mashape-Key": "YntAP8uhA1mshYFC8RUfejS4Z032p1bIcQXjsnVfTJ2Kn3zDGb"}
// });


export default class App extends Component {
  constructor(){
    super();

    this.state = {
      results: [],
      info: [],
      clas: ''
    }
  // this.getCards = this.getCards.bind(this)
  this.nextPage = this.nextPage.bind(this)
  this.handleInput = this.handleInput.bind(this)
  }
//   componentWillMount(){
//   instance.get('/cardbacks').then(response =>{
//     this.setState({
//       results: response.data
//     })
//   })
// }

componentDidMount = () => {
  var a = 2;
  axios.get('http://localhost:3030/api/hearthstone')
  .then(response => {
    this.setState({
      results: response.data
    })
  })
}
nextPage(e){
  if (e.key === 'Enter'){
    axios.get(`http://localhost:3030/api/hearthstone/value?clas=${this.state.clas}`)
    .then(response => {
      this.setState({
        info: response.data
      })
    }) 
  }
  }
  handleInput(e) {
    this.setState({clas: e.target.value})
  }




  render() {
    console.log(this.state.info)
    
    console.log(this.state.results)
    var cards = this.state.results.map((card) =>{
      return (
        <Cards all={card.img} 
               dis={card.description} 
               ana={card.imgAnimated} 
               how={card.howToGet}/>
      )
    })
    var infoProps = this.state.info.map((info)=>{
      if (info.img === ("Not Found")){
        return '';
      } else {
      return (
        <div>
        <InfoPage cardd={info.img}
               race={info.race} 
               type={info.type} 
               rarity={info.rarity} 
               name={info.name} 
               cost={info.cost} 
               attack={info.attack} 
               health={info.health}
                                  />
        </div>
      )
    }
    })
    return (
      <div className="back">
        <div>
    <div className="Header">
      <Logo/>
        <input placeholder="Search races"
                 onChange={this.handleInput}
                 onKeyPress={this.nextPage}
                 value={this.state.clas}/>
                 <span className="text">Try out thses Races: Mech, Beast, Demon, Dragon, Elemental, Murloc, pirate, Totem.</span>
    </div>
    { this.state.info.length <= 0 ?
    (<div className="card-results">
        {cards}
    </div>)
    :
    (<div className="card-results">
        {infoProps}
    </div>)
    }
    </div>
      </div>
    );
  }
}

 
