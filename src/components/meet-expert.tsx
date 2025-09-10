import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MeetOurExperts() {
  const experts = [
    {
      name: "Dr. Sarah Johnson",
      title: "Naturopathic Physician",
      description: "Specializing in holistic approaches to chronic conditions with over 15 years of clinical experience.",
      image: "https://sfile.chatglm.cn/images-ppt/1173d268969f.jpg",
    },
    {
      name: "Michael Chen",
      title: "Certified Nutritionist",
      description: "Expert in plant-based nutrition and functional medicine approaches to optimal health.",
      image: "https://sfile.chatglm.cn/images-ppt/c4f63b25bf00.jpg",
    },
    {
      name: "Emma Rodriguez",
      title: "Wellness Coach",
      description: "Specializing in mindfulness practices and stress reduction techniques for modern lifestyles.",
      image: "https://sfile.chatglm.cn/images-ppt/9141e50d4ca7.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">Meet Our Wellness Experts</h2>
          <Link href="#" className="text-primary-blue font-bold flex items-center text-lg">
            View All <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="bg-background-light rounded-2xl overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-xl hover:-translate-y-2 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary-green mb-2">{expert.name}</h3>
                <p className="text-primary-blue mb-4 font-medium">{expert.title}</p>
                <p className="text-gray-700 mb-6">{expert.description}</p>
                <div className="flex justify-center space-x-6">
                  <Link href="#" className="text-primary-blue hover:text-primary-green transition-colors duration-300">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-primary-blue hover:text-primary-green transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}