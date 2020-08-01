export class FirstPage {
    constructor(firstSection, secondSection, thirdSection) {
        this.firstSection = firstSection,
        this.secondSection = secondSection, 
        this.thirdSection = thirdSection
    }
};


export class BeachType {
    constructor(location, groundType1, groundType2, groundType1Perct, groundType2Perct,length, width, angle, granularity, sphericity, roundNess, imageLink) {
        this.location = location,

        this.groundType1 = groundType1,
        this.groundType2 = groundType2,
        this.groundType1Perct = groundType1Perct,
        this.groundType2Perct = groundType2Perct,

        this.length = length,
        this.width = width,
        this.angle = angle,

        this.granularity = granularity, //입도
        this.sphericity = sphericity, //구형도
        this.roundNess = roundNess //원마도

        this.imageLink = imageLink
    }
};


export const SectionType = {
    TOP : '상부',
    MIDDLE : '중부',
    BOTTOM : '하부',
    TOP_MIDDLE : '상부+중부',
    MIDDLE_BOTTOM : '중부+하부',
    ALL: "상부+중부+하부",
    TMB : '없음'
};

export const GroudType = {
    ARTIFICIAL : "인공석축",
    VERTICAL : "수직안벽",
    NATURAL : "자연안반",
    SAND : "모래해변",
    TETRA : "테트라포트",
    BOWLER : "보울더(256mm↑)",
    BIG_PABBLE : "왕자갈(64mm↑)",
    PABBLE : "자갈(4mm↑)",
    BIG_SAND : "왕모래(2mm↑)",
    SOIL : "조립사(0.5mm↑)",
    MID_SOIL : "중립사(0.25mm↑)",
    MICRO_SOIL : "세립사(0.062mm↑)",
    SILT : "실트(0.004mm↑)",
    CLAY : "점토(0.004mm↓)",
    NONE : "-"
};