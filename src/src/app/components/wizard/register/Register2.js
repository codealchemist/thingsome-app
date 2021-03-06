import React from 'react';
import SuccessButton from '../../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import CenteredCardActions from '../../card/CenteredCardActions.js'
import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Thingsome from '../../thingsome/Thingsome.js';
import Overlay from '../../overlay/Overlay.js';
import OverlayContent from '../../overlay/OverlayContent.js';
import QueryString from '../../helpers/QueryString.js';
import AvatarBert from '../../avatar/AvatarBert.js';

let thingsome = new Thingsome();

class Register2 extends React.Component {
  constructor() {
    super();

    this.state = {
      isOverlayActive: false,
      dialogActive: false,
      dialogMessage: '',
      dialogTitle: ''
    }
  }

  dialogActions = [
    { label: "OK", onClick: () => this.hideDialog() }
  ]

  showOverlay() {
    this.state.isOverlayActive = true;
    this.setState(this.state);
  }

  hideOverlay() {
    this.state.isOverlayActive = false;
    this.setState(this.state);
  }

  hideDialog() {
    this.state.dialogActive = false;
    this.setState(this.state);
  }

  showDialog({title, message}) {
    this.state.dialogActive = true;
    this.state.dialogTitle = title;
    this.state.dialogMessage = message;
    this.setState(this.state);
  }

  connect() {
    this.showOverlay();

    thingsome.getInfo()
      .then(
        (response) => {
          this.hideOverlay();

          // error
          if (response.status !== 200) {
            this.showDialog({
              title: 'Error',
              message: 'We were unable to identify your Thingsome :('
            });
            return;
          }

          // ok
          let body = response.text().then((body) => {
            console.log('--- BODY:', body);
            let info = new QueryString(body).toJson();
            console.log('--- JSON:', info);

            this.props.setCurrentDevice({
              id: info.id.trim(),
              type: info.type.trim(),
              name: info.name.trim(),
              description: info.description.trim()
            });

            this.props.next();
          })
        },
        (error) => {
          console.log('--- get info error:', error);
          this.hideOverlay();
          this.showDialog({
            title: 'Connection Error',
            message: 'Unable to connect. Is your Thingsome powered on? Are you connected to its access point?'
          });
        }
      )
  }

  render() {
    return (
      <div>
        <Dialog
          actions={this.dialogActions}
          active={this.state.dialogActive}
          onEscKeyDown={this.hideDialog}
          onOverlayClick={this.hideDialog}
          title={this.state.dialogTitle}
        >
          <p>{this.state.dialogMessage}</p>
        </Dialog>

        <Card style={{width: '400px', margin: '20px auto'}}>
          <AvatarBert />

          <CardMedia
            aspectRatio="wide"
            image="img/nodemcu.jpg"
          />

          <Overlay active={this.state.isOverlayActive}>
            <CardTitle
              title="Connect to your Thingsome"
              subtitle=""
            />
            <CardText>
              <OverlayContent>
                <ProgressBar type="circular" mode="indeterminate" />
              </OverlayContent>

              The first time you power on your Thingsome device it will create an
              access point named as: <b>THINGSOME-5HT3</b><br /><br />

              The last four characters are taken from the device's mac address
              to make the AP name unique.<br /><br />

              Connect your computer to this access point.

            </CardText>
            <CenteredCardActions>
              <Button onClick={this.props.prev} style={{margin: 'auto'}} label="Prev" />
              <SuccessButton onClick={() => this.connect()} style={{margin: 'auto'}} label="Connect" primary raised />
            </CenteredCardActions>
          </Overlay>
        </Card>
      </div>
    )
  }
}

export default Register2;
