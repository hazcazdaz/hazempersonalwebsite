import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="container py-16 md:py-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Texas A&M University</CardTitle>
          <CardDescription>College Station, TX</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Degree</p>
              <p>B.S. in Computer Engineering</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Minors</p>
              <p>Mathematics, Game Design & Development</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cumulative GPA</p>
              <p>3.752</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Graduation</p>
              <p>May 2026</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">Relevant Coursework</p>
            <p className="mt-1 text-sm">
              Data Structures & Algorithms, Analysis of Algorithms, Foundations of Software Engineering, Introduction to Computer Systems, Programming Design & Concepts, Discrete Structures for Computing
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
