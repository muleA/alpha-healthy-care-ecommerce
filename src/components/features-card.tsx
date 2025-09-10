"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const features = [
  { title: "Order Medicines", discount: "30% Off" },
  { title: "Healthcare Products", discount: "30% Off" },
  { title: "Laboratory Test", discount: "30% Off" },
];

export default function FeatureCards() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Badge variant="secondary" className="mt-2">{item.discount}</Badge>
              </div>
              <ArrowRight />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
