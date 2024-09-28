import { Box, Card, CardContent, Typography } from "@mui/material";

interface PriceRecordCardProps {
  brand: string,
  isTaxable: boolean,
  price: number,
  qty: number,
  storeName: string,
  purchaseDate: string,
};

const PriceRecordCard = (props: PriceRecordCardProps) => {

  return (
    <Box>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h6'>{`${props.purchaseDate} @${props.storeName}`}</Typography>
          {
            props.brand === '' && props.qty > 0 ?
              null :
              <Typography variant='body2'>{props.brand}</Typography>
          }
          {
            props.isTaxable ?
              <Typography variant='h5'>
                {`$${props.price.toFixed(2)} HST/GST`}
              </Typography> :
              <Typography variant='h5'>
                {`$${props.price.toFixed(2)}`}
              </Typography>
          }
          {
            props.qty > 1 ?
              <Typography variant='body2'>{`${props.qty} @ $${(props.price / props.qty).toFixed(2)}`}</Typography> :
              null
          }

        </CardContent>
      </Card>
    </Box>

  )
};

export default PriceRecordCard;