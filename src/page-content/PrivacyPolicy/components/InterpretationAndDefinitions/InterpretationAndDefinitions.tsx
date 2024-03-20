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
      <Typography>For the purposes of this Privacy Policy:</Typography>
      <Typography sx={styles.commonPadding}>
        <b>Account</b> means a unique account created for You to access our Service or parts of our
        Service. <br />
        <b>Affiliate</b> means an entity that controls, is controlled by or is under common control
        with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity
        interest or other securities entitled to vote for election of directors or other managing
        authority. <br />
        <b>Application</b> refers to Shaper - Growth Acceleration Platform®, the software program
        provided by the Company. <br />
        <b>Company</b> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
        &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Squared Global CORP, 9641
        RIVERSIDE DR, CORAL SPRINGS. FL. US 33071.. <br />
        <b>Cookies</b> are small files that are placed on Your computer, mobile device or any other
        device by a website, containing the details of Your browsing history on that website among
        its many uses. <br />
        <b>Country</b> refers to: Florida, United States <br />
        <b>Device</b> means any device that can access the Service such as a computer, a cellphone
        or a digital tablet. <br />
        <b>Personal Data</b> is any information that relates to an identified or identifiable
        individual. <br />
        <b>Service</b> refers to the Application or the Website or both. <br />
        <b>Service Provider</b> means any natural or legal person who processes the data on behalf
        of the Company. It refers to third-party companies or individuals employed by the Company to
        facilitate the Service, to provide the Service on behalf of the Company, to perform services
        related to the Service or to assist the Company in analyzing how the Service is used. <br />
        <b>Third-party Social Media Service</b> refers to any website or any social network website
        through which a User can log in or create an account to use the Service. <br />
        <b>Usage Data</b> refers to data collected automatically, either generated by the use of the
        Service or from the Service infrastructure itself (for example, the duration of a page
        visit). <br />
        <b>Website</b> refers to Shaper GAP®, accessible from{' '}
        <Link href="https://shaper.us" target="_blank">
          https://shaper.us
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
