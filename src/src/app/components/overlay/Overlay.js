import React from 'react';
import '!style!css!sass!./Overlay.scss';

class Overlay extends React.Component {
  constructor() {
    super();
  }

  show() {
    console.log('show Overlay');
  }

  getOverlayClass() {
    if (this.props.active) return 'overlay active';
    return 'overlay';
  }

  render() {
    return (
      <div className={this.getOverlayClass()}>
        <div className='overlay-background'></div>
        {this.props.children}
      </div>
    )
  }
}

Overlay.defaultProps = {
  active: false
};

export default Overlay;
