import {
  OPEN_PROJECT,
  SORT_ITEMS,
  FILTER_ITEMS,
  GO_TO_PATH,
  RENAME_ITEM,
  MOVE_ITEM,
  REMOVE_ITEM,
} from "./actions";
import { orderBy, filter, map } from "lodash/collection";
import { get } from "object-path";

export default (state, action) => {
  const { items, fileStructure } = state;
  switch (action.type) {
    case OPEN_PROJECT:
      return {
        ...state,
        sort: null,
        filter: null,
        fileStructure: action.payload,
        path: "",
        items: map(action.payload, (value, id) => ({
          id,
          ...value,
        })),
      };

    case SORT_ITEMS:
      return {
        ...state,
        sort: action.payload,
        items: orderBy(items, ...action.payload),
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filter: action.payload,
        items: filter(items, action.payload),
      };
    case GO_TO_PATH:
      return {
        ...state,
        sort: null,
        filterBy: null,
        path: action.payload,
        items: Object.entries(get(fileStructure, action.payload)).map(
          ([id, value]) => ({
            id,
            ...value,
          })
        ),
      };
    case RENAME_ITEM:
      return {
        ...state,
        fileStructure: action.payload.fileStructure,
        items: (() => {
          const temp = items.slice();
          temp.splice(
            temp.findIndex((obj) => obj.name === action.payload.oldName),
            1,
            action.payload.newName
          );
          return temp;
        })(),
      };
    case REMOVE_ITEM:
    case MOVE_ITEM:
      return {
        ...state,
        fileStructure: action.payload.fileStructure,
        items: filter(items, (o) => o.name !== action.payload.name),
      };
  }
};
