import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.team.ABBREVIATION}</td>
   <td>{props.team.CITY}</td>
   <td>{props.team.NICKNAME}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.team._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.team._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [teams, setRecords] = useState([]);
 
 // This method fetches the teams from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5050/team/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const teams = await response.json();
     setRecords(teams);
   }
 
   getRecords();
 
   return;
 }, [teams.length]);
 
 // This method will delete a team
 async function deleteRecord(id) {
   await fetch(`http://localhost:5050/team/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = teams.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the teams on the table
 function teamList() {
   return teams.map((team) => {
     return (
       <Record
         team={team}
         deleteRecord={() => deleteRecord(team._id)}
         key={team._id}
       />
     );
   });
 }
 
 // This following section will display the table with the teams of individuals.
 return (
   <div>
     <h3>Team List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Abbreviation</th>
           <th>City</th>
           <th>Nickname</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{teamList()}</tbody>
     </table>
   </div>
 );
}
