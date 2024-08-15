document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    

    
    if (loadingScreen && content) {
        // Hide the loading screen and show the content
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    } else {
        console.error('Elements not found');
    }
});

