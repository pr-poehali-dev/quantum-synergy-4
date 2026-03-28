export default function Featured() {
  const services = [
    {
      title: "Консультации на стыке психологии и эзотерики",
      description:
        "Глубокий разбор ситуации с точки зрения классических психологических подходов и тонких энергий. Помогаю увидеть картину целиком.",
    },
    {
      title: "Работа с блокировками",
      description:
        "Освобождаю от внутренних барьеров, страхов и ограничивающих убеждений. Целительные практики для восстановления свободного потока энергии.",
    },
    {
      title: "Медитации и практики познания себя",
      description:
        "Индивидуальные медитации для встречи с собой настоящим, раскрытия интуиции и обретения внутреннего покоя.",
    },
    {
      title: "Работа с мышлением и подсознанием",
      description:
        "Трансформирую негативные установки в ресурсные. Учимся управлять мыслями, чтобы они работали на вас.",
    },
    {
      title: "Целительные сеансы",
      description:
        "Гармонизация энергетического поля, восстановление баланса между телом, разумом и душой.",
    },
  ];

  return (
    <div id="about" className="bg-white">
      {/* О мне */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/97302f80-55d1-40cc-a9b7-5d2014e144c7/files/3caaaf2d-ec61-4f9d-8207-57a253265f3c.jpg"
            alt="Ольга Мюллер — энергокоуч"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">
            Кто я и чем могу быть полезна?
          </h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            Меня зовут Ольга Мюллер. Я — энергокоуч, проводник, специалист по
            самопознанию и духовный наставник.
          </p>
          <p className="text-neutral-600 mb-8 text-base lg:text-lg leading-relaxed">
            Мой путь — это синтез психологии и эзотерики, где логика встречается
            с интуицией. Я помогаю людям видеть глубинные причины проблем,
            работать с подсознанием и энергетическими блокировками.
            <br />
            <br />
            Вместе мы создаём пространство для честного диалога с собой, чтобы
            вы могли услышать свой внутренний голос и начать жить в потоке своей
            истинной силы.
          </p>
          <a
            href="#contact"
            className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
          >
            Записаться на консультацию
          </a>
        </div>
      </div>

      {/* Услуги */}
      <div className="px-6 py-16 lg:py-24 bg-neutral-50">
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
          Ваши шаги к внутренней гармонии
        </h2>
        <p className="text-neutral-500 uppercase tracking-wide text-sm mb-12">
          Услуги
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-neutral-200 p-8 hover:border-neutral-900 transition-colors duration-300"
            >
              <span className="text-neutral-400 text-sm mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Как проходит работа */}
      <div className="px-6 py-16 lg:py-24 bg-white">
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
          Ваш путь к себе
        </h2>
        <p className="text-neutral-500 uppercase tracking-wide text-sm mb-12">
          Как проходит работа
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Первая встреча",
              desc: "Знакомимся, обсуждаем ваш запрос и определяем ключевые точки для работы.",
            },
            {
              step: "02",
              title: "Индивидуальная программа",
              desc: "Подбираю практики и техники, которые подходят именно вам.",
            },
            {
              step: "03",
              title: "Глубинная работа",
              desc: "Сеансы, медитации, работа с подсознанием — шаг за шагом к трансформации.",
            },
            {
              step: "04",
              title: "Поддержка",
              desc: "Я всегда на связи, чтобы поддержать вас на пути изменений.",
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col gap-4">
              <span className="text-5xl font-bold text-neutral-200">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Отзывы */}
      <div className="px-6 py-16 lg:py-24 bg-neutral-50">
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
          Что говорят те, кто уже прошёл путь трансформации
        </h2>
        <p className="text-neutral-500 uppercase tracking-wide text-sm mb-12">
          Отзывы
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              text: "После работы с Ольгой я впервые за долгое время почувствовала лёгкость. Ушли страхи, которые мешали мне жить. Спасибо за поддержку и профессионализм!",
              name: "Анна",
              age: "34 года",
            },
            {
              text: "Ольга — настоящий проводник. Её сеансы помогли мне разобраться в себе и найти опору внутри. Очень рекомендую!",
              name: "Игорь",
              age: "29 лет",
            },
          ].map((review, i) => (
            <div key={i} className="border border-neutral-200 p-8">
              <p className="text-neutral-700 text-lg leading-relaxed mb-6 italic">
                «{review.text}»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-semibold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{review.name}</p>
                  <p className="text-neutral-500 text-sm">{review.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Форма записи */}
      <div id="contact" className="px-6 py-16 lg:py-24 bg-white">
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
          Готовы начать путь к себе?
        </h2>
        <p className="text-neutral-600 mb-10 text-base lg:text-lg max-w-xl">
          Оставьте заявку на консультацию — это первый шаг к переменам. Я
          свяжусь с вами в течение 24 часов.
        </p>
        <form className="flex flex-col gap-4 max-w-lg">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
          />
          <input
            type="text"
            placeholder="Телефон или e-mail"
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
          />
          <textarea
            placeholder="Ваш запрос (кратко)"
            rows={4}
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors duration-300 w-fit"
          >
            Записаться на консультацию
          </button>
        </form>
      </div>
    </div>
  );
}
