import SubpageNav from '../components/SubpageNav';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import BackgroundShapes from '../components/BackgroundShapes';

const posterImages = [
  '/media/design-events/image-06969169-5ece-4237-bff5-8e4b5fc88301.webp',
  '/media/design-events/image-1cf772e2-df98-491a-9be0-bef8c1329e7e.webp',
  '/media/design-events/image-39ecf4ca-3176-4040-a437-631f50136b92.webp',
  '/media/design-events/image-52191bb3-f707-4a1a-a38b-038cbbda1e02.webp',
  '/media/design-events/image-5132433c-8283-46c7-8840-d34b94eae2cc.webp',
  '/media/design-events/image-9a8e748d-1f27-4b13-a368-0075e0146a43.webp',
  '/media/design-events/image-c73a127c-673a-4a47-94b6-aa35533fcd99.webp',
  '/media/design-events/image-e41cc8b0-c73a-401e-a999-a1aa24ed6f1f.webp',
  '/media/design-events/image-f2e02d10-ae49-40bf-806f-dc8a9d38e651.webp',
  '/media/design-events/image-f5b468b7-5cf3-4d08-bc47-fdec33746e87.webp',
  '/media/design-events/image-f9cb2952-f53d-4db3-83bd-66efd99a6031.webp',
  '/media/design-events/end.jpg',
  '/media/design-events/end (2).jpg',
  '/media/design-events/end.webp',
  '/media/design-events/end2.webp',
] as const;

const posterGap = 'clamp(10px,0.9vw,16px)';

function PosterImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="break-inside-avoid overflow-hidden rounded-[2px]"
      style={{ marginBottom: posterGap }}
    >
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
    </div>
  );
}

export default function DesignEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative">
      <BackgroundShapes />

      <SubpageNav note="Personal work, event instincts, and visual experiments that sit somewhere between design practice and making things happen in the real world." />

      <main className="relative z-10 flex-1">
        <ProjectSection
          title="Odds"
          titleAccent="& Ends"
          description="I like making and generating things for myself from time to time. Before AI automation, I spent a lot of time around event production and graffiti culture, so I can switch from visuals to hands-on coordination: talk to venue contractors about lighting and sound, then repaint a wall if needed."
          blocks={[]}
          sectionIndex={1}
          media={
            <div className="columns-2 md:columns-3" style={{ columnGap: posterGap }}>
              {posterImages.map((src, i) => (
                <PosterImage
                  key={src}
                  src={src}
                  alt={`Design and events poster ${i + 1}`}
                />
              ))}
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
            A side of the portfolio where design instincts, production sense,
            and rough visual energy meet in one place.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
