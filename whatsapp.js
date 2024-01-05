const chats = [
    {
        image: 'images/new image.jpg',
        name: 'Yunus',
        text: 'you the best',
    },
    {
        image: 'images/smile.png',
        name: 'Evil Spirit',
        text: 'Hw far',
    },
    {
        image: 'images/taylor-heery-qwvydaAOEDw-unsplash.jpg',
        name: 'Nim Nim',
        text: 'I swear',
    },
    {
        image: 'images/istockphoto-1320487463-1024x1024.jpg',
        name: 'Khalifa',
        text: 'Oya na',
    },
    {
        image: 'images/image.png',
        name: 'lolipop',
        text: 'Ogaaa',
    },
    {
        image: 'images/pexels-gustavo-fring-4173096.jpg',
        name: 'Gift',
        text: 'Wagwan',
    },
    {
        image: 'images/daddy jnr.jpg',
        name: 'big b',
        text: 'oya na',
    },
    {
        image: 'images/brad-starkey-iDIkZxzofDk-unsplash.jpg',
        name: 'jude',
        text: 'thing na',
    },
    {
        image: 'images/Anime_pfp-082f06bc-ee36-4d8f-991d-fb5726a69b22.jpg',
        name: 'Thinkabell',
        text: 'why na',
    },
    {
        image: 'images/first choice.png',
        name: 'Yusuf',
        text: 'Aint no way',
    },
    {
        image: 'images/sophie-jonas-WC9dRfiBKDM-unsplash 1.png',
        name: 'Danjuma',
        text: 'stop saying rubbish',
    },
    {
        image: 'images/pexels-erik-mclean-9216590.jpg',
        name: 'Ola',
        text: 'Of course',
    },
    {
        image: 'images/pexels-skitterphoto-9796.jpg',
        name: 'Hebrew',
        text: 'Anything guy',
    },
    {
        image: 'images/pexels-skitterphoto-9796.jpg',
        name: 'Fool',
        text: 'Fool',
    },
    {
        image: 'images/pexels-skitterphoto-9796.jpg',
        name: 'dady',
        text: 'Noted',
    }

];

let chatHTML = ''

chats.forEach(chat => {
    chatHTML += `
     
    <div class="chat">
    <img src="${chat.image}">
        <a href="#" class="name-details">
            <p>${chat.name}</p>
            <span>.. ${chat.text}</span>
        </a>
</div>
    `
});

document.querySelector('.chat-place')
    .innerHTML = chatHTML;

const updates = [{
    name: 'Maimunah',
    time: '2:08 PM',
    image: 'images/istockphoto-1320487463-1024x1024.jpg',
}, {
    name: 'Safi',
    time: '4:56 PM',
    image: 'images/taylor-heery-qwvydaAOEDw-unsplash.jpg',
}, {
    name: 'Balogin',
    time: '9:16 AM',
    image: 'images/istockphoto-1320487463-1024x1024.jpg',
},
    {
    name: 'Favor',
    time: '9:07 PM',
    image: 'images/happiness.png',
},{
    name: 'Aqram',
    time: '4:09 AM',
    image: 'images/image.png',
},{
    name: 'yasmine',
    time: '4:40 PM',
    image: 'images/pexels-skitterphoto-9796.jpg',
},
];

let updateHTML = '';

updates.forEach(update => {
    const images = update.image;
    updateHTML += `
    
    <div class="update">
    <img src="${images}" alt="">
    <div class="texts">
        <p class="first">${update.name}</p>
        <p><span>${update.time}</span></p>
    </div>
</div>
    `

});

const recentUpdates = document.querySelector('.recent-updates')

recentUpdates.innerHTML = updateHTML;

const showUpdate = document.querySelector('.updates');
const showChats = document.querySelector('.chats');
const chatPlace = document.querySelector('.chat-place');
const updateSec = document.querySelector('.updates-section');
const archived = document.querySelector('.archived');
console.log(showChats);

showUpdate.addEventListener('click', () => {
    chatPlace.classList.add('hide-chat-place');
    updateSec.classList.add('show-updates-section');
    archived.style.display = 'none';

});

showChats.addEventListener('click', () => {
    chatPlace.classList.remove('hide-chat-place');
    updateSec.classList.remove('show-updates-section');
    archived.style.display = 'block';
});

const names = document.querySelectorAll('.name-details');
const chatBox = document.querySelector('.chat-box');
const chatImage = document.querySelector('.image')

names.forEach(name => {
    name.addEventListener('click', () => {
        chatBox.classList.add('show-chat-box')
    });
});

chatImage.addEventListener('click', () => {
    chatBox.classList.remove('show-chat-box')
})

