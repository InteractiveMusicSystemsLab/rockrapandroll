# Rock Rap 'N Roll

This is a fan-made, unofficial port of the now-discontinued Rock Rap N' Roll, a music education game authored by Barry Schuler, Nick Tenbrock and Gary Levenberg at Medior Inc, and published by Paramount Interactive. Released in 1993 RRR allows the user to construct songs in various styles, using studio produced music clips. Mega Rock Rap N' Roll, demonstrated in this app, is an extension of RRR that included more music genres. Convolution reverb was added using the Web Audio ConvolverNode.  Impulse responses used in this project can be found at https://fokkie.home.xs4all.nl/IR.htm

This is an independent recreation. All original artwork and sounds remain the property of their respective owners. Contact gr-ratlab@wpi.edu for more information. Developed by pelrahjsp@gmail.com. 

Starting the game:

1. npm install
2. npm start
3. From Chrome, navigate to http://localhost:8080

Deploying to GitHub Pages:

1. Run `npm run build:data` if you change anything under `public/genres` so `public/data.json` stays fresh.
2. Commit and push the changes to `main`.
3. In GitHub, open Settings → Pages and set Source to "Deploy from a branch", Branch to `main`, and Folder to `/` (root).
4. After Pages finishes building, your site will be available at `https://<your-username>.github.io/rockrapandroll/` (or your custom domain).
