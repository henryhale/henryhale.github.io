---
title: "Text over voice for every AI chat"
description: "My experience with AI assistants while using both voice and text."
date: "Jan 4 2026"
tags:
    - ux
---

![](https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?q=80&w=1170&auto=format&fit=crop)

Lately, I have been working on [Dune](https://github.com/henryhale/dune), a text to command model that is intend to automate user interactions for all applications(currently experimenting with web apps).
Users can either use voice or natural language (text) to interact with some application.
Today morning, something hit me when I was resuming the research and development of [Dune](https://github.com/henryhale/dune).  
I have come to realized that users like me hate wasting energy - so lazy or better off doing things the usual way. I would not like to do this repetitively by voice: _scroll down, scroll down, repeat, left, click, page up, scroll left, further, back a bit, open settings, select dark mode._ It is tiring. I'd rather move my mouse there, no voice, silent peaceful action. So instead of working, I wrote down the chain of thoughts as they occured to me.

## modern systems

Modern AI chat bots today have both text (primary input) and voice(secondary input). Traditionally, both Android and iOS come with AI assistants like Google Assistant and Siri. I have not seen a single person in my sphere of reach use either one on any particular moment. Why? Most, if not all actions, are preferred done manually by hand or as my friend puts it - _"the usual way"_.

> Well, the good thing is that these apps are made for everyone with accessibility in mind(supporting the blind, lame, and more in that line).

Another example would be; _go home, swipe left, play music, take screenshot, open discord, paste screenshot, call john._ The worst part is; they require internet connection to function. Personally, I prefer [local-first software](https://www.inkandswitch.com/essay/local-first/). There exists a huge barrier needing an external service for a builtin feature to function. I would never want to wait 5s for the assistant to complete a task I could get done in a few microseconds. So yes, voice does not cut it in for a person like me.

Why is that? I have spent quite sometime wrapping my head around this. I figured a couple of things in relation to how I communicate with people using messaging apps like Signal, Slack, Telegram, Discord, & more. One, they provide both _text_ and _voice_ input modes. Two, it is upon us to choose a way to convey a message.

## the voice notes

These allow the sender to express themselves and send the message verbally attaching a personal tone. With voice notes, the sender is thinking in realtime while recording the message. Some risks include going off topic, too much details (mostly noise or irrelevant info), bias from personal experiences(thinking in realtime while talking could trigger certain parts of your experiences hence clouding your perspective to fit what is known). With voice notes, one might not be thinking clearly.

Under the hood, voice-enabled systems like ChatGPT or Siri transcribe the voice input into a transcript(text) which is then used for the actual processing.

## the text messages

Well, most literate people today prefer this approach. Speaking less. For a long time, I have unforgivingly criticized the use of slangs. Why? Let's begin with the fact that, with text messages, the sender is forced to think about the message & topic before and when they write. One tries to eliminate a lot to send a precise message. X/Twitter's character limit in tweets is a classic example. Risks include subtle inference, incompleteness, or[pressumption of mutual understanding](./presumption-of-mutual-understanding.md) on the subject matter.

## voice vs text

For a privacy-conscious person, text messages are prone to screenshots leakage while voice notes lead to identity inference. A [30 seconds voice note is enough to clone your voice](https://duckduckgo.com/?q=voice+cloning+in+few+seconds) to a plausible extent often undeniable.

On the other hand, text messages are simple, a fairly private, direct, and more importantly less energy is spent. This is where slangs shine(you need to know what it means to understand the message). Voice notes are annoyingly both energy and time consuming. You will have to listen to the voice note all through. Even worse, you are doomed to repeat listening a couple of times. With text in front of my eyes, a quick glare through captures top notch keywords from which I could correctly infer the message in a few seconds. Voice or text, everyone has a different take.

## the future of dune

I intend to have both baked in. Voice is easy for non-technical people. Text can be used for remote services and often preferred by power users.
Today, most software developers use coding agents like Claude Code or Codex. One core component of these agents is the ability to get user intent and execute necessary commands to get the task done.

The major objective is to develop a robust text-to-command model that can precisely drive user applications using natural language.

That said, development continues and hope to wake up one day to talk to every website or application using [Dune](https://github.com/henryhale/dune).
