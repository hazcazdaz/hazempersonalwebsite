import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  const DOC_ID = "13sFCamptJgzP4SkD2DKKtmx2UgtP7gbX";
  const viewUrl = `https://docs.google.com/document/d/${DOC_ID}/edit?usp=sharing`;
  const previewUrl = `https://docs.google.com/document/d/${DOC_ID}/preview`;
  const downloadUrl = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

  return (
    <section id="resume" className="container py-16 md:py-24">
      <header className="mb-6 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Resume</h2>
        <p className="mt-2 text-muted-foreground">View or download my latest resume. For opportunities, feel free to reach out via the contact section.</p>
      </header>

      <div className="flex items-center gap-3 mb-6">
        <Button asChild size="lg">
          <a href={viewUrl} target="_blank" rel="noopener" aria-label="Open resume on Google Drive in a new tab">
            View/Download PDF
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="#contact" aria-label="Jump to contact section">Contact me</a>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Inline Preview</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Embedded Google Drive preview */}
          <iframe
            src={previewUrl}
            className="w-full h-[70vh] rounded-md border"
            allow="autoplay"
            title="Resume preview"
          />
          <p className="sr-only">If the preview does not load, use the View/Download button above.</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Resume;
