import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-muted-foreground">Let’s build something great together.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reach me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-center gap-2"><MapPin className="size-4" /> Katy, TX</p>
            <p className="flex items-center gap-2"><Phone className="size-4" /> +1 (832) 812‑4643</p>
            <p className="flex items-center gap-2"><Mail className="size-4" /> hazemhhasalem@gmail.com</p>
            <div className="pt-2">
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <a href="mailto:hazemhhasalem@gmail.com">Email me</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+18328124643">Call now</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profiles</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <a href="https://github.com/hazcazdaz" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://www.linkedin.com/in/hhasalem" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;