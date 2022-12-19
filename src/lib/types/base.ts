import {
  LootboxID,
  LootboxTournamentSnapshotID,
  ReferralID,
  ReferralSlug,
  TournamentID,
  UserID,
} from "@wormgraph/helpers";

export interface EventFE {
  id: TournamentID;
  title: string;
  createdAt: number;
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
  snapshotID: LootboxTournamentSnapshotID;
  stampImage: string;
  runningCompletedClaims: number;
  description: string;
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
