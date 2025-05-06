import React, { useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";

type ImageCropperProps = {
  image: string;
  onCropCancel: () => void;
  onCropDone: (croppedImage: string) => void;
};

const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  onCropCancel,
  onCropDone,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | undefined>(undefined);

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleCropComplete = (croppedArea: Area) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const imageElement = new Image();
    imageElement.src = image;
    imageElement.onload = () => {
      const scaleX = imageElement.naturalWidth / imageElement.width;
      const scaleY = imageElement.naturalHeight / imageElement.height;
      canvas.width = croppedArea.width;
      canvas.height = croppedArea.height;
      ctx?.drawImage(
        imageElement,
        croppedArea.x * scaleX,
        croppedArea.y * scaleY,
        croppedArea.width * scaleX,
        croppedArea.height * scaleY,
        0,
        0,
        croppedArea.width,
        croppedArea.height
      );
      const croppedImage = canvas.toDataURL("image/jpeg");
      onCropDone(croppedImage);
    };
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 id="modalTitle" className="text-xl font-bold text-gray-900">
            Crop Image
          </h2>
          <button
            onClick={onCropCancel}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="relative w-full h-96 bg-gray-100">
          <Cropper
            image={image || ""}
            aspect={1 / 1}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="flex items-center gap-4 px-6 py-4">
          <label className="text-sm text-gray-600">Zoom</label>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex justify-end gap-4 p-4">
          <button
            onClick={onCropCancel}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={() => {
              if (croppedArea) {
                // Here you would typically use a library to get the cropped image data
                // For example, using canvas to draw the cropped area and get the image data URL
                handleCropComplete(croppedArea);
              }
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark cursor-pointer"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
