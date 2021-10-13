document.addEventListener('DOMContentLoaded', () => {
  const section3 = document.querySelector('.feature-speaker');
  const speakerGrid = document.createElement('main');

  section3.appendChild(speakerGrid);

  speakerGrid.classList.add('speaker-grid');

  const speakerArray = [
    {
      name: 'Burna Boy',
      title: 'Nigerian singer and rapper',
      description: 'Damini Ebunoluwa Ogulu, known professionally as Burna Boy, is a Nigerian singer and rapper. He is one of the biggest and most successful African artists. He rose to prominence in 2012 after releasing "Like to Party"',
      image: 'images/burnab.jfif',
    },
    {
      name: 'Nomcebo Zikode',
      title: 'South African singer',
      description: 'Born in Hammarsdale, Zikode was a backing singer for several years. She has collaborated with DJ Ganyani on their hit single "Emazulwini".',
      image: 'images/Nomcebo-Zikode.jpeg',
    },
    {
      name: 'Wizkid',
      title: 'Nigerian singer and songwriter',
      description: 'Ayodeji Ibrahim Balogun, known professionally as Wizkid is a Nigerian singer and songwriter. He began recording music at the age of 11 and managed to release a collaborative album with the Glorious Five, a group he and a couple of his church friends formed',
      image: 'images/wizkid.jpg',
    },
    {
      name: 'Davido',
      title: 'Nigerian-American singer and record producer',
      description: 'Davido rose to fame after releasing "Dami Duro", the second single from his debut studio album Omo Baba Olowo. In 2012, Davido won the Next Rated award at The Headies',
      image: 'images/davido.jfif',
    },
    {
      name: 'Shatta Wale',
      title: 'Ghanaian reggae-dancehall artist',
      description: 'Charles Nii Armah Mensah Jr., is a Ghanaian reggae-dancehall artist. He is known by his stage name Shatta Wale, formerly Bandana. His best-known singles are "Dancehall King", my level and we taking over',
      image: 'images/shatta.jpg',
    },
    {
      name: 'Tiwa Savage',
      title: 'Nigerian singer-songwriter',
      description: ' Born in Isale Eko, she relocated to London at the age of 11 for her secondary education. Five years later, she began her music career doing backup vocals for artists such as George Michael and Mary J. Blige.',
      image: 'images/tiwa.jpg',
    },
  ];

  for (let i = 0; i < speakerArray.length; i += 1) {
    const speaker = speakerArray[i];

    document.querySelector('.speaker-grid').innerHTML
            += ` 
            <div class="speaker-cont">
            <img class="speaker-img" src="${speaker.image}" alt="Speaker Image">
            <div class="speaker-text">
                <h3>${speaker.name}</h3>
                <p class="speaker-title">${speaker.title}</p>
                <hr>
                <p class="speaker-des">${speaker.description}</p>
            </div>
            </div>
            `;
  }
});