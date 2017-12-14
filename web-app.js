let express = require('express')
let app = express()
let MongoClient = require('mongodb').MongoClient

app.use('/', express.static('app'))

app.get('/api/villians', (request, response) => {
  response.json(
    [
      {
        title: 'ULTRON',
        image: '/images/ultron.png',
	description: 'Ultron was an artificial intelligence peacekeeping program created by Tony Stark from the decrypted code derived from the Mind Stone encased within Loki\'s own Scepter, retooled by himself with the help of Bruce Banner with the intent of protecting Earth from any and all domestic and extraterrestrial threats coming within the future.',
      link: 'https://marvel.com/universe/Ultron',
      linkText: 'More Info on ULTRON'


      },
      {
        title: 'LOKI',
        image: '/images/Loki.png',
        description: 'Loki Laufeyson is the son of Laufey, the ruler of the frost giants in Jotunhheim. Shortly after his birth, Loki was abandoned and left to die. Found by the Asgardian king Odin, he was taken to Asgarden and raised by Odin and his wife Frigga as an Asgardian prince, along with their biological son Thor.',
        link: 'https://marvel.com/universe/Loki',
        linkText: 'More Info on LOKI'
     
       },
       {
	 title: 'THANOS',
	 image: '/images/thanos.png',
	 description: 'The mad titan Thanos, a melancholy, brooding indiviual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.',
	 link: 'https://marvel.com/universe/Thanos',
   	 linkText: 'More Info on Thanos'
	
	},
	{
	  title: 'DR. DOOM',
	  image: '/images/doom.png',
	  description: 'Doom has a unique ability to exchange minds with other living creatures. He also posses other mystical abilities such as castings bolts of eldritch energy and envoking mystical entities for additional support. While empowered by the Haazereth, his powers are on par with those of Dr. Strange.',
	  link: 'https://marvel.com/universe/Doctor_Doom_%28Victor_von_Doom%29',
	  linkText: 'More Info on DR. DOOM'

	},

     ]
   )
})

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// Start server
let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
