/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styled from 'styled-components';

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const StyledDiv = styled.div`
paddingTop: 16;
marginBottom: 12;
text-align: center;
`;

export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let imgStyle = { margin: '30px' };
    return (
      <StyledDiv>
        <h2>
            <FormattedMessage {...messages.info} />
        </h2>
          <Avatar
            src="https://cdn.local.epitech.eu/userprofil/profilview/guillaume.fillon.jpg"
            size={220}
            style={imgStyle}
          />
          <Avatar
            src="https://cdn.local.epitech.eu/userprofil/profilview/adrien.dellamaggiora.jpg"
            size={220}
            style={imgStyle}
          />
          <Avatar
            src="https://cdn.local.epitech.eu/userprofil/profilview/etienne.debas.jpg"
            size={220}
            style={imgStyle}
          />
          <Avatar
            src="https://cdn.local.epitech.eu/userprofil/profilview/hugues.morisset.jpg"
            size={220}
            style={imgStyle}
          />
          <a href="https://github.com/EpiAggregator">
            <h2>
              <RaisedButton label={<FormattedMessage {...messages.github} />} />
            </h2>
          </a>
      </StyledDiv>
    );
  }
}

AboutPage.propTypes = {
};

export default AboutPage;
