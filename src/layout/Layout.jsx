import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopCard from "../components/cards/topcard/TopCard";
import BottomCard from "../components/cards/bottomCard/BottomCard";
import { PillComp } from "../components/cards/bottomCard/BottomCard";
import Button from "@mui/material/Button";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Divider from "@mui/material/Divider";

function Layout() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-[30%] pl-5 pt-5">
          <TopCard />
          <div className="py-4">
            <p className="pl-2 pb-2">Orders</p>
            <div className="flex flex-col gap-3">
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
              <BottomCard />
            </div>
          </div>
        </div>

        <div className="my-5 mx-5 w-[65%] shadow-xl">
          <div className="bg-slate-200 rounded-t-2xl py-4 px-4 flex flex-row justify-between">
            <div>
              <p className="text-sm font-semibold">
                <span className="pr-2">4907 - 00019</span>HOTEL TECH SQUAD GFR
              </p>

              <div className="flex flex-row gap-5 pt-5">
                <FirstCommon
                  topText="Date Requested"
                  bottomText="10 Jul 2019"
                />
                <FirstCommon topText="Type" bottomText="Services" />
                <FirstCommon
                  topText="Account Code"
                  bottomText="5830042 - HM PAX ACCOMODATION"
                />
              </div>
            </div>

            <div>
              <PillComp />
              <div>
                <Button style={{ textTransform: "none" }}>
                  <p className="font-semibold text-green-600 underline">
                    Order Summary
                  </p>
                </Button>
                <Button style={{ textTransform: "none" }}>
                  <p className="font-semibold text-green-600 underline">
                    Order Progress
                  </p>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-around flex-row gap-4 py-4">
            <SecondCommon text="Edit order details" />
            <SecondCommon text="Print order details" />
            <SecondCommon text="Change delivery status" />
            <SecondCommon text="Reports" />
            <SecondCommon text="Actions" />
          </div>

          <Divider />

          <div></div>
        </div>
      </div>
    </>
  );
}

const FirstCommon = (props) => {
  const { topText, bottomText } = props;
  return (
    <>
      <div>
        <p className="text-xs text-slate-600">{topText}</p>
        <p className="text-xs font-semibold">{bottomText}</p>
      </div>
    </>
  );
};

const SecondCommon = (props) => {
  const { text } = props;
  return (
    <>
      <div className="flex flex-row gap-1 items-center">
        <InsertDriveFileIcon color="success" />
        <p className="text-sm text-green-600">{text}</p>
      </div>
    </>
  );
};

export default Layout;
