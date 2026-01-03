---
title: "Building iLoveMedia"
description: "Your browser is good enough to entirely run powerful media utilities locally. "
date: "Jan 1 2026"
tags:
    - opensource
---

Most server-backed online tools follow the same pattern: upload your files, wait for a server to process them, then hope your data is handled responsibly.
Why use a server-backed online tool to convert an image from PNG to WEBP or JPEG format?  
[iLoveMedia](https://henryhale.github.io/iLoveMedia) is built to break that pattern by providing free alternative tools such as image converter, audio recorder & converter, background remover, and more.

A live demo is available and fairly functional, [check it out today](https://henryhale.github.io/iLoveMedia).

## The founding idea

It is simple but powerful: if modern browsers are already capable of heavy computation, _why send sensitive data anywhere at all?_
iLoveMedia runs entirely in your browser, no servers, no uploads, and no tracking.
Your files never leave your device, because all the processing happens locally.

> **That said, why fairly functional?**
>
> Everything is perfect until you try to convert a 500MB MOV video to MP4.
> While it is possible, the conversion takes significantly long to complete compared to server-backed tools.
> This depends not only on the file size but also available resources on your machine.

This _zero-upload_ philosophy is at the core of everything iLoveMedia does.
By relying on WebAssembly and modern browser APIs, it turns the browser into a private, high-performance workspace rather than just a thin client.
Images, video and audio are processed directly on your machine, giving you speed, privacy, and full control over your data.

## Technologies used

Under the hood, iLoveMedia uses a carefully chosen set of browser-side technologies to make this possible.

> Special thanks to every developer has worked (and still working) on all these amazing opensource projects.

- **Image Tools**:
    - [x] Image to Text (OCR): Extract text from images using [Tesseract.js](https://github.com/naptha/tesseract.js/) by [@naptha](https://github.com/naptha/)
    - [x] Background Remover: Remove backgrounds using [imgly/background-removal-js](https://github.com/imgly/background-removal-js) by [@imgly](https://github.com/imgly/)
    - [x] QR Studio: Generate custom QR codes using [qrcode](http://github.com/soldair/node-qrcode) by [@soldair](http://github.com/soldair/)
    - [x] Image Converter: Convert text into patterns of emojis using [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
    - [x] Profile Pic Creator: Create unique emoji avatars with custom backgrounds and shapes using [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- **Audio Tools**:
    - [x] Audio Recorder: Record audio from your microphone using [WebStream Recording API - Media Recorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
    - [x] Audio Converter: Change audio formats (e.g., WAV to MP3) using [@ffmpeg/ffmpeg - wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) by [@ffmpegwasm](https://github.com/ffmpegwasm/)
    - [x] Text-to-Speech: High-quality synthesis using [WebSpeech API - Speech synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) and [@diffusionstudio/vits-web](https://github.com/diffusionstudio/vits-web) by [@diffusionstudio](https://github.com/diffusionstudio/) and [@rhasspy](https://github.com/rhasspy/piper)
    - [x] Speech-to-Text: Live transcription using [WebSpeech API - Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) and [whisper-web](https://github.com/xenova/whisper-web) by [@xenova](https://github.com/xenova/).
- **Video Tools**:
    - [x] Video Converter: Change video formats (e.g, MP4 to MKV) using [@ffmpeg/ffmpeg - wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) by [@ffmpegwasm](https://github.com/ffmpegwasm/)
    - [x] Video Recorder: Record videos from your webcam using [WebStream Recording API - Media Recorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

> Developing iLoveMedia exposed me to a whole lot of powerful tools in the web space.
> For example, building AI-powered mobile & web apps using ONNX Web Runtime or Transformers.js

## Project origins

Using server-backed online tools makes me feel as terrible as the weight of the load in my heart when I copy some text and delay using it.
Even though I want to trust them, I can not.
So I did the same thing I will continue doing, building local-first tools to go easy with my heart.

Honestly, the project itself has gone through an interesting evolution.
iLoveMedia was originally co-authored with [Google Gemini](https://gemini.google.com) in [AI Studio](https://aistudio.google.com), starting as a proof of concept built with [React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com).
As the scope grew, so did the need for better structure and long-term maintainability.
That's why the project is currently undergoing a major refactor, migrating to [Vue 3](https://vuejs.org) with [vueuse](https://vueuse.org), [shadcn-vue](https://shadcn-vue.com) and [Lucide icons](https://lucide.dev).
The goal of this transition is cleaner modularity, better performance, and a smoother development experience moving forward.

## Conclusion

iLoveMedia is fully open source under the MIT license and designed to be offline-first.
You can [download the source code](https://github.com/henryhale/iLoveMedia) and run it locally, modify it, and even use it without an internet connection once loaded.
While the project is still in the middle of a heavy migration, it's already usable and actively evolving.

At its heart, iLoveMedia is a statement: powerful tools don't have to come at the cost of privacy.
As browsers continue to grow more capable, local-first software becomes not just possible, but practical.
