"use client";

import { useState } from 'react';

export function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    // Aqui você implementará a lógica de upload
    // Por exemplo, usando FormData e fetch para uma API local
    console.log('Arquivo selecionado:', selectedFile.name);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="px-4 py-2 bg-violet-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Fazer Upload
      </button>
    </div>
  );
} 