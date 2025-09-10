import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function WellnessAssessment() {
  return (
    <section className="py-16 bg-gradient-to-br from-light-blue to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-slide-up">
            <h2 className="section-title text-primary-blue">Personalized Wellness Assessment</h2>
            <p className="text-lg mb-6 text-gray-700">Take our quick 5-minute assessment to receive personalized product recommendations tailored to your unique health needs and wellness goals.</p>
            <ul className="mb-8 space-y-3">
              {["Personalized supplement recommendations", "Custom wellness plan", "Lifestyle suggestions"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-success mt-1 mr-3 text-xl" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#" className="btn btn-primary text-lg">Start Assessment</Link>
          </div>
          <div className="lg:w-1/2 w-full glass-card p-8 shadow-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-serif text-2xl font-bold text-primary-blue mb-6">Quick Wellness Check</h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-2">What is your primary health concern?</label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Energy & Fatigue", "Stress & Anxiety", "Sleep Quality", "Immune Support", "Digestive Health", "Other"].map((option) => (
                      <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {["18-25", "26-35", "36-45", "46-55", "56-65", "65+"].map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input type="email" id="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue" />
              </div>
              <Button className="btn-primary w-full">Get Recommendations</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}