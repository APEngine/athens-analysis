import React from 'react';

export const Home: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col gap-3 max-w-4xl mx-auto mt-8 text-lg text-gray-700 bg-gray-50 border border-gray-300 rounded-lg p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">👋 ¡Bienvenido a Athens Analysis!</h1>

        <p>
          <strong>Athens Analysis</strong> es una aplicación web de análisis estructural diseñada especialmente para estudiantes de Ingeniería Civil y Arquitectura en Venezuela. Permite visualizar y calcular propiedades clave de vigas de concreto armado de forma intuitiva y didáctica.
        </p>

        <p>
          Actualmente se encuentra en una fase inicial de desarrollo y funciona únicamente en dispositivos de escritorio. Próximamente se incorporarán más herramientas, secciones interactivas y mejoras visuales.
        </p>

        <p>
          Puedes explorar el código fuente y contribuir al proyecto en
          <a href="https://github.com/APEngine/athens-analysis" className="ml-1 text-blue-600 underline hover:text-blue-800 transition">
            GitHub
          </a>.
        </p>
      </div>
    </main>
  );
};