import type { EventDetails, Session, Person, Partner } from './types';

export const EVENT_DETAILS: EventDetails = {
  name: "THE FOUNDER’S NETWORK",
  edition: "HYDERABAD EDITION",
  organiser: "Hyderabad Startups Club (HSC)",
  parentOrganiser: "Startup Synerz Global Pvt. Ltd.",
  date: "Saturday, 3 October 2026",
  registrationTime: "9:30 AM onwards",
  mainEventTime: "10:00 AM Onwards",
  venueName: "NanoSpace Coworking",
  venueBranch: "Nanakramguda Branch",
  venueAddress: "Gachibowli, Hyderabad, Telangana 500032",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=NanoSpace+Coworking+Nanakramguda+Branch+Gachibowli+Hyderabad",
  contactPhone: "+91 9110415953",
  contactEmail: "startupsynerz@gmail.com",
  officialWebsite: "https://startupsynerz.com",
  disclaimer: "Concept preview for The Founder’s Network (3 Oct 2026). Event experience by ULink."
};

export const EVENT_POSTER_META = {
  tagline: "PEOPLE | IDEAS | OPPORTUNITIES",
  mission: "Building a Stronger Founder Ecosystem",
  values: ["MEET", "LEARN", "COLLABORATE", "GROW"],
  footerTagline: "BUILD A BIGGER TOMORROW, TOGETHER.",
  posterImageUrl: "/images/hsc/founders-network-poster.jpg",
  logoImageUrl: "/images/hsc/startup-synerz-logo.png"
};

export const SESSIONS: Session[] = [
  {
    id: "session-1",
    time: "9:30 AM",
    title: "Registration & Founder Check-in",
    description: "Welcome check-in for registered founders, community members, and partners. Badges & initial networking.",
    status: "announced",
    statusLabel: "Confirmed Schedule",
    category: "checkin"
  },
  {
    id: "session-2",
    time: "10:00 AM",
    title: "Opening Address: Startup Synerz & HSC",
    description: "Welcome by Startup Synerz leadership, Hyderabad Startups Club, and ecosystem partners.",
    status: "announced",
    statusLabel: "Confirmed Schedule",
    category: "opening"
  },
  {
    id: "session-3",
    time: "10:30 AM",
    title: "Keynote: From Idea to Investment",
    description: "The Founder’s Journey of Building a Startup That Can Scale.",
    status: "speaker_tbd",
    statusLabel: "Speaker details to be announced",
    category: "keynote",
    speakerOrPanel: "Speaker details to be announced"
  },
  {
    id: "session-4",
    time: "11:00 AM",
    title: "30-Second Founder Introductions",
    description: "Fast-paced pitch round where attending founders share what they are building in 30 seconds.",
    status: "announced",
    statusLabel: "Interactive Session",
    category: "pitches"
  },
  {
    id: "session-5",
    time: "Post-Pitches",
    title: "Networking Break & Panel Session",
    description: "Founder & investor panel, announcement of upcoming acceleration programs, and open networking.",
    status: "panel_tbd",
    statusLabel: "Panel details to be announced",
    category: "networking",
    speakerOrPanel: "Panel details to be announced"
  }
];

export const PEOPLE: Person[] = [
  {
    id: "person-umesh",
    name: "Umesh Kiran Medisetty",
    role: "Founder",
    organization: "UCreates",
    category: "founders",
    bio: "Building ULink digital experience layer for physical events. Attending The Founder’s Network Hyderabad.",
    verificationStatus: "community_intro",
    verificationLabel: "Event Attendee",
    linkedinUrl: "https://startupsynerz.com",
    avatarPlaceholder: "UK",
    interests: ["Event Tech", "Product", "Networking", "Scale"]
  },
  {
    id: "person-1",
    name: "Startup Synerz Leadership",
    role: "Event Organiser",
    organization: "Startup Synerz Global Pvt. Ltd.",
    category: "organisers",
    bio: "Core team leading Hyderabad Startups Club and building community initiatives across the ecosystem.",
    verificationStatus: "verified_organiser",
    verificationLabel: "Event Organiser",
    linkedinUrl: "https://in.linkedin.com/showcase/hyderabad-startups-club/",
    avatarPlaceholder: "SYNERZ",
    interests: ["Ideate", "Innovate", "Accelerate"]
  },
  {
    id: "person-2",
    name: "Hyderabad Startups Club Team",
    role: "Community Host",
    organization: "Hyderabad Startups Club (A Chapter of Startup Synerz)",
    category: "organisers",
    bio: "Facilitating connections, events, and growth opportunities for Hyderabad founders.",
    verificationStatus: "verified_organiser",
    verificationLabel: "Event Host",
    linkedinUrl: "https://startupsynerz.com",
    avatarPlaceholder: "HSC",
    interests: ["Networking", "Mentorship", "Startups"]
  },
  {
    id: "person-3",
    name: "Keynote Speaker Slot",
    role: "Featured Keynote Speaker",
    organization: "To Be Announced",
    category: "speakers",
    bio: "Keynote presentation on scaling startups from idea to venture investment.",
    verificationStatus: "tbd_placeholder",
    verificationLabel: "Speaker Details TBD",
    avatarPlaceholder: "KEYNOTE",
    interests: ["Venture Capital", "Scaling", "Growth"]
  },
  {
    id: "person-4",
    name: "Founder & Investor Panel",
    role: "Panel Discussion Participants",
    organization: "To Be Announced",
    category: "speakers",
    bio: "Prominent founders and angel/VC investors sharing scaling strategies.",
    verificationStatus: "tbd_placeholder",
    verificationLabel: "Panel Details TBD",
    avatarPlaceholder: "PANEL",
    interests: ["Fundraising", "Angel Investing", "Product"]
  },
  {
    id: "person-5",
    name: "Hyderabad Founder Community",
    role: "Attending Founders & Builders",
    organization: "100+ Founders & Ecosystem Leaders",
    category: "founders",
    bio: "Founders, investors, and mentors participating in 30-second introductions and open networking.",
    verificationStatus: "community_intro",
    verificationLabel: "Community Introduction",
    avatarPlaceholder: "100+",
    interests: ["SaaS", "AI/ML", "B2B", "Consumer"]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "partner-1",
    name: "Hyderabad Startups Club",
    type: "Organiser Initiative",
    description: "A Chapter of Startup Synerz.",
    websiteUrl: "https://startupsynerz.com",
    logoPlaceholder: "HSC"
  },
  {
    id: "partner-2",
    name: "Startup Synerz Global",
    type: "Parent Organisation",
    description: "Ideate | Innovate | Accelerate.",
    websiteUrl: "https://startupsynerz.com",
    logoPlaceholder: "STARTUP SYNERZ"
  },
  {
    id: "partner-3",
    name: "NanoSpace Coworking",
    type: "Venue Partner",
    description: "Nanakramguda Branch, Gachibowli, Hyderabad.",
    websiteUrl: "https://www.google.com/maps/search/?api=1&query=NanoSpace+Coworking+Nanakramguda+Branch+Gachibowli+Hyderabad",
    logoPlaceholder: "NANOSPACE"
  }
];
