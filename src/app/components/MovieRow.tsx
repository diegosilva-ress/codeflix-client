import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={index}
    className='group relative h-28 min-w-[200px] transform cursor-pointer
              rounded bg-gradient-to-t from-transparent to-black transition duration-200
              ease-out hover:opacity-100 md:h-36 md:min-w-[300px] md:hover:scale-110 lg:h-52'
  >
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt='maid'
      className='rounded'
    />
  </div>
);

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
