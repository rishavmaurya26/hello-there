import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { Users } from "../../dummyData";
import "./home.css"
import React from 'react'

export default function Home() {
  return (
    <>
      <Topbar user = {Users[0]}/>
      <div className="homeContainer">
        <Sidebar />
        <Feed user = {Users[0]}/>
        <Rightbar user = {Users[0]}/>
      </div>
    </>
  );
}