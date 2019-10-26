# Testing

## Setup a local bot

Testing and debugging is an important key step in creating addons. Before submitting an addon to the marketplace, you have to make sure it works well on your machine.

Lets setup a local Discord bot and install our addon in it for testing.

1. Create a new folder separate from all your addons. Name it **discord**.
2. Open the **discord** folder in VSCode. Then right click on it and select **Open in Terminal**.
3. Run these commands to setup the folder and install all the dependencies for the bot:

```
npm init -y
npm i discordjs/discord.js#master @botbind/klasa
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

Alrighty, now our discord.js bot is all ready to go.

## Linking your addon

Now, lets install our addon we created to the bot.

1.  Link your addon to your bot. Type this in the terminal (add your correct folder path):

```
npm link path/to/my-first-addon
```

Now, you should see my-first-addon in your bot's **package.json** file.

2. Now you can call your addon in your bot. Open **index.js** and this before `new Client()`:

```js
Client.use(require("my-first-addon"));
```

3. Okay, now the final step: Execute this command to run your bot:

```
node index
```

You should now see your bot online in Discord. Now go ahead and test whatever you just coded in the addon.

![Discord](/assets/img/discord.jpg)
