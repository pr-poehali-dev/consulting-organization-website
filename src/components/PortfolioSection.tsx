import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const projects = [
  {
    company: 'ТехКорп',
    industry: 'Производство',
    title: 'Оптимизация производственных процессов',
    description: 'Сократили время производственного цикла на 35% и снизили издержки на 20% за счет внедрения Lean-методологии.',
    results: ['Рост производительности +35%', 'Снижение издержек -20%', 'ROI за 8 месяцев'],
    icon: 'Factory',
  },
  {
    company: 'РетейлПлюс',
    industry: 'Ритейл',
    title: 'Стратегия цифровой трансформации',
    description: 'Разработали и внедрили омниканальную стратегию продаж, увеличившую онлайн-выручку на 150%.',
    results: ['Онлайн-продажи +150%', 'NPS вырос до 78%', 'Новые каналы продаж'],
    icon: 'ShoppingCart',
  },
  {
    company: 'ФинансГрупп',
    industry: 'Финансы',
    title: 'Реструктуризация бизнеса',
    description: 'Оптимизировали организационную структуру и бизнес-процессы, что привело к росту операционной прибыли на 40%.',
    results: ['EBITDA +40%', 'Сокращение издержек 25%', 'Ускорение процессов в 2 раза'],
    icon: 'TrendingUp',
  },
  {
    company: 'МедТех',
    industry: 'Медицина',
    title: 'HR-трансформация и корпоративная культура',
    description: 'Создали систему управления талантами и программу развития лидерства, снизив текучесть персонала на 50%.',
    results: ['Текучесть кадров -50%', 'Engagement +60%', 'Time to hire -40%'],
    icon: 'Heart',
  },
  {
    company: 'ЛогистикПро',
    industry: 'Логистика',
    title: 'Автоматизация и цифровизация',
    description: 'Внедрили интегрированную систему управления складом и транспортом, повысив эффективность на 45%.',
    results: ['Эффективность +45%', 'Ошибки -70%', 'Прозрачность 100%'],
    icon: 'Truck',
  },
  {
    company: 'ЭкоЭнерго',
    industry: 'Энергетика',
    title: 'Стратегия устойчивого развития',
    description: 'Разработали ESG-стратегию и дорожную карту перехода к зеленой энергетике на период до 2030 года.',
    results: ['CO₂ снижение -30%', 'Зеленая энергия 40%', 'ESG рейтинг A+'],
    icon: 'Leaf',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Портфолио</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Успешные проекты, реализованные для компаний различных отраслей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name={project.icon as any} size={24} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.industry}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{project.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary mb-2">Ключевые результаты:</p>
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={14} className="text-accent flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
