import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-primary">
              Профессиональный консалтинг с 2010 года
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Решения для вашего бизнеса
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Помогаем компаниям достигать стратегических целей через экспертный анализ, 
              оптимизацию процессов и внедрение инноваций.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Наши услуги
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl flex items-center justify-center">
              <Icon name="TrendingUp" size={200} className="text-primary/20" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Лидеры рынка</div>
                  <div className="text-sm text-muted-foreground">ТОП-10 в России</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
