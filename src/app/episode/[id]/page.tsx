'use client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import { GET_EPISODE } from '../../../../graphql/queries';
import Loader from '@/app/loader';
import CharacterType from '../../../../types/characterType';
import Link from 'next/link';

export default function EpisodePage({
    params 
  } : {
    params: { id: QueryHookOptions }
  }) {
    
  const { id } = params;

  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: {
      id
    }
  });

  if (loading) return <Loader />;

  if (error) return <p>Something went wrong...</p>

  const { episode } = data;

  return (
    <div className='w-full'>
      <p>{episode.episode}</p>
      <h2 className='font-bold text-3xl'>{episode.name}</h2>
      <p>Published: {episode.air_date}</p>
      <div className='mt-4'>
        {episode.characters.map((character:CharacterType) =>
          <div key={character.id}>
            <Link href={`/character/${character.id}`}>
              {character.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
