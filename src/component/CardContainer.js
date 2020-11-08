import React, {  useState } from "react";
import { profiles } from "./movielist.js";
import Card from"../component/card";
import avatar from "../avatar.png";
export default function CardContainer() {

    const [profile,setProfile] = useState({ 
        name:'mohamed',
        job:'Web dev',
        avatar:avatar,
        rate:0,
        posterUrl: posterUrl
    })
 
    console.log('profile',profile)
  return (
    <div>
      <div className="profiles-button-container">
        {profiles.map((profile,index) => (
          <button key={index} className="btn btn-danger" onClick={()=> setProfile(profiles[index])}> {profile.name} </button>
        ))}
      </div>
        <Card profile={profile} />
        
    </div>
  );
}