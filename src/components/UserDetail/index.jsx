import React from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="h6">User not found</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{`${user.first_name} ${user.last_name}`}</Typography>
      <Typography variant="body1">
        <strong>Location:</strong> {user.location || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Description:</strong> {user.description || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Occupation:</strong> {user.occupation || "N/A"}
      </Typography>
      <Button
        component={Link}
        to={`/photos/${user._id}`}
        variant="contained"
        sx={{ mt: 2 }}
      >
        View Photos
      </Button>
    </Box>
  );
}

export default UserDetail;
