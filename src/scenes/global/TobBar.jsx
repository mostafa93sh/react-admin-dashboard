import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme";

const TopBar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display={`flex`} justifyContent={`space-between`} p={2}>
      <Box
        display={`flex`}
        sx={{ backgroundColor: color.primary[400], borderRadius: "3px" }}>
        <InputBase sx={{ ml: 2, flex: 1 }} />
        <IconButton type='button' sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      <Box display={`flex`}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
