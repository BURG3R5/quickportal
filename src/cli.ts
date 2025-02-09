import { yargs } from "./dependencies.ts";
import Arguments from "./types/arguments.ts";
import { validateInputAsPort } from "./utils/validation.ts";

const version = "0.0.1";

let command, argv: Arguments;

// create cli
{
    command = yargs(Deno.args)
        .usage(
            "Usage: portal --from PORT [--as SUBDOMAIN] [--to NEXUS-HOST] [...]",
        )
        .options("from", {
            describe: "local port at which your application is running",
            type: "number",
        })
        .options("as", {
            describe: "subdomain to request from the nexus",
            type: "string",
        })
        .options("to", {
            default: "https://localtunnel.me",
            describe: "nexus server to use for forwarding",
            type: "string",
        })
        .options("local-alias", {
            alias: "a",
            default: "localhost",
            describe: "which alias of 'localhost' should be used " +
                "(for instance, 0.0.0.0 or 127.0.0.1)",
            type: "string",
        })
        .option("open", {
            alias: "o",
            describe: "open the portal URL in your browser",
            type: "boolean",
        })
        .option("log", {
            alias: "l",
            describe: "log request information to the console",
            type: "boolean",
        })
        .config()
        .help()
        .version(version);

    argv = command.parseSync();
}

// validate input
{
    const error = validateInputAsPort(argv.from);
    if (error) {
        console.error(error);
        Deno.exit(1);
    }
}

// connect
{
    // TODO: connect
}

Deno.addSignalListener("SIGINT", Deno.exit);
