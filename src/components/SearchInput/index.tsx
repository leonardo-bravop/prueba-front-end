import { ChangeEvent, useState } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchElements";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={handleOnChange}
      />
    </Search>
  );
};

export default SearchInput;
