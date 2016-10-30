import React from 'react';
import { CardActions } from 'react-toolbox/lib/card';
import theme from './CenteredCardActions.scss';

const CenteredCardActions = (props) => <CardActions {...props} theme={theme} />;
export default CenteredCardActions;
