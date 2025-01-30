import React from "react";
import { IconButton } from "@radix-ui/themes";
import { ViewHorizontalIcon, TableIcon } from "@radix-ui/react-icons";

type ViewToggleButtonProps = {
  view: string;
  setView: (view: string) => void;
};

const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({ view, setView }) => {
  const handleViewToggle = () => {
    setView(view === "table" ? "card" : "table");
  };

  return (
    <IconButton onClick={handleViewToggle} variant="ghost">
      {view === "table" ? (
        <ViewHorizontalIcon width="18" height="18" />
      ) : (
        <TableIcon width="18" height="18" />
      )}
    </IconButton>
  );
};

export default ViewToggleButton;