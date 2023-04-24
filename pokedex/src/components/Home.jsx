import React, { Component } from 'react'
import '../Styles/App.css';
import { Link } from 'react-router-dom';



export default class Home extends Component {

 render() {
       
 return (
             <div className='App App-header'>
               <div>
                  <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-red-200 md:text-5xl lg:text-6xl dark:text-red-200'>Encuentra tu Pokemon Aqui</h1>
                     <p className='mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>Encuentra toda la informacion sobre tu pokemon aqui. Tambien encuentra resultados similares</p>       
               </div>
               <div>
                 <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'  >
                         <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                           <Link to={'/search'}>  
                              Busca Aqui!
                           </Link>
                        </span>
                   </button>
               </div>
           </div>
    )
  
   }
}