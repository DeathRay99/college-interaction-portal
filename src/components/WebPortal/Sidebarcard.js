import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ name, image, enroll }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          height="100%"
          alt="image here"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div"
          alignCenter>
            {name}
          </Typography>
          <p style={{fontSize:"medium"}}>{enroll}</p>
          <Typography variant="body2" color="text.secondary"
          sx={{mt:1}}>
            Jaypee Institute Of Information Technology
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
