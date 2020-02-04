import React, { useState } from "react";
import "../../../../src/styles.css";
import JuryBox from "../JuryBox/jurybox";
import Footer from "../Footer/footer";
// import MapJurors from "../MapJurors/MapJurors";
import createJurorMutation from "../MainPage/mutations/createJuror";

const MainPage = () => {
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

  return (
    // Main Container
    <div class="container-fluid">
      {/* Nav Bar */}
      <br></br>
      <div class="row">
        <div class="col-1"> Sidebar Goes Here </div>
        {/* Jury Box Table */}
        <div class="col-11">
          <JuryBox></JuryBox>
          <ul>{/* <MapJurors /> */}</ul>
        </div>
      </div>

      {/* Juror Creation Area */}
      <div className="jurorCreation input-group">
        {/* <div class="input-group-prepend">
                        Juror Information
                    </div> */}
        <input
          className="inputField form-control"
          aria-describedby="button-addon2"
          value={newJurorName}
          onChange={e => setNewJurorName(e.target.value)}
          placeholder="First and Last Name"
        ></input>
        <input
          className="inputField form-control"
          aria-describedby="button-addon2"
          value={newJurorRating}
          onChange={e => setNewJurorRating(e.target.value)}
          placeholder="Rating"
        ></input>
        <input
          className="inputField form-control"
          aria-describedby="button-addon2"
          value={newJurorPolitical}
          onChange={e => setNewJurorPolitical(e.target.value)}
          placeholder="Political"
        ></input>
        <input
          className="inputField form-control"
          aria-describedby="button-addon2"
          value={newJurorEdu}
          onChange={e => setNewJurorEdu(e.target.value)}
          placeholder="Education"
        ></input>
        <input
          className="inputField form-control"
          aria-describedby="button-addon2"
          value={newJurorJob}
          onChange={e => setNewJurorJob(e.target.value)}
          placeholder="Employment"
        ></input>

        {/* Create Juror Button */}
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => {
              if (newJurorName) {
                createJurorMutation(newJurorName);
                setNewJurorName("");
              }
              if (newJurorRating) {
                createJurorMutation(newJurorRating);
                setNewJurorRating("");
              }
              if (newJurorPolitical) {
                createJurorMutation(newJurorPolitical);
                setNewJurorPolitical("");
              }
              if (newJurorEdu) {
                createJurorMutation(newJurorEdu);
                setNewJurorEdu("");
              }
              if (newJurorJob) {
                createJurorMutation(newJurorJob);
                setNewJurorJob("");
              }
            }}
          >
            Create Juror
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
