import React, { useState } from "react";
import createJurorMutation from "../MainPage/mutations/createJuror";
import deleteJurorMutation from "../MainPage/mutations/deleteJuror";
import updateJurorMutation from "../MainPage/mutations/updateJuror";

const MapJurors = ({ jurors }) => {
  const [
    newJurorName,
    setNewJurorName,
    newJurorRating,
    setNewJurorRating,
    newJurorPolitical,
    setNewJurorPolitical,
    newJurorEdu,
    setNewJurorEdu,
    newJurorJob,
    setNewJurorJob
  ] = useState("");
  const [
    jurorNameBeingUpdated,
    setJurorNameBeingUpdated,
    jurorRatingBeingUpdated,
    setJurorRatingBeingUpdated,
    jurorPoliticalBeingUpdated,
    setJurorPoliticalBeingUpdated,
    jurorEduBeingUpdated,
    setJurorEduBeingUpdated,
    jurorJobBeingUpdated,
    setJurorJobBeingUpdated
  ] = useState("");
  const [jurorIdBeingUpdated, setJurorIdBeingUpdated] = useState("");

  {
    jurors.map(v => {
      const isBeingUpdated = jurorIdBeingUpdated === v._id;

      return (
        <div className="jurorItems">
          {isBeingUpdated ? (
            <li>
              <input
                autoFocus
                value={jurorNameBeingUpdated}
                onChange={e => setJurorNameBeingUpdated(e.target.value)}
              />
            </li>
          ) : (
            <li>{v.name}</li>
          )}
          <div style={{ display: "flex" }}>
            <button
              onClick={() => {
                if (isBeingUpdated) {
                  updateJurorMutation(v._id, jurorNameBeingUpdated);
                  setJurorIdBeingUpdated("");
                  setJurorNameBeingUpdated("");
                } else {
                  setJurorIdBeingUpdated(v._id);
                  setJurorNameBeingUpdated(v.name);
                }
              }}
            >
              update
            </button>
            <button onClick={() => deleteJurorMutation(v._id)}>delete</button>
          </div>
        </div>
      );
    });
  }
};

export default MapJurors;
