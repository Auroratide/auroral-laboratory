import { decorate, observable } from 'mobx';
import Color from 'color';

export default class State {
  constructor(initialColor = '#448DDD') {
    this.color = initialColor;
  }

  change(newColor) {
    try {
      Color(newColor);
      this.color = newColor;
    } catch(_) {}
  }
}

decorate(State, { color: observable });