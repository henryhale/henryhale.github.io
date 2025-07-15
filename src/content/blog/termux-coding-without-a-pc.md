---
title: "Termux: Coding Without A Personal Computer"
description: "A deep dive into coding on your android device with Termux"
date: "Jul 12 2025"
draft: false
---

![](https://androidguias.com/wp-content/uploads/2025/04/Termux.png)
_Image from Androidguias - [view source](https://pt.androidguias.com/Como-rodar-Linux-no-seu-Android-passo-a-passo/)_

## Introduction

Early this year, I was always on the road without access to my personal computer.
I found my self in a situation where I need to fix a bug in one of my projects; [PixSim](/projects/pixsim), a pixel-based led matrix simulator. Having used mobile development environments like Acode in my early programming days, I quickly ran to Google Play Store
in search for a modern tool that supports Git. Well, that didn't work out well and so I googled how to develop/program software on an Android phone.

A large number of results(blog posts, Reddit posts and comments) were all pointing to [Termux](https://termux.dev/).
Of course I knew Android OS is based on Linux kernel but running a complete desktop development environment was completely new to me.
As the [Termux Wiki](https://wiki.termux.com/wiki/Main_Page) suggests, you can run a Linux distro like Ubuntu, Debian, Alpine or any other using [proot-distro](https://wiki.termux.com/wiki/PRoot#Installing_Linux_distributions).
At this point, this was already too much for my current problem, the default Linux environment provided by Termux was enough.

With that said, the rest of this post will focus on how to setup a mobile development workflow using your Android phone.

## Use cases

In case you were wondering, who is this for? Well, if any of the following cases clearly describes you;

- don't own a personal computer - laptop or desktop
- use my friend's computer to code without completely exposing my project via copy and paste
- can access thin clients or desktop computers at school/library/internet cafe with network access via USB or WiFi
- want to run software on your mobile like keeping track of your phone's location or personal data collection tool in your hands
- run AI models (small language models) locally via [Ollama](https://ollama.com)
- access your virtual private server (VPS) or any server/host via SSH
- home lab, programming and scripting with Bash/Python/JavaScript or any language of your choice

There exists a large set of possibilities only that I can't mention each one of them.
Almost everything you can do on your laptop/desktop can be done on Termux.

## Preresquities

To get started, you need to install Termux from [FDroid](https://github.com/termux/termux-app/releases/) or [GitHub releases](https://github.com/termux/termux-app/releases/latest).

Once installed, the first thing you want to do is update and upgrade packages list using `pkg` - the Termux's primary package manager.

```sh
$ pkg update && pkg upgrade
```

Next, neccessary development packages like `git` and `ssh` are installed for GitHub or remote server access;

```sh
$ pkg install git ssh
```

Finally, drop in your dotfiles and you are ready to work like you do on your pc. Otherwise, configure `git` and `ssh` or install your desired packages if any.

## Setup - Software

In my scenario, fixing the bug was the goal. And so the command line interface was enough.
This section is divided into two sections, using command line interface or graphical user interface.

### Language

Install your favorite programming language compiler or runtime.

- For modern web development, install [Nodejs](https://nodejs.org) using `pkg install nodejs`
- Golang devs, install [Go](https://go.dev) using `pkg install golang`
- Pythonistas, [install Python](https://wiki.termux.com/wiki/Python) using `pkg install python`
- C/C++, use `pkg install gcc` or `pkg install clang`

For any other language, check out [what you can do with Termux](https://wiki.termux.com/wiki/Getting_started#What_can_I_do_with_Termux).

### TUI

At some point down the road, you will want to write code. Termux comes with a default editor, `GNU Nano` - my dearest text editor.
Check if it is installed with:

```sh
$ nano --version
```

Try it to create `myfile.c` using:

```sh
$ nano --linenumbers --indicator --mouse --tabsize=2 --softwrap myfile.c
```

The above command opens GNU Nano editor with line number on the left, a scroll indicator, mouse support, tab size of 2 spaces and displays overlong lines on multiple rows.

This is not limited to GNU Nano, you can install any other command line editor like

- Vim using: `pkg install vim`
- [Neovim](https://neovim.io) using: `pkg install nvim`
- [Micro](https://micro-editor.github.io/) using: `pkg install micro`

Once installed, you are ready to develop software on your Android phone.

### GUI

For those who love GUI text editors, well there aren't many options in this space. Additional networking setup is required since Termux does not provide a GUI by default.

The [coder team](https://coder.com) made [code-server](https://github.com/coder/code-server) - an open source VSCode-based binary that you can self host or run locally.
Install `code-server` using:

```sh
$ pkg install code-server
```

Once installed, open and configure `code-server` using its configuration file located at: `~/.local/config/code-server/config.yaml`

```sh
$ nano ~/.local/config/code-server/config.yaml
```

Note the `password` and `port` as specified in the configuration file - we shall need them later.

Follow [code-server's official guide](https://coder.com/docs/code-server) on how to configure it extensively.

Once you are done, run the following to start `code-server`;

```sh
$ code-server
```

### Networking

To access `code-server` web editor, you need to connect the Android phone on the same network as the computer you are using;

- `Option 1`: WiFi - connect both devices on the same network
- `Option 2`: USB Tethering - connect the Android device to the computer using a USB and enable USB tethering on the Android's Connection settings

Once connected, get the Android's IP address from its Settings or simply use Termux and run:

```sh
$ ifconfig
```

If you used `Option 1`, then locate `wlan` in the output and copy the corresponding IP address.
If you used `Option 2`, then locate `usb` in the output and copy the corresponding IP address.

Open a modern browser on the computer you are using, type the following in the URL input area: `<ip_address>:<port>`
for example: `192.168.1.4:8080`. The default port for `code-server` is `8080`. Use the port specified in it's configuration file.

At this point, you will be required to login using the `password` specified in `code-server`'s configuration file.

Once logged in, you get a full VSCode editor in the browser. You can now take it from here - write some code, install extensions, file and color themes, update the settings to your needs.

### Challenges

On this side, it is completely upto you. In my opinion, the following are some of challenges I faced;

- the primary input method is touch-screen - this was tiresome and posed delays
- mobile devices has relatively small screens
- handling and typing with my hands was exhausting

### Solutions - Hardware

To overcome most of those challenges, I;

- bought a `mobile phone stand` clamping it on the any support like a desk or chair
- bought a `wireless mouse and keyboard combo` to have a fast & seamless development experience

### Solutions - Software

For a smooth experience like on my personal computer,

- installed [Termux:Widget](https://f-droid.org/en/packages/com.termux.widget) for quick shortcuts like starting a web server or `code-server`
- installed [Termux:Styling](https://f-droid.org/en/packages/com.termux.styling) for themes and fonts
- installed [micro](https://micro-editor.github.io) text editor because of it's modern features
- installed [tmux](https://github.com/tmux/tmux) for working with multiple panels(editor - left, file tree - right, terminal - bottom)

## Conclusion

My overall experience was super amazing with lots of ephipanies one after another.
Oftentimes, I use this workflow to code on the go. Sometimes `ssh` into Termux and changing its password so often using `passwd` command.
Beyond this, I tried a full Linux environment - installing Ubuntu 24 with a graphical user interface and using a VNC server.
With that, I could code on tablets or big screens by screen casting or my work computer.
