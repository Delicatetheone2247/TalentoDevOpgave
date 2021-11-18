export default function TeamWrapper(props) {
    return (
      <table>
        <thead>
          {props.team.Name}
        </thead>
        <tbody>
          <th>
            Trainer:
          </th>
          {props.team.Trainer.map(trainer => (
            <tr>
              <td>{trainer}</td>
            </tr>
          ))}
          <th>
            Player:
          </th>
          {props.team.Player.map(player => (
            <tr>
              <td>{player}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  