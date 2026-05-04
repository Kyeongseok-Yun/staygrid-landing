export default function HeroSection() {
  return (
    <section
    id="hero"
    className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50 pt-24"
    >
      <h1 className="text-5xl font-bold text-gray-900">
        StayGrid
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        복잡한 숙소 관리, 하나의 그리드(Grid)로 완성하다
        <br />
        Connect the Stays, Control the Grid
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          문의하기
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded-lg">
          서비스 알아보기
        </button>
      </div>
    </section>
  );
}