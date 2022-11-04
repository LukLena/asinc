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
      console.error('Звонок уже существует');
      return 
    }
    this.alarmCollection.push({ id, time, callback })
  }
  removeClock(id) {
      debugger
    let amountAlarms = this.alarmCollection.length
    
 this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id)
  return amountAlarms > this.alarmCollection.length

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
    checkClock = checkClock.bind(this)
    function checkClock(alarm) {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback()
      }
    }
    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollecton.forEach(alarm => checkClock(alarm)), 1000)
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
    this.alarmCollection = []
  }
}

let clock = new AlarmClock();
clock.addClock("16:45", f => f, 1)
clock.addClock("16:45", f => f, 1)