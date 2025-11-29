import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import About from '@/components/About';
import Reservation from '@/components/Reservation';

export default function Home() {
  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/restaurant_background_v2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay for readability */}
      <div className="relative z-10">
        <Hero />
        <MenuPreview />
        <About />
        <Reservation />
      </div>
    </main>
  );
}
