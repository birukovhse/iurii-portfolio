import SubpageNav from '../components/SubpageNav';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

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
      <img
        src={src}
        alt={alt}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg font-inter">
      <SubpageNav
        category="AI Automation"
        note="Systems, tools, and workflows built to compress the path from a raw idea to a usable creative output."
      />

      <main className="flex-1">
        {projects.map((project, i) => (
          <ProjectSection
            key={i}
            title={project.title}
            titleAccent={project.titleAccent}
            description={project.description}
            blocks={project.blocks}
            invert={i % 2 === 1}
            media={<ProjectImage src={projectMedia[i]} alt={`${project.title} ${project.titleAccent ?? ''}`.trim()} />}
          />
        ))}
        <section className="border-t border-brand-black/15 px-[clamp(24px,3.5vw,68px)] py-[clamp(140px,15vw,260px)]">
          <p className="max-w-[1080px] text-[clamp(34px,4vw,76px)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-brand-black">
            And a dozen other small tools that turned repetitive production work into reusable internal systems.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
