// ApplyIT screening task - vanilla only vanilla JS
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const controls = card.querySelector('.controls');

    // open / close on click
    card.addEventListener('click', function(e) {
        // prevent closing when clicking inside controls
        if (e.target.closest('.controls')) return;

        card.classList.toggle('active');
        controls.classList.toggle('hide');
    });

    // change color
    card.querySelectorAll('.swatch').forEach(swatch => {
        swatch.style.backgroundColor = swatch.dataset.bg;

        swatch.onclick = function() {
            card.style.backgroundColor = this.dataset.bg;
        }
    });

    // change size
    card.querySelectorAll('.sizes button').forEach(btn => {
        btn.onclick = function() {
            const newWidth = this.dataset.width;
            card.style.width = newWidth;

            // little hack to make height when very big
            if (newWidth === '450px') {
                card.style.minHeight = '520px';
            } else {
                card.style.minHeight = '480px';
            }
        }
    });
});
