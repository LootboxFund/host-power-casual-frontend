import {
  LootboxID,
  ReferralID,
  ReferralSlug,
  TournamentID,
  UserID,
} from "@wormgraph/helpers";

export interface EventFE {
  id: TournamentID;
  title: string;
}

export interface ReferralFE {
  id: ReferralID;
  slug: ReferralSlug;
}

export interface LootboxFE {
  id: LootboxID;
  name: string;
  nftBountyValue: string;
  maxTickets: number;
}

export interface FrontendUser {
  id: UserID;
  email: string | null;
  phone: string | null;
  isEmailVerified: boolean;
  username: string | null;
  avatar: string | null;
  isAnonymous: boolean;
}
