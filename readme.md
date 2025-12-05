# daosyn.info

[link to the site](https://daosyn.info)

## running

```bash
npm i
npm run dev
```

## deploying

uses github actions. see `.github/workflows/deploy.yml`

## static files

- `bash <(curl -fsL https://daosyn.info/install)` sets up new machines
- `curl https://daosyn.info/pubkey.asc | gpg --import` imports my gpg key

## to-do

- move loading and resize events to content container/app level
- add loading to photos (solved by above)
- make about and home more dynamic (possibly solved by above-above)
- some blogs and animations

