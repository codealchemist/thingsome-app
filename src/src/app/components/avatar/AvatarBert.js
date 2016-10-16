import React from 'react';
import { CardTitle } from 'react-toolbox/lib/card';

export default class AvatarBert extends React.Component {
  render() {
    return (
      <CardTitle
        avatar="/img/bert.jpg"
        title="Alberto Miranda"
        subtitle="Co-Founder @thingsome" />
    );
  }
}
