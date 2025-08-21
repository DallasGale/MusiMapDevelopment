"use client";

import Card from "@components/card";
import TextButton from "@components/button/text";

import styles from "./styles.module.css";
import { useState } from "react";
import type { ItemType } from "@mocks/tag/sidebar";

interface Props {
  items: ItemType[];
  itemContent: Record<string, React.ReactNode>;
}

const Sidebar = ({ items, itemContent }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [contentColumn, setContentColumm] = useState<{
    id: string | null;
    isExpanded: boolean;
  }>({
    id: null,
    isExpanded: false,
  });

  const handleClick = (
    itemId: string,
    selectedItem: string | null,
    contentId: string | null,
  ) => {
    if (selectedItem === itemId) {
      setContentColumm({
        ...contentColumn,
        isExpanded: !contentColumn.isExpanded,
      });
    } else {
      setSelectedItem(itemId);
      setContentColumm({
        id: itemId,
        isExpanded: selectedItem === contentId,
      });
    }
  };

  return (
    <aside>
      <Card>
        <div className={styles.sidebar}>
          <div className={styles.columnOne}>
            {items.map((item) => {
              return (
                <TextButton
                  key={item.id}
                  label={item.label}
                  isActive={selectedItem === item.id}
                  onClick={() =>
                    handleClick(item.id, selectedItem, contentColumn.id)
                  }
                />
              );
            })}
          </div>

          {contentColumn.isExpanded && selectedItem === contentColumn.id && (
            <div className={styles.columnTwo}>
              {itemContent[`${selectedItem}`]}
            </div>
          )}
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
