// ---------------------------------------------------------------------------
// SITE CONTENT
// ---------------------------------------------------------------------------
// Facts marked `real: true` come from Sakib's actual, on-file background.
// Everything else is DRAFT / PLACEHOLDER copy — written to show the site's
// intended voice and structure, not to claim real outcomes. Replace anything
// wrapped by the <Placeholder> component before this goes live. See README.md
// for the full checklist of what to personalize.
// ---------------------------------------------------------------------------

export const mentor = {
  name: "Sakib Mahmud Sovon",
  shortName: "Sakib",
  role: "IELTS Mentor",
  location: "Dhaka, Bangladesh", // real
  credentials: [
    { label: "IELTS Academic", value: "8.0 Overall", real: true },
    { label: "B.Sc. in CSE", value: "Khulna University", real: true },
  ],
  realBackgroundNote:
    "5+ years of teaching and mentoring experience — instructor for a math outreach program reaching 5,000+ students, plus teaching-assistant and doubt-solving work.",
};

export const nav = [
  { label: "The Story", href: "#story" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "The Method", href: "#method" },
  { label: "Student Stories", href: "#stories" },
  { label: "Mentoring", href: "#services" },
  { label: "Resources", href: "#resources" },
];

export const hero = {
  eyebrow: "IELTS Mentor",
  title: "IELTS is not just a test.",
  titleAccent: "It's a journey. Let's navigate it together.",
  subtitle:
    "Personalized IELTS mentoring built around strategy, clarity, confidence, and your individual goals.",
  primaryCta: "Start Your Journey",
  secondaryCta: "Meet Your Mentor",
};

// Drives the hero's compact "current → goal" band-score element.
export const scoreScale = {
  label: "Target Band",
  current: 6.0,
  goal: 7.5,
};

export const mentorIntro = {
  headline: `Hi, I'm ${mentor.shortName}.`,
  tagline: "I help IELTS candidates turn uncertainty into a clear path forward.",
  belief: ["IELTS should be understood,", "not feared."],
  bio: [
    "I scored an 8.0 Overall on the IELTS Academic test — not because I memorized templates, but because I learned to read the test the way it's actually built.",
    "Before that, I spent years teaching: as an instructor for a nationwide math outreach program that reached more than 5,000 students, and as a teaching assistant and doubt-solver who got used to sitting with someone's confusion until it turned into a plan.",
    "That's the same thing I do now with IELTS — take a test that feels vague and overwhelming, and turn it into something a student can actually prepare for, on purpose.",
  ],
  cta: "Read My Story",
};

export const storyTimeline = [
  {
    year: "2020",
    title: "The Beginning",
    text: "Started a B.Sc. in Computer Science and Engineering at Khulna University — and, almost by accident, started teaching at the same time.",
    lesson: "Explaining something well is a completely different skill from knowing it.",
  },
  {
    year: "2020–2024",
    title: "Teaching, at Scale",
    text: "Spent these years as an instructor for a math outreach program that eventually reached 5,000+ students, alongside teaching-assistant and doubt-solving work.",
    lesson: "Most people aren't stuck because they lack ability. They're stuck because no one has shown them where to look.",
  },
  {
    year: "Discovering IELTS",
    title: "Taking the Test Myself",
    text: "Sat the IELTS Academic test and came away with an 8.0 Overall — and a much sharper sense of what the test is actually testing.",
    lesson: "IELTS rewards precision and strategy at least as much as raw English ability.",
  },
  {
    year: "Learning From Students",
    title: "What Actually Gets People Stuck",
    text: "Talking with candidates preparing for IELTS, one pattern kept repeating: hours of studying with no clear sense of what to fix next.",
    lesson: "Repetition without feedback just makes people tired, not better.",
  },
  {
    year: "Developing a Method",
    title: "Building a Framework",
    text: "Took everything from years of teaching and a top-band IELTS result and shaped it into a repeatable approach — the Compass Method (see below).",
    lesson: "A method only matters if it adapts to the person in front of you.",
  },
  {
    year: "Today",
    title: "Mentoring",
    text: "Now working directly with IELTS candidates — from confused beginners to Band 7+ candidates chasing precision — as a mentor, not just a course.",
    lesson: "The goal was never just a band score. It's clarity about your own path.",
  },
];

export const philosophyIntro =
  "I don't believe in studying harder just for the sake of studying harder.";

