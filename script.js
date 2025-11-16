document.addEventListener('DOMContentLoaded', () => {
    // language toggle (Türkçe ⇄ English)
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isTurkish = currentPage.includes('tr.') || currentPage.endsWith('tr.html');

        // automatically show correct label
        langBtn.textContent = isTurkish ? 'English' : 'Türkçe';

        langBtn.addEventListener('click', () => {
            let targetPage;

            if (isTurkish) {
                // switch from Turkish → English
                targetPage = currentPage
                    .replace('tr.', '.')           // indextr.html → index.html
                    .replace('tr.html', '.html');  // academicstr.html → academics.html
            } else {
                // switch from English → Turkish
                if (currentPage === 'index.html' || currentPage === '') {
                    targetPage = 'indextr.html';
                } else {
                    targetPage = currentPage.replace('.html', 'tr.html');
                }
            }

            // navigate
            window.location.href = targetPage;
        });
    }

    // swiper gallery (only on pages that have it – safe check)
    if (document.querySelector('.swiper')) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: { el: '.swiper-pagination', clickable: true },
            grabCursor: true,
            effect: 'fade',
            fadeEffect: { crossFade: true }
        });
    }

    // fullcalendar (only on pages that have #calendar – safe check)
    if (document.getElementById('calendar')) {
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
    }
});