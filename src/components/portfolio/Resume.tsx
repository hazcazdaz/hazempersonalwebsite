import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  const DRIVE_FILE_ID = "1sdXcgjy8If1s0t_mxy0PDMs4rxu1cUeT";
  const viewUrl = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`;
  const previewUrl = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

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
