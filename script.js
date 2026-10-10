function renderExercises(profile) {
    let exercises = [];

    if (profile.workoutPlace === "home") {
        if (profile.gender === "female") {
            exercises = [
                {
                    name: "Glute Bridges",
                    meta: "লোয়ার বডি ও হিপ শেপ",
                    reps: "৩ সেট • ১৫ বার",
                    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Knee Push-ups",
                    meta: "হাতের ও বুকের শক্তি",
                    reps: "৩ সেট • ১০-১২ বার",
                    img: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Bodyweight Squat",
                    meta: "পা ও শরীরের ব্যালেন্স",
                    reps: "৩ সেট • ১৫ বার",
                    img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Plank Hold",
                    meta: "পেটের মেদ ও কোর স্ট্রেংথ",
                    reps: "৩ সেট • ৩০ সেকেন্ড",
                    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=150&auto=format&fit=crop&q=80"
                }
            ];
        } else {
            exercises = [
                {
                    name: "Standard Push-ups",
                    meta: "বুক ও ট্রাইসেপস",
                    reps: "৩ সেট • ১২-১৫ বার",
                    img: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Bodyweight Squats",
                    meta: "পায়ের পেশি গঠন",
                    reps: "৪ সেট • ১৫ বার",
                    img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Doorframe / Towel Rows",
                    meta: "পিঠ ও বাইসেপস",
                    reps: "৩ সেট • ১২ বার",
                    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Plank & Core Hold",
                    meta: "অ্যাবস ও কোর শক্তি",
                    reps: "৩ সেট • ৪০ সেকেন্ড",
                    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=150&auto=format&fit=crop&q=80"
                }
            ];
        }
    } else {
        // জিম ওয়ার্কআউট
        if (profile.gender === "female") {
            exercises = [
                {
                    name: "Dumbbell Hip Thrusts",
                    meta: "লোয়ার বডি স্ট্রেংথ",
                    reps: "৩ সেট • ১২ বার",
                    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Goblet Squats",
                    meta: "লেগস ও কোর টোনিং",
                    reps: "৩ সেট • ১২ বার",
                    img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Lat Pulldown Machine",
                    meta: "পিঠ ও সুন্দর ভঙ্গি",
                    reps: "৩ সেট • ১২ বার",
                    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Dumbbell Shoulder Press",
                    meta: "কাঁধ ও হাত",
                    reps: "৩ সেট • ১০ বার",
                    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&auto=format&fit=crop&q=80"
                }
            ];
        } else {
            exercises = [
                {
                    name: "Barbell Bench Press",
                    meta: "বুকের পেশির আকার বৃদ্ধি",
                    reps: "৪ সেট • ৮-১০ বার",
                    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Barbell Squats",
                    meta: "পায়ের মূল শক্তি",
                    reps: "৪ সেট • ৮-১০ বার",
                    img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Lat Pulldown / Cable Row",
                    meta: "পিঠের বিস্তার (V-Taper)",
                    reps: "৪ সেট • ১০-১২ বার",
                    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&auto=format&fit=crop&q=80"
                },
                {
                    name: "Dumbbell Bicep Curls",
                    meta: "হাতের পেশির গ্রোথ",
                    reps: "৩ সেট • ১২ বার",
                    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&auto=format&fit=crop&q=80"
                }
            ];
        }
    }

    exerciseContainer.innerHTML = exercises.map(ex => `
      <div class="exercise-card">
        <div class="exercise-img-wrap">
          <img src="${ex.img}" alt="${ex.name}" loading="lazy" />
        </div>
        <div class="exercise-info">
          <strong>${ex.name}</strong>
          <span>${ex.meta}</span>
        </div>
        <span class="exercise-badge">${ex.reps}</span>
      </div>
    `).join("");
}