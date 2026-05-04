export default function ServiceSection() {
  return (
    <section id="service" className="min-h-screen flex items-center px-6 py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">SERVICE</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            StayGrid가 제공하는 운영 지원
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              고객사 관리
            </h3>
            <p className="mt-4 text-gray-600">
              고객사별 서비스, 이용 금액, 세금계산서 발행, 입금 상태를
              체계적으로 관리합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              매물 리스트 관리
            </h3>
            <p className="mt-4 text-gray-600">
              운영 대상 매물의 기본 정보와 상태를 정리하여 관리 기준을
              명확하게 만듭니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              운영 프로세스 정리
            </h3>
            <p className="mt-4 text-gray-600">
              반복되는 업무를 흐름으로 정리하고, 누락 없이 처리할 수 있는
              관리 체계를 만듭니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              문의 데이터 수집
            </h3>
            <p className="mt-4 text-gray-600">
              홈페이지 문의를 설문으로 연결하여 필요한 정보를 수집하고,
              후속 상담과 서비스 제안에 활용합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}