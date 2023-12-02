<!-- deno-fmt-ignore-file -->

# quickportal

quickportal exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes.

### usage

```shells script
portal --from 4003
```

Thats it! It will connect to the nexus server, setup the portal, and tell you what url to use. This url will remain active for the duration of your session; so feel free to share it with others for happy fun time!

You can restart your local server all you want, quickportal is smart enough to detect this and reconnect once it is back.

### installation

You can download the executable from the latest release published [here](https://github.com/BURG3R5/quickportal/releases).

### nexus

By default quickportal connects to the `localtunnel.me` server. You can, however, easily set up and run your own nexus server. Check out [BURG3R5/quicknexus](https://github.com/BURG3R5/quicknexus) for the server component.