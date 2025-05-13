import React from 'react';
import { HeroSection } from './HeroSection';
import { ReleaseInfo } from './ReleaseInfo';
import { Introduction } from './Introduction';
import { CharacterSection } from './CharacterSection';
import { LocationsSection } from './LocationsSection';
import { Footer } from './Footer';
import { jasonData, luciaData, supportingCharacters } from '../data/characters';
import { locations } from '../data/locations';

export const Home: React.FC = () => {
  return (
    <main className="relative">
      <HeroSection />
      <ReleaseInfo />
      <Introduction />

      <CharacterSection
        character={jasonData}
        isMainCharacter={true}
      />

      <CharacterSection
        character={luciaData}
        isMainCharacter={true}
      />

      <div className="py-20 px-4 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center uppercase">Only in Leonida</h2>
          <p className="text-center text-xl text-white/80 max-w-2xl mx-auto">
            When the sun fades and the neon glows, everyone has something to gain — and more to lose.
          </p>
        </div>
      </div>

      <LocationsSection locations={locations} />

      {supportingCharacters.map((character, index) => (
        <React.Fragment key={character.id}>
          <CharacterSection
            character={character}
            isMainCharacter={false}
            reverse={index % 2 !== 0}
          />
          {index < locations.length - 1 && (
            <div className="bg-black py-10">
              <div className="container mx-auto px-4">
                <div className="border-t border-white/10"></div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      <Footer />
    </main>
  );
};