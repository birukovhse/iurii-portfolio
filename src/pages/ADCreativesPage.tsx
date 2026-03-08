import SubpageNav from '../components/SubpageNav';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

function VerticalVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[4px]">
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
    <div className="overflow-hidden rounded-[4px]">
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
    <div className="min-h-screen flex flex-col bg-brand-bg font-inter">
      <SubpageNav
        category="AD Creatives"
        note="A mix of hands-on production, creative direction, and AI-assisted visual systems for performance work."
      />

      <main className="flex-1">
        <ProjectSection
          title="SDG"
          description="At the beginning of my time at the company, I was focused on making videos by hand. Later I moved into curating production and setting up more complex video pipelines."
          blocks={[]}
          media={
            <div className="grid grid-cols-1 gap-[clamp(16px,1.6vw,28px)] sm:grid-cols-2">
              <VerticalVideo src="/media/ad-creatives/SDG1.mp4" title="SDG video 1" />
              <VerticalVideo src="/media/ad-creatives/SDG2.mp4" title="SDG video 2" />
            </div>
          }
        />

        <ProjectSection
          title="Freelance"
          description="Outside my day job, I still take on selected projects to stay sharp. This film, created in winter 2024–2025, was produced entirely by me, including the script."
          blocks={[]}
          invert
          media={<HorizontalVideo src="/media/ad-creatives/Freelance.mp4" title="Freelance film" />}
        />

        <ProjectSection
          title="GLAM"
          description="I started my AI journey at the GLAM AI startup. We worked across both performance marketing and Stable Diffusion, including custom LoRAs and experimentation-heavy production flows."
          blocks={[]}
          media={
            <div className="grid grid-cols-1 gap-[clamp(16px,1.6vw,28px)] sm:grid-cols-2">
              <VerticalVideo src="/media/ad-creatives/GLAM1.mp4" title="GLAM video 1" />
              <VerticalVideo src="/media/ad-creatives/GLAM2.mp4" title="GLAM video 2" />
            </div>
          }
        />

        <section className="border-t border-brand-black/15 px-[clamp(24px,3.5vw,68px)] py-[clamp(140px,15vw,260px)]">
          <p className="max-w-[1080px] text-[clamp(34px,4vw,76px)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-brand-black">
            Built across manual craft, creative direction, and AI-assisted production without losing the taste of the work itself.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
