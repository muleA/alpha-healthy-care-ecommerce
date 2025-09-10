import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TestTube, Droplet, Hotel, Leaf } from "lucide-react";
import Link from "next/link";

export default function TryAtHome() {
  const samples = [
    { icon: <TestTube className="text-primary-green text-2xl" />, title: "Supplement Samples", description: "Try our most popular supplements" },
    { icon: <Droplet className="text-primary-green text-2xl" />, title: "Oil Samples", description: "Test our essential oil blends" },
    { icon: <Hotel className="text-primary-green text-2xl" />, title: "Skincare Samples", description: "Experience our natural skincare" },
    { icon: <Leaf className="text-primary-green text-2xl" />, title: "Herbal Samples", description: "Discover our herbal remedies" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-light-green to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-slide-up">
            <h2 className="section-title text-primary-green">Try Our Products at Home</h2>
            <p className="text-lg mb-8 text-gray-700">Not sure which products are right for you? Try our samples at home to find your perfect wellness match.</p>
            <ul className="mb-8 space-y-4">
              {["Get 3 free samples with any $25 purchase", "Try before you buy full-size products", "Find your perfect wellness routine"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#" className="btn btn-primary text-lg">Get Samples</Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {samples.map((sample, index) => (
              <Card
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <CardContent>
                  <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    {sample.icon}
                  </div>
                  <h4 className="font-bold text-primary-green mb-2">{sample.title}</h4>
                  <p className="text-sm text-gray-600">{sample.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}