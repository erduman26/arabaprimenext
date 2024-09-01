import Hero from '../components/Hero';
import AdPackages from '../components/AdPackages';

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center pt-20 mt-1 lg:mt-4 mx-2">
      <Hero />
    </div>
    <div>
    <AdPackages />
    </div>
    </>
  );
}
