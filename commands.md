# Creating Commands

Commands are the most essential part of any addon. Your addon is not complete without one. Text commands let a user request the bot to do something, this is how a user communicates with the bot.

![Commands](/assets/img/commands1.png)

## Your first command

To create your a command:

1. Head to your addon folder and create a new folder called `commands`.
2. Inside the commands folder, create a category folder. Let's call it `Test Commands`.
3. Now inside the category folder, create your command file, call it `ping.js`.

Once you are done, the structure should look like this:

```
.
└── my-first-addon
    ├── commands
    │   └── Test Commands
    │       └── ping.js
    ├── index.js
    └── package.json
```

4. Open `ping.js` and type in this code:

```js
const { Command } = require("@botbind/klasa");

module.exports = class extends Command {
  run(msg) {
    return msg.send("Pong!");
  }
};
```

Here we are importing the `Command` class and exporting a new command. In this example, "Pong!" will be sent when we type in `!ping`. The command name is taken from the filename of the command.

Let's test it out:

![pingpong](/assets/img/commands2.png)

## Command Options

Klasa Commands can be customized to do pretty much anything you want. Here all the commands at once, you only have to add whichever ones you need to change:

```js
module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "ping",
      autoAliases: true,
      enabled: true,
      hidden: false,
      runIn: ["text", "dm"],
      cooldown: 0,
      cooldownLevel: "author",
      deletable: false,
      bucket: 1,
      aliases: [],
      guarded: false,
      nsfw: false,
      permissionLevel: 0,
      promptLimit: 3000,
      requiredPermissions: [],
      requiredSettings: [],
      subcommands: false,
      description: "",
      quotedStringSupport: false,
      usage: "",
      usageDelim: undefined,
      extendedHelp: "No extended help available."
    });
  }

  run(msg) {
    return msg.send("Pong!");
  }
};
```

Please refer to [Klasa Command Documentation](https://klasa.js.org/#/docs/klasa/master/class/Command) to learn more about these options.

## Folder Structure

You can control the name and categories of your commands using the file and folder structure. This not only organizes your code, but also looks pretty in the `?help` command.

```
.
├── commands
│   ├── Bad Commands
│   │   ├── Extra Bad
│   │   │   └── banall.js
│   │   ├── ban.js
│   │   ├── kick.js
│   │   └── mute.js
│   └── Good Commands
│       ├── invite.js
│       ├── unban.js
│       └── unmute.js
├── index.js
└── package.json
```

Let's assume you have this structure, Klasa will automatically generate this in the `?help` command.

![helpcommands](/assets/img/commands3.png)

## Command Arguments

Commands can also take one or more arguments, which lets us make dynamic commands based on the data user gives us.

Lets create a command that adds 3 numbers together:

```js
const { Command } = require("@botbind/klasa");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      usage: "<a:number> <b:number> <c:number>"
    });
  }

  run(msg, [a, b, c]) {
    return msg.send(a + b + c);
  }
};
```

We had to create a usage string, and add those arguments to `run()` method, so we can access it in the message.

### Usage Strings

Usage Strings structure:

```js
<Name:Type{Min,Max}/Regex/Flags>
```

- (`<>`) defines required arguments, the command will not run until these arguments are processed correctly.
- (`[]`) defines optional arguments, they're ignored when the input is incorrect and said message argument may drift to the next.
- **Name:** The name of the variable used in the parameter array.
- **Type:** The type of variable you are expecting (see [Usage Types](#usage-types))
- **Min, Max:** Minimum or Maximum for a given variable.
- **Regex, Flags:** A regular expression with double escaped \ to match against the argument. It is only valid for regex types of arguments, but gives you great flexibility on custom argument parsing. Flags are regex flags to apply to the regex pattern.
- **Special Repeat Tag:** [...] will repeat the last usage optionally until you run out of arguments. Useful for doing something like `<SearchTerm:str> [...]` which will allow you to take as many search terms as you want.

### Usage Types

|                       Type | Description                                                                                                                        |
| -------------------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
|                  `literal` | Literally equal to the name. This is the default type if none is defined.                                                          |
|                  `boolean` | A [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).                             |
| `float` , `num` , `number` | A [Floating Point Number](https://en.wikipedia.org/wiki/Floating-point_arithmetic).                                                |
|          `int` , `integer` | An [Integer](https://en.wikipedia.org/wiki/Integer).                                                                               |
| `reg` , `regex` , `regexp` | A [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).                   |
|           `str` , `string` | A [String](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String).                                  |
|                      `url` | A [URL](https://en.wikipedia.org/wiki/URL).                                                                                        |
|                  `channel` | A [TextChannel](https://discord.js.org/#/docs/main/master/class/TextChannel) instance returned from the channel ID or channel tag. |
|                    `guild` | A [Guild](https://discord.js.org/#/docs/main/master/class/Guild) instance returned from the guild ID.                              |
|                   `member` | A [GuildMember](https://discord.js.org/#/docs/main/master/class/GuildMember) instance returned from the member ID or mention.      |
|          `msg` , `message` | A [Message](https://discord.js.org/#/docs/main/master/class/Message) instance returned from the message ID.                        |
|                     `role` | A [Role](https://discord.js.org/#/docs/main/master/class/Role) instance returned from the role ID or mention.                      |
|         `user` , `mention` | A [User](https://discord.js.org/#/docs/main/master/class/User) instance returned from the user ID or mention.                      |
|                   `custom` | A custom argument resolver, takes a custom method as fourth parameter.                                                             |
|                    `store` | Any store, whichever resolves first in order of store types alphabetically.                                                        |
|                    `piece` | Any piece, whichever resolves first in order of piece types alphabetically.                                                        |
|          `cmd` , `command` | A {@link Command} instance returned from the command name or alias.                                                                |
|                    `event` | An {@link Event} instance returned from the event name.                                                                            |
|               `extendable` | An {@link Extendable} instance returned from the extendable name.                                                                  |
|                `finalizer` | A {@link Finalizer} instance returned from the finalizer name.                                                                     |
|                `inhibitor` | An {@link Inhibitor} instance returned from the inhibitor name.                                                                    |
|                 `language` | A {@link Language} instance returned from the language name.                                                                       |
|                  `monitor` | A {@link Monitor} instance returned from the monitor name.                                                                         |
|                 `provider` | A {@link Provider} instance returned from the provider name.                                                                       |
|                     `task` | A {@link Task} instance returned from the task name.                                                                               |
|                     `date` | A Date instance returned from the parse of a string into the Date constructor.                                                     |
|                 `duration` | A Date instance returned from the parsed human duration to milliseconds.                                                           |
|                     `time` | A Date instance returned from date or duration.                                                                                    |

::: tip Note
`Literal` is very useful in arguments with multiple options.
:::

### Examples

- We want a required argument that takes a user, and an optional argument for a role:

```
<targetUser:user> [targetRole:role]
```

- We want to accept `set`, `add`, `remove` or `reset` as required argument:

```
<set|add|remove|reset>
```

- We want to get a GuildMember instance, or its user ID if the user is not in the guild (Either a GuildMember resolvable or a string with a length of 17-18):

```
<targetMember:member|userID:string{17,18}>
```
