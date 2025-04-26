window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const landmark = urlParams.get('landmark') || urlParams.get('landmark_select');
    const landmarkName = document.getElementById('landmark-name');
    const locationSelect = document.getElementById('location-select').querySelector('option');
    const landmarkInput = document.getElementById('landmark-input');
    const landmarkHeader = document.getElementById('landmark-header');

    const landmarkImages = {
        'Giza Pyramids': '../Images/giza-pyramids.jpg',
        'Karnak Temple': '../Images/karnak-temple.jpg',
        'Philae Temple': '../Images/philae-temple.jpg',
        'Egyptian Museum': '../Images/egyptian-museum.jpg',
        'Ras Mohamed National Park': '../Images/ras-mohamed.jpg'
    };

    if (landmark) {
        landmarkName.textContent = landmark;
        locationSelect.textContent = landmark;
        landmarkInput.value = landmark;
    }

    const counters = document.querySelectorAll('.counter');
    const adultsInput = document.querySelector('.adults-count');
    const childrenInput = document.querySelector('.children-count');
    const guideInput = document.querySelector('.guide-count');
    const transportInput = document.querySelector('.transport-count');
    const lunchInput = document.querySelector('.lunch-count');
    const snacksInput = document.querySelector('.snacks-count');
    const drinksInput = document.querySelector('.drinks-count');
    const souvenirsInput = document.querySelector('.souvenirs-count');
    const totalCostElement = document.getElementById('total-cost');
    const cancelBtn = document.querySelector('.cancel-btn');

    const prices = {
        adults: 350,
        children: 700,
        guide: 750,
        transport: 1500,
        lunch: 140,
        snacks: 280,
        drinks: 100,
        souvenirs: 200
    };

    let totals = {
        adults: 0,
        children: 0,
        guide: 0,
        transport: 0,
        lunch: 0,
        snacks: 0,
        drinks: 0,
        souvenirs: 0
    };

    counters.forEach((counter, index) => {
        const decrement = counter.querySelector('.decrement');
        const increment = counter.querySelector('.increment');
        const countSpan = counter.querySelector('.count');
        const totalSpan = counter.nextElementSibling;
        let count = 0;
        const type = ['adults', 'children', 'guide', 'transport', 'lunch', 'snacks', 'drinks', 'souvenirs'][index];

        decrement.addEventListener('click', () => {
            if (count > 0) {
                count--;
                countSpan.textContent = count;
                updateTotal(type, count, totalSpan);
                updateHiddenInputs();
            }
        });

        increment.addEventListener('click', () => {
            count++;
            countSpan.textContent = count;
            updateTotal(type, count, totalSpan);
            updateHiddenInputs();
        });
    });

    function updateTotal(type, count, totalSpan) {
        totals[type] = count * prices[type];
        totalSpan.textContent = `EGP ${totals[type]}`;
        const total = Object.values(totals).reduce((sum, value) => sum + value, 0);
        totalCostElement.textContent = `EGP ${total}`;
    }

    function updateHiddenInputs() {
        adultsInput.value = document.querySelector('.counter:nth-child(1) .count').textContent;
        childrenInput.value = document.querySelector('.counter:nth-child(2) .count').textContent;
        guideInput.value = document.querySelector('.counter:nth-child(3) .count').textContent;
        transportInput.value = document.querySelector('.counter:nth-child(4) .count').textContent;
        lunchInput.value = document.querySelector('.counter:nth-child(5) .count').textContent;
        snacksInput.value = document.querySelector('.counter:nth-child(6) .count').textContent;
        drinksInput.value = document.querySelector('.counter:nth-child(7) .count').textContent;
        souvenirsInput.value = document.querySelector('.counter:nth-child(8) .count').textContent;
    }

    cancelBtn.addEventListener('click', () => {
        window.location.href = 'booking.html';
    });
});
