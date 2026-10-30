/* src/pages/Home.jsx */
import Hero from "../components/hero/hero";
import SpinningGlobeDestinations from "../components/destinations/spinningGlobe";
import ClosingAssurance from "../components/closing-assurance/closingAssurance";

export default function Home() {
  return (
    <div>
      <Hero />
      <SpinningGlobeDestinations />
      <ClosingAssurance />
    </div>
  );
}
