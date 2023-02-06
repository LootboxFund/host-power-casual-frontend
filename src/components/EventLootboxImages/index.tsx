import { FunctionComponent } from "react";
import { convertFilenameToThumbnail } from "@wormgraph/helpers";
import { LootboxFE } from "../../lib/types";
import styles from "./index.module.css";
import ImageWithReload from "../ImageWithReload";
import { MAX_IMAGES_SHOWN } from "./const";

interface EventLootboxImagesProps {
  lootboxes: LootboxFE[];
}
const EventLootboxImages: FunctionComponent<EventLootboxImagesProps> = (
  props
) => {
  return (
    <div
      className={styles.cardHand}
      style={
        props?.lootboxes?.length === 1
          ? {
              // Awkward spacing hack
              marginBottom: "-38px",
            }
          : undefined
      }
    >
      {props.lootboxes.slice(0, MAX_IMAGES_SHOWN).map((lootbox) => {
        return (
          <ImageWithReload
            key={`thumbnail-${lootbox.id}`}
            alt={lootbox.name}
            imageUrl={convertFilenameToThumbnail(lootbox.stampImage, "sm")}
            className={styles.card}
          />
        );
      })}
    </div>
  );
};

export default EventLootboxImages;
