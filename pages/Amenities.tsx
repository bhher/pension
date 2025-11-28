import React from 'react';
import { Utensils, Waves, Moon, Sun, Coffee, Telescope } from 'lucide-react';
import { Amenity } from '../types';

const specialServices: Amenity[] = [
  {
    id: 'dining',
    title: 'Chef\'s Welcome Dinner',
    description: '특급 호텔 출신 셰프가 직접 객실로 서빙하는 프라이빗 다이닝 코스. 제철 식재료를 활용한 양식 코스가 웰컴 기프트로 제공됩니다. 둘만의 오붓한 저녁 식사를 위해 룸서비스 형태로 세팅해 드립니다.',
    icon: <Utensils className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'pool',
    title: 'Private Infinity Pool',
    description: '숲과 바다의 경계가 사라지는 곳. 사계절 온수 풀로 운영되어 계절에 상관없이 수영을 즐길 수 있습니다. 인피니티 풀 끝에서 인생 사진을 남겨보세요.',
    icon: <Waves className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 'bedding',
    title: 'Premium Goose Bedding',
    description: '최고급 폴란드산 구스다운 침구와 인체공학적 매트리스가 구름 위에 누운 듯한 최상의 수면 경험을 제공합니다. 여행의 피로를 씻어내는 완벽한 휴식을 약속합니다.',
    icon: <Moon className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/600/400?random=12'
  }
];

const extraServices: Amenity[] = [
  {
    id: 'floating',
    title: 'Floating Breakfast',
    description: '인피니티 풀 위에서 즐기는 이국적인 아침 식사. 갓 구운 빵과 신선한 과일, 향긋한 커피가 담긴 플로팅 트레이로 영화 같은 아침을 맞이하세요. (사전 예약 필수 / 유료)',
    icon: <Coffee className="w-6 h-6" />
  },
  {
    id: 'spa',
    title: 'Private Hinoki Spa',
    description: '객실 내 마련된 편백나무(히노끼) 스파에서 피톤치드 가득한 반신욕을 즐겨보세요. 고급 아로마 입욕제와 함께 제공되어 숲속의 고요함 속에서 진정한 힐링을 선사합니다.',
    icon: <Sun className="w-6 h-6" /> // Replacing hot tub icon with Sun for generic relaxation
  },
  {
    id: 'stargazing',
    title: 'Forest Stargazing Kit',
    description: '도심의 불빛이 없는 이곳은 별을 보기에 가장 완벽한 장소입니다. 프라이빗 마당에서 즐기는 "불멍" 장작 세트와 천체 망원경을 대여해 드립니다. 밤하늘을 수놓은 별들을 가장 가까이에서 만나보세요.',
    icon: <Telescope className="w-6 h-6" />
  }
];

const Amenities: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative py-20 bg-primary text-white text-center">
        <div className="absolute inset-0 overflow-hidden opacity-20">
             <img src="https://picsum.photos/1920/600?random=20" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-4">Special Amenities</h2>
          <p className="text-gray-300 font-light">더조은 펜션만의 특별한 서비스로 머무는 모든 순간을 감동으로 채웁니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Core Features */}
        <div className="mb-24">
          <h3 className="text-2xl font-serif text-primary mb-12 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            Signature Services
            <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-accent"></span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {specialServices.map((service) => (
              <div key={service.id} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md h-64">
                   <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-accent shadow-sm">
                     {service.icon}
                   </div>
                </div>
                <h4 className="text-xl font-serif text-primary mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-surface rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
             <h3 className="text-2xl font-serif text-primary mb-4">Add-on Experiences</h3>
             <p className="text-gray-500 font-light">당신의 여행을 더욱 풍성하게 만들어줄 특별한 옵션</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraServices.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h4 className="text-lg font-serif font-medium text-primary mb-3">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Amenities;