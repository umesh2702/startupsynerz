export interface EventDetails {
  name: string;
  edition: string;
  organiser: string;
  parentOrganiser: string;
  date: string;
  registrationTime: string;
  mainEventTime: string;
  venueName: string;
  venueBranch: string;
  venueAddress: string;
  mapsUrl: string;
  contactPhone: string;
  contactEmail: string;
  officialWebsite: string;
  disclaimer: string;
}

export interface Session {
  id: string;
  time: string;
  title: string;
  description: string;
  status: 'announced' | 'speaker_tbd' | 'panel_tbd';
  statusLabel: string;
  category: 'checkin' | 'opening' | 'keynote' | 'pitches' | 'networking';
  speakerOrPanel?: string;
}

export type ProfileCategory = 'organisers' | 'speakers' | 'founders' | 'investors' | 'mentors' | 'partners';

export interface Person {
  id: string;
  name: string;
  role: string;
  organization: string;
  category: ProfileCategory;
  bio: string;
  verificationStatus: 'verified_organiser' | 'community_intro' | 'tbd_placeholder';
  verificationLabel: string;
  linkedinUrl?: string;
  avatarPlaceholder: string;
  interests?: string[];
}

export interface Partner {
  id: string;
  name: string;
  type: string;
  description: string;
  websiteUrl: string;
  logoPlaceholder: string;
}
