import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const PENSION_CONTEXT = `
당신은 [더조은 펜션]의 프리미엄 AI 컨시어지입니다.
이 펜션은 산속에 위치하지만 모든 객실에서 오션뷰가 보이는 독채 펜션입니다.
주 고객층은 30대 신혼부부 및 연인이며, 조용하고 고급스러운 힐링을 지향합니다.

핵심 정보:
1. 위치: 산과 바다가 만나는 프라이빗한 숲속.
2. 특징: 전 객실 개별 인피니티 풀, 최고급 침구류(구스다운).
3. 다이닝: 셰프가 직접 객실로 서빙하는 웰컴 디너(양식 코스) 포함.
4. 객실 타입:
   - A타입 'Sunrise Suite (선라이즈 스위트)': 아침 해가 가장 먼저 뜨는 곳. 숲의 녹음과 바다의 푸르름을 동시에 조망.
   - B타입 'Moonlight Villa (문라이트 빌라)': 달빛과 석양이 아름다운 곳. 로맨틱한 분위기 극대화.
5. 부대시설: 플로팅 조식, 프라이빗 히노끼 스파, 숲속 별보기 키트(불멍+천체망원경).

당신의 역할은 고객의 질문에 대해 펜션의 톤앤매너(우아하고, 친절하고, 고급스러운)를 유지하며 답변하는 것입니다.
예약을 유도하거나, 펜션의 매력을 감성적인 언어로 설명해주세요.
답변은 300자 이내로 간결하게 작성하세요.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "죄송합니다. 현재 AI 컨시어지 서비스를 이용할 수 없습니다. (API Key Missing)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash for quick, concise concierge responses
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: PENSION_CONTEXT,
        temperature: 0.7,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "죄송합니다. 잠시 후 다시 시도해주세요.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};