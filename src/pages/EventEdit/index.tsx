import { FunctionComponent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventEditForm, {
  OnEditEventFormPayload,
  AddTeamPayload,
} from "../../components/EventEditForm";
import { LootboxFE, ReferralFE } from "../../lib/types";
import useEventEdit from "../../hooks/useEventEdit";
import styles from "./index.module.css";
import useEvent from "../../hooks/useEvent";
import { LootboxTournamentSnapshotID, TournamentID } from "@wormgraph/helpers";
import { Button, Result, Spin, Modal } from "antd";
import useEventLootboxes from "../../hooks/useEventLootboxes";
import LootboxEditForm, {
  EditLootboxPayload,
} from "../../components/LootboxEditForm";
import useTeamEdit from "../../hooks/useTeamEdit";
import { manifest } from "../../manifest";

export interface EventEditNavigationState {
  referral?: ReferralFE;
}

const EventEdit: FunctionComponent = () => {
  const [selectedLootbox, setSelectedLootbox] = useState<LootboxFE | null>(
    null
  );
  const [isEditLootboxModalOpen, setIsEditLootboxModalOpen] = useState(false);
  const navigate = useNavigate();
  let { id: eventID } = useParams();
  const {
    event,
    loading: loadingEvent,
    refetch: refetchEvent,
    error,
  } = useEvent({
    eventID: eventID as TournamentID,
  });
  const {
    lootboxes,
    loading: loadingLootboxes,
    refetch: refetchLootboxes,
  } = useEventLootboxes({
    eventID: eventID as TournamentID,
  });

  const { editEvent } = useEventEdit();

  const { addTeam, removeTeam } = useTeamEdit();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateToCreate = () => {
    navigate("/");
  };

  const handleEditEvent = async (payload: OnEditEventFormPayload) => {
    await editEvent(payload);

    refetchEvent();
    refetchLootboxes();
    return;
  };

  const handleOpenTeamSettings = (lootbox: LootboxFE) => {
    setSelectedLootbox(lootbox);
    setIsEditLootboxModalOpen(true);
  };

  const closeTeamSettings = () => {
    setSelectedLootbox(null);
    setIsEditLootboxModalOpen(false);
  };

  const handleAddTeamToEvent = async (
    payload: AddTeamPayload
  ): Promise<void> => {
    await addTeam(payload);

    refetchLootboxes();
    return;
  };

  const handleRemoveTeamFromEvent = async (
    eventID: TournamentID,
    snapshotID: LootboxTournamentSnapshotID
  ): Promise<void> => {
    await removeTeam({
      eventID: eventID,
      lootboxTournamentSnapshotID: snapshotID,
    });

    refetchLootboxes();

    closeTeamSettings();

    return;
  };

  const handleEditLootbox = async (
    eventID: TournamentID,
    payload: EditLootboxPayload
  ) => {
    await editEvent({
      id: eventID,
      lootboxes: [
        {
          id: payload.lootboxID,
          name: payload.name,
        },
      ],
    });

    refetchLootboxes();
  };

  return (
    <div className={styles.eventViewEditSettings}>
      <a
        href={
          !event
            ? `${manifest.microfrontends.dashboard.promoter}`
            : `${manifest.microfrontends.dashboard.promoter}/dashboard/events/id/${event.id}`
        }
        className={styles.hrefAdvanced}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <i className={styles.switchToAdvancedMode}>
              Switch to Advanced Mode
            </i>
          </div>
        </div>
      </a>
      <div className={styles.frameDiv2}>
        <div className={styles.frameDiv3}>
          <b className={styles.switchToAdvancedMode}>🏰</b>
          <i className={styles.epicBattleEventSimpleSett}>
            Epic Battle Event (simple settings)
          </i>
        </div>
      </div>
      {loadingEvent ? (
        <div className={styles.loadingContainer}>
          <Result
            icon={
              <Spin size="large" style={{ display: "block", margin: "auto" }} />
            }
          />
        </div>
      ) : !!event ? (
        <EventEditForm
          event={event}
          lootboxes={lootboxes}
          loadingLootboxes={loadingLootboxes}
          onEdit={handleEditEvent}
          onFormCancel={navigateBack}
          onOpenTeamSettings={handleOpenTeamSettings}
          addTeam={handleAddTeamToEvent}
        />
      ) : !!error ? (
        <div className={styles.loadingContainer}>
          <Result
            status="error"
            title="An error occured"
            subTitle={error?.message || "We can't load that event right now..."}
            extra={
              <Button type="primary" onClick={navigateToCreate}>
                Create a new event?
              </Button>
            }
          ></Result>
        </div>
      ) : null}

      <Modal
        open={isEditLootboxModalOpen}
        onCancel={closeTeamSettings}
        bodyStyle={{ overflowX: "scroll" }}
        okButtonProps={{ style: { display: "none" } }}
      >
        {selectedLootbox && event && (
          <LootboxEditForm
            eventID={event.id as TournamentID}
            lootbox={selectedLootbox}
            removeFromEvent={handleRemoveTeamFromEvent}
            editLootbox={handleEditLootbox}
          />
        )}
      </Modal>
    </div>
  );
};

export default EventEdit;
