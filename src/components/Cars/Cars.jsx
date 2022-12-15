import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./cars.css";

export default function Cars(props) {
  props.funcNav(true);
  return (
    <section className="section__cars">
      <div className="section__title">Cars</div>
      <div className="flexCars">
        <Card sx={{ maxWidth: 300, bgcolor: "secondary" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
              alt="carroImg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mercedes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2.0 turbo . Vermelho . 2021 .120.000 KM
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
              alt="carroImg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mercedes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2.0 turbo . Vermelho . 2021 .120.000 KM
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
              alt="carroImg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mercedes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2.0 turbo . Vermelho . 2021 .120.000 KM
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </section>
  );
}
