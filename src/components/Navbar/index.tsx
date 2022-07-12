import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MovieIcon from "@mui/icons-material/Movie";
import SearchInput from "../SearchInput";
import UserAvatar from "components/UserAvatar";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <MovieIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIES
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileMenu />
          </Box>
          {/* Mobile Logo */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              alignItems: "flex-start",
            }}
          >
            <MovieIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          </Box>
          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <DesktopMenu />
          </Box>
          <Box
            sx={{
              mr: 2,
            }}
          >
            <SearchInput />
          </Box>
          <UserAvatar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
