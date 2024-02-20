'use client';
import { QueryHookOptions, useQuery } from '@apollo/client';

import { GET_CHARACTER } from '../../../../graphql/queries';
import Loader from '@/app/loader';
import Image from 'next/image';
import Link from 'next/link';
import EpisodeType from '../../../../types/episodeType';

export default function CharacterPage({
  params 
} : {
  params: { id: QueryHookOptions }
}) {

  const { id } = params;

  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });

  if (loading) return <Loader />;

  if (error) return <p>Something went wrong...</p>

  const { character } = data;
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-8'>
        <div>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            priority={true} 
          />
          <h2 className='font-bold text-lg mt-4'>
            {`${character.name}`}
          </h2>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Episodes</h3>
          {character.episode.map((episode:EpisodeType) => 
            <div key={episode.id}>
              <Link href={`/episode/${episode.id}`}>
                <strong>{episode.episode} </strong> 
                {episode.name}
              </Link>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
