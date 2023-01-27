import React, { useEffect, useState } from "react";
import axios from "axios";
function TableData() {
  const [tabledata, settabledata] = useState([]);
  const [search, setsearch] = useState("");

  const Token = "Prb27JHG@hjhgkjhjsJH!JHGKNknvsgGJKp06HGFhf";
  const Patient_ID = "1";
  const Doctor_ID = "2";
  useEffect(() => {
    axios
      .post(
        "https://gravitinfosystems.com/Development/Doctor_App/public/DocApp/getPatAppoinments",
        { Token, Patient_ID, Doctor_ID }
      )
      .then((res) => settabledata(res.data.data));
  }, []);

  console.log(tabledata);

  return (
    <div className="container border border-2 rounded-5 mx-5 my-5">
      <div className="search d-flex justify-content-center align-items-center">
        <span className="px-2">Search</span>
        <input
          type="text"
          className="w-50 mt-2 mb-2"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Appointment Id</th>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Start date</th>
              <th>Fee</th>
            </tr>
          </thead>

          <tbody>
            {tabledata
              .filter(
                (result) =>
                  result.City.includes(search) ||
                  result.Appointment_ID.includes(search)
              )
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.Appointment_ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Designation}</td>
                  <td>{item.City}</td>
                  <td>{item.A_Date}</td>
                  <td>{item.Fee_clinic}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
