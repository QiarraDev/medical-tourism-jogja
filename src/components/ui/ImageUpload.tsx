import React, { useCallback, useState } from 'react';
import { FiUploadCloud, FiX } from 'react-icons/fi';

interface ImageUploadProps {
  label: string;
  value?: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export function ImageUpload({ label, value, onChange, disabled }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File | undefined) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  }, [disabled]);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(false);
  }, [disabled]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  }, [disabled]);

  return (
    <div className={`space-y-2 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div 
        className={`relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 bg-gray-50'
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => document.getElementById(`file-upload-${label}`)?.click()}
      >
        <input 
          id={`file-upload-${label}`}
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleFileChange(e.target.files[0]);
            }
          }}
        />
        
        {value ? (
          <div className="relative inline-block mt-2">
            <img src={value} alt="Preview" className="h-24 w-auto object-contain rounded-md border border-gray-200 bg-white" />
            <button 
              type="button"
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
            >
              <FiX size={14} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4 text-gray-500">
            <FiUploadCloud size={32} className="mb-2 text-blue-500" />
            <p className="text-sm font-semibold">Klik atau seret gambar ke sini</p>
            <p className="text-xs mt-1">Format: JPG, PNG, GIF (Max. 2MB)</p>
          </div>
        )}
      </div>
    </div>
  );
}
