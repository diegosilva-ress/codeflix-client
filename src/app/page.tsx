import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import { MovieRow } from '@/app/components/MovieRow';
import { Banner } from '@/app/components/Banner';
import { getFeaturedMovie, getMoviesByGenre } from './service/MovieService';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('104');
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />
        <MovieRow sectionTitle='Trending row' />
        <MovieRow sectionTitle='Top rated' />
      </main>
    </div>
  );
}
