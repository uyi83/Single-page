import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const pathParts = currentUrl.split("/");
  let context = "SharePhoto";
  if (pathParts.includes("users") || pathParts.includes("photos")) {
    let user = models.userModel(pathParts[2]);
    console.log(pathParts[2]);
    if (pathParts.includes("users")) {
      context = user.first_name + " " + user.last_name;
    } else {
      context = "Photos of " + user.first_name + " " + user.last_name;
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Nguyen Van Duc
        </Typography>
        <Typography variant="h6">{context}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
