import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Cash Inflow"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Cash Outflow"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Cash Balance" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
