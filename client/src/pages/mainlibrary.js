import React from "react";
import Sidenav from "../components/sidenav";
// import Container from "../components/container";
import AlgorithmCard from "../components/algorithmCard";

function Library() {
  return (
    <div class="row">
      <div class="col s12 m4 l3">
        <Sidenav />
      </div>

      <div class="col s12 m8 l9">
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        {/* <Container>
          <h3>Algorithm Library</h3>
          <div class="divider" />
          <p>--Apend drop down Cards Here-- (with Algorithms from Database)</p>
        </Container> */}
      </div>
    </div>
  );
}

export default Library;
