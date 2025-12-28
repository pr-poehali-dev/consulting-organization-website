import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const team = [
  {
    name: 'Александр Петров',
    position: 'Управляющий партнер',
    initials: 'АП',
    expertise: 'Стратегический менеджмент, 20+ лет опыта',
    email: 'a.petrov@prokonsalt.ru',
    linkedin: '#',
  },
  {
    name: 'Елена Смирнова',
    position: 'Партнер, Директор по консалтингу',
    initials: 'ЕС',
    expertise: 'Процессный консалтинг, управление изменениями',
    email: 'e.smirnova@prokonsalt.ru',
    linkedin: '#',
  },
  {
    name: 'Дмитрий Козлов',
    position: 'Старший консультант',
    initials: 'ДК',
    expertise: 'Финансовый менеджмент, M&A',
    email: 'd.kozlov@prokonsalt.ru',
    linkedin: '#',
  },
  {
    name: 'Мария Волкова',
    position: 'Старший консультант',
    initials: 'МВ',
    expertise: 'HR-консалтинг, организационное развитие',
    email: 'm.volkova@prokonsalt.ru',
    linkedin: '#',
  },
  {
    name: 'Игорь Морозов',
    position: 'Консультант',
    initials: 'ИМ',
    expertise: 'Бизнес-аналитика, цифровая трансформация',
    email: 'i.morozov@prokonsalt.ru',
    linkedin: '#',
  },
  {
    name: 'Анна Соколова',
    position: 'Консультант',
    initials: 'АС',
    expertise: 'Маркетинг, клиентский опыт',
    email: 'a.sokolova@prokonsalt.ru',
    linkedin: '#',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Наша команда</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессионалы с многолетним опытом в ведущих компаниях и международных консалтинговых фирмах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="bg-accent/20 text-primary text-2xl font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Icon name="Mail" size={18} className="text-primary" />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Icon name="Linkedin" size={18} className="text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}