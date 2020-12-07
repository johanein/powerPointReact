// import React from 'react';
import { SAVE_SELECED_PAGE, SAVE_PAGE_EDIT_DATA, SAVE_PAGE_ADD_DATA } from "../constants";

const initialState = {
  contents: [
    {
      name: "Home",
      path: "home",
      content: '<p>Home text</p>',
    },
    {
      name: "Test",
      path: "test",
      content: '<p>some good text</p>'
    },
  ],
  selectedPath: "home",
  editEnabled: false,
  addEnabled: false
};

export default function jsonPlaceHolderReducer(state = initialState, action) {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action || {};
  switch (type) {
    case SAVE_SELECED_PAGE: {
      return {
        ...state,
        selectedPath: payload,
      };
    }
    case 'EDIT_ENABLED': {
      return {
        ...state,
        editEnabled: true,
        addEnabled: false
      };
    }
    case 'ADD_ENABLED': {
      return {
        ...state,
        editEnabled: false,
        addEnabled: true
      };
    }
    case 'HOME_CLICKED': {
      return {
        ...state,
        editEnabled: false,
        addEnabled: false
      };
    }
    case SAVE_PAGE_EDIT_DATA: {
      let { contents, selectedPath } = state;
      contents = contents.map((item) => {
        const { path } = item;
        if (path === selectedPath) {
          return payload;
        }
        return item;
      });
      return {
        ...state,
        contents,
      };
    }
    case SAVE_PAGE_ADD_DATA: {
      let { contents } = state;
      contents = [...contents, payload]
      return {
        ...state,
        contents,
      };
    }

    default:
      return state;
  }
}
