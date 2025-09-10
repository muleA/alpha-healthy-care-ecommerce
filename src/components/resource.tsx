import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function HealthResources() {
  const resources = [
    {
      title: "Understanding Holistic Wellness",
      description:
        "Explore the six dimensions of wellness and how they contribute to your overall health and wellbeing.",
      image: "https://sfile.chatglm.cn/images-ppt/0b19b3f4ee9c.png",
    },
    {
      title: "Natural Immune Support Guide",
      description:
        "Learn about evidence-based natural approaches to strengthen your immune system throughout the year.",
      image: "https://sfile.chatglm.cn/images-ppt/e76d79d5f026.jpg",
    },
    {
      title: "Creating Balanced Nutrition",
      description:
        "Discover how to create a balanced nutritional plan that supports your body's unique needs.",
      image: "https://sfile.chatglm.cn/images-ppt/a70364ecad1a.png",
    },
  ];

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">Health Resources</h2>
          <Link
            href="#"
            className="text-primary-blue font-bold flex items-center text-lg"
          >
            View All <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary-blue mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-700 mb-6">{resource.description}</p>
                <Link
                  href="#"
                  className="text-primary-green font-bold flex items-center"
                >
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
