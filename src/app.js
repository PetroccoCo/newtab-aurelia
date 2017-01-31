import moment from 'moment';
export class App {
  updateTime(context) {
    context.time = moment().format("LTS");
  }
  constructor() {
    this.message = 'Hello World!';
    this.updateTime(this);
  }
  attached() {
    this.interval = setInterval(this.updateTime, 1000, this);
  }
}