export const philosophyPrinciples = [
  {
    key: "clarity",
    title: "Clarity over confusion",
    short: "Know what the test is actually asking.",
    detail:
      "Most IELTS anxiety isn't about English — it's about not knowing what's being evaluated. Once that's clear, preparation stops feeling random.",
  },
  {
    key: "strategy",
    title: "Strategy over memorization",
    short: "Understand why certain approaches work.",
    detail:
      "Templates break under pressure. A strategy you understand adapts when the question doesn't match the pattern you memorized.",
  },
  {
    key: "feedback",
    title: "Feedback over repetition",
    short: "Know what needs to change.",
    detail:
      "Doing ten more practice tests without feedback just repeats the same mistakes ten more times. Targeted feedback is what actually moves the score.",
  },
  {
    key: "individuality",
    title: "Individuality over templates",
    short: "Your preparation should reflect your actual weaknesses and goals.",
    detail:
      "A Band 6 candidate and a Band 7.5 candidate need completely different plans. Generic courses can't tell the difference. Mentoring can.",
  },
];

export const compassMethod = {
  name: "The Compass Method",
  steps: [
    { letter: "C", word: "Clarify", text: "Understand the goal and the challenge." },
    { letter: "O", word: "Observe", text: "Identify patterns and gaps." },
    { letter: "M", word: "Map", text: "Create a direction for improvement." },
    { letter: "P", word: "Practice with Purpose", text: "Focus effort where it matters." },
    { letter: "A", word: "Adapt", text: "Adjust based on feedback." },
    { letter: "S", word: "Strengthen", text: "Build confidence and consistency." },
    { letter: "S", word: "Step Forward", text: "Approach the exam with clarity." },
  ],
};

export const compassDirections = [
  {
    key: "strategy",
    label: "Strategy",
    position: "top",
    insight:
      "Knowing English isn't enough. Knowing how to use it within the IELTS framework matters.",
  },
  {
    key: "clarity",
    label: "Clarity",
    position: "right",
    insight:
      "Preparation becomes easier when you know exactly what you're trying to improve.",
  },
  {
    key: "feedback",
    label: "Feedback",
    position: "bottom",
    insight: "Improvement begins when you understand what you're doing wrong.",
  },
  {
    key: "confidence",
    label: "Confidence",
    position: "left",
    insight: "Confidence comes from knowing what to do — not simply from doing more.",
  },
];

export const journeyMap = [
  { key: "dream", title: "DREAM", text: "You know where you want to go." },
  { key: "goal", title: "GOAL", text: "A band score becomes a real, specific target." },
  { key: "confusion", title: "CONFUSION", text: "But IELTS can make the path feel complicated." },
  { key: "direction", title: "DIRECTION", text: "That's where the right guidance changes everything." },
  { key: "growth", title: "GROWTH", text: "Small, deliberate improvements start compounding." },
  { key: "confidence", title: "CONFIDENCE", text: "You stop guessing and start trusting your preparation." },
  { key: "ieltsday", title: "IELTS DAY", text: "You walk in with a plan, not just hope." },
  { key: "next", title: "NEXT CHAPTER", text: "The score was never the real destination." },
];

export const bandLanguage = [
  { score: "6.0", label: "FOUNDATION" },
  { score: "7.0", label: "MOMENTUM" },
  { score: "7.5", label: "CONFIDENCE" },
  { score: "8.0+", label: "PRECISION" },
];

export const personas = [
  {
    key: "applicant",
    title: "The University Applicant",
    quote: "I need the score for my next academic chapter.",
    message:
      "University deadlines don't move. We'll build a plan around your timeline, not an open-ended one.",
    cta: "Plan your application timeline",
  },
  {
    key: "professional",
    title: "The Future Global Professional",
    quote: "IELTS is part of a bigger career plan.",
    message:
      "For you, IELTS is one milestone among several. We'll treat it that way — efficient, not all-consuming.",
    cta: "Talk about your career plan",
  },
  {
    key: "band7",
    title: "The Band 7+ Candidate",
    quote: "I'm close — but I can't break through.",
    message:
      "At this stage, doing more isn't always the answer. Understanding exactly where your marks are being lost becomes more important.",
    cta: "Find out where you're losing marks",
  },
  {
    key: "beginner",
    title: "The Confused Beginner",
    quote: "I don't know where to start.",
    message:
      "That's normal, and it's fixable. The first session is just about building a clear starting map.",
    cta: "Get your starting map",
  },
];

export const services = [
  {
    key: "core",
    title: "1:1 IELTS Mentoring",
    short: "Personalized guidance around the candidate's goals.",
    detail:
      "Not a fixed syllabus — a plan built around your timeline, your target band, and the sections that actually need work.",
  },
  {
    key: "writing",
    title: "Writing Mentoring",
    short: "Focused guidance for IELTS Writing.",
    detail:
      "Task 1 and Task 2 — structure, coherence, and the precision that separates a 6 from a 7.5.",
  },
  {
    key: "speaking",
    title: "Speaking Mentoring",
    short: "Individual feedback and confidence building.",
    detail:
      "Built around how you actually talk, not a rehearsed script — so it holds up under real exam pressure.",
  },
  {
    key: "strategy",
    title: "Strategy Session",
    short: "A focused conversation around direction and preparation.",
    detail:
      "One conversation to map your goals, challenges, and the most efficient path from where you are to your target band.",
  },
];

