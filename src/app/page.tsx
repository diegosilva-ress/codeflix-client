import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import { MovieRow } from '@/app/components/MovieRow';
import { Banner } from '@/app/components/Banner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <Banner />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <MovieRow sectionTitle='Trending row' />
        <MovieRow sectionTitle='Top rated' />
      </main>
    </div>
  );
}
