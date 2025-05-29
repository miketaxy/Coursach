"use client";

import { useEffect, useState, useRef } from "react";
import { SendTravelItem } from "@/app/dto/sendTravelItem";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddTouristicPlace({ isOpen, onClose }: Props) {
  const [data, setData] = useState<SendTravelItem>({
    Title: "",
    description: "",
    Price: "",
    Image: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;

    if (name === "Image" && files && files.length > 0) {
      setData((prev) => ({ ...prev, Image: files[0] }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Title", data.Title);
    formData.append("description", data.description);
    formData.append("Price", data.Price);
    if (data.Image) {
      formData.append("Image", data.Image);
    }

    try {
      const response = await fetch("/api/travel-items/postTravelItem", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Ошибка при сохранении");

      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Створення туристичного місця</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Назва туристичного місця"
            className="w-full p-2 border rounded"
            name="Title"
            value={data.Title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Опис туристичного місця"
            className="w-full p-2 border rounded"
            name="description"
            value={data.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Ціна"
            className="w-full p-2 border rounded"
            name="Price"
            value={data.Price}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            className="w-full p-2 border rounded"
            name="Image"
            onChange={handleChange}
            ref={fileInputRef}
            accept="image/*"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Зберегти
          </button>
        </form>
      </div>
    </div>
  );
}
