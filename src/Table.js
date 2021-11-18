import "./Table.css";
import data from "./Mock-data.json";
import TeamWrapper from "./TeamWrapper";
import { useState } from "react";

export default function Table() {
  const [team, setTeam] = useState(data);
  const [teamIndex, setTeamIndex] = useState(0);

  return (
    <div>
      <button onClick={() => setTeamIndex(0)} disabled={teamIndex === 0}>
        Team1
      </button>
      <button onClick={() => setTeamIndex(1)} disabled={teamIndex === 1}>
        Team2
      </button>
      <div id="TableContainer">
        <TeamWrapper team={team.Teams[teamIndex]} />
      </div>
    </div>
  )
}