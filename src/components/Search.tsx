import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { Input, Button } from "./";

import { SearchProps } from "../types";

import "../css/components/Search.css";

const Search: React.FC<SearchProps> = React.forwardRef<
  HTMLFormElement,
  SearchProps
>(({ placeholder, ...rest }, ref) => {
  return (
    <form {...rest} className={`search-form ${rest.className}`} ref={ref}>
      <Input type="text" placeholder={placeholder} name="searchInput" />

      <Button type="submit" primary>
        <FaMagnifyingGlass />
      </Button>
    </form>
  );
});

export default Search;
