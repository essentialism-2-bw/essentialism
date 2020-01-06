import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Badge, Container, Row, Col } from "reactstrap";

function InitialValues(props) {
  const initial_values = [
    "Acceptance",
    "Accomplishment",
    "Accountability",
    "Accuracy",
    "Achievement",
    "Adaptability",
    "Alertness",
    "Altruism",
    "Ambition",
    "Amusement",
    "Assertiveness",
    "Attentive",
    "Awareness",
    "Balance",
    "Beauty",
    "Boldness",
    "Bravery",
    "Brilliance",
    "Calm",
    "Candor",
    "Capable",
    "Careful",
    "Certainty",
    "Challenge",
    "Charity",
    "Cleanliness",
    "Clear",
    "Clever",
    "Comfort",
    "Commitment",
    "Common sense",
    "Communication",
    "Community",
    "Compassion",
    "Competence",
    "Concentration",
    "Confidence",
    "Connection",
    "Consciousness",
    "Consistency",
    "Contentment",
    "Contribution",
    "Control",
    "Conviction",
    "Cooperation",
    "Courage",
    "Courtesy",
    "Creation",
    "Creativity",
    "Credibility",
    "Curiosity",
    "Decisive",
    "Decisiveness",
    "Dedication",
    "Dependability",
    "Determination",
    "Development",
    "Devotion",
    "Dignity",
    "Discipline",
    "Discovery",
    "Drive",
    "Effectiveness",
    "Efficiency",
    "Empathy",
    "Empower",
    "Endurance",
    "Energy",
    "Enjoyment",
    "Enthusiasm",
    "Equality",
    "Ethical",
    "Excellence",
    "Experience",
    "Exploration",
    "Expressive",
    "Fairness",
    "Family",
    "Famous",
    "Fearless",
    "Feelings",
    "Ferocious",
    "Fidelity",
    "Focus",
    "Foresight",
    "Fortitude",
    "Freedom",
    "Friendship",
    "Fun",
    "Generosity",
    "Genius",
    "Giving",
    "Goodness",
    "Grace",
    "Gratitude",
    "Greatness",
    "Growth",
    "Happiness",
    "Hard work",
    "Harmony",
    "Health",
    "Honesty",
    "Honor",
    "Hope",
    "Humility",
    "Imagination",
    "Improvement",
    "Independence",
    "Individuality",
    "Innovation",
    "Inquisitive",
    "Insightful",
    "Inspiring",
    "Integrity",
    "Intelligence",
    "Intensity",
    "Intuitive",
    "Irreverent",
    "Joy",
    "Justice",
    "Kindness",
    "Knowledge",
    "Lawful",
    "Leadership",
    "Learning",
    "Liberty",
    "Logic",
    "Love",
    "Loyalty",
    "Mastery",
    "Maturity",
    "Meaning",
    "Moderation",
    "Motivation",
    "Openness",
    "Optimism",
    "Order",
    "Organization",
    "Originality",
    "Passion",
    "Patience",
    "Peace",
    "Performance",
    "Persistence",
    "Playfulness",
    "Poise",
    "Potential",
    "Power",
    "Present",
    "Productivity",
    "Professionalism",
    "Prosperity",
    "Purpose",
    "Quality",
    "Realistic",
    "Reason",
    "Recognition",
    "Recreation",
    "Reflective",
    "Respect",
    "Responsibility",
    "Restraint",
    "Results-oriented",
    "Reverence",
    "Rigor",
    "Risk",
    "Satisfaction",
    "Security",
    "Self-reliance",
    "Selfless",
    "Sensitivity",
    "Serenity",
    "Service",
    "Sharing",
    "Significance",
    "Silence",
    "Simplicity",
    "Sincerity",
    "Skill",
    "Skillfulness",
    "Smart",
    "Solitude",
    "Spirit",
    "Spirituality",
    "Spontaneous",
    "Stability",
    "Status",
    "Stewardship",
    "Strength",
    "Structure",
    "Success",
    "Support",
    "Surprise",
    "Sustainability",
    "Talent",
    "Teamwork",
    "Temperance",
    "Thankful",
    "Thorough",
    "Thoughtful",
    "Timeliness",
    "Tolerance",
    "Toughness",
    "Traditional",
    "Tranquility",
    "Transparency",
    "Trust",
    "Trustworthy",
    "Truth",
    "Understanding",
    "Uniqueness",
    "Unity",
    "Valor",
    "Victory",
    "Vigor",
    "Vision",
    "Vitality",
    "Wealth",
    "Welcoming",
    "Winning",
    "Wisdom",
    "Wonder"
  ];

  const [values] = useState(initial_values);
  const [selected, setSelected] = useState([]);

  /* useEffect(() => {
    console.log(selected);
  }, [selected]); */

  function addValue(event) {
    if (event.target.classList.contains("btn-light")) {
      event.target.classList.remove("btn-light");
      event.target.classList.add("btn-warning");
      setSelected([...selected, event.target.textContent]);
    } else {
      event.target.classList.add("btn-light");
      event.target.classList.remove("btn-warning");
      const newList = selected.filter(
        value => value !== event.target.textContent
      );
      setSelected(newList);
    }
  }

  const headerStyle = {
    padding: "30px 100px 30px 30px",
    backgroundColor: "#fff",
    borderRadius: "7px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    fontSize: "inherit",
    color: "inherit",
    fontWeight: "inherit"
  };

  const headerMargin = {
    margin: "0 0 30px"
  };

  const submitStyle = {
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    marginLeft: "-60px"
  };

  const bodyHeight = {
    height: "700px",
    overflow: "hidden",
    overflowY: "scroll"
  };

  const inputBtnStyle = {
    margin: "10px 5px"
  };

  const valueStyle = { margin: "5px" };

  return (
    <Container>
      <Col>
        <Form
          onSubmit={() => {
            props.handleValueChange();
          }}
          value={selected}
        >
          <h4 style={headerMargin}>
            <Badge style={headerStyle}>
              Pick the values which resonate with you
            </Badge>
            <Link to="/onboarding/final_values">
              <Button
                color="success"
                onClick={() => {
                  props.handleValueChange(selected, false);
                }}
                style={submitStyle}
              >
                continue
              </Button>
            </Link>
          </h4>
          {selected.length > 0 &&
            selected.map(value => {
              return <Badge style={valueStyle}>{value}</Badge>;
            })}
          <div style={bodyHeight}>
            {values.map(value => {
              return (
                <Button
                  color="light"
                  onClick={addValue}
                  style={inputBtnStyle}
                  key={value}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </Form>
      </Col>
    </Container>
  );
}

export default InitialValues;
