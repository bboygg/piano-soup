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

    // Use oapi.map.naver.com as per NCP documentation
    const scriptUrl = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}&submodules=geocoder`;

    if (!document.getElementById('naver-maps-script')) {
      const script = document.createElement('script');
      script.id = 'naver-maps-script';
      script.src = scriptUrl;
      script.async = true;
      
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setAuthError(true);
      
      document.head.appendChild(script);
    } else {
      // If script exists, ensure it has the submodule or just trigger load
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && window.naver && window.naver.maps) {
      const address = "경상북도 영주시 번영로102번길 30";
      
      const initializeGeocoding = () => {
        // Double check if Service submodule is actually available
        if (!window.naver.maps.Service || !window.naver.maps.Service.geocode) {
          console.log("Naver Maps Service not yet available, retrying...");
          setTimeout(initializeGeocoding, 200);
          return;
        }

        window.naver.maps.Service.geocode({
          query: address
        }, (status: any, response: any) => {
          if (status !== window.naver.maps.Service.Status.OK) {
            console.error("Geocoding failed:", status);
            // Fallback to coordinates if geocoding fails
            const fallbackLocation = new window.naver.maps.LatLng(36.8212226, 128.6301698);
            renderMap(fallbackLocation);
            return;
          }

          const result = response.v2.addresses[0];
          const location = new window.naver.maps.LatLng(result.y, result.x);
          renderMap(location);
        });
      };

      const renderMap = (location: any) => {
        if (!mapRef.current) return;
        
        const mapOptions = {
          center: location,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT
          }
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        new window.naver.maps.Marker({
          position: location,
          map: map,
          title: '피아노숲 음악교습소',
        });
      };

      initializeGeocoding();
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

          <div className="h-[450px] bg-gray-100 rounded-[32px] overflow-hidden border-8 border-white shadow-xl relative">
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
            
            {(!process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID || process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID === 'your_client_id_here') && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm p-8 text-center z-20">
                .env.local 파일에 Naver Maps Client ID를 입력해주세요.
              </div>
            )}
            
            {authError && (
              <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center p-8 text-center z-30">
                <p className="text-red-500 font-bold mb-4">인증에 실패했습니다</p>
                <ul className="text-xs text-gray-600 space-y-2 text-left list-disc pl-4">
                  <li>Client ID가 정확한지 확인해 주세요.</li>
                  <li>네이버 클라우드 콘솔의 [Web 서비스 URL]에 <strong>http://localhost:3000</strong>이 등록되어 있는지 확인해 주세요.</li>
                  <li>Application 설정에서 <strong>Maps (Dynamic Map)</strong> 서비스가 선택되어 있는지 확인해 주세요.</li>
                </ul>
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
