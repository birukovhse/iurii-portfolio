import SubpageNav from '../components/SubpageNav';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import BackgroundShapes from '../components/BackgroundShapes';

const projectMedia = [
  '/media/ai-automation/conjuring.jpg',
  '/media/ai-automation/texttoolkit.jpg',
  '/media/ai-automation/n8n.png',
] as const;

const projects = [
  {
    title: 'Multitool',
    titleAccent: 'Conjuring',
    description:
      'Multitool is an internal platform built for Social Discovery Group. It brings different AI models into shared workflows that simplify day-to-day work for design, ASO, and SMM teams, with more than ten tools across text, image, and video.',
    blocks: [
      {
        label: 'What it is',
        text:
          'Inside a tool called Conjuring, we packaged one of the most common ad-creative scenarios. A designer uploads a single photo and gets back a nine-shot video with that character, while still being able to direct each scene, storyline, and styling choice manually or let AI build the whole sequence on its own.',
      },
    ],
  },
  {
    title: 'Multitool',
    titleAccent: 'Text tool',
    blocks: [
      {
        label: 'What it is',
        text:
          'This tool helps teams produce SEO-driven promotional articles for different brands, briefs, brand books, and editorial guidelines. It removes the repetitive drafting stage so professional copywriters can focus on ideas, structure, and editing instead of spending their energy on first-pass writing.',
      },
    ],
  },
  {
    title: 'TrendWatcher',
    blocks: [
      {
        label: 'What it is',
        text:
          'I helped shape a large internal system that automatically scans social-media trends, turns them into video concepts and scripts, and then generates new creative directions from prompts supplied by SMM managers.',
      },
    ],
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[4px]">
      <img src={src} alt={alt} className="h-auto w-full" />
    </div>
  );
}

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg font-inter relative">
      <BackgroundShapes />

      <SubpageNav note="Systems, tools, and workflows built to compress the path from a raw idea to a usable creative output." />

      <main className="relative z-10 flex-1">
        {projects.map((project, i) => (
          <ProjectSection
            key={i}
            title={project.title}
            titleAccent={project.titleAccent}
            description={project.description}
            blocks={project.blocks}
            invert={i % 2 === 1}
            media={
              <ProjectImage
                src={projectMedia[i]}
                alt={`${project.title} ${project.titleAccent ?? ''}`.trim()}
              />
            }
          />
        ))}

        <div className="px-[clamp(16px,2.5vw,48px)] pb-[clamp(160px,18vw,320px)]">
          <p className="max-w-[960px] text-[clamp(30px,3.6vw,68px)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-brand-black">
            And a dozen other small tools that turned repetitive production work
            into reusable internal systems.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
