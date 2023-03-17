const reviewsAvatars = document.querySelector('.review__icons');

reviewsAvatars.addEventListener('click', (e) =>{
    e.preventDefault();

    const target = e.target;
    console.log('target', target);

    if(target.classList.contains('review__icon')){
        const activeListItem = document.querySelector('.review__icon--active');

        if(activeListItem){
            activeListItem.classList.remove('.review__icon--active')
        }

        const button = target.parentElement;
        const listElemet = button.parentElement;
        
    }
});