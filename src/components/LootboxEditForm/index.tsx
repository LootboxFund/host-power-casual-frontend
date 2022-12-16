import { FunctionComponent, useState } from "react";
import { LootboxFE } from "../../lib/types";
import styles from "./index.module.css";

interface LootboxEditFormProps {
  lootbox: LootboxFE;
}

const LootboxEditForm: FunctionComponent<LootboxEditFormProps> = (
  props: LootboxEditFormProps
) => {
  const [lootboxTmp, setLootboxTmp] = useState<LootboxFE>(props.lootbox);

  return (
    <div className={styles.editLootboxModal}>
      <div className={styles.frameDiv}>
        <b className={styles.tEAMSETTINGS}>TEAM SETTINGS</b>
        <div className={styles.frameDiv1}>
          <input
            className={styles.tEAMNAME}
            type="text"
            placeholder="TEAM NAME"
            value={lootboxTmp.name}
            onChange={(e) => {
              setLootboxTmp((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
        </div>
        <button className={styles.frameButton1}>
          <b className={styles.sAVECHANGES}>SAVE CHANGES</b>
        </button>
        <button className={styles.frameButton3}>
          <div className={styles.vIEWLOOTBOX}>VIEW LOOTBOX</div>
        </button>
        <button className={styles.frameButton3}>
          <div className={styles.vIEWLOOTBOX}>🎁 DEPOSIT REWARDS</div>
        </button>
        <button className={styles.removeTeam}>remove team</button>
      </div>
    </div>
  );
};

export default LootboxEditForm;
