document.addEventListener('DOMContentLoaded', () => {
  const section3 = document.querySelector('.feature-speaker');
  const speakerGrid = document.createElement('main');

  section3.appendChild(speakerGrid);

  speakerGrid.classList.add('speaker-grid');

  const speakerArray = [
    {
      name: 'Poju Oyemade',
      title: 'Convener',
      description: 'A non-political, non-partisan national development Fair which holds as a global media, hosting speakers from the highest levels of the nation’s leadership and leaders in Global policy practice.',
      image: 'images/pojuoye.png',
    },
    {
      name: 'Feyi Fawehinmi',
      title: 'Accounting and Finance Professional',
      description: 'A safe place to do risky things- A recipe for growth and innovation.',
      image: 'images/feyifa.jfif',
    },
    {
      name: 'Yvonne Johnson',
      title: 'Tech Founder- The future of a continent.',
      description: 'Yvonne Johnson is a strategic thinker with a demonstrated ability to influence change by leveraging innovative solutions.',
      image: 'images/yvonnejo.jfif',
    },
    {
      name: 'Samuel Egube',
      title: 'Hon. Commissioner of Budget and Planning Lagos State',
      description: 'Cultivating Partnership with Citizens for National Development.',
      image: 'images/samuelegu.jpg',
    },
    {
      name: 'Dr. Jumoke Oduwole',
      title: 'Special Adviser to the President on Ease of Doing Business (OVP)',
      description: 'Fast forward – the women and men who built Nigeria.',
      image: 'images/jumokeodu.jfif',
    },
    {
      name: 'Donna Brazile',
      title: 'Former Chair person Democratic Party, United States',
      description: 'How citizens can influence government policies.',
      image: 'images/donnab.jfif',
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