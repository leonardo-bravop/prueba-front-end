import { Button } from "@mui/material";
const pages = ["Trending", "Top Rated", "Upcoming"];

const DesktopMenu = () => {
  return (
    <>
      {pages.map((page) => (
        <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
          {page}
        </Button>
      ))}
    </>
  );
};

export default DesktopMenu;
