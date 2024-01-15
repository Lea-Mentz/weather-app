import "./List.css";
export default function List(props) {
  return (
    <ul>
      {props.activities.map((activity) => (
        <li>{activity.name}</li>
      ))}
    </ul>
  );
}
