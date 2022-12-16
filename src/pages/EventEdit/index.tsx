import { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EventEditForm, {
  OnEditEventFormPayload,
} from "../../components/EventEditForm";
import { EventFE, ReferralFE } from "../../lib/types";
import useEventEdit, { EditEventPayload } from "../../hooks/useEventEdit";
import styles from "./index.module.css";

export interface EventEditNavigationState {
  event: EventFE;
  referral: ReferralFE;
}

const EventEdit: FunctionComponent = () => {
  const navigate = useNavigate();
  const { state }: { state: EventEditNavigationState } = useLocation();
  const { editEvent } = useEventEdit();

  const navigateBack = () => {
    navigate(-1);
  };

  const handleEditEvent = async (payload: OnEditEventFormPayload) => {
    await editEvent(payload);

    // TODO: REFETCH DATA
    return;
  };

  if (!state.event || !state.referral) {
    // Gets caught in /src/routes.tsx
    throw new Error("Invalid state");
  }

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
      <EventEditForm onEdit={handleEditEvent} onFormCancel={navigateBack} />
    </div>
  );
};

export default EventEdit;
