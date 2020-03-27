# Submitting your addon

So you have made your first addon that does something cool (I hope). Now lets learn how you can submit your amazing work to Bot Bind, where everyone can consume your great creation.

Before starting, make sure you have a developer account with enough addon submissions available. You can sign up for a dev profile at [botbind.com/dev](https://botbind.com/dev).

If you are good to go, lets start off with packing your addon as a tarball.

## Packaging

First, we recommend formatting your code by running the following command in the current folder.

```sh
npm run prettier
```

Then open your addon folder and pack it using npm.

```sh
cd botbind/addon-development/addons/my-first-addon
npm pack
```

::: warning Note
Your addon path might be different from what's shown above. Adjust it to what you have set up on your computer.
:::

You should now have a **my-first-addon.tgz**, which is ready for uploading.

## Uploading

1. Go to your Bot Bind [developer profile](http://botbind.com/dev), and click on **New Addon**.

![profile](/assets/img/profile.jpg)

2. Fill in all the required fields, and click submit.
3. In the addon manage page, go to the files page.
4. Click on Add version, and fill out all the fields. Here you have to upload the tgz file we created.

![profile](/assets/img/addon.jpg)

Thats it, you have uploaded your very first addon to the bot bind addon storage.

::: warning Do not publish your version
Only send a version for approval when you have developed something useful. You cannot delete an addon once its published.
:::
