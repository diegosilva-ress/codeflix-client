import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import { MovieRow } from '@/app/components/MovieRow';
import { Banner } from '@/app/components/Banner';
import { getFeaturedMovie, getMoviesByGenre } from './service/MovieService';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('104');
  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];
  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            movies={movie.movies}
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
          />
        ))}
      </main>
    </div>
  );
}
