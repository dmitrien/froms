document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('[data-toggle="popover"]');
    const popover = document.createElement('div');
    popover.classList.add('popover');
    
    const title = document.createElement('h3');
    title.textContent = button.getAttribute('title');
    const content = document.createElement('p');
    content.textContent = button.getAttribute('data-content');
    popover.appendChild(title);
    popover.appendChild(content);

    document.body.appendChild(popover);

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        const rect = button.getBoundingClientRect();
        popover.style.left = `${rect.left + window.scrollX - popover.offsetWidth / 2}px`;
        popover.style.top = `${rect.bottom + window.scrollY}px`;
        popover.style.display = 'block'; 

        document.addEventListener('click', function hidePopover() {
            popover.style.display = 'none';
            document.removeEventListener('click', hidePopover);
        }, { once: true });
    });
});