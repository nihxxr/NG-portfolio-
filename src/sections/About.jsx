import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Building intelligent backends where
    AI, automation, and engineering
    meet real impact.`;
  const aboutText = `I'm a backend developer and AI/ML engineer who enjoys turning messy, real-world problems into stable, intelligent systems. From GenAI-powered HR bots to aviation weather risk tools and recommender systems, I focus on delivering fast, reliable APIs that hide complexity behind simple interfaces.

  My core stack includes Python, Flask/FastAPI, SQL, MongoDB, Selenium, and PyTorch, with experience deploying ML models into production workflows and orchestrating multi-agent automations. I care about latency, observability, and clean data flows as much as model performance.

  Outside of code, I've led 60+ large-scale events, managed marketing campaigns, and worked hands-on in domains like aviation and healthcare—giving me a practical sense of how technology should support teams, not complicate them.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Craft in Details, Strength in Structure."}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-4 md:px-10 pb-16 text-xl font-light tracking-wide lg:flex-row-reverse md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/nihar-g.JPG"
          alt="Nihar G photo"
          className="rounded-xl w-full lg:w-2/5"
        />
        <AnimatedTextLines text={aboutText} className={"w-full text-lg"} lineGap="pb-5 last:pb-0"/>
      </div>
    </section>
  );
};

export default About;
