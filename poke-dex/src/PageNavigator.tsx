import PokemonDetail from './Detail/PokemonDetail';
import PokeCardList from './List/PokeCardList';
import { Routes, Route } from 'react-router';

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
};

export default PageNavigator;
