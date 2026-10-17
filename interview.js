// 면접 연습: 기출질문 카드 학습(이해 → 따라 읽기 → 빈칸 → 말해보기) + 서술형 답변 채점 + 간격 반복 복습
// 출처: 2025 상반기 합격생 면접 후기에 정리된 사무직/공통 기출질문. 추천 답변은 연습용 예시이며 본인 경험으로 바꿔 말해야 합니다.
(function () {
  // ---------- 데이터 ----------
  // concepts: 답변에 들어가야 할 핵심 개념. words는 답변에서 찾을 어간/키워드, hint는 빠졌을 때 안내.
  const QS = [
    {
      id: 's1', cat: '사무', q: '역사 내 방범·보안 시스템 운영에 대한 본인의 생각을 말해 보세요.',
      intent: '안전과 범죄 예방에 대한 인식, 그리고 감시 시스템과 사생활 보호 사이의 균형 감각을 봅니다.',
      concepts: [
        { label: '안전·예방이 목적', words: ['안전', '예방', '범죄', '안심'], hint: '보안 시스템의 목적(승객 안전·범죄 예방)을 먼저 말하세요.' },
        { label: '시스템 + 사람 병행', words: ['CCTV', '비상벨', '순찰', '시스템', '사각지대'], hint: 'CCTV 같은 시스템과 직원 순찰을 함께 쓰는 점을 언급하세요.' },
        { label: '개인정보 보호', words: ['개인정보', '사생활', '접근 권한', '보관'], hint: '영상 정보에 담긴 개인정보 보호도 짚어 주세요.' },
        { label: '신속한 연계 대응', words: ['신속', '경찰', '관제', '연계', '대응'], hint: '이상 상황 시 경찰·관제와의 신속한 연계를 말하세요.' }
      ],
      model: [
        '역사 보안 시스템의 1차 목적은 승객이 안심하고 이용할 수 있는 안전 확보와 범죄 예방이라고 생각합니다.',
        'CCTV와 비상벨 같은 시스템은 사각지대가 생길 수 있어서 역무원의 순찰과 병행해야 효과가 커집니다.',
        '또한 영상에는 개인정보가 담겨 있으므로 접근 권한을 제한하고 보관 기준을 지키는 관리가 필요합니다.',
        '이상 상황이 감지되면 경찰과 관제에 신속히 연계해 대응하겠습니다.',
        '저도 시스템에만 의존하지 않고 직접 확인하는 습관으로 역의 안전에 기여하겠습니다.'
      ],
      roles: ['결론', '근거', '근거', '대응', '다짐']
    },
    {
      id: 's2', cat: '사무', q: '도시철도법에서 역 운영과 관련해 중요하다고 생각하는 부분은 무엇인가요?',
      intent: '법령 암기보다 도시철도 운영의 취지(안전·이용자 편의·질서)를 이해하고 업무에 연결하는지를 봅니다.',
      caution: '정확한 조문은 국가법령정보센터에서 직접 확인하세요. 아래 답변은 법의 취지(안전·편의·질서) 중심의 예시입니다.',
      concepts: [
        { label: '안전 확보', words: ['안전'], hint: '도시철도 운영의 가장 큰 취지인 안전 확보를 말하세요.' },
        { label: '이용자 편의·보호', words: ['이용자', '편의', '승객', '고객', '보호'], hint: '이용자 편의와 보호를 언급하세요.' },
        { label: '질서 유지·규정 준수', words: ['질서', '규정', '준수', '법령'], hint: '역사 내 질서 유지와 규정 준수를 언급하세요.' },
        { label: '업무 연결(역무·사무)', words: ['업무', '역무', '현장', '근거', '확인'], hint: '내 업무에서 어떻게 지킬지 연결하세요.' }
      ],
      model: [
        '도시철도법은 도시철도의 안전을 확보하고 이용자의 편의를 높이는 것을 중요한 취지로 한다고 이해하고 있습니다.',
        '그래서 역 운영에서도 승객 안전이 가장 우선이고, 이용자가 불편 없이 이동하도록 안내와 질서 유지가 뒷받침되어야 합니다.',
        '저는 업무 중 판단이 필요할 때 감이 아니라 법령과 내부 규정을 근거로 확인하겠습니다.',
        '또한 개정된 규정은 꾸준히 학습해 현장에서 정확하게 안내하는 직원이 되겠습니다.'
      ],
      roles: ['결론', '근거', '다짐', '다짐']
    },
    {
      id: 's3', cat: '사무', q: '본인이 생각하는 고객서비스란 무엇이며, 이를 실천했던 경험을 말해 보세요.',
      intent: '고객서비스를 자기 말로 정의하고, 실제 상황-행동-결과로 증명할 수 있는지를 봅니다.',
      concepts: [
        { label: '고객 입장에서의 정의', words: ['입장', '고객의', '고객 관점', '기대', '필요'], hint: '고객서비스를 "고객 입장에서 필요를 먼저 파악하는 것"처럼 정의하세요.' },
        { label: '구체적 상황·경험', words: ['아르바이트', '근무', '경험', '당시', '상황'], hint: '언제, 어디서의 경험인지 구체적으로 말하세요.' },
        { label: '공감·사과 후 해결', words: ['공감', '사과', '해결', '안내'], hint: '공감과 사과 뒤 해결 행동을 말하세요.' },
        { label: '결과·배운 점', words: ['결과', '감사', '재방문', '배웠', '개선'], hint: '결과와 배운 점으로 마무리하세요.' }
      ],
      model: [
        '저는 고객서비스를 고객의 입장에서 필요한 것을 먼저 파악하고 해결해 드리는 일이라고 생각합니다.',
        '카페에서 1년간 근무할 때 주문이 잘못 나가 화가 난 손님이 있었습니다.',
        '먼저 불편을 드려 죄송하다고 공감을 표현한 뒤 새 음료를 즉시 제공하고 대기 시간을 안내했습니다.',
        '그 결과 손님이 오히려 감사 인사를 남기고 재방문하셨고, 같은 실수를 막기 위해 주문 복창 절차를 제안했습니다.',
        '입사 후에도 승객의 입장에서 먼저 생각하는 역무원이 되겠습니다.'
      ],
      roles: ['결론', '사례', '사례', '결과', '다짐']
    },
    {
      id: 's4', cat: '사무', q: '반복적으로 같은 민원을 제기하는 고객을 만난다면 어떻게 하시겠습니까?',
      intent: '감정 소모 상황에서 원칙을 지키면서도 고객을 존중하는 태도와 해결 절차를 봅니다.',
      concepts: [
        { label: '경청·공감', words: ['경청', '공감', '귀 기울', '들어'], hint: '먼저 끝까지 듣고 공감하는 태도를 말하세요.' },
        { label: '원인 파악', words: ['원인', '이유', '근본', '파악'], hint: '왜 반복되는지 근본 원인을 파악한다고 말하세요.' },
        { label: '원칙·일관된 안내', words: ['원칙', '규정', '일관', '기준'], hint: '규정에 근거해 일관되게 안내한다고 말하세요.' },
        { label: '기록·공유·연계', words: ['기록', '공유', '상급자', '담당 부서', '연계', '보고'], hint: '민원을 기록하고 담당 부서·상급자와 공유한다고 말하세요.' }
      ],
      model: [
        '먼저 같은 민원이라도 고객의 이야기를 끝까지 경청하고 불편에 공감하겠습니다.',
        '그다음 왜 같은 문제가 반복되는지 원인을 파악하고, 이전 처리 기록을 확인하겠습니다.',
        '규정상 해결이 어려운 부분은 기준을 정중하고 일관되게 설명드리겠습니다.',
        '해결이 가능한 부분은 담당 부서와 상급자에게 공유해 연계하고, 처리 결과를 고객에게 다시 안내하겠습니다.',
        '이렇게 기록을 남기면 같은 민원이 다시 발생하지 않도록 개선하는 데에도 도움이 된다고 생각합니다.'
      ],
      roles: ['태도', '분석', '원칙', '대응', '다짐']
    },
    {
      id: 's5', cat: '사무', q: '승강장 안전문(PSD) 고장으로 열차 운행이 지연된다면 어떻게 대응하시겠습니까?',
      intent: '위기 상황에서 안전, 보고, 승객 안내의 우선순위를 올바르게 세우는지를 봅니다.',
      concepts: [
        { label: '관제·상급자 보고', words: ['관제', '보고', '상황실'], hint: '관제에 즉시 상황을 보고한다고 말하세요.' },
        { label: '승객 안전 확보', words: ['안전', '접근', '통제', '선로', '안전요원'], hint: '승객이 선로에 접근하지 않도록 통제한다고 말하세요.' },
        { label: '승객 안내', words: ['안내', '방송', '지연', '대체'], hint: '지연 사유와 대체 수단을 안내한다고 말하세요.' },
        { label: '복구 후 점검·기록', words: ['복구', '점검', '기록', '사후', '재발'], hint: '복구 후 점검과 기록으로 마무리하세요.' }
      ],
      model: [
        '가장 먼저 관제에 고장 상황을 즉시 보고하고 지시를 받겠습니다.',
        '동시에 안전요원과 함께 승객이 선로 쪽으로 접근하지 않도록 승강장을 통제해 안전을 확보하겠습니다.',
        '이어서 방송과 안내문으로 지연 사유와 예상 시간, 대체 이용 수단을 알려 승객의 혼란을 줄이겠습니다.',
        '복구가 끝나면 정상 작동을 점검하고 경과를 기록해 재발 방지에 활용하겠습니다.'
      ],
      roles: ['1순위', '2순위', '3순위', '마무리']
    },
    {
      id: 's6', cat: '사무', q: '역사 내에서 화재가 발생한다면 무엇을 가장 우선하시겠습니까?',
      intent: '인명 안전을 최우선으로 두고 보고와 대피를 올바른 순서로 판단하는지를 봅니다.',
      concepts: [
        { label: '인명 안전 최우선', words: ['인명', '안전', '생명'], hint: '인명 안전이 최우선이라고 먼저 말하세요.' },
        { label: '신고·보고', words: ['119', '신고', '관제', '보고', '전파'], hint: '119 신고와 관제 보고를 말하세요.' },
        { label: '대피 유도·안내', words: ['대피', '유도', '방송', '출구', '안내'], hint: '대피 방송과 안전한 출구 유도를 말하세요.' },
        { label: '초기 진화는 안전할 때', words: ['초기', '진화', '소화기', '확보된'], hint: '초기 진화는 안전이 확보된 경우에 한다고 말하세요.' }
      ],
      model: [
        '화재 시에는 무엇보다 승객과 직원의 인명 안전을 최우선으로 하겠습니다.',
        '발견 즉시 119에 신고하고 관제에 상황을 보고해 열차 운행과 대응 지시를 받겠습니다.',
        '그다음 방송과 안전요원으로 승객이 연기를 피해 안전한 출구로 대피하도록 유도하겠습니다.',
        '안전이 확보된 범위에서만 소화기로 초기 진화를 하고, 상황 종료 후 경위를 정확히 기록하겠습니다.'
      ],
      roles: ['결론', '신고', '대피', '진화']
    },
    {
      id: 'c1', cat: '공통', q: '1분 동안 자기소개를 해 주세요.', min: 200, max: 400,
      intent: '직무와 연결되는 강점 한 가지를 근거와 함께 간결하게 전달하는지를 봅니다.',
      concepts: [
        { label: '이름·지원 직무', words: ['안녕하십니까', '지원', '입니다', '직무', '사무', '역무'], hint: '인사와 함께 지원 직무를 밝히세요.' },
        { label: '핵심 강점 한 가지', words: ['강점', '장점', '꼼꼼', '책임', '소통', '성실'], hint: '직무와 연결되는 강점 한 가지를 말하세요.' },
        { label: '경험·근거', words: ['경험', '활동', '근무', '했습니다', '때'], hint: '그 강점을 보여주는 경험을 말하세요.' },
        { label: '입사 후 포부', words: ['입사', '기여', '포부', '하겠습니다'], hint: '입사 후 어떻게 기여할지로 마무리하세요.' }
      ],
      model: [
        '안녕하십니까, 안전과 정확함으로 승객을 맞이하겠다는 마음으로 사무직에 지원한 지원자입니다.',
        '제 강점은 끝까지 확인하는 꼼꼼함입니다.',
        '동아리 회계를 맡았을 때 영수증과 장부를 매월 대조해 오차를 0원으로 맞췄고, 그 기록으로 동료들의 신뢰를 얻었습니다.',
        '입사 후에는 이 꼼꼼함으로 정산과 안전 기록을 정확하게 관리하겠습니다.',
        '믿고 맡길 수 있는 직원으로 기여하겠습니다. 감사합니다.'
      ],
      roles: ['인사', '강점', '근거', '포부', '다짐']
    },
    {
      id: 'c2', cat: '공통', q: '우리 회사에 지원한 동기를 말해 보세요.',
      intent: '회사 선택 이유와 본인의 역량, 입사 후 기여가 하나의 방향으로 이어지는지를 봅니다.',
      concepts: [
        { label: '공공성·안전 가치', words: ['공공', '안전', '시민', '공익'], hint: '공공성과 안전이라는 가치에 공감한 점을 말하세요.' },
        { label: '이 회사를 고른 이유', words: ['9호선', '급행', '노선', '혼잡', '특성'], hint: '9호선의 특성(급행·혼잡 등)을 근거로 말하세요.' },
        { label: '역량 연결', words: ['역량', '경험', '강점', '꼼꼼', '소통'], hint: '내 역량·경험과 연결하세요.' },
        { label: '입사 후 기여', words: ['기여', '입사 후', '하겠습니다', '노력'], hint: '입사 후 기여 계획으로 마무리하세요.' }
      ],
      model: [
        '시민의 하루를 안전하게 연결하는 공공 서비스에 보람을 느껴 지원했습니다.',
        '그중에서도 9호선은 급행과 일반열차가 함께 운행되어 혼잡과 안내가 중요한 노선이라, 정확한 정보 전달이 가치를 만든다고 생각했습니다.',
        '저는 고객 응대와 기록 정리 경험으로 정확하고 친절하게 안내하는 역량을 키워 왔습니다.',
        '입사 후에는 현장의 정보를 정확히 기록하고 전달해 승객의 안전과 편의에 기여하겠습니다.'
      ],
      roles: ['동기', '이유', '역량', '포부']
    },
    {
      id: 'c3', cat: '공통', q: '9호선을 이용했던 경험과 장단점, 개선점을 말해 보세요.',
      intent: '노선에 대한 관심과 이용자 관점의 관찰력, 개선 제안 능력을 봅니다.',
      concepts: [
        { label: '구체적 이용 경험', words: ['이용', '출근', '퇴근', '탔', '경험', '당시'], hint: '언제 어떻게 이용했는지 구체적으로 말하세요.' },
        { label: '장점', words: ['장점', '급행', '빠', '편리', '시간'], hint: '급행 등 장점을 말하세요.' },
        { label: '개선점 제안', words: ['개선', '제안', '혼잡', '안내', '아쉬'], hint: '아쉬운 점과 개선 제안을 말하세요.' },
        { label: '직무 연결', words: ['직무', '역무', '업무', '입사', '기여'], hint: '직원이 되었을 때 어떻게 반영할지 말하세요.' }
      ],
      model: [
        '출퇴근 시간에 9호선을 이용하면서 급행을 타면 이동 시간이 크게 줄어드는 점이 가장 큰 장점이라고 느꼈습니다.',
        '반면 혼잡 시간대에는 급행과 일반열차 정차역 구분이 헷갈려 잘못 타는 승객이 많은 점이 아쉬웠습니다.',
        '그래서 승강장에서 급행 정차역을 더 눈에 띄게 안내하고 환승 안내를 반복하는 개선을 제안하고 싶습니다.',
        '입사 후에는 현장에서 승객의 불편을 먼저 발견하고 업무에 반영하겠습니다.'
      ],
      roles: ['장점', '단점', '개선', '다짐']
    },
    {
      id: 'c4', cat: '공통', q: '스마트스테이션에 대해 어떻게 생각하시나요?',
      intent: '신기술 흐름에 대한 이해와 함께, 기술이 안전·편의를 높이는 동시에 사람의 역할이 필요한 부분을 균형 있게 보는지를 봅니다.',
      caution: '스마트스테이션의 구체적 도입 현황은 회사 공개 자료로 확인하세요. 아래는 일반적 관점의 예시입니다.',
      concepts: [
        { label: '개념 이해', words: ['디지털', 'IoT', 'AI', '자동화', '기술', '스마트'], hint: '디지털 기술로 역 운영을 효율화하고 안전을 높이는 개념이라고 설명하세요.' },
        { label: '장점', words: ['안전', '편의', '효율', '신속', '정보'], hint: '안전·편의·효율 장점을 말하세요.' },
        { label: '우려·한계', words: ['보안', '개인정보', '고장', '한계', '오류'], hint: '보안·오류 같은 한계도 말하세요.' },
        { label: '사람의 역할', words: ['직원', '역무', '사람', '현장', '판단'], hint: '기술을 쓰는 직원의 역할을 말하세요.' }
      ],
      model: [
        '스마트스테이션은 디지털 기술로 역 운영을 자동화하고 안전과 편의를 높이는 방향이라고 이해합니다.',
        '이상 상황 감지와 혼잡 정보 제공이 빨라지면 승객 안전과 이동 편의가 함께 좋아진다고 생각합니다.',
        '다만 시스템 오류나 개인정보 보안 문제가 생길 수 있어 철저한 관리가 전제되어야 합니다.',
        '그래서 기술이 해 주지 못하는 현장 판단과 승객 응대는 직원이 맡아야 한다고 생각하며, 저도 새로운 시스템을 빠르게 익히겠습니다.'
      ],
      roles: ['개념', '장점', '한계', '역할']
    },
    {
      id: 'c5', cat: '공통', q: '공기업과 민간 철도회사의 차이점은 무엇이라고 생각하시나요?',
      intent: '공공기관으로서의 사명(공공성·안전)에 대한 이해와 로열티를 봅니다. 후기에서도 중요한 질문으로 언급됐습니다.',
      concepts: [
        { label: '공공성·공익 우선', words: ['공공', '공익', '시민', '사회적'], hint: '공익을 우선하는 점을 말하세요.' },
        { label: '안전과 책임', words: ['안전', '책임', '신뢰'], hint: '안전과 책임을 말하세요.' },
        { label: '지속가능한 운영', words: ['효율', '재정', '지속', '비용', '운영'], hint: '효율적·지속가능한 운영도 말하세요.' },
        { label: '다짐·태도', words: ['하겠습니다', '노력', '기여', '자세'], hint: '그런 사명을 어떻게 실천할지 말하세요.' }
      ],
      model: [
        '공기업은 이윤보다 시민의 이동권과 안전 같은 공익을 우선해야 하는 점이 가장 큰 차이라고 생각합니다.',
        '그래서 안전에 대한 책임이 더 무겁고, 시민의 신뢰가 곧 기관의 가치입니다.',
        '다만 공공성만 강조하다 재정이 흔들리면 서비스가 지속될 수 없으므로 효율적으로 운영하려는 노력도 함께 필요합니다.',
        '저는 공공서비스를 맡은 직원으로서 안전과 시민 신뢰를 기준으로 판단하는 자세를 갖추겠습니다.'
      ],
      roles: ['차이', '근거', '균형', '다짐']
    },
    {
      id: 'c6', cat: '공통', q: '본인만의 스트레스 대처 방법은 무엇인가요?',
      intent: '스트레스를 건강하게 관리해 업무와 안전에 영향을 주지 않는지를 봅니다.',
      concepts: [
        { label: '스트레스 원인 인식', words: ['원인', '인식', '스스로', '돌아', '파악'], hint: '스트레스가 어디서 오는지 먼저 인식한다고 말하세요.' },
        { label: '구체적 해소 방법', words: ['운동', '산책', '취미', '독서', '수면', '대화'], hint: '구체적인 방법을 말하세요.' },
        { label: '업무 영향 최소화', words: ['업무', '집중', '영향', '일상', '회복'], hint: '업무에 영향을 주지 않는다고 말하세요.' },
        { label: '함께 해결·도움 요청', words: ['동료', '상담', '도움', '공유'], hint: '필요하면 동료와 공유한다고 말하세요.' }
      ],
      model: [
        '저는 스트레스를 받으면 먼저 원인을 글로 적어 보며 무엇이 문제인지 파악합니다.',
        '그다음 주 3회 30분씩 걷기나 러닝을 하며 몸을 움직여 긴장을 풀고, 충분한 수면으로 회복합니다.',
        '이렇게 관리하면 감정이 업무에 영향을 주지 않고 집중력을 유지할 수 있었습니다.',
        '혼자 해결하기 어려운 일은 동료나 선배에게 공유해 도움을 받겠습니다.'
      ],
      roles: ['인식', '방법', '효과', '협력']
    },
    {
      id: 'c7', cat: '공통', q: '체력 관리는 어떻게 하고 계신가요? (교대근무에 대한 준비 포함)',
      intent: '교대근무와 현장 업무를 견딜 건강 관리 습관이 꾸준한지를 봅니다.',
      concepts: [
        { label: '규칙적인 운동', words: ['운동', '러닝', '헬스', '걷기', '주 '], hint: '구체적인 운동 횟수를 말하세요.' },
        { label: '수면·식습관', words: ['수면', '식습관', '식사', '생활 패턴', '규칙적'], hint: '수면과 식습관 관리를 말하세요.' },
        { label: '교대근무 대비', words: ['교대', '야간', '불규칙', '적응'], hint: '교대·야간 근무에 대한 대비를 말하세요.' },
        { label: '꾸준함·성과', words: ['꾸준', '년', '개월', '습관'], hint: '얼마나 꾸준히 했는지 말하세요.' }
      ],
      model: [
        '저는 2년째 주 3회 러닝과 근력 운동으로 체력을 관리하고 있습니다.',
        '운동 외에도 같은 시간에 자고 일어나는 규칙적인 수면과 식습관을 지키려 노력합니다.',
        '교대근무와 야간 근무는 생활 패턴이 불규칙하므로, 쉬는 날에는 수면 시간을 먼저 확보하며 적응하겠습니다.',
        '꾸준히 쌓은 습관으로 현장에서 건강하게 근무하겠습니다.'
      ],
      roles: ['운동', '습관', '교대', '다짐']
    },
    {
      id: 'c8', cat: '공통', q: '동료를 위해 희생했던 경험이 있다면 말해 보세요.',
      intent: '팀을 위해 자기 몫을 내어 준 행동과 그 결과, 배운 점을 구체적으로 보여 주는지를 봅니다.',
      concepts: [
        { label: '구체적 상황', words: ['당시', '팀', '프로젝트', '근무', '상황', '때'], hint: '언제 어떤 상황이었는지 구체적으로 말하세요.' },
        { label: '본인의 희생 행동', words: ['양보', '대신', '맡', '시간을 내', '제가'], hint: '내가 구체적으로 무엇을 포기했는지 말하세요.' },
        { label: '팀 결과', words: ['결과', '완료', '성과', '무사히', '마무리'], hint: '팀에 어떤 결과가 있었는지 말하세요.' },
        { label: '배운 점', words: ['배웠', '깨달', '느꼈', '의미'], hint: '배운 점으로 마무리하세요.' }
      ],
      model: [
        '팀 프로젝트 마감 전날 동료가 가족 일로 발표 준비를 못 하게 된 일이 있었습니다.',
        '저는 제 약속을 미루고 밤 늦게까지 동료 몫의 자료 정리를 대신 맡았습니다.',
        '그 결과 팀은 일정에 맞춰 무사히 발표를 마쳤고, 이후 동료도 제 일을 먼저 도와주게 되었습니다.',
        '이 경험을 통해 팀의 성과가 개인의 손해로 느껴지지 않는다는 점을 배웠고, 입사 후에도 같은 마음으로 협력하겠습니다.'
      ],
      roles: ['상황', '행동', '결과', '배움']
    },
    {
      id: 'c9', cat: '공통', q: '다른 철도 공기업에도 지원했다면, 두 곳 모두 합격했을 때 어디를 선택하시겠습니까?',
      intent: '지원 동기의 일관성과 진정성, 입사 의지를 봅니다. 거짓이나 모호한 답은 오히려 감점입니다.',
      concepts: [
        { label: '이 회사를 선택', words: ['선택', '이곳', '저는 여기', '이 회사', '9호선'], hint: '이 회사를 선택하겠다고 분명히 말하세요.' },
        { label: '구체적 이유', words: ['이유', '때문', '특성', '노선', '가치'], hint: '이 회사를 선택하는 구체적 이유를 말하세요.' },
        { label: '일관된 동기', words: ['일관', '처음부터', '지원 동기', '준비'], hint: '지원 동기가 일관되었다는 점을 말하세요.' },
        { label: '입사 의지', words: ['하겠습니다', '입사', '최선', '기여'], hint: '입사 후 의지로 마무리하세요.' }
      ],
      model: [
        '저는 이곳을 선택하겠습니다.',
        '9호선은 급행과 일반이 함께 운행되어 정확한 안내와 안전 관리가 중요한 노선이고, 이것이 제 강점인 꼼꼼함과 가장 잘 맞는다고 생각했기 때문입니다.',
        '다른 곳에도 지원했지만 시민의 안전한 이동이라는 가치는 같았고, 그중 제 역량을 가장 잘 쓸 수 있는 곳이 이곳이라는 생각은 준비 과정 내내 일관되었습니다.',
        '입사한다면 최선을 다해 기여하겠습니다.'
      ],
      roles: ['선택', '이유', '일관성', '다짐']
    },
    {
      id: 'c10', cat: '공통', q: '상사나 선배로부터 부당한 업무 지시를 받는다면 어떻게 하시겠습니까?',
      intent: '규정·안전을 지키면서도 조직 내 소통 절차를 존중하는 판단력을 봅니다.',
      concepts: [
        { label: '규정·법규 확인', words: ['규정', '법규', '원칙', '확인', '기준'], hint: '먼저 규정과 법령에 맞는지 확인한다고 말하세요.' },
        { label: '정중한 의견 제시', words: ['정중', '말씀', '여쭤', '의견'], hint: '정중하게 이유를 묻고 의견을 말한다고 하세요.' },
        { label: '절차에 따른 보고', words: ['보고', '상위', '고충', '윤리', '담당 부서', '절차'], hint: '해결이 안 되면 절차(상위자·고충 채널)에 따라 보고한다고 하세요.' },
        { label: '안전·원칙 우선', words: ['안전', '우선', '위반'], hint: '안전·원칙을 우선한다고 말하세요.' }
      ],
      model: [
        '먼저 그 지시가 규정과 법규에 맞는지 기준을 확인하겠습니다.',
        '문제가 있어 보인다면 선배께 정중하게 이유를 여쭙고, 제 의견을 근거와 함께 말씀드리겠습니다.',
        '그래도 해결되지 않으면 임의로 판단하지 않고 상위 관리자나 고충·윤리 채널에 절차에 따라 보고하겠습니다.',
        '어떤 경우에도 안전과 원칙을 우선하며, 위반이 될 일은 하지 않겠습니다.'
      ],
      roles: ['확인', '의견', '보고', '원칙']
    },
    {
      id: 'c11', cat: '공통', q: '본인의 장점과 단점, 그리고 단점을 극복하기 위한 노력을 말해 보세요.',
      intent: '자기 객관화와 개선 노력, 직무 연결을 봅니다. 단점은 직무에 치명적이지 않은 것을 솔직하게 말합니다.',
      concepts: [
        { label: '장점 + 근거', words: ['장점', '강점', '꼼꼼', '책임', '성실'], hint: '장점과 근거를 말하세요.' },
        { label: '솔직한 단점', words: ['단점', '부족', '아쉬운', '약점', '신경 쓰'], hint: '직무에 치명적이지 않은 단점을 솔직히 말하세요.' },
        { label: '극복 노력(구체)', words: ['극복', '노력', '체크리스트', '습관', '개선', '방법'], hint: '단점을 줄이기 위한 구체적 노력을 말하세요.' },
        { label: '결과·직무 연결', words: ['결과', '효과', '업무', '직무', '입사'], hint: '결과나 업무 적용으로 마무리하세요.' }
      ],
      model: [
        '제 장점은 맡은 일을 끝까지 확인하는 꼼꼼함입니다.',
        '반대로 단점은 완벽하게 하려다 시간이 오래 걸리는 점입니다.',
        '이를 극복하기 위해 작업 전에 우선순위와 마감 기준을 정한 체크리스트를 쓰는 습관을 들였습니다.',
        '그 결과 정확성은 유지하면서 처리 시간을 줄일 수 있었고, 입사 후에도 같은 방식으로 업무를 효율적으로 처리하겠습니다.'
      ],
      roles: ['장점', '단점', '극복', '결과']
    }
  ];

  // ---------- 저장소 ----------
  const KEY = 'ncs9-iv';
  const DAY = 86400000, INTERVALS = [0, 1, 3, 7, 14, 30];
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  let st = { cards: {}, streak: { last: '', count: 0 }, xp: 0 };
  try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d) st = Object.assign(st, d); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const card = (id) => st.cards[id] || (st.cards[id] = { box: 0, due: 0, best: 0, last: 0, tries: 0, text: '' });
  const ymd = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  function touchStreak() {
    const t = ymd(new Date());
    if (st.streak.last === t) return;
    const y = ymd(new Date(Date.now() - DAY));
    st.streak.count = st.streak.last === y ? st.streak.count + 1 : 1;
    st.streak.last = t;
  }
  const isDue = (id) => { const c = st.cards[id]; return !c || c.tries === 0 ? false : c.due <= Date.now(); };

  // ---------- 채점 (규칙 기반) ----------
  function score(q, text, override) {
    const t = text.trim(), chars = t.replace(/\s+/g, '').length, sentences = t.split(/[.!?。\n]+/).map((x) => x.trim()).filter(Boolean);
    const hits = q.concepts.map((c, i) => (override && override.has(i)) || c.words.some((w) => t.includes(w)));
    const hitN = hits.filter(Boolean).length;
    const min = q.min || 120, max = q.max || 330;
    const parts = [];
    parts.push({ label: '핵심 내용', max: 45, score: Math.round(45 * hitN / q.concepts.length), note: hitN + ' / ' + q.concepts.length + '개 포함' });
    let lenScore = 15;
    if (chars < min) lenScore = Math.round(15 * chars / min);
    else if (chars > max) lenScore = Math.max(0, Math.round(15 * (1 - (chars - max) / max)));
    parts.push({ label: '분량', max: 15, score: lenScore, note: chars + '자 · 약 ' + Math.round(chars / 5.5) + '초 (권장 ' + min + '~' + max + '자)' });
    const specific = [/[0-9]+|[일이삼사오육칠팔구십]+\s*(년|개월|회|명|시간)/.test(t), /경험|근무|활동|당시|했을 때|때에는|아르바이트|프로젝트/.test(t), /결과|성과|감사|해결|줄였|높였|개선/.test(t)].filter(Boolean).length;
    parts.push({ label: '구체성', max: 15, score: specific * 5, note: specific + ' / 3 (수치·경험·결과)' });
    const structure = [sentences.length >= 3, /하겠습니다|노력|기여|다짐|하고 싶습니다|배우겠습니다/.test(t), /때문|이유|따라서|그래서|그러므로|반면|다만|그다음|이어서|먼저/.test(t)].filter(Boolean).length;
    parts.push({ label: '구조', max: 15, score: structure * 5, note: structure + ' / 3 (3문장↑ · 마무리 · 연결어)' });
    const bad = (t.match(/무조건|절대|어쩔 수 없|모르겠|상관없|대충|귀찮|그냥\b|ㅋㅋ|ㅎㅎ/g) || []).length;
    const polite = sentences.length ? sentences.filter((s) => /(니다|니까|요)$/.test(s)).length / sentences.length : 0;
    parts.push({ label: '말투', max: 10, score: Math.max(0, (polite >= 0.6 ? 10 : 5) - bad * 5), note: bad ? '피해야 할 표현 ' + bad + '개' : (polite >= 0.6 ? '정중한 말투' : '문장 끝을 ~습니다로') });
    const total = Math.min(100, parts.reduce((s, p) => s + p.score, 0));
    const tips = [];
    q.concepts.forEach((c, i) => { if (!hits[i]) tips.push(c.hint); });
    if (chars < min) tips.push('답변이 짧습니다. 사례나 근거를 한 문장 더 넣어 보세요.');
    if (chars > max) tips.push('답변이 깁니다. 면접은 30~40초 안에 간결하게 말하는 것이 권장됩니다.');
    if (specific < 2) tips.push('수치나 구체적 경험·결과를 넣으면 설득력이 올라갑니다.');
    if (structure < 3) tips.push('"결론 → 근거 → 마무리 다짐" 순서로 3문장 이상 구성해 보세요.');
    if (bad) tips.push('단정적이거나 가벼운 표현("무조건", "그냥" 등)은 피하세요.');
    return { total, parts, hits, tips, chars };
  }

  // ---------- 화면: 목록 ----------
  let filter = 'all';
  function render() {
    const root = $('iv-root'); if (!root) return;
    const due = QS.filter((q) => isDue(q.id)).length;
    const done = QS.filter((q) => (st.cards[q.id] || {}).tries > 0).length;
    const best = QS.map((q) => (st.cards[q.id] || {}).best || 0).filter(Boolean);
    const avg = best.length ? Math.round(best.reduce((a, b) => a + b, 0) / best.length) : 0;
    const list = QS.filter((q) => filter === 'all' || (filter === 'due' ? isDue(q.id) : q.cat === filter));
    const chip = (k, t) => '<button onclick="IV.setFilter(\'' + k + '\')" class="px-3 py-1.5 rounded-full text-xs font-semibold border ' + (filter === k ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-900 text-slate-300 border-slate-700') + '">' + t + '</button>';
    root.innerHTML =
      '<div class="bg-gradient-to-r from-slate-900 via-slate-800 to-violet-950/40 border border-violet-500/30 rounded-2xl p-5">' +
      '<h2 class="text-xl font-bold text-white flex items-center space-x-2"><i data-lucide="mic" class="w-6 h-6 text-violet-300"></i><span>면접 연습</span></h2>' +
      '<p class="text-xs text-slate-300 mt-1">합격 후기의 기출질문(사무·공통 ' + QS.length + '개)을 카드로 학습하고, 직접 답변을 써서 채점받으세요. 답변은 30~40초 이내가 권장됩니다.</p>' +
      '<div class="grid grid-cols-4 gap-2 mt-4 text-center">' +
      '<div class="bg-slate-950/70 rounded-xl p-2 border border-slate-800"><div class="text-[11px] text-slate-400">연속 학습</div><div class="font-bold text-amber-300">' + (st.streak.last === ymd(new Date()) || st.streak.last === ymd(new Date(Date.now() - DAY)) ? st.streak.count : 0) + '일</div></div>' +
      '<div class="bg-slate-950/70 rounded-xl p-2 border border-slate-800"><div class="text-[11px] text-slate-400">오늘 복습</div><div class="font-bold text-rose-300">' + due + '개</div></div>' +
      '<div class="bg-slate-950/70 rounded-xl p-2 border border-slate-800"><div class="text-[11px] text-slate-400">완료</div><div class="font-bold text-white">' + done + '/' + QS.length + '</div></div>' +
      '<div class="bg-slate-950/70 rounded-xl p-2 border border-slate-800"><div class="text-[11px] text-slate-400">평균 점수</div><div class="font-bold text-emerald-300">' + (avg || '-') + '</div></div></div>' +
      '<div class="flex flex-wrap gap-2 mt-4">' +
      '<button onclick="IV.startToday()" class="px-4 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-xl text-sm flex items-center space-x-2"><i data-lucide="play" class="w-4 h-4"></i><span>' + (due ? '오늘 복습 ' + due + '개 시작' : '새 카드로 학습 시작') + '</span></button>' +
      '<button onclick="IV.startRandom()" class="px-4 py-2.5 bg-slate-800 border border-slate-700 text-slate-100 font-bold rounded-xl text-sm">랜덤 질문 연습</button></div></div>' +
      '<div class="flex flex-wrap gap-2">' + chip('all', '전체') + chip('사무', '사무직') + chip('공통', '공통') + chip('due', '복습 필요') + '</div>' +
      '<div class="space-y-3">' + (list.length ? list.map((q) => {
        const c = st.cards[q.id] || {}, d = isDue(q.id);
        const dots = Array.from({ length: 5 }, (_, i) => '<span class="w-1.5 h-1.5 rounded-full ' + (i < (c.box || 0) ? 'bg-violet-400' : 'bg-slate-700') + ' inline-block"></span>').join('');
        return '<div class="bg-slate-900 border ' + (d ? 'border-rose-500/50' : 'border-slate-800') + ' rounded-xl p-4">' +
          '<div class="flex items-center justify-between text-[11px] mb-2"><span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">' + q.cat + '</span><span class="flex items-center space-x-1">' + dots + (d ? '<span class="ml-2 text-rose-300 font-semibold">복습</span>' : '') + '</span></div>' +
          '<p class="text-sm font-semibold text-white leading-snug">' + esc(q.q) + '</p>' +
          '<div class="flex items-center justify-between mt-3"><span class="text-xs text-slate-400">' + (c.tries ? '최고 ' + c.best + '점 · ' + c.tries + '회' : '아직 연습 전') + '</span>' +
          '<span class="space-x-2"><button onclick="IV.open(\'' + q.id + '\',0)" class="px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg">학습</button>' +
          '<button onclick="IV.open(\'' + q.id + '\',3)" class="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-100 text-xs font-bold rounded-lg">바로 답변</button></span></div></div>';
      }).join('') : '<div class="text-center text-sm text-slate-400 py-8">해당하는 질문이 없습니다.</div>') + '</div>' +
      '<p class="text-[11px] text-slate-500 leading-relaxed">※ 채점은 키워드·분량·구조를 보는 규칙 기반이라 참고용입니다. 표현이 달라도 개념을 말했다면 결과 화면에서 직접 체크해 점수에 반영할 수 있어요. 추천 답변은 예시이므로 본인의 실제 경험으로 바꿔 말하세요.</p>';
    if (window.lucide) lucide.createIcons();
  }

  // ---------- 화면: 학습 모달 ----------
  let cur = null;
  const STEPS = ['이해', '따라 읽기', '빈칸', '말해보기'];
  function open(id, step, queue) {
    const q = QS.find((x) => x.id === id);
    cur = { q, step: step || 0, shown: 1, cloze: null, picked: {}, text: (st.cards[id] || {}).text || '', res: null, override: new Set(), showModel: false, ai: null, queue: queue || [] };
    touchStreak(); save();
    const m = $('iv-modal'); m.classList.remove('hidden'); document.body.style.overflow = 'hidden';
    draw();
  }
  function close() { stopMic(); const m = $('iv-modal'); m.classList.add('hidden'); document.body.style.overflow = ''; cur = null; render(); }
  function next() {
    if (cur.step < 3) { cur.step++; draw(); return; }
  }
  function advanceQueue() {
    const nid = cur.queue.shift();
    if (nid) { const q = cur.queue.slice(); open(nid, 0, q); } else close();
  }
  function bar() {
    return '<div class="flex items-center justify-between mb-3"><button onclick="IV.close()" class="text-slate-400 p-1"><i data-lucide="x" class="w-5 h-5"></i></button>' +
      '<div class="flex-1 mx-3 flex gap-1">' + STEPS.map((s, i) => '<div class="flex-1 h-1.5 rounded-full ' + (i < cur.step ? 'bg-violet-400' : i === cur.step ? 'bg-fuchsia-400' : 'bg-slate-700') + '"></div>').join('') + '</div>' +
      '<span class="text-xs text-slate-400">' + STEPS[cur.step] + '</span></div>' +
      '<div class="flex items-center space-x-2 mb-3"><span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">' + cur.q.cat + '</span></div>' +
      '<h3 class="text-lg font-bold text-white leading-snug mb-4">' + esc(cur.q.q) + '</h3>';
  }
  function shell(body, footer) {
    $('iv-modal').innerHTML = '<div class="max-w-2xl mx-auto px-4 pt-4 pb-28" style="padding-top:max(1rem,env(safe-area-inset-top))">' + bar() + body + '</div>' +
      '<div class="fixed bottom-0 inset-x-0 bg-slate-950/95 backdrop-blur border-t border-slate-800 px-4 py-3" style="padding-bottom:max(.75rem,env(safe-area-inset-bottom))"><div class="max-w-2xl mx-auto flex gap-2">' + footer + '</div></div>';
    if (window.lucide) lucide.createIcons();
  }
  const primary = (label, fn, dis) => '<button ' + (dis ? 'disabled' : '') + ' onclick="' + fn + '" class="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 disabled:opacity-40">' + label + '</button>';
  const ghost = (label, fn) => '<button onclick="' + fn + '" class="px-4 py-3 rounded-xl font-bold text-sm text-slate-200 bg-slate-800 border border-slate-700">' + label + '</button>';

  function draw() {
    if (!cur) return;
    ({ 0: stepUnderstand, 1: stepRead, 2: stepCloze, 3: stepSpeak }[cur.step])();
  }

  function stepUnderstand() {
    const q = cur.q;
    shell(
      '<div class="space-y-3">' +
      '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4"><div class="text-xs font-bold text-violet-300 mb-1">면접관은 이걸 봅니다</div><p class="text-sm text-slate-200 leading-relaxed">' + esc(q.intent) + '</p></div>' +
      '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4"><div class="text-xs font-bold text-amber-300 mb-2">답변에 꼭 들어갈 핵심 ' + q.concepts.length + '가지</div><div class="space-y-2">' +
      q.concepts.map((c, i) => '<div class="flex items-start space-x-2 text-sm text-slate-200"><span class="w-5 h-5 shrink-0 rounded-full bg-violet-500/20 text-violet-300 text-xs flex items-center justify-center font-bold">' + (i + 1) + '</span><span><b>' + esc(c.label) + '</b><br><span class="text-xs text-slate-400">' + esc(c.hint) + '</span></span></div>').join('') + '</div></div>' +
      '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 leading-relaxed"><b class="text-rose-300">이렇게 말하면 감점</b><br>· "무조건", "절대", "그냥" 같은 단정·가벼운 표현<br>· 근거 없이 "열심히 하겠습니다"만 반복<br>· 40초를 훌쩍 넘는 장황한 답변</div>' +
      (q.caution ? '<div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200">⚠️ ' + esc(q.caution) + '</div>' : '') + '</div>',
      ghost('건너뛰기', 'IV.go(3)') + primary('다음: 추천 답변 읽기', 'IV.next()'));
  }

  function stepRead() {
    const q = cur.q, n = cur.shown;
    shell(
      '<p class="text-xs text-slate-400 mb-3">추천 답변을 한 문장씩 열어 소리 내어 따라 읽어 보세요. 🔊를 누르면 들을 수 있어요. (예시이므로 본인 경험으로 바꿔 말하세요)</p><div class="space-y-2">' +
      q.model.map((s, i) => i < n
        ? '<div class="bg-slate-900 border border-violet-500/30 rounded-xl p-3"><div class="flex items-center justify-between mb-1"><span class="text-[11px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-200">' + esc(q.roles[i]) + '</span><button onclick="IV.speak(' + i + ')" class="text-slate-400 text-sm">🔊</button></div><p class="text-sm text-white leading-relaxed">' + esc(s) + '</p></div>'
        : '<div class="bg-slate-900/50 border border-dashed border-slate-700 rounded-xl p-3 text-center text-xs text-slate-500">' + esc(q.roles[i]) + ' · 눌러서 열기</div>').join('') + '</div>',
      (n < q.model.length ? primary('다음 문장 보기 (' + n + '/' + q.model.length + ')', 'IV.more()') : primary('다음: 빈칸 퀴즈', 'IV.next()')));
  }

  function makeCloze(q) {
    // 온전한 명사형 단어만 빈칸/보기로 쓴다 (어간·조각 제외)
    const clean = (w) => /^[가-힣A-Za-z0-9]{2,}$/.test(w) && !/(하|었|했|들|냈|렸|운|은|는|을|를|며|고|서)$/.test(w);
    const pool = [].concat.apply([], QS.map((x) => [].concat.apply([], x.concepts.map((c) => c.words)))).filter(clean);
    const items = [];
    q.model.forEach((s, i) => { for (const c of q.concepts) { const w = c.words.find((w) => clean(w) && s.includes(w)); if (w) { items.push({ i, s, w }); break; } } });
    return shuffle(items).slice(0, 3).map((it) => {
      const wrong = shuffle([...new Set(pool.filter((w) => w !== it.w && !it.s.includes(w) && !it.w.includes(w) && !w.includes(it.w)))]).slice(0, 2);
      return { text: it.s.replace(it.w, '＿＿＿＿'), ans: it.w, opts: shuffle([it.w, ...wrong]) };
    });
  }
  function stepCloze() {
    if (!cur.cloze) cur.cloze = makeCloze(cur.q);
    const body = '<p class="text-xs text-slate-400 mb-3">빈칸에 들어갈 말을 골라 보세요.</p><div class="space-y-4">' +
      cur.cloze.map((c, i) => {
        const p = cur.picked[i];
        return '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4"><p class="text-sm text-white leading-relaxed mb-3">' + esc(c.text) + '</p><div class="flex flex-wrap gap-2">' +
          c.opts.map((o) => {
            let cls = 'bg-slate-950 border-slate-700 text-slate-200';
            if (p !== undefined) { if (o === c.ans) cls = 'bg-emerald-500/20 border-emerald-500 text-emerald-300'; else if (o === p) cls = 'bg-rose-500/20 border-rose-500 text-rose-300'; }
            return '<button ' + (p !== undefined ? 'disabled' : '') + ' onclick="IV.pick(' + i + ',\'' + esc(o).replace(/'/g, '') + '\')" class="px-3 py-2 rounded-lg border text-sm font-semibold ' + cls + '">' + esc(o) + '</button>';
          }).join('') + '</div></div>';
      }).join('') + '</div>';
    const done = cur.cloze.every((_, i) => cur.picked[i] !== undefined);
    shell(cur.cloze.length ? body : '<p class="text-sm text-slate-400">이 질문은 빈칸 퀴즈가 없습니다.</p>', primary(done || !cur.cloze.length ? '다음: 말해보기' : '모두 고르면 다음으로', 'IV.next()', !(done || !cur.cloze.length)));
  }

  // ---------- 말해보기 / 채점 ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recog = null, micOn = false;
  function stopMic() { try { if (recog) recog.stop(); } catch (e) {} micOn = false; }
  function toggleMic() {
    if (!SR) return;
    if (micOn) { stopMic(); updateMicBtn(); return; }
    recog = new SR(); recog.lang = 'ko-KR'; recog.continuous = true; recog.interimResults = false;
    recog.onresult = (e) => {
      let add = ''; for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) add += e.results[i][0].transcript + ' ';
      const ta = $('iv-text'); if (ta) { ta.value = (ta.value + ' ' + add).trim(); onInput(); }
    };
    recog.onend = () => { micOn = false; updateMicBtn(); };
    recog.onerror = () => { micOn = false; updateMicBtn(); };
    try { recog.start(); micOn = true; } catch (e) { micOn = false; }
    updateMicBtn();
  }
  function updateMicBtn() { const b = $('iv-mic'); if (b) { b.textContent = micOn ? '⏹ 듣는 중… (누르면 정지)' : '🎤 음성으로 말하기'; b.className = 'px-3 py-2 rounded-lg text-xs font-bold border ' + (micOn ? 'bg-rose-500/20 border-rose-500 text-rose-300' : 'bg-slate-800 border-slate-700 text-slate-200'); } }
  function onInput() {
    const ta = $('iv-text'); if (!ta) return; cur.text = ta.value;
    const chars = ta.value.replace(/\s+/g, '').length, q = cur.q, min = q.min || 120, max = q.max || 330;
    const el = $('iv-count'); if (el) { el.textContent = chars + '자 · 약 ' + Math.round(chars / 5.5) + '초'; el.className = 'text-xs ' + (chars > max ? 'text-rose-300' : chars >= min ? 'text-emerald-300' : 'text-slate-400'); }
    const btn = $('iv-submit'); if (btn) btn.disabled = chars < 20;
  }
  function stepSpeak() {
    const q = cur.q;
    if (cur.res) return drawResult();
    shell(
      '<p class="text-xs text-slate-400 mb-2">실제 면접처럼 <b class="text-slate-200">30~40초</b> 안에 말한다고 생각하고 답변을 적거나 음성으로 말해 보세요. (권장 ' + (q.min || 120) + '~' + (q.max || 330) + '자)</p>' +
      '<textarea id="iv-text" oninput="IV.input()" rows="8" placeholder="결론 → 근거(경험) → 마무리 다짐 순서로 말해 보세요." class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-violet-400 leading-relaxed">' + esc(cur.text) + '</textarea>' +
      '<div class="flex items-center justify-between mt-2"><span id="iv-count" class="text-xs text-slate-400">0자</span>' + (SR ? '<button id="iv-mic" onclick="IV.mic()" class="px-3 py-2 rounded-lg text-xs font-bold border bg-slate-800 border-slate-700 text-slate-200">🎤 음성으로 말하기</button>' : '<span class="text-[11px] text-slate-500">이 브라우저는 음성 입력을 지원하지 않아요</span>') + '</div>',
      ghost('추천 답변 보기', 'IV.peek()') + '<button id="iv-submit" disabled onclick="IV.submit()" class="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 disabled:opacity-40">제출하고 채점받기</button>');
    onInput();
  }
  function peek() {
    cur.showModel = !cur.showModel;
    const box = $('iv-peek');
    if (box) { box.remove(); return; }
    const d = document.createElement('div'); d.id = 'iv-peek'; d.className = 'mt-4 bg-slate-900 border border-violet-500/30 rounded-xl p-4 text-sm text-slate-200 leading-relaxed space-y-2';
    d.innerHTML = '<div class="text-xs font-bold text-violet-300">추천 답변 (예시)</div>' + cur.q.model.map((s) => '<p>' + esc(s) + '</p>').join('');
    $('iv-modal').querySelector('.pb-28').appendChild(d);
  }
  function submit() {
    stopMic();
    const ta = $('iv-text'); cur.text = ta.value;
    cur.override = new Set(); cur.res = score(cur.q, cur.text, cur.override);
    record(); drawResult();
  }
  function record() {
    const c = card(cur.q.id), s = cur.res.total, prev = c.box;
    c.tries++; c.last = s; c.best = Math.max(c.best, s); c.text = cur.text;
    c.box = s >= 80 ? Math.min(5, prev + 1) : s >= 60 ? Math.max(1, prev) : Math.max(1, prev - 1);
    c.due = Date.now() + INTERVALS[c.box] * DAY; st.xp += Math.round(s / 10);
    touchStreak(); save();
  }
  function recompute() { cur.res = score(cur.q, cur.text, cur.override); const c = card(cur.q.id); c.last = cur.res.total; c.best = Math.max(c.best, c.last); save(); drawResult(); }
  function toggleConcept(i) { if (cur.override.has(i)) cur.override.delete(i); else cur.override.add(i); recompute(); }

  function drawResult() {
    const r = cur.res, q = cur.q, c = card(q.id);
    const color = r.total >= 80 ? 'text-emerald-300' : r.total >= 60 ? 'text-amber-300' : 'text-rose-300';
    const msg = r.total >= 80 ? '좋아요! 내일 다시 복습 간격이 늘어나요.' : r.total >= 60 ? '괜찮아요. 빠진 핵심을 채워 다시 도전해 보세요.' : '핵심 개념부터 다시 채워 볼까요? 곧 다시 복습 목록에 올라와요.';
    const body =
      '<div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center"><div class="text-xs text-slate-400">채점 결과 (규칙 기반)</div><div class="text-5xl font-black ' + color + ' my-1">' + r.total + '<span class="text-lg">점</span></div><div class="text-xs text-slate-300">' + msg + '</div></div>' +
      '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4 mt-3 space-y-2">' + r.parts.map((p) => '<div><div class="flex justify-between text-xs mb-1"><span class="text-slate-200 font-semibold">' + p.label + '</span><span class="text-slate-400">' + p.score + '/' + p.max + ' · ' + esc(p.note) + '</span></div><div class="h-1.5 bg-slate-800 rounded-full overflow-hidden"><div class="h-full bg-violet-400" style="width:' + Math.round(p.score / p.max * 100) + '%"></div></div></div>').join('') + '</div>' +
      '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4 mt-3"><div class="text-xs font-bold text-amber-300 mb-2">핵심 개념 체크 <span class="text-slate-500 font-normal">(표현이 달라도 말했다면 눌러서 체크)</span></div><div class="space-y-2">' +
      q.concepts.map((cc, i) => '<button onclick="IV.toggle(' + i + ')" class="w-full text-left flex items-center space-x-2 text-sm ' + (r.hits[i] ? 'text-emerald-300' : 'text-slate-300') + '"><span class="w-5 h-5 rounded-full border flex items-center justify-center text-xs ' + (r.hits[i] ? 'bg-emerald-500/20 border-emerald-500' : 'border-slate-600') + '">' + (r.hits[i] ? '✓' : '') + '</span><span>' + esc(cc.label) + (cur.override.has(i) ? ' <span class="text-[11px] text-slate-500">(직접 체크)</span>' : '') + '</span></button>').join('') + '</div></div>' +
      (r.tips.length ? '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4 mt-3 text-sm text-slate-200 space-y-1"><div class="text-xs font-bold text-rose-300 mb-1">이렇게 보완해 보세요</div>' + r.tips.map((t) => '<p>· ' + esc(t) + '</p>').join('') + '</div>' : '<div class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 mt-3 text-sm text-emerald-200">핵심, 분량, 구조 모두 좋습니다.</div>') +
      '<div class="bg-slate-900 border border-violet-500/30 rounded-xl p-4 mt-3 text-sm text-slate-200 leading-relaxed space-y-2"><div class="text-xs font-bold text-violet-300">추천 답변 (예시 · 본인 경험으로 바꿔 말하세요)</div>' + q.model.map((s, i) => '<p><span class="text-[11px] px-1.5 py-0.5 mr-1 rounded bg-violet-500/20 text-violet-200">' + esc(q.roles[i]) + '</span>' + esc(s) + '</p>').join('') + '</div>' +
      '<div class="bg-slate-900 border border-slate-800 rounded-xl p-4 mt-3"><div class="text-xs font-bold text-slate-300 mb-1">내 답변</div><p class="text-sm text-slate-300 whitespace-pre-line leading-relaxed">' + esc(cur.text) + '</p></div>' +
      '<div id="iv-ai" class="mt-3">' + aiHtml() + '</div>';
    shell(body, ghost('다시 쓰기', 'IV.retry()') + (cur.queue.length ? primary('다음 카드 (' + cur.queue.length + '개 남음)', 'IV.nextCard()') : primary('완료', 'IV.close()')));
  }
  function aiHtml() {
    if (cur.ai && cur.ai.loading) return '<div class="text-center text-xs text-slate-400 py-3">Gemini가 평가하는 중…</div>';
    if (cur.ai && cur.ai.error) return '<div class="text-xs text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-xl p-3">' + esc(cur.ai.error) + '</div>';
    if (cur.ai && cur.ai.data) {
      const d = cur.ai.data;
      return '<div class="bg-slate-900 border border-fuchsia-500/30 rounded-xl p-4 text-sm text-slate-200 space-y-2"><div class="text-xs font-bold text-fuchsia-300">AI 평가 (Gemini) · ' + esc(d.score) + '점</div><p>' + esc(d.summary || '') + '</p>' +
        (d.strengths && d.strengths.length ? '<p class="text-emerald-300 text-xs">👍 ' + d.strengths.map(esc).join(' / ') + '</p>' : '') +
        (d.improvements && d.improvements.length ? '<p class="text-amber-300 text-xs">🔧 ' + d.improvements.map(esc).join(' / ') + '</p>' : '') +
        (d.better ? '<p class="text-xs text-slate-300 border-t border-slate-800 pt-2">✍️ 개선 예시: ' + esc(d.better) + '</p>' : '') + '</div>';
    }
    const hasKey = window.app && app.getApiKey && app.getApiKey();
    return hasKey ? '<button onclick="IV.ai()" class="w-full py-2.5 rounded-xl text-sm font-bold bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-200">✨ AI(Gemini)로 더 자세히 평가받기</button>' :
      '<div class="text-[11px] text-slate-500 text-center">AI 평가: [AI생성] 탭에서 Gemini API Key를 저장하면 이 버튼이 나타납니다.</div>';
  }
  async function aiEval() {
    const key = app.getApiKey(); if (!key) return;
    cur.ai = { loading: true }; $('iv-ai').innerHTML = aiHtml();
    const prompt = '당신은 공기업(도시철도) 면접관입니다. 아래 질문에 대한 지원자의 답변을 평가하세요.\n질문: ' + cur.q.q + '\n평가 의도: ' + cur.q.intent + '\n핵심 포함 요소: ' + cur.q.concepts.map((c) => c.label).join(', ') + '\n지원자 답변: ' + cur.text +
      '\n\n100점 만점으로 채점하고 JSON으로만 답하세요. 형식: {"score":정수,"summary":"한 줄 총평","strengths":["..."],"improvements":["..."],"better":"40초 분량의 개선 답변 예시"}';
    try {
      const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + encodeURIComponent(key), {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json' } })
      });
      const j = await res.json();
      const txt = j.candidates && j.candidates[0] && j.candidates[0].content.parts[0].text;
      if (!txt) throw new Error((j.error && j.error.message) || '응답 형식 오류');
      cur.ai = { data: JSON.parse(txt) };
    } catch (e) { cur.ai = { error: 'AI 평가에 실패했습니다: ' + e.message }; }
    if ($('iv-ai')) $('iv-ai').innerHTML = aiHtml();
  }

  // ---------- 공개 API ----------
  const speak = (i) => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(cur.q.model[i]); u.lang = 'ko-KR'; speechSynthesis.speak(u); } catch (e) {} };
  window.IV = {
    render, close, open: (id, step) => open(id, step), next, go: (s) => { cur.step = s; draw(); },
    more: () => { cur.shown = Math.min(cur.q.model.length, cur.shown + 1); draw(); },
    pick: (i, o) => { cur.picked[i] = o; draw(); }, speak, input: onInput, mic: toggleMic, peek, submit,
    toggle: toggleConcept, retry: () => { cur.res = null; cur.ai = null; cur.step = 3; draw(); }, ai: aiEval,
    nextCard: advanceQueue, setFilter: (f) => { filter = f; render(); },
    startToday: () => {
      const due = QS.filter((q) => isDue(q.id)).map((q) => q.id);
      const fresh = shuffle(QS.filter((q) => !(st.cards[q.id] || {}).tries)).map((q) => q.id);
      const ids = (due.length ? due : fresh).slice(0, 5);
      if (!ids.length) { open(shuffle(QS)[0].id, 3, []); return; }
      open(ids[0], 0, ids.slice(1));
    },
    startRandom: () => { const ids = shuffle(QS).map((q) => q.id); open(ids[0], 3, ids.slice(1, 3)); }
  };
})();
