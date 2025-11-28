import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Mountain and Ocean View" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="space-y-2 mb-8">
             <span className="block text-accent tracking-[0.2em] text-sm uppercase font-medium mb-4">The Private Luxury Sanctuary</span>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
               산등성이 너머,<br/>
               <span className="font-semibold italic">바다가 닿는 곳</span>
             </h1>
          </div>

          <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
            "가장 높은 곳에서 누리는 가장 깊은 바다" <br className="md:hidden"/>
            오직 당신만을 위한 숲속의 오션뷰, 더조은 펜션
          </p>

          <div className="pt-8">
            <Link 
              to="/reservation" 
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-accent hover:border-accent text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-light tracking-wide hover:shadow-[0_0_20px_rgba(192,160,98,0.5)]"
            >
              프라이빗 스테이 예약하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Slogans & Philosophy Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Philosophy</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-gray-600 leading-8 text-lg">
              더조은 펜션은 쉼의 본질을 생각합니다.<br/>
              도심의 소음이 닿지 않는 깊은 산속, <br/>
              그럼에도 눈앞에 펼쳐지는 광활한 바다.<br/>
              이 모순적인 조화 속에서 <span className="text-accent font-serif font-bold">"당신의 휴식이 완성되는 시간"</span>을 선물합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                 <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-4 font-medium">Private Ocean</h3>
              <p className="text-gray-500 font-light">산속에서 만나는<br/>압도적인 오션뷰 파노라마</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 group">
               <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                 <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-4 font-medium">Gourmet Dining</h3>
              <p className="text-gray-500 font-light">셰프가 선사하는<br/>웰컴 파인다이닝 코스</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 group">
               <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                 <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-4 font-medium">Infinity Relaxation</h3>
              <p className="text-gray-500 font-light">숲과 바다 사이<br/>프라이빗 인피니티 풀</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[60vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=2")' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
           <span className="text-white/80 uppercase tracking-widest text-sm mb-4">Only For You</span>
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">"오직 당신만을 위한 숲속의 오션뷰"</h2>
           <Link to="/rooms" className="text-white border-b border-accent pb-1 hover:text-accent transition-colors font-light">객실 미리보기</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;