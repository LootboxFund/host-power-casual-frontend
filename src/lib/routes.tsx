import { EventInviteSlug, EventInviteType } from "@wormgraph/helpers";
import { manifest } from "../manifest";

/** duplicated in promoter frontend */
export const buildPlayerInviteLinkForEvent = (slug: EventInviteSlug) => {
  return `${manifest.microfrontends.dashboard.playerOnboard}?code=${slug}&type=${EventInviteType.PLAYER}`;
};

/** duplicated in promoter frontend */
export const buildPromoterInviteLinkForEvent = (slug: EventInviteSlug) => {
  return `${manifest.microfrontends.dashboard.playerOnboard}?code=${slug}&type=${EventInviteType.PROMOTER}`;
};
