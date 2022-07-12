import { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { languages } from "services/languages";
import { SetLanguage } from "state/actions/languageActions";
import { useAppDispatch } from "state/hooks";

const LanguageFilter = () => {
  const [inputLanguage, setInputLanguage] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        mb: 2,
        mt: 4,
      }}
    >
      <Typography sx={{ mr: 2 }}>Filter by :</Typography>
      <Autocomplete
        onChange={(event: any, newValue: string | null) => {
          const newLang = newValue || "";
          dispatch(SetLanguage({ value: newLang }));
        }}
        inputValue={inputLanguage}
        onInputChange={(event, newInputValue) => {
          if (newInputValue.length > 2) return;
          setInputLanguage(newInputValue);
        }}
        id="language-autocomplete"
        options={languages}
        sx={{ width: 120 }}
        renderInput={(params) => <TextField {...params} label="Language" />}
      />
    </Box>
  );
};

export default LanguageFilter;
