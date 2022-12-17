import { useQuery } from "@apollo/client";
import { TournamentID } from "@wormgraph/helpers";
import { QueryViewTournamentAsOrganizerArgs } from "../../api/graphql/generated/types";
import { LootboxFE } from "../../lib/types";
import {
  ViewEventLootboxesAsOrganizerResponseFE,
  VIEW_EVENT_LOOTBOXES_AS_ORGANIZER,
} from "./api.gql";

interface UseEventLootboxesProps {
  eventID: TournamentID;
}
interface UseEventLootboxesOutput {
  lootboxes: LootboxFE[];
  loading: boolean;
  refetch: () => void;
}

const useEventLootboxes = (
  props: UseEventLootboxesProps
): UseEventLootboxesOutput => {
  const { data, loading, error, refetch } = useQuery<
    ViewEventLootboxesAsOrganizerResponseFE,
    QueryViewTournamentAsOrganizerArgs
  >(VIEW_EVENT_LOOTBOXES_AS_ORGANIZER, {
    variables: {
      tournamentID: props.eventID,
    },
    skip: !props.eventID,
  });

  const lootboxSnapshots: LootboxFE[] =
    data?.viewTournamentAsOrganizer &&
    "tournament" in data.viewTournamentAsOrganizer
      ? data.viewTournamentAsOrganizer.tournament.lootboxSnapshots.map(
          (snap) => {
            return {
              id: snap.lootbox.id,
              stampImage: snap.lootbox.stampImage,
              nftBountyValue: snap.lootbox.nftBountyValue,
              maxTickets: snap.lootbox.maxTickets,
              name: snap.lootbox.name,
              snapshotID: snap.id,
            };
          }
        )
      : [];

  return {
    lootboxes: lootboxSnapshots,
    loading,
    refetch,
  };
};

export default useEventLootboxes;
