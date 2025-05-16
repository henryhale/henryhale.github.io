---
title: "ViteShell"
description: "✴️ A minimalistic shell implementation written in TypeScript."
date: "Mar 31 2024"
demoURL: "https://henryhale.github.io/vix"
repoURL: "https://github.com/henryhale/viteshell"
logoURL: "https://github.com/henryhale/viteshell/raw/master/media/logo.jpg"
featured: true
---

![ViteShell](https://github.com/henryhale/vix/raw/master/media/preview.png)

ViteShell is lightweight shell implementation written in TypeScript that tends to work just like [GNU Bash](https://www.gnu.org/software/bash/). It is intended for use with [xterminal](https://github.com/henryhale/xterminal) but can as well be used elsewhere.

Some of the key features include: efficient execution, shell expansion, command chaining & pipes, aliases, and others.

One of the most interesting but challenging aspects of this project is the implementation of an abortable promise as well as creating process management. Every piece of it is entirely based on how GNU Bash actually works.

### License

MIT
