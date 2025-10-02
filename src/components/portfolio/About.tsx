import { Button } from "@/components/ui/button";
import React from "react";
import casualImage from "@/assets/profile-casual.png";

const About: React.FC = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">About me</h2>
        <p className="mt-2 text-muted-foreground">A quick intro and what I enjoy.</p>
      </header>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <article className="lg:col-span-7 space-y-4 leading-relaxed">
          <p>
            Thank you for reading my webpage! I'm Hazem and I am from Katy Texas. Pursuing a Bachelors of Science in Computer Engineering with two minors one in mathematics and the other game design & development at Texas A&amp;M University. I am also on the fast-track for a masters in computer science!
          </p>
          <p>
            I am interested in software development, game design & development, product management, and artificial intelligence! I enjoy creating and leading projects that are have an emphasis on users. In my free time, I draw digital art, play the guitar, rock climb, and enjoy meeting new people! I am open to any internships and full-time roles starting Summer 2026. Please do not hesitate to contact me!
          </p>
          <div className="mt-6">
            <Button asChild variant="hero">
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </article>
        <div className="lg:col-span-5">
          <img 
            src={casualImage} 
            alt="Hazem Salem relaxing on a boat" 
            className="w-full rounded-xl shadow-lg object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
