document.addEventListener('DOMContentLoaded', function () {
    const pinIcon = document.getElementById('pinned');
    const taskbar = document.querySelector('.taskbar-slide');
    const main = document.querySelector('main');
    let isPinned = false;


    pinIcon.addEventListener('click', function () {
        if (isPinned) {
           
            pinIcon.classList.add('ri-pushpin-line');
            pinIcon.classList.remove('ri-unpin-line');
            isPinned = false;
            // Allow hover effect
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            // Change to pinned state
            pinIcon.classList.remove('ri-pushpin-line');
            pinIcon.classList.add('ri-unpin-line');
            isPinned = true;
            // Disable hover effect
            document.removeEventListener('mousemove', handleMouseMove);
            // Show taskbar
            taskbar.classList.add('show');
        }
    });

    function handleMouseMove(event) {
        const taskbarHeight = taskbar.offsetHeight;

        // Show the taskbar when the cursor is at the very top of the screen (y = 0)
        if (event.clientY === 0) {
            taskbar.classList.add('show');
        }

        // Hide the taskbar when the cursor moves out of the taskbar's height
        if (event.clientY > taskbarHeight) {
            taskbar.classList.remove('show');
        }
    }
    document.addEventListener('mousemove', handleMouseMove);
});
