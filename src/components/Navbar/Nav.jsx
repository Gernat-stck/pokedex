import React from 'react';
import logo from '../../img/pokeball.png';
import { Link } from 'react-router-dom';
import SelectType from '../ButtonType/SelectType';

export default function Nav() {
  return (

    <div>
    
   <nav className="bg-white border-gray-200 dark:bg-gray-900">
       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
           <a href="/" className="flex items-center">
               <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pokedex</span>
           </a>
           <div className="flex items-center">
               <Link to={'/'} className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(503) 7691-8279</Link>
               <a href="https://www.pokemon.com/es/pokedex" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline" target='blank'>Pagina Oficial</a>
           </div>
       </div>
   </nav>
   <nav className="bg-gray-50 dark:bg-gray-700">
       <div className="max-w-screen-xl px-4 py-3 mx-auto">
           <div className="flex items-center">
               <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                   <li>
                       <Link to={'/'} className="text-gray-900 dark:text-white hover:underline" aria-current="page"> Home </Link>
                   </li>
                   <li>      
                   <button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" className="text-gray-900 bg-white hover:underline text-center inline-flex items-center " type="button"> Categorias <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>    
                  
                   <div id="dropdownUsers" className="z-6 hidden bg-white rounded-lg shadow w-60 ">
                        <ul className="h-80 py-2 overflow-y-auto text-white dark:text-gray-200" aria-labelledby="dropdownUsersButton">
                            <SelectType />
                            
                       </ul>
                    </div>
                   </li>
                   <li>
                       <Link to={'/search'} className="text-gray-900 dark:text-white hover:underline">Busca tu Pokemon </Link>
                   </li>
                   <li>
                       <a href="https://support.pokemon.com/hc/es" className="text-gray-900 dark:text-white hover:underline">Contactanos</a>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
</div>
    )
}
