import { Link, Typography } from '@mui/material';

import styles from '../../styles';

const InterpretationAndDefinitions = () => {
  return (
    <>
      <Typography variant="h2">Interpretation and Definitions</Typography>
      <Typography variant="h6">Interpretation</Typography>
      <Typography>
        The words of which the initial letter is capitalized have meanings defined under the
        following conditions. The following definitions shall have the same meaning regardless of
        whether they appear in singular or in plural.
      </Typography>
      <Typography variant="h6">Definitions</Typography>
      <Typography>For the purposes of these Terms and Conditions:</Typography>
      <Typography sx={styles.commonPadding}>
        <b>Application</b> rmeans the software program provided by the Company downloaded by You on
        any electronic device, named Growth Acceleration Platform® <br />
        <b>Application Store</b> means the digital distribution service operated and developed by
        Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has
        been downloaded.
        <br />
        <b>Affiliate</b> means an entity that controls, is controlled by or is under common control
        with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity
        interest or other securities entitled to vote for election of directors or other managing
        authority. <br />
        <b>Country</b> refers to: Florida, United States <br />
        <b>Company</b> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
        &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Squared Global CORP, 9641
        RIVERSIDE DR, CORAL SPRINGS. FL. US 33071.. <br />
        <b>Device</b> means any device that can access the Service such as a computer, a cellphone
        or a digital tablet. <br />
        <b>Service</b> refers to the Application or the Website or both. <br />
        <b>Terms and Conditions</b> (also referred as &quot;Terms&quot;) mean these Terms and
        Conditions that form the entire agreement between You and the Company regarding the use of
        the Service. This Terms and Conditions agreement has been created with the help of the Terms
        and Conditions Generator. <br />
        <b>Third-party Social Media Service</b> means any services or content (including data,
        information, products or services) provided by a third-party that may be displayed, included
        or made available by the Service. <br />
        <b>Website</b> refers to Shaper GAP®, accessible from{' '}
        <Link href="https://shaper.us" target="_blank">
          www.shaper.us
        </Link>
        <br />
        <b>You</b> means the individual accessing or using the Service, or the company, or other
        legal entity on behalf of which such individual is accessing or using the Service, as
        applicable.
      </Typography>
    </>
  );
};

export default InterpretationAndDefinitions;
