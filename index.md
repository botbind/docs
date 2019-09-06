# Quick Start

Bot Bind is not only a platform for creating Discord Bots, but also a community where server owners and addon developers benefit from each other.

<img src="https://discord.js.org/static/logo.svg" width="150" height="100">
<img src="https://klasa.js.org/static/klasa.svg" width="100" height="100">

Bot Bind uses a modified version of the powerful [Klasa](https://github.com/botbind/klasa) framework for discord.js to run the bots and the addons within it. The addon creation and submission process is quite simple and straight forward. We will guide through the process from start to the end.

::: tip But, what if I don't know Javascript?
All botbind bots run on NodeJS, and we currently only support Javascript for addons.
:::

## Prerequisites

- Any code editor (We recommend [VS Code](https://code.visualstudio.com))
- NodeJS 10+ ([Download](https://nodejs.org/en/download))
- Bot Bind Developer account ([Sign Up](http://botbind.com/dev))

## Setup Environment

1. First, lets create an empty folder somewhere called **Addons**. Then inside that folder, create a new folder, lets call it **my-first-addon**.
2. Now lets open that folder in your favorite code editor. In this guide, we will use VS Code.
3. In VS Code go to **File** > **Open Folder**. Then select the **Addons** folder. You should see the **my-first-addon** in the sidebar.
4. Great, now right click on **my-first-addon** in the editor, and select **Open in terminal**.
5. Check if you have NodeJS 10 or above by typing this in the terminal:

```
node --version
```

6. Finally, initialize your addon **package.json**

```
npm init -y
```

It will look something like this:

![VSCode](/assets/img/vscode.jpg)

## Creating your first addon

Lets create a tiny addon that responds to a bot command.

1. Create a new file inside the **my-first-addon** folder. Name it **index.js**.
2. Paste this snippet of code inside your **index.js**:

```js
const {
  Client: { plugin }
} = require("@botbind/klasa");

module.exports = {
  [plugin]() {
    this.commands.registerCoreDirectory(`${__dirname}/`);
  }
};
```

3. Now lets create a simple command for your addon. Create a folder called **commands**.
4. Inside that folder, create another folder called **Awesome Addon**.

![VSCode1](/assets/img/vscode1.jpg)

5. And inside that folder, create a file called **helloworld.js**.
6. Add this snippet of code to your **helloworld.js**.

```js
const { Command } = require("@botbind/klasa");

module.exports = class extends Command {
  run(msg) {
    return msg.send(`Hi ${msg.author.username}!`);
  }
};
```

That's it, simple isn't it?

## Testing

We created a command, its nice and all. But how do we know if it works or not? Lets add it to a bot and find out.

1. Create a new folder separate from all your addons. Name it **discord**.
2. Open the **discord** folder in VSCode. Then right click on it and select **Open in Terminal**.
3. Run these commands to setup the folder and install all the dependencies for the bot:

```
npm init -y
npm i discordjs/discord.js @botbind/klasa
```

4. Create a new file called **index.js** in the bot folder.
5. Open **index.js** and add this snippet of code:

```js
const { Client } = require("@botbind/klasa");

new Client({
  prefix: "!"
}).login("your-bot-token");
```

6. Replace `your-bot-token` with your own Discord Application Bot token.

Alrighty, now our discord.js bot is all ready to go. Now, lets install our newly created addon we just created to test.

7.  Link your addon to your bot. Type this in the terminal (add your correct folder path):

```
npm link path/to/my-first-addon
```

Now, you should see my-first-addon in your bot's **package.json** file.

8. Now you can call your addon in your bot. Open **index.js** and this before `new Client()`:

```js
Client.use(require("my-first-addon"));
```

9. Okay, now the final step: Execute this command to run your bot:

```
node index
```

If you managed to follow along this far, you should see your bot online in Discord. Open your bot's DM and type `!helloworld`. You should be greeted by a response.

![Discord](/assets/img/discord.jpg)

Smile! you just created your first Bot Bind addon.

## Submitting to Bot Bind

So far you have made a simple addon that responds to a command. And made a bot that is used to test that addon and all the future addons you may create.
