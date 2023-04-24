import React, { Component } from 'react'
import ListPokemons from '../ListPokemons';
import MainCard from '../Cards/MainCard';

export default class Search extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    { 
      name: '',
      img: '',
      ataque: '',
      defensa: '',
      velocidad:''
    }
  }


  traerDatos = async () => 
  {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
    let data = await respuesta.json();

   this.setState({
      img: data.sprites.other.dream_world.front_default,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      velocidad: data.stats[5].base_stat
    })
  }

  handleName = (event) => 
  {
    let aux = event.target.value.toLowerCase();
   

    this.setState({
        name: aux
    })
  }
 
  traerPokemon = (e) => 
  {
    e.preventDefault();
        this.traerDatos();
  }

 
  render() 
  {
    
     if(this.state.img === '') 
     {
    return (
      <div className='App App-header'>
        <div className="login-box">
             <h2>Busca Tu Pokemon</h2>
               <form>
                   <div className="user-box">
                       <input type="text" name="" onChange={this.handleName} required = '' />
                   <label>Nombre del pokemon</label>
            </div>

            <a href='/'>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
              <button className='submit' type='submit' onClick={this.traerPokemon}>Buscar </button>
            </a>
          </form>
      </div>
      </div>
    )
    }
    else
    {
      return(
        <div className='App'>
            <MainCard  pokemonData={this.state} />
            <ListPokemons />

      </div>
      )
    }
  }
}
