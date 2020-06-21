class AreaDoc {
    constructor(id, areaName, inspectors, date, hour, tide, sky, wave, wind, temp, waterTemp, beachWidth, beachLength, imageLink) {
        this.id = id,
        this.areaName = areaName, 
        this.inspectors = inspectors, 
        this.date = date, 
        this.hour = hour, 
        this.tide = tide, 
        this.sky = sky, 
        this.wave = wave, 
        this.wind = wind, 
        this.temp = temp, 
        this.waterTemp = waterTemp, 
        this.beachWidth = beachWidth, 
        this.beachLength = beachLength,
        this.imageLink = imageLink
    }
}

export default AreaDoc;