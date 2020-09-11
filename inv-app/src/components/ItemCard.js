import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  CardHeader,
  Grid,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  CardMedia,
} from "@material-ui/core"
import { CURRENCY } from "../constants"

export default function ItemCard({ items, willAdd, onClick }) {
  let cardList = items ? (
    items.map((item, index) => {
      return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card key={index}>
            <CardMedia image={item.imgName} style={{ height: 140 }} />
            <CardHeader title={item.name} />
            <CardBody item={item} />
            {willAdd && <CardFooter onClick={onClick} item={item} />}
          </Card>
        </Grid>
      )
    })
  ) : (
    <Box>Bulunamadı</Box>
  )
  return (
    <Grid container spacing={4}>
      {cardList}
    </Grid>
  )
}

export function CardBody({ item }) {
  return (
    <CardContent>
      {/* <img src={`${item.imgName}`} alt="" /> */}
      <Typography gutterBottom variant="h6" component="h6">
        {`${item.description}`}
      </Typography>
      <Typography gutterBottom variant="p" component="p">
        {`${item.price} ${CURRENCY.TL}`}
      </Typography>
      <Typography gutterBottom variant="p" component="p">
        {`${item.color}`}
      </Typography>
      <Typography gutterBottom variant="p" component="p">
        {`${item.size}`}
      </Typography>
    </CardContent>
  )
}

export function CardFooter({ onClick, item }) {
  return (
    <CardActions>
      <Grid container item direction="row" justify="center" alignItems="center">
        <Button variant="outlined" color="primary" onClick={() => onClick(item.id)}>
          Sepete Ekle
        </Button>
      </Grid>
    </CardActions>
  )
}

ItemCard.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  willAdd: PropTypes.bool,
}
