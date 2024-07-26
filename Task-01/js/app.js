// Sample data
const movies = [
    { id: 1, title: 'Mortal 2022', image: 'Image/Film-01.jpeg' ,},
    { id: 2, title: 'Pathan 2023', image: 'Image/film-02.avif' },
    { id: 2, title: 'Jawan 2023', image: 'Image/Film-03.jpg' },
    { id: 2, title: 'Ghost 2023', image: 'Image/film-04.jpeg' },
    { id: 2, title: 'Kadak Singh 2022', image: 'Image/film-05.jpg' },
    { id: 2, title: 'Gumraah 2023', image: 'Image/film-06.jpg' },
    { id: 2, title: 'Jailer 2023', image: 'Image/film-07.jpeg' },
    // Add more movies
  ];
  
  const series = [
    { id: 1, title: 'Waco The Aftermath', image: 'Image/series-01.jpeg'},
    { id: 2, title: 'Marvel Avengers', image: 'Image/series-02.jpeg' },
    { id: 2, title: 'The Avengers', image: 'Image/series-03.jpeg' },
    { id: 2, title: 'Naomi', image: 'Image/series-04.jpeg' },
    { id: 2, title: 'From', image: 'Image/series-06.jpeg' },
    { id: 2, title: 'Man VS Bee', image: 'Image/series-07.jpeg' },
    // Add more series
  ];
  
  const sports = [
    { id: 1, title: 'Cricket', image: 'Image/sport-01.jpg' },
    { id: 2, title: 'Badminton', image: 'Image/sport-02.jpg' },
    { id: 2, title: 'Football', image: 'Image/sport-03.jpg' },
    { id: 2, title: 'Tennis Ball', image: 'Image/sport-04.jpg' },
    { id: 2, title: 'Hockey', image: 'Image/sport-05.jpg' },
    { id: 2, title: 'Basketball', image: 'Image/sport-06.jpg' },
    // Add more sports
  ];
  
  const kids = [
    { id: 1, title: 'Doremon', image: 'Image/cartoon-01.jpg' },
    { id: 2, title: 'Mr bean', image: 'Image/cartoon-02.jpg' },
    { id: 2, title: 'Chota Bean ', image: 'Image/cartoon-03.jpg' },
    { id: 2, title: 'Ben 10', image: 'Image/cartoon-04.jpg' },
    { id: 2, title: 'Nobita', image: 'Image/cartoon-05.jpg' },
    { id: 2, title: 'Oggy', image: 'Image/cartoon-06.jpg' },
  ];
  
  // Function to display content
  function displayContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    const contentGrid = section.querySelector('.content-grid');
    contentGrid.innerHTML = content.map(item => `
      <div>
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
      </div>
    `).join('');
  }
  
  // Initialize content
  displayContent('movies', movies);
  displayContent('series', series);
  displayContent('sports', sports);
  displayContent('kids', kids);
  