import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Progress } from "reactstrap";
import TopValueBtn from "./TopValueBtn";
import NoteCard from "./NoteCard";

import PieChart from './Charts';

function Dashboard(props) {
  console.log(props);
  const [values] = useState(props.valueList);
  const [selected, setSelected] = useState([]);

  const addNoteStyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
    marginTop: "30px"
  };

  useEffect(() => {
    projectsArray.forEach(project => {
      if(project.user_values_id === 1){
        return (totalProjects++)
      }
    })
  }, [])

//**The next two arrays are just dummy data**
  let totalProjects = 0
  console.log(totalProjects)

  const projectsArray = [
    {
      id: 1,
      user_id: 123,
      project_title: "Code",
      project_description: "etc..",
      user_values_id: 1,
      completed: false
    },
        
    {
      id: 2,
      user_id: 123,
      project_title: "Sleep",
      project_description: "etc..",
      user_values_id: 2,
      completed: false
    },
        
    {
      id: 3,
      user_id: 123,
      project_title: "Eat",
      project_description: "etc..",
      user_values_id: 3,
      completed: false
    }
  ]

  const valuesArray = [
    {
      id: 1,
      user_id: 123,
      value_name: 'Love'
    },
        
    {
      id: 2,
      user_id: 123,
      value_name: 'Harmony'
    },
        
    {
      id: 3,
      user_id: 123,
      value_name: 'Peace'
    }
  ]

  return (
    <div>
    <h1>Hello User!</h1>
    <div className='pieChartsDiv'>
      <div>
        <h3>Here's the values you've assigned so far:</h3>
        <PieChart />
      </div>
      <div>
        <h3>Here's the values you've completed so far:</h3>
        <PieChart />
      </div>
    </div>

      <Container>
        <Row>
          {props.valueList.map(value => {
            return (
              <TopValueBtn
                key={value.value}
                value={value.value}
                color={value.color}
                description={value.description}
              />
            );
          })}
        </Row>
        <Row>
          <NoteCard title="This is a test" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
        </Row>
        <Row>
          <Col>
            <Button size="sm" color="success" style={addNoteStyle}>
              new note
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
