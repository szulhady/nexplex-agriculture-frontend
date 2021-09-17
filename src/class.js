export class card{
  constructor(icon, text, data, classIn){
      this.icon = icon,
      this.text = text,
      this.data = data,
      this.class = classIn
  }
  toJSON(){
    return{
      icon: this.icon,
      text: this.text,
      data: this.data,
      class: this.class
    }
  }
}
export class sensor{
  constructor(id, description, data, unit, max, isHigh, classIn){
    this.id = id,
    this.description = description,
    this.data = data,
    this.unit = unit,
    this.max = max,
    this.isHigh = isHigh,
    this.class = classIn,
    this.current = [],
    this.hourly = {
      name:id,
      max:[],
      min:[],
      avg:[],
      hour:[]
    },
    this.daily = {
      name:id,
      max:[],
      min:[],
      avg:[],
      day:[]      
    },
    this.monthly = {
      name:id,
      max:[],
      min:[],
      avg:[],
      monthName:[]      
    }
  }
  toJSON(){
    return{
      id : this.id,
      description : this.description,
      data : this.data,
      unit : this.unit,
      max : this.max,
      isHigh : this.isHigh,
      class: this.class,
      current : this.current,
      hourly : this.hourly,
      daily : this.daily,
      monthly : this.monthly
    }
  }
}

export class status{
  constructor(name, remarks){
    this.name = name,
    this.remarks = remarks
  }
  toJSON(){
    return{
      name: this.name,
      remarks : this.remarks
    }
  }
}

export class IsHigh {
  /**
   * @param {int} indexStation - Index number of station/jetty in the array, in the store.
   * @param {int} indexBlock - Index number of station/jetty in the array, in the store.
   * @param {int} indexSensor - Index number of sensor in the array, in the store.
   * @param {boolean} isHigh - Boolean condition of the data whether current data exceed the max vaule(pass as args).
   */
  constructor (indexStation, indexBlock, indexSensor, isHigh, value) {
    this.indexStation = indexStation
    this.indexBlock = indexBlock
    this.indexSensor = indexSensor
    this.isHigh = isHigh
    this.value = value
  }
}
