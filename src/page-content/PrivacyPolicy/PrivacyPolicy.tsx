import { Box, Typography } from '@mui/material';

import {
  ChangesToThePrivacy,
  ChildrenPrivacy,
  CollectingUsingData,
  ContactUs,
  InterpretationAndDefinitions,
  LinksToOtherWebsites,
} from './components';
import styles from './styles';

export default function PrivacyPolicy() {
  return (
    <Box sx={styles.root}>
      <Typography variant="h1">Privacy Policy</Typography>
      <Typography variant="subtitle1">Last updated: March 13, 2024</Typography>
      <Typography>
        This Privacy Policy describes Our policies and procedures on the collection, use and
        disclosure of Your information when You use the Service and tells You about Your privacy
        rights and how the law protects You.
      </Typography>
      <Typography>
        We use Your Personal data to provide and improve the Service. By using the Service, You
        agree to the collection and use of information in accordance with this Privacy Policy. This
        Privacy Policy has been created with the help of the Privacy Policy Generator.
      </Typography>
      <InterpretationAndDefinitions />
      <CollectingUsingData />
      <ChildrenPrivacy />
      <LinksToOtherWebsites />
      <ChangesToThePrivacy />
      <ContactUs />
    </Box>
  );
}
