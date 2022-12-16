import { useQuery } from "@apollo/client";
import { TournamentID } from "@wormgraph/helpers";
import { QueryViewTournamentAsOrganizerArgs } from "../../api/graphql/generated/types";
import { EventFE } from "../../lib/types";
import {
  ViewTournamentAsOrganizerResponseFE,
  VIEW_TOURNAMENT_AS_ORGANIZER,
} from "./api.gql";

interface UseEventProps {
  eventID: TournamentID;
}
interface UseEventOutput {
  event?: EventFE;
  loading: boolean;
}

const useEvent = (props: UseEventProps): UseEventOutput => {
  const { data, loading, error } = useQuery<
    ViewTournamentAsOrganizerResponseFE,
    QueryViewTournamentAsOrganizerArgs
  >(VIEW_TOURNAMENT_AS_ORGANIZER, {
    variables: {
      tournamentID: props.eventID,
    },
    skip: !props.eventID,
  });

  const event: EventFE | undefined =
    data?.viewTournamentAsOrganizer &&
    "tournament" in data.viewTournamentAsOrganizer
      ? {
          id: data.viewTournamentAsOrganizer.tournament.id,
          title: data.viewTournamentAsOrganizer.tournament.title,
        }
      : undefined;

  console.log("YO", event, loading, error);
  return {
    event,
    loading: loading,
  };
};

export default useEvent;
