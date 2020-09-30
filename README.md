# Wackbot
This is Wackbot. He is but a simple Discord bot. But Wackbot needs your help. He wants to become the best Discord bot ever, and in his eyes, that means having the most commands out of any Discord bot in existence. They could be helpful or absolutely useless commands, anything helps. Please join us in making legendary Discord bot history with Wackbot.

## How to add a command to Wackbot
We want to make adding commands as easy as possible so more people of different skill levels are willing to contribute. **You don't need programming experience to add a simple command!** All you need to do is follow a simple set of instructions.

If you have the knowledge, feel free to add more complex commands! You can use any (free) API as well.

Before you get started, a few ground rules you must follow to get your command added:
* Follow the indentation of the previous commands. If something is indented improperly or the wrong syntax is used, you will be asked to fix it.
* Make sure the phrase you use for your command is not the same as anyone else's (or it won't work). CTRL+F is your friend
* All commands will be reviewed before being added to Wackbot. Don't be ridiculous.
* Don't edit any previous code/commands, just add your own

The following subsections detail a contribution tutorial aimed towards beginners. Even if you're familiar with GitHub and/or Discord JS development, it is still worth a quick read so you can understand the project's etiquette.

### Tutorial
In this tutorial you will learn how to add a simple command to Wackbot. A "simple" command is essentially one where you give a word of input, and the bot spits out a line of output. For example, Wackbot's first command takes in "ping" and sends "pong!" back to the user. *Make sure you have a GitHub account before starting the tutorial.*

### First Steps
First you will need to get into the file editor. Luckily, GitHub allows you to edit repository files in your browser. All you need to do is click on `index.js` on the main page, and look for the pencil (edit) icon directly above and to the right of the file text.

![image](https://user-images.githubusercontent.com/72100791/94601261-3b01f780-0261-11eb-92ed-528c5b8b5265.png) <br/>
*Click on the pencil icon (highlighted) to edit the file*

In order to edit the file, GitHub makes a copy of the repository that you are allowed to make changes to and stores it on your account. This is called a **fork**.

Now you should see and be able to edit the `index.js` code in the text editor.
### Adding the Command
In the text editor, navigate to line 25. `switch(command)` signifies the start of the "switch" statement that handles incoming messages. Take note of the structure of the following lines of code. 

```js
case "ping":
  message.channel.send("pong!");
  break;
```

The keyword  `case` followed by "ping" and a colon is essentially telling the bot: "if the user types 'ping', execute these lines of code. `message.channel.send("pong!")`, makes the bot send "pong!" back. Finally, the keyword `break` tells the bot to stop executing code, as it has already done what it was supposed to.

For a simple send + receive command, "ping" and "pong!" could be replaced by anything of your choosing. For example, if I wanted Wackbot to respond "Cars 2" when the user types "bestmovie", I would add:

```js
case "bestmovie":
  message.channel.send("Cars 2");
  break;
```

As long as you follow the syntax from above, only replacing the input and output phrases, you will have a working command. When adding a command, type it directly after the last command in the switch-case block. This is what the previous example would look like in `index.js`:

![image](https://user-images.githubusercontent.com/72100791/94719064-a232b100-0320-11eb-8436-77a940747b71.png) </br>
*The "bestmovie" command begins right after the last `break` and ends before the closing bracket*

When you are done typing your command(s), please also change the counter for total commands (Line 24) so it is up to date.

### Submitting the Command to Wackbot

To save your additions, scroll to the bottom of the page and click on "Propose Changes." This will save the edited `index.js` file to your copy of Wackbot only. In order to submit your changes to the official Wackbot, you need to create a **pull request** to merge your fork with Wackbot.

After pressing the green "Propose Changes" button, you will see a screen that looks like this:
![image](https://user-images.githubusercontent.com/72100791/94735142-45db8b80-0338-11eb-8ecd-38f38b8acfee.png) </br>

GitHub will automatically suggest a pull request (PR) for you after editing Wackbot. Click on "Create Pull Request" on the right-hand side to start drafting a PR. In general, a good PR should be very descriptive of the issue you are fixing or feature you are adding. For Wackbot, all you need to do is title it with the command(s) you added, and describe what they do in the description box. For example, here is a proper PR for the 'bestmovie' command.

![image](https://user-images.githubusercontent.com/72100791/94736284-f8f8b480-0339-11eb-86d8-c77cd4abecfc.png) </br>
*The PR should have a title and description formatted like this.*

Once you are done, hit "Create pull request" and you are good to go!

You can find your PR in the "Pull requests" tab of the Wackbot repository. This is where you will get notified if your addition got merged or needs work. Congratulations and thanks for contributing to the greatest Discord bot of all time (maybe). 

## Wackbot Deployment
Wackbot has yet to be deployed on an official server. This section will be updated if Wackbot is officially launched.

## Use Wackbot in your server
To learn the basics behind Discord bots and how to deploy them, follow the tutorial over at my repository [SuperSimpleBot](https://github.com/IMACULGY/SuperSimpleBot). If you want to use Wackbot, download Wackbot's files instead of SuperSimpleBot's files when the tutorial says to do so.

### Chaos Mode
If you were to remove the "!" from the `"prefix"` line of `config.json` the bot will no longer require a prefix to be used. In other words, any message sent in your server is scanned by the bot for command phrases ("chaos mode"). You can also change the prefix to the character/phrase of your choice in this manner.

## Feedback
Please offer suggestions to make the README better if you have any.

#### DISCLAIMER: The token in the `config.json` file is a placeholder and leads nowhere. To be safe, don't share your access token with others.

It's good to be back.
