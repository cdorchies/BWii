import React from "react";
import { MdDashboard, MdOtherHouses } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { BiConversation } from "react-icons/bi";
import { Link } from "react-router-dom";
import LeftNavBarStyle from "./styles";

export default function LeftNavBar() {
  return (
    <LeftNavBarStyle>
      <div id="LeftNavBar">
        <div>
          <Link to="/">
            <MdDashboard /> TABLEAU DE BORD
          </Link>
        </div>
        <div>
          <Link to="/estates">
            <MdOtherHouses /> BIENS
          </Link>
        </div>
        <div>
          <Link to="/creation-client">
            <BsPersonFill /> CLIENTS
          </Link>
        </div>
        <div>
          <Link>
            <BiConversation /> CONVERSATIONS
          </Link>
        </div>
      </div>
    </LeftNavBarStyle>
  );
}
