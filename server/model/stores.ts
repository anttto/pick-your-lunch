interface Store {
    name: string;
    position: number;
    avg: number;
}

const stores: Store[] = [
    { name: '서울 감자탕 (뼈해장국 고기가 많음)', position: 123, avg: 555 },
    { name: '화수목 (샤브샤브)', position: 123, avg: 555 },
    { name: '서현실비 (점심엔 된장찌개)', position: 123, avg: 555 },
    { name: '장원막국수 (들기름국수 등 막국수집)', position: 123, avg: 555 },
    { name: '소우 (점심 된장찌개)', position: 123, avg: 555 },
    { name: '미각 (중국집)', position: 123, avg: 555 },
    { name: '영양센터 (삼계탕)', position: 123, avg: 555 },
    { name: '호시초밥 (초밥)(좁음)', position: 123, avg: 555 },
    { name: '미도인 (일본식 덮밥)', position: 123, avg: 555 },
    { name: '도쿄스테이크 (일본식 덮밥)', position: 123, avg: 555 },
    { name: '홍대개미 (일본식 덮밥)', position: 123, avg: 555 },
    { name: '소담칼국수', position: 123, avg: 555 },
    { name: '연안식당', position: 123, avg: 555 },
    { name: '쌀국수', position: 123, avg: 555 },
    { name: '백소정 (일식 돈가스)', position: 123, avg: 555 },
    { name: '매드포갈릭', position: 123, avg: 555 },
    { name: '뭉티기 (차돌된장찌개)', position: 123, avg: 555 },
    { name: '이태리부대찌개', position: 123, avg: 555 },
    { name: '하치돈부리(일식덮밥)(좁음)', position: 123, avg: 555 },
    { name: '메콩타이 (쌀국수집)', position: 123, avg: 555 },
    { name: '죽여주는김치찜 (김치찜,찌개)', position: 123, avg: 555 },
    { name: '삼돌이 (전라남도음식전문점)', position: 123, avg: 555 },
    { name: '고쿠텐 (텐동집)', position: 123, avg: 555 },
    { name: '북창동순두부', position: 123, avg: 555 },
    { name: '담소사골순대국', position: 123, avg: 555 },
    { name: '양평해장국', position: 123, avg: 555 },
    { name: '새마을식당', position: 123, avg: 555 },
    { name: '그집 (모밀집)', position: 123, avg: 555 },
    { name: '브라운돈가스', position: 123, avg: 555 },
    { name: '상무초밥', position: 123, avg: 555 },
    { name: '나라돈까스', position: 123, avg: 555 },
    { name: '경양카츠', position: 123, avg: 555 },
    { name: '가마솥순대국', position: 123, avg: 555 },
    { name: '라히노카레 (카레)', position: 123, avg: 555 },
    { name: '육쌈냉면', position: 123, avg: 555 },
    { name: '분타 (쌀국수집)', position: 123, avg: 555 },
];

export function getStores(): Store[] {
    return stores;
}
