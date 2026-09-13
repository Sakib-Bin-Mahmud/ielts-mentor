import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MentorIntro } from "@/components/MentorIntro";
import { StoryTimeline } from "@/components/StoryTimeline";
import { Philosophy } from "@/components/Philosophy";
import { CompassMethod } from "@/components/CompassMethod";
import { MentorCompass } from "@/components/MentorCompass";
import { JourneyMap } from "@/components/JourneyMap";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Services } from "@/components/Services";
import { StudentStories } from "@/components/StudentStories";
import { Testimonials } from "@/components/Testimonials";
import { Achievements } from "@/components/Achievements";
import { Resources } from "@/components/Resources";
import { AskMentor } from "@/components/AskMentor";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MentorPassport } from "@/components/MentorPassport";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MentorIntro />
      <StoryTimeline />
      <Philosophy />
      <CompassMethod />
      <MentorCompass />
      <JourneyMap />
      <WhoIHelp />
      <Services />
      <StudentStories />
      <Testimonials />
      <Achievements />
      <Resources />
      <div id="ask">
        <AskMentor />
      </div>
      <FinalCTA />
      <Footer />
      <MentorPassport />
    </main>
  );
}
