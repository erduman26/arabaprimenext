"use client";
import React, { useState } from "react";

const AddImageForm = () => {
    const [images, setImages] = useState<File[]>([]);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const uploadedFiles = Array.from(event.target.files);
        const totalImages = images.length + uploadedFiles.length;

        if (totalImages > 12) {
            alert("En fazla 12 görsel yükleyebilirsiniz!");
            return;
        }

        setImages((prevImages) => [...prevImages, ...uploadedFiles]);
    };

    const handleRemoveImage = (index: number) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="rounded-t bg-white shadow px-4 lg:px-10 py-6 mb-1.5 md:mb-3">
                <div className="text-center flex justify-between">
                    <h6 className="text-gray-900 text-xl font-bold">
                        Araba Görseli Yükle
                    </h6>
                    <p className="font-bold text-lg text-gray-900">
                        {images.length} / 12
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex items-center justify-center w-full lg:w-1/2 p-4">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center mx-0 lg:mx-6 w-full h-72 border-2 border-gray-950 border-dashed rounded-lg cursor-pointer bg-white"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <img src="/gallery-image.svg" alt="Sil" className="w-28 h-28"/>
                            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                                Görseli yüklemek için tıklayın
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">
                                En fazla 12 görsel yüklenebilir
                            </p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                    </label>
                </div>
                {/* Görseller Bölgesi */}
                <div className="flex items-center lg:w-1/2 px-4 pb-2 lg:pb-0">
                    <div 
                        className="flex lg:flex-wrap gap-4 overflow-x-auto lg:overflow-visible"
                        style={{ scrollSnapType: "x mandatory" }} // Mobilde kaydırma iyileştirmesi
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0 lg:flex-shrink lg:w-auto lg:h-auto"
                            >
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Uploaded ${index + 1}`}
                                    className="w-32 h-32 object-contain rounded-lg shadow border bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-1.5 right-1 text-white text-xs rounded-full flex items-center justify-center"
                                >
                                    <img src="/bin.svg" alt="Sil" className="w-7 h-7"/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddImageForm;
