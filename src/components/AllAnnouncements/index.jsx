import React from "react";
import AllAnnouncementsStyle from "./styles";
import AnnouncementsByPage from "../AnnouncementsByPage";
import Pagination from "../Pagination";

export default function AllAnnouncements() {
  return (
    <AllAnnouncementsStyle>
      <AnnouncementsByPage />
      {/* <Pagination /> */}
    </AllAnnouncementsStyle>
  );
}
