# Quick Start

Bot Bind is not only a platform for creating Discord Bots, but also a community where server owners and addon developers benefit from each other.

![discordjs](https://discord.js.org/static/logo.svg =150x100)
![klasa](https://klasa.js.org/static/klasa.svg =100x100)

Bot Bind uses a modified version of the powerful [Klasa](https://github.com/botbind/klasa) framework for discord.js to run the bots and the addons within it. The addon creation and submission process is quite simple and straight forward. We will guide through the process from start to the end.

::: tip But, what if I don't know Javascript?
All Bot Bind bots run on NodeJS, and we currently only support Javascript for addons.
:::

## Prerequisites

- Any code editor (We recommend [VS Code](https://code.visualstudio.com))
- NodeJS 10+ ([Download](https://nodejs.org/en/download))
- Git ([Download](https://git-scm.com/downloads))
- Bot Bind Developer account ([Sign Up](https://botbind.com/dev))

## Setup Environment

1. First, create a working folder somewhere on your computer, call it **botbind**.
2. Open your Command Prompt or Terminal and navigate to your working folder.

```sh
C:\Users\docs> cd Desktop
C:\Users\docs\Desktop> cd botbind
C:\Users\docs\Desktop\botbind>
```

It should look something like this, depends on where your folder is located.

3. Using your terminal, install the necessary files:

```sh
# Clone repo from github
git clone https://github.com/botbind/addon-development.git

# Go to the cloned folder
cd addon-development

# install the dependencies
npm install
```

::: warning Note
If you get any errors after executing the commands above, make sure you have the [Prerequisites](#prerequisites) installed
:::

4. Once done, your directory structure to look similar to this:

```
.
└── addon-development
    ├── addons
    │   └── my-first-addon
    │       ├── commands
    │       │   └── helloworld.js
    │       ├── index.js
    │       └── package.json
    ├── bot.js
    ├── package-lock.json
    └── package.json
```

You are now ready to develop addons.

## Testing your first addon

1. Go to [Discord Developer Portal](https://discordapp.com/developers/applications/) and create a new Application.
2. Enable Bot in the application and copy the **Bot Token**.

![DevPortal](/assets/img/devportal.png)

::: warning
Do not reuse the token you used to create a bot on botbind.com
:::

3. Open `bot.js` and replace your token that you got from Step 2.
4. Invite the "Test bot" you created to a Discord server, and start the bot using the terminal:

```sh
node bot
```

::: warning Note
If this gives you can error, make sure the terminal is in the `addon-development` folder.
:::

5. You should now see your bot online in Discord. Now go ahead and type in `?helloworld` to check if everything is working fine.

![Discord](/assets/img/discord.png)

Feel free to explore the rest of the documentation to figure out where to go from here. You can join our [Discord server](https://discordapp.com/invite/8y35DgW) if you unsure about something.
