import React, { useRef, useEffect } from 'react';

function Index() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Fill canvas with a white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <main className="flex flex-1 items-center justify-center">
      <canvas ref={canvasRef} className="border border-gray-300"></canvas>
    </main>
  );
}

export default Index;