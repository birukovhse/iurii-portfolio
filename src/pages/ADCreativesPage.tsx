import SubpageNav from '../components/SubpageNav';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import BackgroundShapes from '../components/BackgroundShapes';

function VerticalVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[2px]">
      <video
        src={src}
        aria-label={title}
        className="aspect-[9/16] w-full object-cover"
        controls
        playsInline
        loop
        preload="metadata"
      />
    </div>
  );
}

function HorizontalVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[2px]">
      <video
        src={src}
        aria-label={title}
        className="aspect-[16/9] w-full object-cover"
        controls
        playsInline
        loop
        preload="metadata"
      />
    </div>
  );
}

export default function ADCreativesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative">
      <BackgroundShapes />

      <SubpageNav note="A mix of hands-on production, creative direction, and AI-assisted visual systems for performance work." />

      <main className="relative z-10 flex-1">
        <ProjectSection
          title="Freelance"
          description="Outside my day job, I still take on selected projects to stay sharp. This film, created in winter 2024–2025, was produced entirely by me, including the script."
          blocks={[]}
          sectionIndex={1}
          media={
            <HorizontalVideo src="/media/ad-creatives/Freelance.mp4" title="Freelance film" />
          }
        />

        <ProjectSection
          title="SDG"
          description="At the beginning of my time at the company, I was focused on making videos by hand. Later I moved into curating production and setting up more complex video pipelines."
          blocks={[]}
          invert
          sectionIndex={2}
          media={
            <div className="grid grid-cols-1 gap-[clamp(14px,1.4vw,24px)] sm:grid-cols-2">
              <VerticalVideo src="/media/ad-creatives/SDG1.mp4" title="SDG video 1" />
              <VerticalVideo src="/media/ad-creatives/SDG2.mp4" title="SDG video 2" />
            </div>
          }
        />

        <ProjectSection
          title="GLAM"
          description="I started my AI journey at the GLAM AI startup. We worked across both performance marketing and Stable Diffusion, including custom LoRAs and experimentation-heavy production flows."
          blocks={[]}
          sectionIndex={3}
          media={
            <div className="grid grid-cols-1 gap-[clamp(14px,1.4vw,24px)] sm:grid-cols-2">
              <VerticalVideo src="/media/ad-creatives/GLAM1.mp4" title="GLAM video 1" />
              <VerticalVideo src="/media/ad-creatives/GLAM2.mp4" title="GLAM video 2" />
            </div>
          }
        />

        <div
          className="min-h-screen flex items-center border-t border-[#1C1C1C]"
          style={{ padding: '0 28px' }}
        >
          <p
            className="max-w-[960px] text-[clamp(28px,3.4vw,64px)] font-black uppercase leading-[0.88] tracking-[-0.04em] font-display"
            style={{ color: '#E8E3D8' }}
          >
            Built across manual craft, creative direction, and AI-assisted
            production without losing the taste of the work itself.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
