window.addEventListener('load', () => {
  const json = fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
    ).then((response) => 
    response.json().then((resonseJsonArray) => {
      console.log(resonseJsonArray);
      const div = document.getElementById("container");
      let webPage = '';
      const buildAstronautHtml = (astronaut) => {
        console.log(astronaut);
        return`
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li>Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills}</li>
            </ul>
          </div> 
          <img class="avatar" src=${astronaut.picture}>
        </div> 
        `
        ;
    } 
    for(astronaut of resonseJsonArray) {
      const newHtml = buildAstronautHtml(astronaut);
      console.log(newHtml);
      webPage += newHtml;
    }
    console.log('webpage', webPage);
    div.innerHTML = webPage;
  })
  )
})

