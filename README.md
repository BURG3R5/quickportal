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

### server

quickportal is backwards-compatible with the [localtunnel](https://github.com/localtunnel/localtunnel) project (which inspired this one). By default quickportal connects to the `localtunnel.me` server.

You can, however, easily set up and run your own *nexus* server, with additional QoL features like port restriction and portal deletion. Check out [BURG3R5/quicknexus](https://github.com/BURG3R5/quicknexus) for the server component.

### license

Copyright (C) 2025 Aditya Rajput & other contributors

This software is licensed under the **Affero GPL v3**. You should have received [a copy](https://github.com/BURG3R5/quickportal/blob/master/LICENSE) of the Affero GPL v3 along with this program. If not, you can visit the original [here](https://www.gnu.org/licenses/agpl-3.0.html#license-text).
