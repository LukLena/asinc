class AlarmClock {
  constructor() {
    this.alarmCollection = []
    this.timerId = null;
  }
  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('error text')
    }
    if (this.alarmCollection.find(alarm => alarm.id === id)) {
      console.error()
      return;
    }
    this.alarmCollection.push({ id, time, callback })
  }
  removeClock(id) {
    let result = this.alarmCollection.filter(alarm => alarm.id !== id)
    this.alarmCollection = result;
    return true;
  }
  getCurrentFormattedTime() {
    let now = new Date();
    let minutes = now.getMinutes()
    let hour = now.getHours()
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    return `${hour}:${minutes}`;
  }
  start() {
    function checkClock(alarm) {
      if (alarm.time === new Date) {
        alarm.callback()
      }
    }
    if (this.timerId === null) {
      let setInt = setInterval(() => this.alarmCollecton.forEach(alarm => checkClock(alarm)), 1000)
      this.timerId = setInt;
    }
  }
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId)
      this.timerId = null;
    }
  }
  printAlarms() {
    this.alarmCollection.forEach(alarm => console.log(`${alarm.id}\t${alarm.time}`))
  }
  clearAlarms() {
    this.stop()
    this.alarmCollection.splice(0)
  }
}

let clock = new AlarmClock();
clock.addClock("16:45", f => f, 1)
clock.addClock("16:45", f => f, 1)