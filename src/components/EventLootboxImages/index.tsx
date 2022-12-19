import { FunctionComponent } from "react";
import { convertFilenameToThumbnail } from "../../lib/storage";
import { LootboxFE } from "../../lib/types";
import styles from "./index.module.css";

interface EventLootboxImagesProps {
  lootboxes: LootboxFE[];
}
const EventLootboxImages: FunctionComponent<EventLootboxImagesProps> = (
  props
) => {
  return (
    <div className={styles.cardHand}>
      {props.lootboxes.slice(0, 5).map((lootbox) => {
        return (
          <img
            key={`thumbnail-${lootbox.id}`}
            alt={lootbox.name}
            src={convertFilenameToThumbnail(lootbox.stampImage, "sm")}
            className={styles.card}
          />
        );
      })}
    </div>
  );
};

export default EventLootboxImages;
