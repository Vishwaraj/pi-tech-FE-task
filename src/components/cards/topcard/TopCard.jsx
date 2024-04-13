import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function TopCard() {
  return (
    <>
      <div className="rounded-lg">
        <div className="bg-orange-50 shadow-lg rounded-2xl py-5 px-5">
          <div className="flex flex-row gap-5">
            <SecondaryGroup
              inputPlaceholder="My responsibilites"
              buttonIcon={true}
              text={["sort", "group by"]}
            />
            <SecondaryGroup
              inputPlaceholder="PO"
              buttonIcon={false}
              text={["clear", "search"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const SecondaryGroup = (props) => {
  const { buttonIcon, text, inputPlaceholder } = props;
  return (
    <>
      <div className="flex flex-col">
        <input
          placeholder={inputPlaceholder}
          className="rounded-xl border-green-500"
        />
        <TextField variant="standard" size="small" label="Standard" />
        <div className="flex flex-row pt-3 gap-4">
          <TextComp text={text[0]} arrow={buttonIcon} />
          <TextComp text={text[1]} arrow={buttonIcon} />
        </div>
      </div>
    </>
  );
};

const TextComp = (props) => {
  const { text, arrow } = props;
  return (
    <>
      <p className="underline">
        {text}
        <span>{arrow ? <KeyboardArrowDownIcon /> : null}</span>
      </p>
    </>
  );
};

export default TopCard;
