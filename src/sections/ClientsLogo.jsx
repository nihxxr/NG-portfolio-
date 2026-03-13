import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsLogo() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const text = `Blending academic research, industry internships, 
  and community work across AI, backend systems, 
  and real-world problem solving.`;
  useEffect(() => {
    const nodes = cardsRef.current.filter(Boolean);
    if (!nodes.length) return;

    gsap.fromTo(
      nodes,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full pt-5 md:pt-10 lg:pt-16">
      <div className="">
        <AnimatedHeaderSection
          subTitle={"Where I've Applied My Skills"}
          title={"Domains & Experience"}
          text={text}
          textColor={"text-black"}
          withScrollTrigger={true}
        />

        <div className="mt-10 px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div
              ref={(el) => {
                cardsRef.current[0] = el;
              }}
              className="p-6 md:p-8 rounded-3xl border border-black/10 bg-white"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Academic & Research
              </h3>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                Projects in autism detection, graph captioning, and cyberbullying
                detection, with a focus on rigor, evaluation metrics, and
                presenting results clearly in reports and reviews.
              </p>
            </div>

            <div
              ref={(el) => {
                cardsRef.current[1] = el;
              }}
              className="p-6 md:p-8 rounded-3xl border border-black/10 bg-white"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Industry Internships
              </h3>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                Backend and GenAI work at organizations like Happiest Minds and
                Sconti, building production APIs, automation workflows, and ML
                integrations that align with real product requirements.
              </p>
            </div>

            <div
              ref={(el) => {
                cardsRef.current[2] = el;
              }}
              className="p-6 md:p-8 rounded-3xl border border-black/10 bg-white"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Community & Outreach
              </h3>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                Leading technical and cultural events, teaching introductory AI
                concepts to school students, and coordinating large-scale
                initiatives that combine organization with clear communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
