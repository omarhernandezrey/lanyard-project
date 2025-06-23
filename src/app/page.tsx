"use client";

import { ErrorBoundary } from "react-error-boundary";

// Fallback de error
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  console.error("Error capturado por ErrorBoundary:", error);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h2 className="text-2xl mb-4">❌ Error en la aplicación:</h2>
      <pre className="text-red-400 mb-4 p-4 bg-gray-800 rounded max-w-4xl overflow-auto text-sm">
        <strong>Mensaje:</strong> {error.message}
        {"\n\n"}
        <strong>Stack:</strong> {error.stack}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        🔄 Reintentar
      </button>
    </div>
  );
}

// Import de la versión final funcional
import LanyardFinal from "../components/lanyard/LanyardFinal";

export default function Page() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="flex flex-col justify-center items-center w-full h-screen bg-black">
        <LanyardFinal position={[0, 0, 8]} fov={50} />
      </main>
    </ErrorBoundary>
  );
}
