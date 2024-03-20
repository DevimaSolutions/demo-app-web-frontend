import { Box, Typography } from '@mui/material';

import {
  Acknowledgment,
  InterpretationAndDefinitions,
  LinksToOtherWebsites,
  Termination,
  LimitationOfLiability,
  Disclaimer,
  GoverningLaw,
  SeverabilityAndWaiver,
  TranslationInterpretation,
  ChangesToTerms,
  ContactUs,
} from './components';
import styles from './styles';

export default function TermsAndConditions() {
  return (
    <Box sx={styles.root}>
      <Typography variant="h1">Terms and Conditions</Typography>
      <Typography variant="subtitle1">Last updated: March 08, 2024</Typography>
      <Typography>
        Please read these terms and conditions carefully before using Our Service.
      </Typography>
      <InterpretationAndDefinitions />
      <Acknowledgment />
      <LinksToOtherWebsites />
      <Termination />
      <LimitationOfLiability />
      <Disclaimer />
      <GoverningLaw />
      <SeverabilityAndWaiver />
      <TranslationInterpretation />
      <ChangesToTerms />
      <ContactUs />
    </Box>
  );
}
