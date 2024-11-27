import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: "18rem",
    margin: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: "Unknown Age",
  image: "https://via.placeholder.com/150?text=Unknown"
};

// Prop types
Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default Player;
