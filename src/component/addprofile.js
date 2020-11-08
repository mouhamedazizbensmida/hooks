import React, { useState } from "react";
import Card from "../component/card";
import PropTypes from "prop-types";

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState({ name: "", job: "", avatar: "",rate:"" });
  const [isShow, setIsShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = () => {
    setProfiles([...profiles, profile]);
    setProfile({ name: "", job: "", avatar: "",rate:"" ,posterUrl:""});
    setIsShow(!isShow);
    
  };
  const handleDelete = () => {};
  return (
    <div className="container">
      <button onClick={() => setIsShow(!isShow)} className="btn btn-success">
        Show form{" "}
      </button>
      {isShow && (
        <div
          className="form-row"
          style={{ border: "3px solid black", padding: "20px" }}
        >
          <form className="form-group">
            <h2>Add User</h2>
            <label className="form-control-label">titel</label>
            <input
              onChange={handleChange}
              value={profile.name}
              name="name"
              className="form-control"
            />
            <label className="form-control-label">description</label>
            <input
              onChange={handleChange}
              value={profile.job}
              name="job"
              className="form-control"
            />
            <label className="form-control-label">avatar</label>
            <input
              onChange={handleChange}
              value={profile.avatar}
              name="avatar"
              className="form-control"
            />
            <label className="form-control-label">posterUrl</label>
            <input
              onChange={handleChange}
              value={profile.posterUrl}
              name="posterUrl"
              className="form-control"
            />
            
            <label className="form-control-label">rate</label>
            <input
             type='number'
              onChange={handleChange}
              value={profile.rate}
              name="rate"
              className="form-control"
            />
            <br />
            <button type="button" className="btn-danger" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      )}
      <div className="profiles-container">
        {profiles.map((e, i) => (
          <Card
            key={i}
            profile={e}
            onDelete={() =>
              setProfiles(profiles.filter((profile) => e !== profile))
            }
          />
        ))}
      </div>
    </div>
  );

}  Profiles.propTypes ={
    name:PropTypes.string,
    job:PropTypes.string,
   avatar :PropTypes.string,
    rate:PropTypes.number,
    posterUrlr:PropTypes.string,}