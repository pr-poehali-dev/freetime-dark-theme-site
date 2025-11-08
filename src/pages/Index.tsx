import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [stats, setStats] = useState({
    players: 24567,
    gamesPlayed: 1234567,
    tournaments: 89
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        players: prev.players + Math.floor(Math.random() * 10),
        gamesPlayed: prev.gamesPlayed + Math.floor(Math.random() * 100),
        tournaments: prev.tournaments
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const games = [
    {
      id: 1,
      title: "Cyber Battle Arena",
      genre: "Action",
      players: "12.5K",
      image: "https://cdn.poehali.dev/projects/79f29d5f-a86a-4664-8dc8-2500497e1984/files/c1c8532d-06d9-4cb6-9a61-ffcc57cd291c.jpg"
    },
    {
      id: 2,
      title: "Neon Speed Racing",
      genre: "Racing",
      players: "8.3K",
      image: "https://cdn.poehali.dev/projects/79f29d5f-a86a-4664-8dc8-2500497e1984/files/add009a4-7f83-425d-8c43-8c1f755fdace.jpg"
    },
    {
      id: 3,
      title: "Mystic Legends",
      genre: "RPG",
      players: "15.7K",
      image: "https://cdn.poehali.dev/projects/79f29d5f-a86a-4664-8dc8-2500497e1984/files/22bc67d0-94e2-4203-946e-96507d7675d6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center animate-glow">
            <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-primary">FreeTime</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#games" className="text-foreground/80 hover:text-primary transition-colors">Игры</a>
          <a href="#stats" className="text-foreground/80 hover:text-primary transition-colors">Статистика</a>
          <a href="#community" className="text-foreground/80 hover:text-primary transition-colors">Сообщество</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Icon name="User" size={18} className="mr-2" />
          Войти
        </Button>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
              FreeTime
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Погрузись в мир захватывающих игр. Соревнуйся с игроками со всего мира в турнирах и поднимайся на вершину рейтингов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 animate-float">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </section>

        <section id="stats" className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-8 text-center hover:border-primary transition-colors">
              <div className="flex justify-center mb-4">
                <Icon name="Users" size={48} className="text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{stats.players.toLocaleString()}</p>
              <p className="text-muted-foreground">Активных игроков</p>
            </Card>
            <Card className="bg-card border-border p-8 text-center hover:border-secondary transition-colors">
              <div className="flex justify-center mb-4">
                <Icon name="Joystick" size={48} className="text-secondary" />
              </div>
              <p className="text-4xl font-bold text-secondary mb-2">{stats.gamesPlayed.toLocaleString()}</p>
              <p className="text-muted-foreground">Игр сыграно</p>
            </Card>
            <Card className="bg-card border-border p-8 text-center hover:border-primary transition-colors">
              <div className="flex justify-center mb-4">
                <Icon name="Trophy" size={48} className="text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{stats.tournaments}</p>
              <p className="text-muted-foreground">Активных турниров</p>
            </Card>
          </div>
        </section>

        <section id="games" className="container mx-auto px-4 py-16">
          <h3 className="text-4xl font-bold mb-12 text-center">Популярные игры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <Card 
                key={game.id}
                className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-foreground mb-1">{game.title}</h4>
                    <p className="text-muted-foreground">{game.genre}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={18} className="text-primary" />
                      <span className="text-muted-foreground">{game.players} онлайн</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Играть
                      <Icon name="Play" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="community" className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-5xl font-bold mb-6">Присоединяйся к сообществу</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Более 20 тысяч игроков уже играют в FreeTime. Найди новых друзей, создавай команды и побеждай вместе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Присоединиться к Discord
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6">
                <Icon name="Share2" size={20} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12 border-t border-border mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={18} className="text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-primary">FreeTime</h4>
            </div>
            <p className="text-muted-foreground">Лучшая игровая платформа для настоящих геймеров</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Игры</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Action</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">RPG</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Racing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Strategy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Сообщество</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Поддержка</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 FreeTime. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
