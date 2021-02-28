import { Card } from "./Card";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";

export const CardList = ({ userName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getEmployeeDetails() {
      const { data } = await axios.get('http://localhost:8080/getEmployees');
      setData(data);
    }
    getEmployeeDetails();
  }, []);

  return (<div style={{ backgroundColor: '#F5F5F5' }}>
    <div style={{ padding: '10px 50px', margin: '20px 10px 0px 15%' }}>
      <Row>
        {data.map((employee) => {
          return <Card key={employee.name} data={employee} userName={userName} />
        })}
      </Row>
    </div>
  </div>)
}