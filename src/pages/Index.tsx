import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c784aa03-ecb0-47b4-8f66-cec26a8b9340/files/039c4866-3010-42a0-9ab0-2284548bda68.jpg";
const TRICKS_IMG = "https://cdn.poehali.dev/projects/c784aa03-ecb0-47b4-8f66-cec26a8b9340/files/1f92a8c1-8a34-42e1-8c1a-f9f7d22f8615.jpg";
const BURNOUT_IMG = "https://cdn.poehali.dev/projects/c784aa03-ecb0-47b4-8f66-cec26a8b9340/files/54902a66-6004-4c06-81ef-072d12a8aa70.jpg";

const tricks = [
  {
    name: "Wheelie",
    description: "Езда на заднем колесе — базовый и самый узнаваемый трюк. Требует точного контроля газа, баланса и положения тела.",
    difficulty: "Средняя",
    icon: "TrendingUp",
  },
  {
    name: "Stoppie",
    description: "Торможение передним тормозом с подъёмом заднего колеса. Требует идеального чувства тормозного усилия.",
    difficulty: "Высокая",
    icon: "ArrowDownToLine",
  },
  {
    name: "Burnout",
    description: "Прокрутка заднего колеса на месте с выделением дыма. Зрелищный финал выступления.",
    difficulty: "Начальная",
    icon: "Flame",
  },
  {
    name: "Circle Wheelie",
    description: "Wheelie по кругу — комбинация баланса и управления рулём. Один из сложнейших элементов.",
    difficulty: "Экспертная",
    icon: "RotateCw",
  },
  {
    name: "Highchair",
    description: "Нога на руле во время wheelie. Элемент фристайла, демонстрирующий полный контроль над мотоциклом.",
    difficulty: "Высокая",
    icon: "UserCheck",
  },
  {
    name: "Switchback",
    description: "Разворот на 180° во время wheelie с переходом в обратное движение. Мастерское владение балансом.",
    difficulty: "Экспертная",
    icon: "Repeat",
  },
];

const difficultyColor: Record<string, string> = {
  "Начальная": "text-green-400",
  "Средняя": "text-yellow-400",
  "Высокая": "text-orange-400",
  "Экспертная": "text-red-400",
};

const timeline = [
  { year: "1970-е", text: "Первые трюки на мотоциклах в США — энтузиасты экспериментируют с wheelie и burnout на парковках" },
  { year: "1990-е", text: "Формирование субкультуры стант райдинга в Европе. Появление первых видеозаписей трюков" },
  { year: "2000-е", text: "Первые организованные соревнования — XDL Championship в США и European Stunt Riding Championship" },
  { year: "2010-е", text: "Взрывной рост популярности через социальные сети. Профессиональные райдеры становятся медиазвёздами" },
  { year: "2020-е", text: "Движение к официальному признанию. Создание федераций и унификация правил судейства" },
];

const equipment = [
  { name: "Шлем", desc: "Полнолицевой шлем с сертификацией ECE/DOT — основа защиты головы при падениях", icon: "HardHat" },
  { name: "Слайдеры", desc: "Защитные накладки на раму мотоцикла, предотвращающие серьёзные повреждения при падении", icon: "Shield" },
  { name: "Клетка", desc: "Стальная субрама (crash cage) — специальная конструкция для защиты мотоцикла и райдера", icon: "Box" },
  { name: "Экипировка", desc: "Мотоботы, наколенники, налокотники, черепаха — полный комплект защиты тела", icon: "ShieldCheck" },
  { name: "Ручной тормоз", desc: "Дополнительный задний тормоз на руле для точного контроля wheelie на задних углах", icon: "Grip" },
  { name: "Подготовка байка", desc: "Укороченная звезда, усиленная цепь, защита радиатора — тюнинг под стант", icon: "Wrench" },
];

