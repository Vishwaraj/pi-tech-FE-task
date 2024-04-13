import React from "react";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function BottomCard() {
  return (
    <>
      <div className="bg-slate-200 flex flex-row justify-between py-4 px-4 rounded-2xl shadow-lg">
        <div>
          <p className="text-sm">4907-00019</p>
          <p className="text-sm">Hotel/Tech Work Squad GFR</p>
          <PillComp />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <AccountCircleIcon />
          </div>

          <div>
            <p className="text-xs text-slate-500 ">Services</p>
            <p className="text-xs text-slate-500 ">12 July 2019</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const PillComp = () => {
  return (
    <>
      <div className="flex flex-row gap-2 mt-5 pl-2 py-1 rounded-lg bg-cyan-300 inline w-[80%]">
        <DirectionsBoatIcon color="cyan-600" />
        <p className="text-sm text-cyan-600">Lorem Ipsum</p>
      </div>
    </>
  );
};

export default BottomCard;
