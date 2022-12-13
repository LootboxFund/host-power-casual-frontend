import { Button, Input, Row, Col, Space } from "antd";
import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";

export interface OnCreateEventPayload {
  nLootbox: number; // number of lootboxes to make
  eventName?: string;
  lootboxMaxTickets?: number;
  eventTicketPrize?: string;
}
interface CreateEventFormProps {
  onCreateEvent: (payload: OnCreateEventPayload) => Promise<void>;
}

const CreateEventForm: FunctionComponent<CreateEventFormProps> = (
  props: CreateEventFormProps
) => {
  const [teamCount, setTeamCount] = useState(1);
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
  const [eventName, setEventName] = useState<string | undefined>(undefined);
  const [maxTickets, setMaxTickets] = useState<string | undefined>(undefined);
  const [ticketPrize, setTicketPrize] = useState<string | undefined>(undefined);

  const incrementTeamCount = () => {
    setTeamCount((cnt) => cnt + 1);
  };

  const decrementTeamCount = () => {
    setTeamCount((cnt) => {
      if (cnt === 0) {
        return 0;
      } else {
        return cnt - 1;
      }
    });
  };

  const onCreateEvent = () => {
    const payload: OnCreateEventPayload = {
      nLootbox: teamCount,
      eventName: eventName,
      lootboxMaxTickets: maxTickets ? parseInt(maxTickets) : undefined,
      eventTicketPrize: ticketPrize,
    };
  };

  return (
    <div className={styles.createEventFormContainer}>
      <b className={styles.nUMBEROFTEAMS}>NUMBER OF TEAMS</b>
      <br />
      <br />
      <Row wrap={false} gutter={4} style={{ margin: "0 auto" }}>
        <Col span={4}>
          <Button
            className={styles.frameButton}
            type="default"
            size="middle"
            shape="default"
            onClick={decrementTeamCount}
          >
            -
          </Button>
        </Col>
        <Col span={16}>
          <Input.TextArea
            value={teamCount}
            className={styles.frameInputTextArea}
            size="middle"
            placeholder="2"
            readOnly
          />
        </Col>
        <Col span={4}>
          <Button
            className={styles.frameButton1}
            type="default"
            size="middle"
            shape="default"
            onClick={incrementTeamCount}
          >
            +
          </Button>
        </Col>
      </Row>
      {isAdvancedSettingsOpen && (
        <Space
          size="middle"
          direction="vertical"
          style={{ paddingTop: "16px" }}
        >
          <Input
            placeholder="EVENT NAME"
            onChange={(e) => {
              setEventName(e.target.value ? e.target.value : undefined);
            }}
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          ></Input>
          <Input
            placeholder="MAX TICKETS PER TEAM"
            onChange={(e) => {
              setMaxTickets(e.target.value ? e.target.value : undefined);
            }}
          ></Input>
          <Input
            placeholder="TICKET PRIZE"
            onChange={(e) => {
              setTicketPrize(e.target.value ? e.target.value : undefined);
            }}
          ></Input>
        </Space>
      )}
      <br />
      {!isAdvancedSettingsOpen && (
        <div className={styles.additionalSettingsContainer}>
          <Button
            type="text"
            size="middle"
            shape="default"
            className={styles.additionalSettings}
            onClick={() => {
              setIsAdvancedSettingsOpen(!isAdvancedSettingsOpen);
            }}
          >
            Additional Settings
          </Button>
        </div>
      )}

      <div className={styles.frameDiv3}>
        <Button
          onClick={onCreateEvent}
          className={styles.frameButton2}
          type="primary"
          size="large"
          shape="default"
        >
          Create event
        </Button>
      </div>
    </div>
  );
};

export default CreateEventForm;
