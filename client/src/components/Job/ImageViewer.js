import { useState } from 'react';

const ImageViewer = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="w-full">
      <div className="flex aspect-video w-full items-center justify-center bg-slate-100">
        <p className="text-4xl text-slate-400">Image {currentImage}</p>
      </div>
      <div className="thin-scrollbar-x mt-2 flex snap-x snap-start gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`${
              currentImage === image ? 'opacity-75' : ''
            } aspect-video w-24 shrink-0 bg-slate-200`}
            onClick={() => setCurrentImage(image)}
          >
            <p className="text-sm text-slate-400">Image {image}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
