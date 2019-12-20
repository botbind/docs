# Creating Monitors

Monitors are similar to commands, but instead of running on a command, they run on every message sent. There a lot of useful cases for this feature.

## Your first Monitor

To create a monitor:

1. Head to your addon folder and create a new folder called `monitors`.
2. Inside the monitors folder, create a new file called `profanity.js`.

Once you are done, the structure should look like this:

```
.
└── my-first-addon
    ├── monitors
    │   └── profanity.js
    ├── index.js
    └── package.json
```

3. Open `profanity.js` and type in this code:

```js
const { Monitor } = require("@botbind/klasa");

module.exports = class extends Monitor {
  async run(msg) {
    if (!msg.guild) return; // Ignore DM

    if (!msg.content.includes("shit")) return;

    if (msg.deletable) msg.delete();
  }
};
```

Here we are importing the `Monitor` class and exporting a new Monitor. In this example, whenever a message comes through that contains the word "Shit" gets deleted.

## Monitor Options

Here all the options at once, you only have to add whichever ones you need to change:

```js
module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      name: "profanity",
      enabled: true,
      ignoreBots: true,
      ignoreSelf: true,
      ignoreOthers: true,
      ignoreWebhooks: true,
      ignoreEdits: true,
      ignoreBlacklistedUsers: true,
      ignoreBlacklistedGuilds: true,
      allowedTypes: ["DEFAULT"]
    });
  }

  async run(msg) {
    return;
  }
};
```

You can find all the different types of `allowedTypes` at [Discord.js Documentation](https://discord.js.org/#/docs/main/master/typedef/MessageType).
