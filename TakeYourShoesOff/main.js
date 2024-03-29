const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

const context = {
  instruments: [
    {
      image: 'https://i.imgur.com/uxIJFBp.png',
      name: 'Mike Rafizadeh',
      description: 'Mike Rafizadeh, aka Rafi, is the lead man of this band. Although he is by far not the most attractive, he does have a decent musical side to him. Rafi is departing for med school which will surely have some components to it that absolutely ravage his face off. So good luck Rafi!',
      price: 'Guitar / Vocals',
    },
    {
      image: 'https://i.imgur.com/evq0VlN.png',
      name: 'Paul Ballas',
      description: 'Ever search in your soul for a beautiful Greek stallion? Well now you have one! Take advantage of this phenomenal Greek\' sale today!',
      price: 'Drums',

    },
    {
      image: 'https://i.imgur.com/vEU1C5U.png',
      name: 'Mike Gelber',
      description: 'Mike, aka Wireless Mikey, is the hype man of TYSO. His phenomenal stage moves that are often taken to each corner of the venue (via wireless technology) gets people FUCKING HYPE. He most definitely pulls the most as well, being the only single member of the band.',
      price: 'Wireless Bass',

    },
    {
      image: 'https://i.imgur.com/0CeexLe.png',
      name: 'Jack Kalin',
      description: 'Jack Kalin is not only the second future doctor of the band BUT he\'s also the second half-jewish band member! Kalin brings new unique vibes to the song repitour with his crazy synth skills.',
      price: 'KeyBoard',

    },
    {
      image: 'https://i.imgur.com/Rk68PbA.png',
      name: 'Eric Przedpelski',
      description: 'You might as well call it the Sexophone. Eric truly seduces each and every audience member at TYSO shows with his massive, gorgeous horn.',
      price: 'Saxophone',

    }

  ],
  contents: [
    {
      id: "video",
      link: " width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/LjHv-a9wZWY\" style=\"border:5px solid purple;\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen",
      title: 'Naw Naw Music Video',
    }
  ]
};




const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;
