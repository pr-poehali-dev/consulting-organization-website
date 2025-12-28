import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const navItems = [
  { name: 'Главная', href: '#home' },
  { name: 'О компании', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Команда', href: '#team' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'Блог', href: '#blog' },
  { name: 'Контакты', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/logoza.ru.png" 
              alt="ITEducation" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-primary">ITEducation</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('#contact')} className="bg-accent hover:bg-accent/90 text-primary">
              Связаться с нами
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button onClick={() => scrollToSection('#contact')} className="w-full bg-accent hover:bg-accent/90 text-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}