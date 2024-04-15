import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from '@mui/material';

import styles from './styles';
import useStore from './useStore';

const Store = () => {
  const { variants, handleCreateSubscriptionSession, isLoading } = useStore();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.variantContainer}>
          {variants.map((variant) => (
            <Card sx={{ minWidth: 275 }} key={variant.id}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Subscription
                </Typography>
                <Typography variant="h5" component="div">
                  {variant.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {variant.price}
                  {variant.currency}/{variant.interval}
                </Typography>
                <Typography variant="body2">{variant.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  fullWidth
                  onClick={() => handleCreateSubscriptionSession(variant.id)}
                >
                  {isLoading ? <CircularProgress size={20} sx={styles.loader} /> : 'Subscribe'}
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Store;
