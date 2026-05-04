export default function WhySection() {
  return (
    <section id="why" className="min-h-screen flex items-center px-6 py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">WHY?</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            운영은 복잡하지만, 관리는 단순해야 합니다
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              흩어진 정보
            </h3>
            <p className="mt-4 text-gray-600">
              예약, 매물, 정산 정보가 여러 채널에 흩어져 있으면 확인과
              대응이 늦어집니다.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              반복되는 행정업무
            </h3>
            <p className="mt-4 text-gray-600">
              세금계산서, 청구, 입금 확인 같은 반복 업무는 체계적인 관리
              구조가 필요합니다.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              운영 기준 부재
            </h3>
            <p className="mt-4 text-gray-600">
              기준이 없으면 담당자마다 처리 방식이 달라지고, 운영 품질도
              흔들릴 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}