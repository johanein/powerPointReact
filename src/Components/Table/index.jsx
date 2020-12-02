import React, { memo, useMemo, useReducer, useEffect } from "react";
import { useTable } from "react-table";
// import MOCK_DATA from "./MOCK_DATA.json";
import {getDataJson} from './Action'
import {
  initialState,
  Provider,
  reducer
} from './Reducer'
// eslint-disable-next-line no-unused-vars
import {COLUMNS, groupedColumns}  from "./columns";
import './table.css'

const Table = memo((props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {dataJson} = state  
  const data = useMemo(() => dataJson, [dataJson]);
  const columns = useMemo(() => groupedColumns, []);

  useEffect(() => {
    getDataJson({dispatch})
  }, [])

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups,rows, prepareRow } =
    useTable({
      columns,
      data,
    }) || {};

  return (
        <div style = {{width: '100%', height:'100%'}}>
      <Provider value={contextValue}>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup = {}) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column = {}) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row = {}) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell = {}) => (
                <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
{footerGroups.map(footerGroup=>(
  <tr {...footerGroup.getFooterGroupProps()}>
{footerGroup.headers.map(column=>(
  <td {...column.getFooterProps()}>{column.render("Footer")}</td>
))}
  </tr>
))}
      </tfoot>
    </table>
    </Provider>
    </div>
  );
});

export default Table;
