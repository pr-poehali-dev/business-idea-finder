import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const benefits = [
    {
      icon: "Sparkles",
      title: "ИИ-анализ рынка",
      description: "Искусственный интеллект анализирует тысячи ниш и находит скрытые возможности"
    },
    {
      icon: "TrendingUp",
      title: "Актуальные тренды",
      description: "Отслеживаем новые направления и перспективные идеи в режиме реального времени"
    },
    {
      icon: "Target",
      title: "Персональный подбор",
      description: "Учитываем ваши навыки, интересы и бюджет для точных рекомендаций"
    },
    {
      icon: "Shield",
      title: "Проверенные данные",
      description: "Все идеи основаны на реальной статистике и анализе успешных кейсов"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Расскажите о себе",
      description: "Заполните короткую анкету о ваших интересах, навыках и целях"
    },
    {
      number: "02",
      title: "Получите подборку",
      description: "ИИ проанализирует данные и подберёт топ-10 идей специально для вас"
    },
    {
      number: "03",
      title: "Изучите детали",
      description: "Каждая идея с анализом конкурентов, стартовым бюджетом и прогнозом"
    },
    {
      number: "04",
      title: "Запускайте бизнес",
      description: "Получите пошаговый план действий и начните зарабатывать"
    }
  ];

  const plans = [
    {
      name: "Старт",
      price: "1 990",
      period: "разовый доступ",
      features: [
        "5 персональных идей",
        "Базовый анализ рынка",
        "Оценка конкуренции",
        "Email поддержка"
      ],
      popular: false
    },
    {
      name: "Профи",
      price: "4 990",
      period: "в месяц",
      features: [
        "Безлимит идей",
        "Углублённый анализ",
        "Финансовые прогнозы",
        "Приоритетная поддержка",
        "Еженедельные обновления",
        "Доступ к закрытому чату"
      ],
      popular: true
    },
    {
      name: "Бизнес",
      price: "19 990",
      period: "в месяц",
      features: [
        "Всё из тарифа Профи",
        "Личный консультант",
        "Индивидуальные исследования",
        "Анализ вашего проекта",
        "Стратегия развития",
        "Видеоконсультации"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2D1B4E] to-[#1A1F2C]">
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                🚀 Найдём вашу идеальную нишу
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Бизнес-идеи на основе
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> ИИ-анализа</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Перестаньте гадать. Получите проверенные идеи для бизнеса с реальными данными, трендами и финансовыми прогнозами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover-scale">
                Найти идею сейчас
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-full">
                Смотреть примеры
                <Icon name="PlayCircle" size={20} />
              </Button>
            </div>
            <div className="pt-8 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-400" />
                <span>10 000+ идей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-400" />
                <span>5 000+ пользователей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-400" />
                <span>ИИ-аналитика</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Современные технологии для поиска вашей идеальной бизнес-ниши
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover-scale group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Как это работает
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Четыре простых шага от анкеты до запуска бизнеса
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 transform -translate-x-1/2 hidden lg:block"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover-scale inline-block">
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Гибкие условия для любых целей и бюджета
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative overflow-hidden transition-all duration-300 hover-scale ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-purple-400 shadow-2xl scale-105' 
                    : 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-400/60'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">₽</span>
                  </div>
                  <p className={plan.popular ? "text-white/80 mt-1" : "text-gray-400 mt-1"}>{plan.period}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className={plan.popular ? "text-white mt-0.5" : "text-green-400 mt-0.5"} />
                      <span className={plan.popular ? "text-white" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full rounded-full py-6 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-white text-purple-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  }`}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы найти свою бизнес-идею?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам предпринимателей, которые уже нашли свою нишу
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-xl hover-scale font-bold">
              Начать сейчас бесплатно
              <Icon name="Rocket" size={20} />
            </Button>
          </Card>
        </div>
      </section>

      <footer className="px-4 py-12 border-t border-purple-500/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            © 2024 BizIdea Finder. Находим идеи, которые работают
          </p>
        </div>
      </footer>
    </div>
  );
}
