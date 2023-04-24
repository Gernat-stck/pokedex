import  { useContext } from 'react';
import { TypesPokemon } from '../pokemonTypes/TypesPokemon';
import ListType from './ListType'

export default function SelectType  () {
 
  const type = useContext(TypesPokemon);

return (
<div>
{
type.map((type, index) =>   
   <ListType key={index} type = {type} />
   )   
}
</div>

  ) 
}
