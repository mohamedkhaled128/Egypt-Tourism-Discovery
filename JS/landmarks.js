// Filter by Governorate
const governorateFilter = document.getElementById('governorateFilter');
const landmarks = document.querySelectorAll('.landmark');

governorateFilter.addEventListener('change', () => {
    const selected = governorateFilter.value;
    landmarks.forEach(landmark => {
        const governorate = landmark.dataset.governorate;
        landmark.style.display = (selected === 'all' || selected === governorate) ? 'block' : 'none';
    });
});

// Visitor Experiences
document.querySelectorAll('.experience-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const landmarkId = form.dataset.landmark;
        const text = form.querySelector('textarea').value;
        const file = form.querySelector('input[type="file"]').files[0];
        const list = document.getElementById(`experienceList-${landmarkId}`);

        const experience = document.createElement('div');
        experience.classList.add('experience');
        experience.innerHTML = `
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Avatar">
            <div class="experience-content">
                <p><strong>Anonymous:</strong> "${text}"</p>
                <span class="timestamp">Just now</span>
            </div>
        `;
        list.prepend(experience);

        form.reset();
    });
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));