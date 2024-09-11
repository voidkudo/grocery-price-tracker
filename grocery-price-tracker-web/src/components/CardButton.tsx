import { Card, CardActionArea, Typography } from "@mui/material";

interface CardButtonProps {
  children: string,
  handleClick: () => void
}

const CardButton = (props: CardButtonProps) => {
  return (
    <Card variant='outlined' sx={{ cursor: 'pointer' }}>
      <CardActionArea onClick={props.handleClick}>
        <Typography variant='h5' color='primary' sx={{ textAlign: 'center', padding: '1em' }}>
          {props.children}
        </Typography>
      </CardActionArea>
    </Card>
  )
};

export default CardButton;