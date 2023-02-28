import { Stack, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { changeMode } from "../../features/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state?.theme?.value);

  return (
    <Stack
      p={1}
      alignItems='center'
      direction='row'
      sx={{ backgroundColor: "#3c8dbc", width: "100%", height: 50 }}>
      <IconButton
        sx={{ height: 40, width: 40 }}
        onClick={() => {
          dispatch(changeMode(themeMode === "dark" ? "light" : "dark"));
        }}>
        {themeMode === "dark" ? (
          <WbSunnyIcon sx={{ color: "#fff" }} />
        ) : (
          <NightlightIcon sx={{ color: "#fff" }} />
        )}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
