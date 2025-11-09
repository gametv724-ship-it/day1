// Мой первый день программирования
const myName = "Naksad";
const startDate = new Date();
const targetDate = new Date(startDate);
targetDate.setDate(targetDate.getDate() + 365);

console.log(`👋 Привет, ${myName}!`);
console.log(`📅 Сегодня: ${startDate.toLocaleDateString()}`);
console.log(`🎯 Цель: ${targetDate.toLocaleDateString()}`);
console.log(`💪 Через год я буду Junior Developer!`);

// Функция для расчёта дней до цели
function daysUntilGoal() {
    const today = new Date();
    const difference = targetDate - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}

console.log(`⏰ Осталось дней: ${daysUntilGoal()}`);