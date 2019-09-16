# Quick Start

Bot Bind is not only a platform for creating Discord Bots, but also a community where server owners and addon developers benefit from each other.

![discordjs](https://discord.js.org/static/logo.svg =150x100)
![klasa](https://klasa.js.org/static/klasa.svg =100x100)

Bot Bind uses a modified version of the powerful [Klasa](https://github.com/botbind/klasa) framework for discord.js to run the bots and the addons within it. The addon creation and submission process is quite simple and straight forward. We will guide through the process from start to the end.

::: tip But, what if I don't know Javascript?
All botbind bots run on NodeJS, and we currently only support Javascript for addons.
:::

## Prerequisites

- Any code editor (We recommend [VS Code](https://code.visualstudio.com))
- NodeJS 10+ ([Download](https://nodejs.org/en/download))
- Bot Bind Developer account ([Sign Up](https://botbind.com/dev))

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

That's it, simple isn't it? You just created your first addon

## Submitting

So far you have made a simple addon that responds to a command. Now lets learn how you can submit your amazing addon to Bot Bind, where everyone can consume your great creation.

If you are working on something more complex then what we did above, you may want to test how it works before submitting it. Please read about [testing your addon here](/testing).

Before starting, make sure you have a developer account with enough addon submissions available. You can sign up for a dev profile at [botbind.com/dev](https://botbind.com/dev).

If you are good to go, lets start off with packing your addon as a tarball.

1. Open your addon folder and pack it using npm.

```
cd path/to/my-first-addon
npm pack
```

You should now have a **my-first-addon.tgz**, which is ready for uploading.

2. Go to your Bot Bind developer profile page, and click on **New Addon**.

![profile](/assets/img/profile.jpg)

3. Fill in all the required fields, and click submit.
4. In the addon manage page, go to the files page.
5. Click on Add version, and fill out all the fields. Here you have to upload the tgz file we created.

![profile](/assets/img/addon.jpg)

Thats it, you have uploaded your very first addon to the bot bind addon storage.

::: warning Do not publish your version
Only send a version for approval when you have developed something more useful. You cannot delete an addon once its published.
:::

Feel free to explore the rest of the documentation to figure out where to go from here. You can join our [Discord server](https://discordapp.com/invite/8y35DgW) if you unsure about something.
