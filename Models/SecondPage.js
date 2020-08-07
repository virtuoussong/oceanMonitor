export class SecondPage {
    constructor(firstSection, secondSection, thirdSection) {
       this.firstSection = firstSection,
       this.secondSection = secondSection,
       this.thirdSection = thirdSection
    }
};

export class BeachStatus {
    constructor(location, length, width, spread, thickness, oilType, imageLink) {
        this.location = location,
        this.length = length, 
        this.width = width, 
        this.spread = spread, 
        this.thickness = thickness, 
        this.oilType = oilType,
        this.imageLink = imageLink
    }
};

export const ThicknessType = {
    PO : 'PO(Pooled Oil)\n(1cm 이상)',
    CV : 'CV(Cover)\n(1~0.1cm)',
    CT : 'CT(Coat)\n(0.01~0.1cm)',
    ST : 'ST(Stain)(0.01cm 이하)',
    FL : 'FL(Film)\n(투명, 반투명)',
    NONE : '-'
};

export const OilStatus = {
    FR : 'FR(Fresh)\n(방금유출된기름)',
    MS : 'MS(Mouse)\n(기름+물 혼합)',
    TB : 'TB(Tar Balls)\n(기름덩어리 10cm 이하)',
    TP : 'TP(Tar Patties)\n(기름덩어리 10cm 이상)',
    TC : 'TC(Tar Coating)\n(반고체 코팅)',
    AP : 'AP(Asphalt Pavement)\n(아스팔트)',
    OD : 'OD(Oiled Debris)\n(쓰레기 혼합)',
    NONE : '-'
};