const competitions = [
  { name: "XDL Championship", country: "США", desc: "Старейший и самый престижный чемпионат по стант райдингу в мире" },
  { name: "European Stunt Riding", country: "Европа", desc: "Объединённый европейский чемпионат с этапами в разных странах" },
  { name: "StuntGP", country: "Польша", desc: "Крупнейшее соревнование в Восточной Европе, собирающее топ-райдеров" },
  { name: "Ride of the Century", country: "США", desc: "Массовый фестиваль стант-культуры с показательными выступлениями" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-heading text-xl font-bold tracking-wider uppercase">
            Stunt<span className="text-primary">Ride</span>
          </span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#problem" className="hover:text-primary transition-colors">Проблема</a>
            <a href="#hypothesis" className="hover:text-primary transition-colors">Гипотеза</a>
            <a href="#history" className="hover:text-primary transition-colors">История</a>
            <a href="#tricks" className="hover:text-primary transition-colors">Трюки</a>
            <a href="#equipment" className="hover:text-primary transition-colors">Экипировка</a>
            <a href="#competitions" className="hover:text-primary transition-colors">Соревнования</a>
            <a href="#my-bike" className="hover:text-primary transition-colors">Мой байк</a>
            <a href="#conclusion" className="hover:text-primary transition-colors">Вывод</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Стант райдинг" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Исследовательский проект</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
              Стант Райдинг<br />
              <span className="text-gradient">как спорт</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              Мотоциклетный стант — дисциплина на стыке экстремального спорта,
              акробатики и инженерной мысли. Исследуем его путь к признанию.
            </p>
            <a href="#problem" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              <Icon name="ArrowDown" size={18} />
              К исследованию
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-primary font-medium text-sm uppercase tracking-widest">Раздел 01</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">Проблема</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Стант райдинг до сих пор не признан официальным видом спорта в большинстве стран мира. Райдеры тренируются без системной поддержки, единых правил судейства и безопасных площадок.</p>
                <p>Отсутствие официального статуса лишает спортсменов возможности получать финансирование, медицинское обеспечение и участвовать в регулируемых соревнованиях с чёткими критериями оценки.</p>
                <p>Как следствие — высокий уровень травматизма, негативное общественное восприятие и ассоциация стант райдинга с нелегальным уличным хулиганством, а не со спортивной дисциплиной.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img src={TRICKS_IMG} alt="Проблема стант райдинга" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Травматизм</div>
                  <div className="text-xs text-muted-foreground">Нет единых стандартов безопасности</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypothesis */}
      <section id="hypothesis" className="py-24 md:py-32 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img src={BURNOUT_IMG} alt="Гипотеза проекта" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Цель</div>
                  <div className="text-xs text-muted-foreground">Признание как вид спорта</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-primary font-medium text-sm uppercase tracking-widest">Раздел 02</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">Гипотеза</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Если разработать единую систему классификации трюков, критерии судейства и стандарты безопасности, стант райдинг может получить статус официальной спортивной дисциплины.</p>
                <p>Формализация правил и создание рейтинговой системы позволит организовать регулярные соревнования, привлечь спонсоров и обеспечить спортсменам профессиональную инфраструктуру.</p>
                <p>Признание стант райдинга спортом снизит травматизм за счёт обязательной экипировки, специализированных площадок и медицинского контроля — по аналогии с мотокроссом и фристайл-мотокроссом.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-primary">12+</div>
                  <div className="text-xs text-muted-foreground mt-1">Стран с соревнованиями</div>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Базовых элементов</div>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-primary">5</div>
                  <div className="text-xs text-muted-foreground mt-1">Категорий сложности</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Раздел 03</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">История развития</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">От парковочных экспериментов до мировых чемпионатов</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="font-heading text-3xl font-bold text-primary">{item.year}</div>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{item.text}</p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 md:hidden">
                  <div className="font-heading text-2xl font-bold text-primary">{item.year}</div>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{item.text}</p>
                </div>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "pl-8" : "pr-8"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tricks */}
      <section id="tricks" className="py-24 md:py-32 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Раздел 04</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">Трюки и техники</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Основные элементы стант райдинга — от базовых до экспертных</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tricks.map((trick) => (
              <div key={trick.name} className="group bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={trick.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">{trick.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{trick.description}</p>
                <div className="flex items-center gap-2">
                  <Icon name="Gauge" size={14} className="text-muted-foreground" />
                  <span className={`text-xs font-medium ${difficultyColor[trick.difficulty]}`}>{trick.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-primary font-medium text-sm uppercase tracking-widest">Раздел 05</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">Экипировка и подготовка</h2>
              <p className="text-muted-foreground leading-relaxed">
                Безопасность — ключевой аспект стант райдинга. Правильная экипировка и подготовка мотоцикла
                снижают риск серьёзных травм и позволяют райдеру сосредоточиться на технике.
              </p>
            </div>
            <div className="grid gap-4">
              {equipment.map((item) => (
                <div key={item.name} className="flex gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold uppercase mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section id="competitions" className="py-24 md:py-32 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Раздел 06</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">Соревнования</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Ключевые мировые чемпионаты по стант райдингу</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {competitions.map((comp, i) => (
              <div key={comp.name} className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-4xl font-bold text-primary/20">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{comp.country}</span>
                </div>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">{comp.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Bike */}
      <section id="my-bike" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Мой мотоцикл</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">Мой байк</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Здесь будет фото моего мотоцикла для стант райдинга</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl border-2 border-dashed border-primary/30 bg-card flex flex-col items-center justify-center gap-4 hover:border-primary/60 transition-colors">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="ImagePlus" size={36} className="text-primary" />
              </div>
              <div className="text-center">
                <p className="font-heading text-lg font-semibold uppercase text-foreground">Место для фото мотоцикла</p>
                <p className="text-sm text-muted-foreground mt-1">Добавь фото своего байка сюда</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-24 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Заключение</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">Вывод</h2>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-12">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Проведённое исследование подтверждает: стант райдинг обладает всеми признаками
                полноценной спортивной дисциплины — системой трюков с градацией сложности,
                развитой соревновательной инфраструктурой и растущим мировым сообществом.
              </p>
              <p>
                <span className="text-foreground font-medium">Гипотеза подтверждена частично.</span> Унификация правил и создание
                федераций уже происходит в ряде стран, однако для полного официального признания
                необходимы единые международные стандарты безопасности и судейства.
              </p>
              <p>
                Ключевой шаг — переход от восприятия стант райдинга как уличной субкультуры
                к его позиционированию как технического вида спорта с чёткой методологией
                подготовки, системой разрядов и обязательными требованиями к экипировке.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <Icon name="CheckCircle" size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Есть база</div>
                  <div className="text-xs text-muted-foreground mt-1">50+ трюков, система сложности, чемпионаты в 12+ странах</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <Icon name="Clock" size={20} className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">В процессе</div>
                  <div className="text-xs text-muted-foreground mt-1">Создание федераций, унификация правил судейства</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="Rocket" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Перспектива</div>
                  <div className="text-xs text-muted-foreground mt-1">Официальное признание и государственная поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-lg font-bold tracking-wider uppercase">
            Stunt<span className="text-primary">Ride</span>
          </span>
          <p className="text-sm text-muted-foreground">Исследовательский проект — Стант Райдинг как спорт, 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
