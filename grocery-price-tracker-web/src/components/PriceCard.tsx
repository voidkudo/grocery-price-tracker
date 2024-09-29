import { Card, CardContent, Typography } from "@mui/material";

interface PriceCardProps {
  label: string,
  price?: number,
  backgroundColor?: string,
}

const PriceCard = (props: PriceCardProps) => {
  return (
    <Card variant='outlined' sx={{ backgroundColor: props.backgroundColor }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h5' textAlign='center'>{props.label}</Typography>
        <Typography variant='h4' textAlign='center'>{`$${props.price ? props.price.toFixed(2) : '-'}`}</Typography>
      </CardContent>
    </Card>
  )
};

export default PriceCard;