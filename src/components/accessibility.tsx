"use client";
import { Button } from "@/components/ui/button";
import { Contrast, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Accessibility() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}%`;
    document.body.classList.toggle("high-contrast", highContrast);
  }, [fontSize, highContrast]);

  return (
    <div className="fixed bottom-24 right-4 bg-white rounded-full shadow-xl p-2 flex gap-3 z-50">
      <Button
        variant="ghost"
        className="w-12 h-12 rounded-full bg-background-light flex items-center justify-center text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-300 hover:scale-110"
        title="Toggle High Contrast"
        onClick={() => setHighContrast(!highContrast)}
      >
        <Contrast />
      </Button>
      <Button
        variant="ghost"
        className="w-12 h-12 rounded-full bg-background-light flex items-center justify-center text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-300 hover:scale-110"
        title="Increase Text Size"
        onClick={() => setFontSize((prev) => Math.min(prev + 10, 150))}
      >
        <Plus />
      </Button>
      <Button
        variant="ghost"
        className="w-12 h-12 rounded-full bg-background-light flex items-center justify-center text-gray-700 hover:bg-primary-green hover:text-white transition-all duration-300 hover:scale-110"
        title="Decrease Text Size"
        onClick={() => setFontSize((prev) => Math.max(prev - 10, 70))}
      >
        <Minus />
      </Button>
    </div>
  );
}
