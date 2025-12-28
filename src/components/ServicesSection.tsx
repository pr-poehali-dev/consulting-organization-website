import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'LineChart',
    title: 'Стратегический консалтинг',
    description: 'Разработка долгосрочной стратегии развития компании, анализ рынка и конкурентов, определение ключевых направлений роста.',
    features: ['Стратегическое планирование', 'Анализ рынка', 'Конкурентный анализ'],
  },
  {
    icon: 'Settings',
    title: 'Оптимизация процессов',
    description: 'Анализ и улучшение бизнес-процессов, повышение операционной эффективности, автоматизация и цифровизация.',
    features: ['Процессный анализ', 'Lean-методология', 'Цифровизация'],
  },
  {
    icon: 'Users',
    title: 'HR-консалтинг',
    description: 'Разработка HR-стратегии, системы мотивации и развития персонала, оценка эффективности сотрудников.',
    features: ['HR-стратегия', 'Система мотивации', 'Обучение персонала'],
  },
  {
    icon: 'DollarSign',
    title: 'Финансовый консалтинг',
    description: 'Финансовое моделирование, бюджетирование, управление рисками, оптимизация налогообложения.',
    features: ['Финансовое планирование', 'Управление рисками', 'Налоговая оптимизация'],
  },
  {
    icon: 'TrendingUp',
    title: 'Управление изменениями',
    description: 'Сопровождение организационных трансформаций, управление проектами, внедрение изменений.',
    features: ['Change Management', 'Управление проектами', 'Обучение команд'],
  },
  {
    icon: 'BarChart',
    title: 'Аналитика и исследования',
    description: 'Маркетинговые исследования, анализ данных, бизнес-аналитика и прогнозирование.',
    features: ['Маркетинговые исследования', 'Big Data', 'Прогнозирование'],
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексные консалтинговые решения для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" size={16} className="text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
            Обсудить проект
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
