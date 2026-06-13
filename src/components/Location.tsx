"use client";

import { MapPin, Phone, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID;
    
    if (!clientId || clientId === 'your_client_id_here') {
      return;
    }

    // Load Naver Maps script
    const scriptUrl = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;

    if (!document.getElementById('naver-maps-script')) {
      const script = document.createElement('script');
      script.id = 'naver-maps-script';
      script.src = scriptUrl;
      script.async = true;
      
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setAuthError(true);
      
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && window.naver && window.naver.maps) {
      try {
        // Use coordinates directly for maximum stability
        // Exact location for 경상북도 영주시 번영로102번길 30
        const location = new window.naver.maps.LatLng(36.8212226, 128.6301698);
        
        const mapOptions = {
          center: location,
          zoom: 21, // Max zoom
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT
          }
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        const marker = new window.naver.maps.Marker({
          position: location,
          map: map,
          title: '피아노숲 음악교습소',
        });

        // Click event to open Naver Map directly
        const openNaverMap = () => {
          window.open('https://naver.me/551JkfQL', '_blank');
        };

        window.naver.maps.Event.addListener(map, 'click', openNaverMap);
        window.naver.maps.Event.addListener(marker, 'click', openNaverMap);
        
      } catch (e) {
        console.error("Naver Map Render Error");
        setAuthError(true);
      }
    }
  }, [isLoaded]);

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-piano-black mb-8">오시는 길</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-piano-green" />
                </div>
                <div>
                  <h4 className="font-bold text-piano-black mb-1">주소</h4>
                  <p className="text-gray-600 leading-relaxed">
                    경상북도 영주시 번영로102번길 30<br />
                    (피아노숲 음악교습소)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-piano-green" />
                </div>
                <div>
                  <h4 className="font-bold text-piano-black mb-1">전화번호</h4>
                  <p className="text-gray-600 leading-relaxed">054-633-1999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-piano-green" />
                </div>
                <div>
                  <h4 className="font-bold text-piano-black mb-1">운영 시간</h4>
                  <p className="text-gray-600 leading-relaxed">
                    평일: 13:00 - 18:00<br />
                    <span className="text-piano-green font-medium">* 상담 문의는 언제든 환영합니다.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[450px] bg-gray-100 rounded-[32px] overflow-hidden border-8 border-white shadow-xl relative cursor-pointer" title="클릭하여 네이버 지도로 보기">
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
            
            {(!process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID || process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID === 'your_client_id_here') && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm p-8 text-center z-20">
                지도 설정을 기다리는 중...
              </div>
            )}
            
            {authError && (
              <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center p-8 text-center z-30">
                <p className="text-red-500 font-bold mb-4">지도를 불러올 수 없습니다</p>
                <p className="text-xs text-gray-600">설정 정보를 다시 확인해 주세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    naver: any;
  }
}
