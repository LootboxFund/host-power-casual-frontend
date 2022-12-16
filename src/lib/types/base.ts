import {
  LootboxID,
  ReferralID,
  ReferralSlug,
  TournamentID,
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
