import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const values = [
  {
    icon: 'Target',
    title: 'Ориентация на результат',
    description: 'Каждое наше решение направлено на достижение конкретных бизнес-целей клиента.',
  },
  {
    icon: 'Shield',
    title: 'Надежность',
    description: 'Гарантируем конфиденциальность и качество на всех этапах сотрудничества.',
  },
  {
    icon: 'Lightbulb',
    title: 'Инновационность',
    description: 'Применяем передовые методологии и актуальные практики ведущих компаний.',
  },
  {
    icon: 'Users',
    title: 'Партнерство',
    description: 'Работаем как единая команда с вашим бизнесом для достижения общих целей.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">О компании</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ПроКонсалт — ведущая консалтинговая компания, специализирующаяся на стратегическом 
            развитии бизнеса и оптимизации бизнес-процессов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Наша миссия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Создавать устойчивую ценность для наших клиентов через профессиональный анализ, 
                стратегическое планирование и эффективное внедрение решений. Мы помогаем бизнесу 
                адаптироваться к изменениям рынка и использовать возможности для роста.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Наш подход</h3>
              <p className="text-muted-foreground leading-relaxed">
                Индивидуальный подход к каждому клиенту, глубокое погружение в специфику бизнеса 
                и комплексный анализ позволяют нам разрабатывать решения, которые действительно 
                работают и приносят измеримые результаты.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Наши ценности</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
