import { maxWidth } from "@mui/system";

export default function CharacterCard({ character }) {
  const { name, image, status, species, gender, origin, location, episode } =
    character;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <p>
          {status} {species} {gender}
          <br />
          Origin: {origin.name}
          <br />
          Location: {location.name}
        </p>
      </div>
    </div>
  );
}
