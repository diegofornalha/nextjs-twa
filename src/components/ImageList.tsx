"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LocalImage {
  id: string;
  url: string;
  alt: string;
}

export function ImageList() {
  const [images, setImages] = useState<LocalImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aqui você pode carregar as imagens de uma API local ou do sistema de arquivos
    // Por enquanto, vamos usar dados mockados
    const mockImages: LocalImage[] = [
      {
        id: '1',
        url: '/images/example1.jpg',
        alt: 'Exemplo 1'
      },
      // Adicione mais imagens mock conforme necessário
    ];

    setImages(mockImages);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando imagens...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative aspect-square">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
} 