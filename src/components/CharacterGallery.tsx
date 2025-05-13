import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface CharacterGalleryProps {
  images: string[];
  videoClip?: string;
  characterId: string;
}

export const CharacterGallery: React.FC<CharacterGalleryProps> = ({ images, videoClip, characterId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg aspect-video">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={image}
              alt="Character moment"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {videoClip && (
          <button
            onClick={handlePlayVideo}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
          >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-colors">
              <Play className="w-12 h-12 fill-white" />
            </div>
            <span className="absolute bottom-6 text-white font-medium tracking-wider uppercase text-sm">
              Watch Video Clip
            </span>
          </button>
        )}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {showVideo && videoClip && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white/80 hover:text-white"
            >
              Close ✕
            </button>
            <div className="relative pb-[56.25%] h-0">
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay
              >
                <source src={videoClip} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};