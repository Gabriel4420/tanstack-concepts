'use client'
import React, { useState } from 'react';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg p-6">
            <header className="border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">Modal Header</h3>
            </header>
            <main className="mb-4">
              <p>Hello World</p>
            </main>
            <footer className="border-t pt-2">
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={toggleModal}
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
} 