// PLACEHOLDER — replace with real, verified student outcomes before publishing.
export const studentStories = [
  {
    key: "story-1",
    startScore: "6.0",
    startDetail: "Writing 5.5",
    challenge: "“I didn't know why my Writing score wasn't improving.”",
    turningPoint: "“We changed how I approached feedback.”",
    resultScore: "7.5",
    resultDetail: "Writing 7.0",
    name: "[Student first name]",
    placeholder: true,
  },
  {
    key: "story-2",
    startScore: "[Score]",
    startDetail: "[Detail]",
    challenge: "“I'd taken the test twice and stalled at the same score.”",
    turningPoint: "“We found the one pattern that was capping me.”",
    resultScore: "[Score]",
    resultDetail: "[Detail]",
    name: "[Student first name]",
    placeholder: true,
  },
  {
    key: "story-3",
    startScore: "[Score]",
    startDetail: "[Detail]",
    challenge: "“Speaking was the section I dreaded most.”",
    turningPoint: "“Practice with actual feedback, not just repetition.”",
    resultScore: "[Score]",
    resultDetail: "[Detail]",
    name: "[Student first name]",
    placeholder: true,
  },
];

// PLACEHOLDER — replace with real testimonials before publishing.
export const testimonials = [
  {
    quote: "[Add a real testimonial once available — what changed for this student, in their own words.]",
    name: "[Student name]",
    goal: "[Goal, e.g. university admission]",
    placeholder: true,
  },
  {
    quote: "[Add a real testimonial once available.]",
    name: "[Student name]",
    goal: "[Goal]",
    placeholder: true,
  },
  {
    quote: "[Add a real testimonial once available.]",
    name: "[Student name]",
    goal: "[Goal]",
    placeholder: true,
  },
];

// PLACEHOLDER — fill in with real numbers only. Do not publish invented stats.
export const achievements = [
  { label: "YEARS MENTORING IELTS", value: "[X]", placeholder: true },
  { label: "STUDENTS GUIDED", value: "[X]", placeholder: true },
  { label: "BAND 7+ JOURNEYS", value: "[X]", placeholder: true },
  { label: "WORKSHOPS RUN", value: "[X]", placeholder: true },
  { label: "RESOURCES CREATED", value: "[X]", placeholder: true },
];

export const passportMilestones = [
  { key: "story", label: "The Story", sectionId: "story" },
  { key: "philosophy", label: "The Philosophy", sectionId: "philosophy" },
  { key: "method", label: "The Method", sectionId: "method" },
  { key: "stories", label: "Student Stories", sectionId: "stories" },
  { key: "resources", label: "Resources", sectionId: "resources" },
  { key: "next", label: "Your Next Step", sectionId: "final-cta" },
];

// PLACEHOLDER — replace with real article topics/links once written.
export const resources = [
  {
    category: "Writing",
    title: "Why your IELTS Writing score may be stuck",
    excerpt: "[Add a short excerpt once this article is written.]",
    placeholder: true,
  },
  {
    category: "Strategy",
    title: "The problem with memorizing IELTS templates",
    excerpt: "[Add a short excerpt once this article is written.]",
    placeholder: true,
  },
  {
    category: "Insights",
    title: "What Band 7 actually requires",
    excerpt: "[Add a short excerpt once this article is written.]",
    placeholder: true,
  },
  {
    category: "Mentor Notes",
    title: "How to prepare for IELTS without burning out",
    excerpt: "[Add a short excerpt once this article is written.]",
    placeholder: true,
  },
];

export const askMentor = {
  title: "Got an IELTS question?",
  lines: [
    "Maybe you've been stuck at the same score.",
    "Maybe you're unsure where to start.",
    "Maybe you simply need a second opinion.",
  ],
  cta: "Ask Me",
};

export const finalCta = {
  title: "Your IELTS goal is part of a bigger story.",
  subtitle: "Let's make sure you know where you're going — and how to get there.",
  primary: "Start Your IELTS Journey",
  secondary: "Talk to Me",
};

export const footer = {
  statement: "IELTS mentoring with clarity, strategy, and purpose.",
  // PLACEHOLDER — add real contact channels before publishing.
  contact: {
    email: "[your-email@example.com]",
    whatsapp: "[+8xx-xxxx-xxxxx]",
  },
  social: [
    { label: "LinkedIn", href: "#", placeholder: true },
    { label: "Instagram", href: "#", placeholder: true },
    { label: "Facebook", href: "#", placeholder: true },
  ],
};
