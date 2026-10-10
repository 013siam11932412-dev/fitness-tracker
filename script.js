// Storage Keys
const TODAY_KEY = 'healthy_you_today_' + new Date().toISOString().slice(0, 10);
const HISTORY_KEY = 'healthy_you_weekly_data';

// Default State
let todayData = JSON.parse(localStorage.getItem(TODAY_KEY)) || {
    meals: 0,
    workout: 0,
    water: 0.0,
    sleep: 7.0
};

// UI Elements
const statMeals = document.getElementById('statMeals');
const statWorkout = document.getElementById('statWorkout');
const statWater = document.getElementById('statWater');
const statSleep = document.getElementById('statSleep');

// Initialize Dashboard
function renderStats() {
    statMeals.textContent = `${todayData.meals} / 4`;
    statWorkout.textContent = `${todayData.workout} / 1`;
    statWater.textContent = `${todayData.water.toFixed(1)} L`;
    statSleep.textContent = `${todayData.sleep} h`;
    saveData();
    drawWeeklyChart();
}

function addMetric(type) {
    if (type === 'meals' && todayData.meals < 4) todayData.meals++;
    if (type === 'workout') todayData.workout = todayData.workout === 1 ? 0 : 1;
    if (type === 'water') todayData.water = Math.min(4.0, todayData.water + 0.25);
    renderStats();
}

function logSleep() {
    const hours = prompt('গত রাতে কত ঘণ্টা ঘুমিয়েছেন?', todayData.sleep);
    if (hours && !isNaN(hours)) {
        todayData.sleep = parseFloat(hours);
        renderStats();
    }
}

function saveData() {
    localStorage.setItem(TODAY_KEY, JSON.stringify(todayData));

    // Update weekly dataset
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [60, 75, 80, 70, 85, 90, 0];
    // Calculate today's completion percentage (out of 100)
    const score = Math.round(
        ((todayData.meals / 4) * 30) +
        (todayData.workout * 25) +
        ((todayData.water / 2.5) * 25) +
        ((Math.min(todayData.sleep, 8) / 8) * 20)
    );
    history[6] = Math.min(100, score);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function resetDay() {
    if (confirm('আজকের ট্র্যাকার রিসেট করতে চান?')) {
        todayData = { meals: 0, workout: 0, water: 0.0, sleep: 7.0 };
        renderStats();
    }
}

function scrollToDashboard() {
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

function openGoalSelector() {
    document.getElementById('goals').scrollIntoView({ behavior: 'smooth' });
}

function selectGoal(goalName) {
    alert(`"${goalName}" সিলেক্ট হয়েছে! নিচের ট্র্যাকার দিয়ে প্রতিদিনের প্রগ্রেস শুরু করুন।`);
    scrollToDashboard();
}

// Canvas-based Weekly Chart
function drawWeeklyChart() {
    const canvas = document.getElementById('weeklyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [60, 70, 80, 65, 85, 90, 75];
    const days = ['শনি', 'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'আজ'];

    ctx.clearRect(0, 0, width, height);

    // Background Grid Lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
        const y = (height - 50) * (i / 4);
        ctx.beginPath();
        ctx.moveTo(40, y);
        ctx.lineTo(width - 20, y);
        ctx.stroke();
    }

    const barWidth = 42;
    const spacing = (width - 80) / days.length;

    // Draw Bars & Labels
    days.forEach((day, idx) => {
        const score = history[idx] || 20;
        const barHeight = ((height - 80) * (score / 100));
        const x = 50 + (idx * spacing);
        const y = height - 40 - barHeight;

        // Bar Color Gradient
        const grad = ctx.createLinearGradient(0, y, 0, height - 40);
        grad.addColorStop(0, '#10b981');
        grad.addColorStop(1, '#064e3b');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [8, 8, 0, 0]);
        ctx.fill();

        // Day Label
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(day, x + (barWidth / 2), height - 15);

        // Percentage Value
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 11px Plus Jakarta Sans, sans-serif';
        ctx.fillText(`${score}%`, x + (barWidth / 2), y - 8);
    });
}

// Initial Call
renderStats();