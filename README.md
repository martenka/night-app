# Documentation
## Estonian
### Rakenduse kasutamise õpetus

Algselt programmi käivitades on vaikeasukohaks Tartu (Saab muuta INITIAL_LATITUDE, INITIAL_LONGITUDE abil.
Algselt pole laetud ka koidiku ja öö pikkuse andmeid.

Andmeid saab uuendada vajutades kuhugi kaardil, mille järel tekib vajutatud kohta 
märge (popup), millel vajutades näeb vastavaid andmeid. Manuaalselt andmeid sisestades uuendatakse ka märke asukohta.

Manuaalselt koordinaatide ja aja sisestamiseks tuleb üleval ribal sisestada koordinaadid
numbritena (nt 50.52) ning kuupäev vormingus `YYYY-MM-DD HH:mm`, `YYYY-MM-DD` või jätta väli tühjaks.  

Kui kellaaega mitte sisestada, kasutatakse hetke lokaalset aega.  
Kui jätta väli tühjaks siis kasutatakse hetke kuupäeva ja kellaaega.  

Kaardil vajutades kasutatakse alati hetke kuupäeva ja kellaaega.

Öine ala on kaardil joonistatud tumedamana.


### Üldine

Suure osa ajast võttis materjalide lugemine  
ja Reacti/Typescripti meeldetuletamine.  
Öiseks perioodiks sai lõpuks valitud päikeseloojangu ja tõusu vaheline aeg, sest kodutöö  
kohe esimes lõigus on nii öeldud. Esimese hooga kasutasin selleks "nautical twilight" aegu,  
sest tundus, et alates sellest ajast läheb liiga pimedaks, et väljas mugavalt opereerida.   

### Probleeme

Kõige probleemsem oli öise ala joonistamisega seonduv. Minu lõpplahendus oli kasutada Terminator pluginat  
Leafleti jaoks, millele tegin ümber oma *wrapper* komponendi (NightArea). Lisaks tegin Terminator  
komponendile ka oma TypeScript tüübid, kuna plugin on alselt JavaScript baasil.

### Kasutatud teegid ja API-d
1. TypeScript
2. React
3. [Leaflet](https://leafletjs.com/)
4. [Leaflet-Terminator](https://github.com/joergdietrich/Leaflet.Terminator)
   1. Joonistab öist ala
5. [Dayjs](https://day.js.org/)
6. [Sunset/sunrise api](https://sunrise-sunset.org/api)

## English
### How to use the app

Initial location is Tartu, Estonia (Can be changed with INITIAL_LATITUDE, INITIAL_LONGITUDE).
At first data from the API isn't loaded in.

Data can be updated by clicking somewhere on the map after which new data is loaded in from the API  
and new popup marker is created. Clicking on the marker shows the info  
Manually inputting the location also updates the marker.

Use the bar at the top to enter coordinates and the date manually. Location must be in decimal format (e.g 50.52) and the date/time in format `YYYY-MM-DD HH:mm`, `YYYY-MM-DD` or empty.

If the time is omitted, current localtime is used.
If the date field is completely empty then current local date and time are used.

Clicking on the map always uses current date and time.

The night area is indicated by the darker area.


### General

Reading different documentations took a big part of the development time. 
I chose time time between sunset and sunrise for the night period, as it was said so in the homework document. At first I chose "nautical twilight" for the calculations,  
as it seemed that was the time when it actually got too dark to operate outside well.

### Problems

The biggest problem was drawing the night area. My solution was (after researching) to use Leaflet-Terminator plugin 
, for which I made my own wrapper component. (NightArea). I also created TypeScript types for the plugin as it was originally JavaScript based.

### Used libaries and APIs
1. TypeScript
2. React
3. [Leaflet](https://leafletjs.com/)
4. [Leaflet-Terminator](https://github.com/joergdietrich/Leaflet.Terminator)
   1. For the night area
5. [Dayjs](https://day.js.org/)
6. [Sunset/sunrise api](https://sunrise-sunset.org/api)

# Running the app
Run `npm install` before starting the app for the first time  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
