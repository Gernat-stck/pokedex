import { Link } from "react-router-dom";

export default function ListType({ type }) {
  return (
    <div>
      <li className={`bg-${type.color} ` }>
        <Link
          to={`/elementfilter/${type.name}`}
          className={`flex items-center px-4 py-2`}
        >
          <img
            className="w-8 h-8 mr-8"
            src={require(`../../img/pokemonTypes/${type.name}.svg`)}
            alt={type.name}
          />
          {type.name}
        </Link>
      </li>
    </div>
  );
}
