import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Room } from '../types';

const rooms: Room[] = [
  {
    id: 'sunrise-suite',
    name: 'Sunrise Suite',
    type: 'Type A',
    description: `
      "숲의 고요함 속에서 맞이하는 첫 번째 빛"
      
      선라이즈 스위트는 하루 중 가장 신비로운 시간, 여명이 밝아오는 순간을 위해 설계되었습니다.
      침실의 통창 너머로 짙은 녹음의 숲이 액자처럼 펼쳐지고, 그 너머로 떠오르는 태양이 바다를 붉게 물들이는 장관을 침대에 누워 감상할 수 있습니다. 
      화이트와 우드 톤의 인테리어는 자연의 색감을 방해하지 않으며, 프라이빗 테라스에서는 새소리와 파도 소리가 어우러진 이중주를 들으며 모닝 커피를 즐기기에 완벽합니다.
      고요한 아침을 사랑하는 연인들에게 잊지 못할 시작을 선물합니다.
    `,
    features: ['오션뷰 침실', '프라이빗 테라스', '단독 인피니티 풀', '킹사이즈 구스다운 베딩'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    price: '₩450,000'
  },
  {
    id: 'moonlight-villa',
    name: 'Moonlight Villa',
    type: 'Type B',
    description: `
      "달빛이 내려앉은 바다를 품은 프라이빗 독채"

      문라이트 빌라는 로맨틱한 저녁과 깊은 밤의 정취를 온전히 누릴 수 있는 공간입니다.
      거실과 연결된 넓은 풀 데크는 석양이 지는 서쪽 하늘과 맞닿아 있어, 와인 한 잔과 함께 황금빛으로 물드는 바다를 감상하기에 최적의 장소입니다.
      밤이 되면 쏟아지는 별빛과 바다 위에 비치는 달빛(Moonlight)이 환상적인 분위기를 자아냅니다.
      높은 층고와 어두운 톤의 고급스러운 마감재는 차분하고 웅장한 분위기를 연출하며, 둘만의 비밀스러운 파티를 열기에 더할 나위 없는 선택이 될 것입니다.
    `,
    features: ['파노라마 오션뷰', '확장형 풀 데크', '실내 자쿠지', '프리미엄 사운드 시스템'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    price: '₩520,000'
  }
];

const Rooms: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Rooms & Suites</h2>
          <p className="text-gray-500 font-light text-lg">자연 속에 숨겨진 두 가지 매력의 프라이빗 공간</p>
        </div>

        <div className="space-y-20">
          {rooms.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image Section */}
              <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-baseline space-x-4">
                  <span className="text-accent font-bold tracking-widest text-sm uppercase">{room.type}</span>
                  <h3 className="text-3xl font-serif text-primary">{room.name}</h3>
                </div>
                
                <div className="w-12 h-1 bg-accent/30"></div>

                <p className="text-gray-600 leading-8 whitespace-pre-line font-light">
                  {room.description.trim()}
                </p>

                <ul className="grid grid-cols-2 gap-4 pt-4">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 flex items-center justify-between border-t border-gray-200 mt-8">
                  <span className="text-2xl font-serif text-primary">{room.price} <span className="text-sm font-sans text-gray-400 font-light">/ Night</span></span>
                  <Link 
                    to="/reservation"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    예약하기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;