// src/components/DataTable.js
import React from "react";
import "../styles/DataTable.css";

const data = [
  {
    text: "Do you work on WhatsApp? Yes, we do offer our services on WhatsApp!",
    source: "--",
    type: "TEXT",
    created: "8/3/2024",
  },
  {
    text: "I want to test your chatbot...",
    source: "--",
    type: "TEXT",
    created: "3/28/2024",
  },
  {
    text: "Will the Startup Plan address...",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    text: "What is the cost of IVF?",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    text: "Do you work on WhatsApp? Yes, we do offer our services on WhatsApp!",
    source: "--",
    type: "TEXT",
    created: "8/3/2024",
  },
  {
    text: "I want to test your chatbot...",
    source: "--",
    type: "TEXT",
    created: "3/28/2024",
  },
  {
    text: "Will the Startup Plan address...",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    text: "What is the cost of IVF?",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
];

const DataTable = () => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Source</th>
            <th>Type</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.text}</td>
              <td>{row.source}</td>
              <td>{row.type}</td>
              <td>{row.created}</td>
              <td className="actions">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
