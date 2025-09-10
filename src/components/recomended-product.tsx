"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "INLIFE Immunity Plus Capsules 60's",
    price: "₹ 289.35",
    rating: 4.5,
  },
  {
    name: "Kee Pharma Immune Smart Capsule 60's",
    price: "₹ 289.35",
    rating: 4.5,
  },
];

export default function RecommendedProducts() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Recommended Wellness Products
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow">
              <CardContent>
                <div className="mb-4 h-32 w-full bg-muted rounded-md" />{" "}
                {/* Product image placeholder */}
                <h4 className="font-semibold text-foreground mb-1">{p.name}</h4>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(p.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">{p.price}</span>
                  <Button size="sm" variant="default">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
