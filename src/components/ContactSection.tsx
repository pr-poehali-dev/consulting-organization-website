import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'MapPin',
    title: 'Адрес',
    content: 'г. Москва, ул. Тверская, д. 10, офис 501',
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    content: '+7 (495) 123-45-67',
  },
  {
    icon: 'Mail',
    title: 'Email',
    content: 'info@iteducation.ru',
  },
  {
    icon: 'Clock',
    title: 'Режим работы',
    content: 'Пн-Пт: 9:00 - 18:00',
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Спасибо за обращение!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Свяжитесь с нами</h3>
              <p className="text-muted-foreground mb-6">
                Мы готовы обсудить задачи вашего бизнеса и предложить оптимальные решения. 
                Первая консультация — бесплатно.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-md bg-primary text-white">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Будьте на связи</h4>
                <p className="text-sm mb-4 text-white/80">
                  Подпишитесь на нашу рассылку для получения полезных материалов
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Youtube" size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=16&l=map&pt=37.617700,55.755800,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
                title="Карта офиса"
              />
            </div>
          </div>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Отправьте заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ваше имя"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Название компании"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}