import Image from 'next/image';
import CharracterType from '../../types/characterType';

export default function CharacterCard({ character }:{character:CharracterType}) {
  return (
    <div className='border border-grey-400 rounded-xl shadow-md mb-4 p-4 hover:shadow-lg flex flex-col items-center'>
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        priority={true}
      />
      <h3 className='text-md font-bold mt-4'>
        { character.name }
      </h3>
    </div>
  )
}
