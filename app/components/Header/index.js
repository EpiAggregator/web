import React from 'react';
import { FormattedMessage } from 'react-intl';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import messages from './messages';

const Header = () => (
    <Tabs>
    <Tab
    icon={<FontIcon className="muidocs-icon-action-home" />}
    label={<FormattedMessage {...messages.home} />}
    />
    <Tab
    icon={<FontIcon className="material-icons">settings</FontIcon>}
    label={<FormattedMessage {...messages.settings} />}
    />
    <Tab
    icon={<FontIcon className="material-icons">favorite</FontIcon>}
    label={<FormattedMessage {...messages.about} />}
    />
    </Tabs>
);

export default Header;
