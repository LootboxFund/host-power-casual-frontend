import { FunctionComponent } from "react";
import { LootboxFE } from "../../lib/types";
import styles from "./index.module.css";
import ImageWithReload from "../ImageWithReload";
import { convertFilenameToThumbnail } from "../../lib/storage";

interface LootboxPreviewProps {
  lootbox: LootboxFE;
  eventName?: string;
  onLootboxEditClick: (lootbox: LootboxFE) => void;
}

const LootboxPreview: FunctionComponent<LootboxPreviewProps> = (props) => {
  const navigateToEdit = () => {
    props.onLootboxEditClick(props.lootbox);
  };
  const defaultDescription = `Participant of ${
    props.eventName || "your event"
  }.`;
  return (
    <article className={styles.lootboxOption}>
      <ImageWithReload
        className={styles.lootboxPreviewImage}
        alt={props.lootbox.name}
        imageUrl={convertFilenameToThumbnail(props.lootbox.stampImage, "sm")}
      />
      <div className={styles.lootboxOptionInfo}>
        <div className={styles.frameDiv}>
          <div className={styles.lootboxPrizeValue}>
            {props.lootbox?.runningCompletedClaims || 0} Votes
          </div>
          <button
            className={styles.lootboxPrizeValue1}
            onClick={navigateToEdit}
          >
            Edit
          </button>
        </div>
        <div className={styles.frameDiv1}>
          <div className={styles.lootboxName}>{props.lootbox.name}</div>
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.lootboxPrizeValue}>
            {props.lootbox.description || defaultDescription}
          </div>
        </div>
      </div>
    </article>
  );
};

export default LootboxPreview;
