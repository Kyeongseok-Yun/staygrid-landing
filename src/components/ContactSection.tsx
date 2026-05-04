export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold text-blue-400">CONTACT</p>

        <h2 className="mt-3 text-3xl font-bold">
          숙박 운영 관리가 필요하신가요?
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          간단한 문의 정보를 남겨주시면, 운영 상황에 맞는 관리 방향을 함께
          검토하겠습니다.
        </p>

        <a
          href="https://forms.gle/example"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          문의 남기기
        </a>
      </div>
    </section>
  );
}