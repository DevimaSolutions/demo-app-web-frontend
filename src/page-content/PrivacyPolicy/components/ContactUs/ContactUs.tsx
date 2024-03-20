import { Link, Typography } from '@mui/material';

import styles from '../../styles';

const ContactUs = () => {
  return (
    <>
      <Typography variant="h2">Contact Us</Typography>
      <Typography>
        If you have any questions about this Privacy Policy, You can contact us:
      </Typography>
      <Typography sx={styles.commonPadding}>
        By email: ask@shaper.us
        <br />
        By visiting this page on our website:{' '}
        <Link href="http://www.shaper.us/contact" target="_blank">
          www.shaper.us/contact
        </Link>
      </Typography>
    </>
  );
};

export default ContactUs;
