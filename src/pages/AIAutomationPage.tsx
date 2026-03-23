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
    title: 'Conjuring',
    description:
      'Inside a tool called Conjuring, we packaged one of the most common ad-creative scenarios. A designer uploads a single photo and gets back a nine-shot video with that character, while still being able to direct each scene, storyline, and styling choice manually or let AI build the whole sequence on its own.',
  },
  {
    title: 'Text Tool',
    description:
      'This tool helps teams produce SEO-driven promotional articles for different brands, briefs, brand books, and editorial guidelines. It removes the repetitive drafting stage so professional copywriters can focus on ideas, structure, and editing instead of spending their energy on first-pass writing.',
  },
  {
    title: 'TrendWatcher',
    description:
      'I helped shape a large internal system that automatically scans social-media trends, turns them into video concepts and scripts, and then generates new creative directions from prompts supplied by SMM managers.',
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[2px]">
      <img src={src} alt={alt} className="h-auto w-full" />
    </div>
  );
}

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative">
      <BackgroundShapes />

      <SubpageNav
        note={'«Multitool» is an internal platform built for Social Discovery Group. It brings different AI models into shared workflows that simplify day-to-day work for design, ASO, and SMM teams, with more than ten tools across text, image, and video. Conjuring, Text Tool, and TrendWatcher shown below are some of its core modules.'}
      />

      <main className="relative z-10 flex-1">
        {projects.map((project, i) => (
          <ProjectSection
            key={i}
            title={project.title}
            description={project.description}
            blocks={[]}
            invert={i % 2 === 1}
            sectionIndex={i + 1}
            media={
              <ProjectImage
                src={projectMedia[i]}
                alt={project.title}
              />
            }
          />
        ))}

        <div
          className="min-h-screen flex items-center border-t border-[#1C1C1C]"
          style={{ padding: '0 clamp(28px,4vw,80px)' }}
        >
          <p
            className="max-w-[960px] text-[clamp(28px,3.4vw,64px)] font-black uppercase leading-[0.88] tracking-[-0.04em] font-display"
            style={{ color: '#E8E3D8' }}
          >
            And a dozen other small tools that turned repetitive production work
            into reusable internal systems.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
