export class FourthPage {
    constructor(access, storage, trash, environment, agent, tool) {
        this.access = access,
        this.storage = storage,
        this.trash = trash,
        this.environment = environment,
        this.agent = agent,
        this.tool = tool
    }
}

export class Access {
    constructor(smallCar, middleCar, bigCar, smallShip, middleShip, bigShip, field1, field1Val, field2, field2Val, field3, field3Val, field4, field4Val) {
        this.smallCar = smallCar,
        this.middleCar = middleCar,
        this.bigCar = bigCar,

        this.smallShip = smallShip,
        this.middleShip = middleShip,
        this.bigShip = bigShip,

        this.field1 = field1,
        this.field1Val = field1Val,
        this.field2 = field2,
        this.field2Val = field2Val,
        this.field3 = field3,
        this.field3Val = field3Val
        this.field4 = field4,
        this.field4Val = field4Val
    }
}

export class Storage {
    constructor(openSpace, openHundredMeter, storageAvailable, storageHundredMeter, outBoardRecieve, carReceive, marinaReceive, townHouseStorage, field1, field1Val, field2, field2Val, field3, field3Val) {
        this.openSpace = openSpace,
        this.openHundredMeter = openHundredMeter, 
        this.storageAvailable = storageAvailable, 
        this.storageHundredMeter = storageHundredMeter,
        this.outBoardRecieve = outBoardRecieve, 
        this.carReceive = carReceive, 
        this.marinaReceive = marinaReceive, 
        this.townHouseStorage = townHouseStorage, 
        this.field1 = field1, 
        this.field1Val = field1Val, 
        this.field2 = field2, 
        this.field2Val = field2Val
        this.field3 = field3, 
        this.field3Val = field3Val
    }
}

export class Trash {
    constructor(openSpace, openHundredMeter, storageAvailable, storageHundredMeter, outBoardRecieve, carReceive, field1, field1Val, field2, field2Val, field3, field3Val, field4, field4Val) {
        this.openSpace = openSpace,
        this.openHundredMeter = openHundredMeter, 
        this.storageAvailable = storageAvailable, 
        this.storageHundredMeter = storageHundredMeter,
        this.outBoardRecieve = outBoardRecieve, 
        this.carReceive = carReceive, 
        
        this.field1 = field1, 
        this.field1Val = field1Val, 
        this.field2 = field2, 
        this.field2Val = field2Val,
        this.field3 = field3, 
        this.field3Val = field3Val, 
        this.field4 = field4, 
        this.field4Val = field4Val
    }
}

export class Environment {
    constructor(nearFarm, nearFishFarm, nearHouse, nearIntake, nearProtective, field1, field1Val, field2, field2Val, field3, field3Val, field4, field4Val, field5, field5Val) {
        this.nearFarm = nearFarm,
        this.nearFishFarm = nearFishFarm, 
        this.nearHouse = nearHouse, 
        this.nearIntake = nearIntake,
        this.nearProtective = nearProtective, 
        
        this.field1 = field1, 
        this.field1Val = field1Val, 
        this.field2 = field2, 
        this.field2Val = field2Val,
        this.field3 = field3, 
        this.field3Val = field3Val, 
        this.field4 = field4, 
        this.field4Val = field4Val,
        this.field5 = field5,
        this.field5Val = field5Val
    }
}

export class Agent {
    constructor(date, total, hour, superVisor, propress, totalAgent, satin, coast, civil, volunteer, field1, field1Val, field2, field2Val, field3, field3Val, field4, field4Val, liquid, assain, general, etc) {
        this.date = date, 
        this.total = total, 
        this.hour = hour, 
        this.superVisor = superVisor, 
        this.progress = propress, 
        this.totalAgent = totalAgent, 
        this.satin =  satin, //공단
        this.coast = coast, //해경
        this.civil = civil, //주민
        this.volunteer = volunteer, //자원봉사자

        this.field1 = field1, 
        this.field1Val = field1Val, 
        this.field2 = field2, 
        this.field2Val = field2Val, 
        this.field3 = field3, 
        this.field3Val = field3Val, 
        this.field4 = field4, 
        this.field4Val = field4Val, 
        this.liquid= liquid, //폐기물 액상
        this.assain= assain, //지정
        this.general =  general, //일반
        this.etc = etc //기타
    }
}

export class Tool {
    constructor(iseon, outBoard, etc, pad, fense, crude, etcOil, oilCleaner, highPressure, pabbleCleaner, crain, fork, cargo, cattonGlove, coatedGlove, halfCoatGlove, chemicalGlove, twoLayerBag, tonBag, protectiveClothe, boots, mask, mob, canvas, field1, field1Val, field2, field2Val) {
        this.iseon = iseon, 
        this.outBoard = outBoard, 
        this.etc = etc, 
        this.pad = pad,
        this.fense = fense,
        this.crude = crude, 
        this.etcOil = etcOil,
        this.oilCleaner = oilCleaner, 

        this.highPressure = highPressure, 


        this.pabbleCleaner = pabbleCleaner,

        this.crain = crain, 
        this.fork = fork, 
        this.cargo = cargo, 
        
        this.cattonGlove = cattonGlove, 
        this.coatedGlove = coatedGlove, 
        this.halfCoatGlove = halfCoatGlove, 
        this.chemicalGlove = chemicalGlove, 
        this.twoLayerBag = twoLayerBag, 
        this.tonBag = tonBag, 
        this.protectiveClothe = protectiveClothe, 
        this.boots = boots, 
        this.mask = mask, 
        this.mob = mob, 
        this.canvas = canvas, 
        this.field1 = field1, 
        this.field1Val = field1Val, 
        this.field2 = field2, 
        this.field2Val = field2Val
    }
}