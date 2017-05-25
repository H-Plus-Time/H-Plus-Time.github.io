# hplustime.com

[![wercker status](https://app.wercker.com/status/8640b33e42289cbfc89635bbc365789b/s/master "wercker status")](https://app.wercker.com/project/byKey/8640b33e42289cbfc89635bbc365789b)

## Deployment
Typically this is handled in the wercker.yml, but if you need to do it manually, run:
```bash
polymer build
surge build/default hplustime.com --token=$SURGE_TOKEN
```

## Development
Stock standard - run:
```bash
polymer serve
```

To run with HTTP/2,
```bash
polymer serve -P h2
```

To check service worker performance (particularly if you're running lighthouse tests locally):
```bash
polymer build
polymer serve build/default
```

Unfortunately build takes a *long* time, so its not particularly worth it to rig up a browser-sync setup - the realistic workflow is to do a bunch of development, build, test with lighthouse, fix *all* the things lighthouse suggests, and try again.

## Auditing
TBC