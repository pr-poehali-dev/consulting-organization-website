import Icon from '@/components/ui/icon';

const footerLinks = {
  company: [
    { name: 'О компании', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Команда', href: '#team' },
    { name: 'Портфолио', href: '#portfolio' },
  ],
  resources: [
    { name: 'Блог', href: '#blog' },
    { name: 'Кейсы', href: '#portfolio' },
    { name: 'Вакансии', href: '#' },
    { name: 'Партнерам', href: '#' },
  ],
  legal: [
    { name: 'Политика конфиденциальности', href: '#' },
    { name: 'Условия использования', href: '#' },
    { name: 'Реквизиты', href: '#' },
  ],
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <span className="text-2xl font-bold">ПроКонсалт</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Профессиональные консалтинговые услуги для развития вашего бизнеса. 
              Более 15 лет опыта и 200+ успешных проектов.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Тверская, д. 10, офис 501</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="flex-shrink-0" />
                <a href="mailto:info@prokonsalt.ru" className="hover:text-white transition-colors">
                  info@prokonsalt.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 ПроКонсалт. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
