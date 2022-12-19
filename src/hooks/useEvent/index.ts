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
  refetch: () => void;
  error?: Error;
}

const useEvent = (props: UseEventProps): UseEventOutput => {
  const { data, loading, error, refetch } = useQuery<
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
          createdAt:
            data.viewTournamentAsOrganizer.tournament.timestamps.createdAt,
        }
      : undefined;

  const parsedError = error
    ? new Error(error.message)
    : data?.viewTournamentAsOrganizer &&
      "error" in data.viewTournamentAsOrganizer
    ? new Error(data.viewTournamentAsOrganizer.error.message)
    : undefined;

  return {
    event,
    loading: loading,
    refetch,
    error: parsedError,
  };
};

export default useEvent;
