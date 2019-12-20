# Creating Events

Discord.js and Klasa contain a large number of events that can trigger under certain situations. You can listen to those events and run a function every time they are emitted in a bot.

## Your first Event

To create an event:

1. Head to your addon folder and create a new folder called `events`.
2. Inside the events folder, create a new file called `welcome.js`.

Once you are done, the structure should look like this:

```
.
└── my-first-addon
    ├── events
    │   └── welcome.js
    ├── index.js
    └── package.json
```

3. Open `welcome.js` and type in this code:

```js
const { Event } = require("@botbind/klasa");

module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      event: "GuildMemberAdd"
    });
  }
  run(member) {
    member.send("hello!");
  }
};
```

Here we are importing the `Event` class and exporting a new Event. In this example, we are listening for `GuildMemberAdd`. That means whenever a new member joins the server, this will send them a DM.

## Event Options

Here all the options at once, you only have to add whichever ones you need to change:

```js
const { Event } = require("@botbind/klasa");

module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      name: "yourEventName",
      event: "theEventToListenTo",
      emitter: this.client,
      enabled: true,
      once: false
    });
  }

  run(...params) {
    return;
  }
};
```

## Event Types

| Event Name                        | Description                                                                                   | Parameter returned      |
| --------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| **channelCreate**                 | Emitted whenever a channel is created.                                                        | channel                 |
| **channelDelete**                 | Emitted whenever a channel is deleted.                                                        | channel                 |
| **channelPinsUpdate**             | Emitted whenever the pins of a channel are updated.                                           | channel, time           |
| **channelUpdate**                 | Emitted whenever a channel is updated - e.g. name change, topic change.                       | oldChannel, newChannel  |
| **clientUserGuildSettingsUpdate** | Emitted whenever the client user's settings update.                                           | clientUserGuildSettings |
| **clientUserSettingsUpdate**      | Emitted when the client user's settings update.                                               | clientUserSettings      |
| **debug**                         | Emitted for general debugging information.                                                    | info                    |
| **disconnect**                    | Emitted when the client's WebSocket disconnects and will no longer attempt to reconnect.      | event                   |
| **emojiCreate**                   | Emitted whenever a custom emoji is created in a guild.                                        | emoji                   |
| **emojiDelete**                   | Emitted whenever a custom guild emoji is deleted.                                             | emoji                   |
| **emojiUpdate**                   | Emitted whenever a custom guild emoji is updated.                                             | oldEmoji, newEmoji      |
| **error**                         | Emitted whenever the client's WebSocket encounters a connection error.                        | error                   |
| **guildBanAdd**                   | Emitted whenever a member is banned from a guild.                                             | guild, user             |
| **guildBanRemove**                | Emitted whenever a member is unbanned from a guild.                                           | guild, user             |
| **guildCreate**                   | Emitted whenever the client joins a guild.                                                    | guild                   |
| **guildDelete**                   | Emitted whenever a guild is deleted/left.                                                     | guild                   |
| **guildIntegrationsUpdate**       | Emitted whenever a guild integration is updated                                               | guild                   |
| **guildMemberAdd**                | Emitted whenever a user joins a guild.                                                        | member                  |
| **guildMemberAvailable**          | Emitted whenever a member becomes available in a large guild.                                 | member                  |
| **guildMemberRemove**             | Emitted whenever a member leaves a guild, or is kicked.                                       | member                  |
| **guildMembersChunk**             | Emitted whenever a chunk of guild members is received (all members come from the same guild). | members, guild          |
| **guildMemberSpeaking**           | Emitted once a guild member starts/stops speaking.                                            | member, speaking        |
| **guildMemberUpdate**             | Emitted whenever a guild member changes - i.e. new role, removed role, nickname.              | oldMember, newMember    |
| **guildUnavailable**              | Emitted whenever a guild becomes unavailable, likely due to a server outage.                  | guild                   |
| **guildUpdate**                   | Emitted whenever a guild is updated - e.g. name change.                                       | oldGuild, newGuild      |
| **message**                       | Emitted whenever a message is created.                                                        | message                 |
| **messageDelete**                 | Emitted whenever a message is deleted.                                                        | message                 |
| **messageDeleteBulk**             | Emitted whenever messages are deleted in bulk.                                                | messages                |
| **messageReactionAdd**            | Emitted whenever a reaction is added to a cached message.                                     | messageReaction, user   |
| **messageReactionRemove**         | Emitted whenever a reaction is removed from a cached message.                                 | messageReaction, user   |
| **messageReactionRemoveAll**      | Emitted whenever all reactions are removed from a cached message.                             | message                 |
| **messageUpdate**                 | Emitted whenever a message is updated - e.g. embed or content change.                         | oldMessage, newMessage  |
| **presenceUpdate**                | Emitted whenever a guild member's presence changes, or they change one of their details.      | oldMember, newMember    |
| **rateLimit**                     | Emitted when the client hits a rate limit while making a request                              | rateLimitInfo           |
| **ready**                         | Emitted when the client becomes ready to start working.                                       |                         |
| **reconnecting**                  | Emitted whenever the client tries to reconnect to the WebSocket.                              |                         |
| **resume**                        | Emitted whenever a WebSocket resumes.                                                         | replayed                |
| **roleCreate**                    | Emitted whenever a role is created.                                                           | role                    |
| **roleDelete**                    | Emitted whenever a guild role is deleted.                                                     | role                    |
| **roleUpdate**                    | Emitted whenever a guild role is updated.                                                     | oldRole, newRole        |
| **typingStart**                   | Emitted whenever a user starts typing in a channel.                                           | channel, user           |
| **typingStop**                    | Emitted whenever a user stops typing in a channel.                                            | channel, user           |
| **userNoteUpdate**                | Emitted whenever a note is updated.                                                           | user, oldNote, newNote  |
| **userUpdate**                    | Emitted whenever a user's details (e.g. username) are changed.                                | oldUser, newUser        |
| **voiceStateUpdate**              | Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/un-mutes.    | oldMember, newMember    |
| **warn**                          | Emitted for general warnings.                                                                 | info                    |
| **webhookUpdate**                 | Emitted whenever a guild text channel has its web hooks changed.                              | channel                 |
