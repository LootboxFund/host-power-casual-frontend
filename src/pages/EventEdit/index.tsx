import { FunctionComponent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EventEditForm, {
  OnEditEventFormPayload,
} from "../../components/EventEditForm";
import { EventFE, ReferralFE } from "../../lib/types";
import useEventEdit, { EditEventPayload } from "../../hooks/useEventEdit";
import styles from "./index.module.css";
import useEvent from "../../hooks/useEvent";
import { TournamentID } from "@wormgraph/helpers";
import { Spin } from "antd";
import useEventLootboxes from "../../hooks/useEventLootboxes";

export interface EventEditNavigationState {
  referral?: ReferralFE;
}

const EventEdit: FunctionComponent = () => {
  const navigate = useNavigate();
  let { id: eventID } = useParams();
  console.log("event id", eventID);
  const { event, loading: loadingEvent } = useEvent({
    eventID: eventID as TournamentID,
  });
  const { lootboxes, loading: loadingLootboxes } = useEventLootboxes({
    eventID: eventID as TournamentID,
  });

  console.log("event", event);
  console.log("lootboxes", lootboxes);

  const { editEvent } = useEventEdit();

  const navigateBack = () => {
    navigate(-1);
  };

  const handleEditEvent = async (payload: OnEditEventFormPayload) => {
    // await editEvent(payload);

    console.log("edit", "lol");

    // TODO: REFETCH DATA
    return;
  };

  return (
    <div className={styles.eventViewEditSettings}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <i className={styles.switchToAdvancedMode}>Switch to Advanced Mode</i>
        </div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.frameDiv3}>
          <b className={styles.switchToAdvancedMode}>🏰</b>
          <i className={styles.epicBattleEventSimpleSett}>
            Epic Battle Event (simple settings)
          </i>
        </div>
      </div>
      {!loadingEvent ? (
        <EventEditForm onEdit={handleEditEvent} onFormCancel={navigateBack} />
      ) : (
        <div className={styles.loadingContainer}>
          <Spin size="default" style={{ display: "block", margin: "auto" }} />
        </div>
      )}
    </div>
  );
};

export default EventEdit;
