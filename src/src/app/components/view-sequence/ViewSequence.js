import React from 'react';

export default class ViewSequence extends React.Component {
  constructor() {
    super();

    this.currentViewIndex = 0;
  }

  next() {
    let totalViews = this.sequence.length;
    if (this.currentViewIndex === totalViews - 1) {
      console.log('no more views');
      return;
    }

    let viewName = this.sequence[++this.currentViewIndex];
    if (this.getViews) this.views = this.getViews();
    this.setCurrentView(this.views[viewName]);
  }

  prev() {
    let totalViews = this.sequence.length;
    if (this.currentViewIndex === 0) {
      console.log('already on first view');
      return;
    }

    let viewName = this.sequence[--this.currentViewIndex];
    if (this.getViews) this.views = this.getViews();
    this.setCurrentView(this.views[viewName]);
  }

  gotoIndex(viewIndex) {
    let viewName = this.sequence[viewIndex];
    if (this.getViews) this.views = this.getViews();
    this.setCurrentView(this.views[viewName]);
  }

  gotoViewName(viewName) {
    if (this.getViews) this.views = this.getViews();
    this.setCurrentView(this.views[viewName]);
  }

  setCurrentView(view) {
    this.state.currentView = view;
    this.setState(this.state);
  }
}
