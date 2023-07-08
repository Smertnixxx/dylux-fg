
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "Новичек", level: 0 }, { name: "начинающий", level: 4 }, 
      { name: "Опытный", level: 8 }, { name: "Маг", level: 12 }, 
      { name: "Мастер", level: 16 }, { name: "Опекун", level: 20 }, 
      { name: "Чемпион", level: 24 }, { name: "Герой", level: 28 }, 
      { name: "Легенда", level: 32 }, { name: "Мифический", level: 36 },
      { name: "Волшебник", level: 48 }, { name: "Верховный маг", level: 52 }, 
      { name: "Мудрец", level: 56 }, { name: "Святой", level: 60 }, 
      { name: "Всемогущий", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
