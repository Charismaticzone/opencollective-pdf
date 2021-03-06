import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import countries from 'i18n-iso-countries';
import countriesEN from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(countriesEN);

/**
 * Pretty render a location (multiline)
 */
const CollectiveAddress = ({ collective }) => {
  const address = get(collective, 'location.address');
  const countryISO = get(collective, 'location.country');
  const country = countryISO && (countries.getName(countryISO, 'en') || countryISO);

  return (
    <React.Fragment>
      {address &&
        address.split('\n').map((addressPart, idx) => (
          <span key={idx}>
            {addressPart.trim()}
            <br />
          </span>
        ))}
      {country}
    </React.Fragment>
  );
};

CollectiveAddress.propTypes = {
  collective: PropTypes.shape({
    location: PropTypes.shape({
      address: PropTypes.string,
      country: PropTypes.string,
    }),
  }),
};

export default CollectiveAddress;
