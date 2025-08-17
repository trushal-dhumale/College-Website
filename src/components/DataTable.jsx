import React from "react";
import "./DataTable.css"; // external CSS import

export default function DataTable({ columns = [], data = [] }) {
  return (
    <div className="datatable-container">
      <div className="datatable-scroll">
        <table className="datatable">
          <thead className="datatable-header">
            <tr>
              {columns.map((c) => (
                <th key={c.key} className="datatable-th">{c.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="datatable-body">
            {data.map((row, i) => (
              <tr key={i} className="datatable-row">
                {columns.map((c) => (
                  <td key={c.key} className="datatable-td">
                    {c.render ? c.render(row[c.key], row) : row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td className="datatable-empty" colSpan={columns.length}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
