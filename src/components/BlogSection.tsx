import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const articles = [
  {
    title: '5 трендов стратегического менеджмента в 2024 году',
    category: 'Стратегия',
    date: '15 декабря 2024',
    excerpt: 'Анализируем ключевые тенденции в стратегическом управлении и их влияние на бизнес-практику.',
    readTime: '7 мин',
  },
  {
    title: 'Цифровая трансформация: с чего начать?',
    category: 'Технологии',
    date: '8 декабря 2024',
    excerpt: 'Пошаговое руководство по запуску программы цифровой трансформации в организации.',
    readTime: '10 мин',
  },
  {
    title: 'Lean-методология в российских компаниях: опыт внедрения',
    category: 'Процессы',
    date: '1 декабря 2024',
    excerpt: 'Делимся практическими кейсами успешного применения бережливого производства.',
    readTime: '12 мин',
  },
  {
    title: 'ESG-повестка: от тренда к необходимости',
    category: 'Устойчивость',
    date: '25 ноября 2024',
    excerpt: 'Почему устойчивое развитие становится конкурентным преимуществом для бизнеса.',
    readTime: '8 мин',
  },
  {
    title: 'Управление изменениями: преодоление сопротивления',
    category: 'Change Management',
    date: '18 ноября 2024',
    excerpt: 'Эффективные методы работы с сопротивлением персонала при организационных изменениях.',
    readTime: '9 мин',
  },
  {
    title: 'Финансовое моделирование для принятия стратегических решений',
    category: 'Финансы',
    date: '10 ноября 2024',
    excerpt: 'Как использовать финансовое моделирование для оценки инвестиционных проектов.',
    readTime: '11 мин',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Блог</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Экспертные материалы, аналитика и практические рекомендации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent/20 text-primary">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>{article.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary group-hover:text-accent transition-colors">
                    Читать
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            Все статьи
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
