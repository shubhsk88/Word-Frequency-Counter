import React from "react";

const Table = ({ array }) => {
  return (
    <table className="table-auto">
      <tr>
        <th class="px-4 py-2">Rank</th>
        <th class="px-4 py-2">Count</th>
        <th class="px-4 py-2">Word</th>
      </tr>
      <tbody>
        {array.map((element, index) => {
          return (
            <tr>
              <td class="border px-4 py-2">{index}</td>
              <td class="border px-4 py-2">{element[0]}</td>
              <td class="border px-4 py-2">{element[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
