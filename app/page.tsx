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
// import { StudentStories } from "@/components/StudentStories";
// import { Testimonials } from "@/components/Testimonials";
// import { Achievements } from "@/components/Achievements";
import { Resources } from "@/components/Resources";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MentorPassport } from "@/components/MentorPassport";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider index="01" from="paper" to="paper-dim" />
      <MentorIntro />
      <SectionDivider index="02" from="paper-dim" to="paper" />
      <StoryTimeline />
      <SectionDivider index="03" label="My Beliefs" from="paper" to="navy" />
      <Philosophy />
      <SectionDivider index="04" label="My Approach" from="navy" to="paper" />
      <CompassMethod />
      <SectionDivider index="05" label="The Compass" from="paper" to="navy" />
      <MentorCompass />
      <SectionDivider index="06" label="The Journey" from="navy" to="paper" />
      <JourneyMap />
      <SectionDivider index="07" label="Who I Help" from="paper" to="navy" />
      <WhoIHelp />
      <SectionDivider index="08" label="Mentoring" from="navy" to="paper" />
      <Services />
      {/* Success Stories & Testimonials — commented out for now, both are
          still placeholder-only content. Re-enable once real stories and
          testimonials are ready, and restore the "09"/"10" chapter indices
          below (bumping the ones after back up by two). */}
      {/* <SectionDivider index="09" from="paper" to="paper-dim" />
      <StudentStories />
      <SectionDivider index="10" from="paper-dim" to="paper" />
      <Testimonials /> */}
      {/* Achievements ("By the Numbers") — commented out for now, all the
          stats are still unfilled placeholders. Re-enable once real numbers
          are ready, and restore the "09" chapter index below (bumping the
          ones after back up by one). */}
      {/* <SectionDivider index="09" label="By the Numbers" from="paper" to="navy" />
      <Achievements /> */}
      <SectionDivider index="09" label="Resources & Insights" from="paper" to="paper-dim" />
      <Resources />
      <SectionDivider index="10" label="Your Next Step" from="paper-dim" to="navy" />
      <FinalCTA />
      <Footer />
      <MentorPassport />
    </main>
  );
}
