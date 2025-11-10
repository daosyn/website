# daosyn.info

[link to the site](https://daosyn.info)

## set up

`npm i`

## run

`npm run dev` starts server with hot reload on http://localhost:1250

## dev

`npm run build` for production and `npm run lint` to run linter

## deploy

a push to main will build and deploy via github workflows

## static files

- `bash <(curl -fsL https://daosyn.info/install)` sets up new machines
- `curl https://daosyn.info/pubkey.asc | gpg --import` imports my gpg key

## to-do

- move loading and resize events to content container/app level
- add loading to photos (solved by above)
- make about and home more dynamic (possibly solved by above-above)
- some blogs and animations

