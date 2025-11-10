document.addEventListener('DOMContentLoaded', () => {
    // Language toggle
    document.querySelector('.lang-btn').addEventListener('click', () => {
        alert('Language: Türkçe / English');
    });

    // Swiper Gallery
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
        grabCursor: true,
        effect: 'fade',
        fadeEffect: { crossFade: true }
    });

    // FullCalendar
    const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'dayGridYear',
        initialDate: '2025-09-01',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        },
        height: 460,
        events: [
            { title: 'Fall Semester', start: '2025-09-06' },
            { title: 'Culture Day', start: '2025-10-11' },
            { title: 'Winter Break', start: '2025-12-20' },
            { title: 'Spring Begins', start: '2026-02-07' },
            { title: 'Year-End', start: '2026-06-13' }
        ],
        eventClick: info => {
            alert(`${info.event.title}\n${info.event.start.toLocaleDateString()}`);
        }
    });
    calendar.render();
});