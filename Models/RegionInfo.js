export class RegionInfo {
    constructor(areaName, residentCount, houseCount, banCount, personcount, 

        shipCount, otherShipCount, motelCount, facilityCount, mannedCount, 
        
        unMannedCount, contactType1, contactName1, mobilePhone1, officePhone1,
        contactType2, contactName2, mobilePhone2, officePhone2, contactType3, 
        contactName3, mobilePhone3, officePhone3,recordDataSun, recordDataMoon, 
        
        order, note, imageLink
        ) {

        this.areaName = areaName,
        this.residentCount = residentCount,
        this.houseCount = houseCount,
        this.banCount = banCount,
        this.personcount = personcount,


        this.shipCount = shipCount,
        this.otherShipCount = otherShipCount, 
        this.motelCount = motelCount,
        this.facilityCount = facilityCount,
        this.mannedCount = mannedCount,


        this.unMannedCount = unMannedCount,
        this.contactType1 = contactType1,
        this.contactName1 = contactName1,
        this.mobilePhone1 = mobilePhone1,
        this.officePhone1 = officePhone1

        this.contactType2 = contactType2,
        this.contactName2 = contactName2,
        this.mobilePhone2 = mobilePhone2,
        this.officePhone2 = officePhone2,
        this.contactType3 = contactType3,


        this.contactName3 = contactName3,
        this.mobilePhone3 = mobilePhone3,
        this.officePhone3 = officePhone3,
        this.recordDataSun = recordDataSun, 
        this.recordDataMoon = recordDataMoon,


        this.order = order,
        this.note = note,
        this.imageLink = imageLink
    }
};