import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';

const Reservation: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-surface flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="bg-primary text-white p-12 md:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif mb-8">Reservation</h2>
              <p className="text-gray-300 font-light mb-8">
                가장 사적인 휴식을 위한 첫걸음.<br/>
                원하시는 날짜와 객실을 선택해주세요.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-light">010-1234-5678</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-light">reservation@joeun.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-light">Year-round 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Form Placeholder */}
          <div className="p-12 md:w-2/3">
            <h3 className="text-xl font-serif text-primary mb-6">실시간 예약 문의</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none">
                  <option>Sunrise Suite (Type A)</option>
                  <option>Moonlight Villa (Type B)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none" placeholder="예약자 성함" />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requests</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none h-32" placeholder="문의사항이나 요청사항을 적어주세요."></textarea>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                예약 가능 여부 확인하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;