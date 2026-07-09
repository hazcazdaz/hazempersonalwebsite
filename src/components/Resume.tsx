import React from "react";
import Section from "./Section";

const FILE_ID = "1MdIzvjhqyD3-cnkin1Xzv8NPOMGeNHLH";
const previewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const viewUrl = `https://drive.google.com/file/d/${FILE_ID}/view`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

const Resume: React.FC = () => (
  <Section id="resume" num="06" title="Resume">
    <div className="mb-6 flex flex-wrap gap-3 font-mono text-sm">
      <a
        href={downloadUrl}
        className="rounded-full border border-ink bg-ink px-6 py-3 text-paper transition-colors hover:border-accent hover:bg-accent"
      >
        Download PDF ↓
      </a>
      <a
        href={viewUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-rule px-6 py-3 text-faint transition-colors hover:border-accent hover:text-accent"
      >
        Open in Drive ↗
      </a>
    </div>
    <iframe
      src={previewUrl}
      title="Resume preview"
      className="h-[75vh] w-full rounded-2xl border border-rule"
      allow="autoplay"
    />
  </Section>
);

export default Resume;
