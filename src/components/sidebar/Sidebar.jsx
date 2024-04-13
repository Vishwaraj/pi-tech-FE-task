import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SettingsIcon from "@mui/icons-material/Settings";
import HandymanIcon from "@mui/icons-material/Handyman";
import IconButton from "@mui/material/IconButton";

function Sidebar() {
  const addButtonStyle = {
    backgroundColor: "lightgreen",
    borderRadius: 10,
  };

  return (
    <div className="grid grid-cols-1 w-20 py-10 px-4 bg-green-500 min-h-screen">
      <div className="flex flex-col gap-2 w-12">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <IconButton style={addButtonStyle} variant="contained">
          <AddIcon />
        </IconButton>
      </div>

      <div className="flex flex-col pt-10 gap-2 w-12">
        <IconButton>
          <InventoryIcon />
        </IconButton>
        <IconButton>
          <WarningAmberIcon />
        </IconButton>
        <IconButton>
          <EngineeringIcon />
        </IconButton>
        <IconButton>
          <WaterDropIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <HandymanIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
