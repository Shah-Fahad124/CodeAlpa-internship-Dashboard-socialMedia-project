document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const feedsContainer = document.getElementById('feedsContainer');
    const errorMessage = document.getElementById('errorMessage');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    loginModal.querySelector('.close').addEventListener('click', () => {
        loginModal.style.display = 'none';
        errorMessage.textContent = '';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.elements['username'].value.trim();
        const password = loginForm.elements['password'].value.trim();


        if (!username || !password) {
            errorMessage.textContent = 'Please enter username and password';
        } else {

            alert(`Logged in as ${username}`);
            loginModal.style.display = 'none';
        }
    });


    const mockFeeds = [
        { platform: 'Twitter', content: 'Tweet content goes here' },
        { platform: 'Facebook', content: 'Facebook post content goes here' },
        { platform: 'Instagram', content: 'Instagram post content goes here' }
    ];

    displayFeeds(mockFeeds);

    function displayFeeds(feeds) {
        feedsContainer.innerHTML = '';

        feeds.forEach(feed => {
            const feedItem = document.createElement('div');
            feedItem.classList.add('feedItem');
            feedItem.textContent = feed.platform;
            feedItem.addEventListener('click', () => {
                loginModal.style.display = 'block'; // Show login modal when a platform is clicked
            });
            feedsContainer.appendChild(feedItem);
        });
    }
});
