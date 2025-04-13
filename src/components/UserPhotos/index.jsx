// src/components/userPhotos/index.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return <Typography variant="h6">No photos found for this user</Typography>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      {photos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${photo.file_name}`}
            alt={`Photo of ${photo.user_id}`}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="body2">
              <strong>Posted on:</strong> {formatDate(photo.date_time)}
            </Typography>
            {photo.comments && photo.comments.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Comments:</Typography>
                {photo.comments.map((comment) => (
                  <Box key={comment._id} sx={{ ml: 2, mt: 1 }}>
                    <Typography variant="body2">
                      <strong>
                        <Link to={`/users/${comment.user._id}`}>
                          {`${comment.user.first_name} ${comment.user.last_name}`}
                        </Link>
                      </strong>{" "}
                      on {formatDate(comment.date_time)}:
                    </Typography>
                    <Typography variant="body2">{comment.comment}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UserPhotos;
