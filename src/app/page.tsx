'use client';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { GET_CHARACTERS } from '../../graphql/queries';
import Loader from './loader';
import CharacterCard from './CharacterCard';
import CharacterType from '../../types/characterType';

export default  function HomePage() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return <Loader />;

  if (error) return <p>Something went wrong...</p>

  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
        {data.characters.results.map((character:CharacterType) => 
          <Link key={character.id} href={`/character/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        )}
      </div>
    )
}
