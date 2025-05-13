import React from 'react';
import { Character } from '../types';
import { CharacterGallery } from './CharacterGallery';

interface CharacterSectionProps {
  character: Character;
  isMainCharacter: boolean;
  reverse?: boolean;
}

export const CharacterSection: React.FC<CharacterSectionProps> = ({
  character,
  isMainCharacter,
  reverse = false
}) => {
  return (
    <section className={`py-20 relative ${character.bgColor}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Character name header */}
        <header className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight">
            {character.name}
          </h2>
        </header>

        <div className={`flex flex-col ${isMainCharacter ? 'lg:flex-row' : 'lg:flex-row'} gap-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Character profile image */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-[500px]">
              <img
                src={character.profileImage}
                alt={character.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Character info and quotes */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <p className="text-xl font-semibold text-white/90 mb-2">{character.quotes[0]}</p>
                <p className="text-white/70">{character.description[0]}</p>
              </div>

              {character.quotes[1] && (
                <blockquote className="border-l-4 border-pink-500 pl-4 py-2 text-3xl font-bold italic">
                  {character.quotes[1]}
                </blockquote>
              )}

              {character.description[1] && (
                <div>
                  <p className="text-xl font-semibold text-white/90 mb-2">{character.quotes[2]}</p>
                  <p className="text-white/70">{character.description[1]}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Character gallery */}
        {character.gallery && character.gallery.length > 0 && (
          <div className="mt-16">
            <CharacterGallery
              images={character.gallery}
              videoClip={`/GTAVI_Videos/${character.name.replace(/\s+/g, '_')}_Video_Clip.mp4`}
              characterId={character.id}
            />
          </div>
        )}
      </div>
    </section>
  );
};