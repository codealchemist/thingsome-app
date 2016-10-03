import React from 'react';
// import '!style!css!sass!./Overlay.scss';

class OverlayContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='overlay-content'>
        {this.props.children}
      </div>
    )
  }
}

export default OverlayContent;
