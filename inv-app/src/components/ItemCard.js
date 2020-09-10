import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Box, CardHeader } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"

class ItemCard extends React.Component {
  render() {
    let { items, willAdd, onClick } = this.props
    let cardList = items ? (
      items.map((item, index) => {
        return (
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card key={index}>
              <CardHeader title={item.name} />
              <CardMedia image={`/static/images/cards/${item.imgName}`} title="Paella dish" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                  {`${item.description}`}
                </Typography>
                <Typography gutterBottom variant="p" component="p">
                  {`${item.price} ₺`}
                </Typography>
                <Typography gutterBottom variant="p" component="p">
                  {`${item.color}`}
                </Typography>
                <Typography gutterBottom variant="p" component="p">
                  {`${item.size}`}
                </Typography>
              </CardContent>
              {willAdd && (
                <CardActions>
                  <Grid container item direction="row" justify="center" alignItems="center">
                    <Button variant="outlined" color="primary" onClick={() => onClick(item.id)}>
                      Add
                    </Button>
                  </Grid>
                </CardActions>
              )}
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
}

export default ItemCard
