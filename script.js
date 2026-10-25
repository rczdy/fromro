document.getElementById('button1').addEventListener('click', () => {
    const number = Math.floor(Math.random() * 10);
    document.getElementById('button1paragraph').innerText = seaanimals[number][0];
    document.getElementById('button1image').src = seaanimals[number][1];
})

const seaanimals = [
    ['killer whale','https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg'],
    ['dugongs', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Dugong.JPG'],
    ['sea turtles', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg'],
    ['stingrays', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/SStringray.jpg'],
    ['dolphins', 'https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg'],
    ['hammerhead sharks', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Scalloped_Hammerhead_Shark_Sphyrna_Lewini_(226845659).jpeg'],
    ['jellyfish', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg'],
    ['clownfish', 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_(Clown_anemonefish)_by_Nick_Hobgood.jpg'],
    ['blue whales', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg'],
    ['sea cucumbers', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Three-Rowed_Sea_Cucumber.jpg']
]
