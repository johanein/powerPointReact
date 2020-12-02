import React, { memo, useState, useEffect, useRef } from "react";
import faker from "faker";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const index = memo((props) => {
  const cache = useRef(new CellMeasurerCache({
      fixedwidth: true,
defaultHeight:100
  }));
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(
      [...Array(100).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: faker.lorem.lines(Math.random() * 100),
        };
      })
    );
  }, []);
  return (
    <div style = {{width : '100%', height: '100%'}}>
        <AutoSizer>
{({width,height})=> (<List
      width={width}
      height={height}
      rowHeight={cache.current.rowHeight}
      deferredMeasurementCache={cache.current}
      rowCount={people.length}
      rowRenderer={({ key, index, style, parent }) => {
          const person = people[index];
          return (
              <CellMeasurer 
              key={key}
              cache = {cache.current}
              parent = {parent}
              columnIndex = {0}
              rowIndex={index}
              >                  
              <div  style={style}>
              <h2>{person.name}</h2>
              <p>{person.bio}</p>
            </div>
              </CellMeasurer>
          );
        }}
        />)
    }
        </AutoSizer>
    </div>
  );
});

export default index;
