---
title: "Data Compression Explained: From Gas to Solid and Beyond"
description: "The molecular approach to data compression."
date: "Jul 22 2024"
tags:
    - cs
    - data-compression
---

![states of matter meme](https://i.kym-cdn.com/photos/images/facebook/002/187/117/701.jpg)
_State of matter meme_

**Table of Contents**

- [Introduction](#introduction)
- [The Analogy Explained](#the-analogy-explained)
- [The Information Room](#the-information-room)
- [How This Relates to Real Data Compression](#how-this-relates-to-real-data-compression)
- [The Data Sculpture](#the-data-sculpture)
- [Key Concepts in Compression](#key-concepts-in-compression)
- [The Library of Everything](#the-library-of-everything)
- [The Limts of Compression](#the-limit-of-compression)
- [The Compressing Machine](#the-compressing-machine)
- [Real-World Examples](#real-world-examples)
- [Where the Analogy Breaks Down](#where-the-analogy-breaks-down)
- [Practical Implications](#practical-implications)
- [Conclusion](#conclusion)

> **Disclaimer**: This is a simplified analogy meant to introduce concepts, not a rigorous technical explanation.

## Introduction

In this blog post, you'll journey with me through one of the most interesting fields of computer science with a relatable analogy.

Earlier this year, I was studying Numerical Analysis (Mathematics) when [Lagrange interpolating polynomial](https://en.m.wikipedia.org/wiki/Lagrange_polynomial) ignited the idea of designing the ultimate [data compression](https://en.m.wikipedia.org/wiki/Data_compression) algorithm that would compress data to a near-zero size.

The idea was: _"What if we didn't store actual data but rather functions for regenerating the data? Convert the text data into ASCII values, scale them down and use curve fitting to map each value to its index in the list/line. Voila! 🚀"_

In a few hours, I did the math and concluded that it was not practically feasible. Since then, I have explored different concepts trying to connect some dots as well as taking an information theory course. There are several times I have had constellations of a new ground-breaking approach that fails in a five (5) minute mathematical evaluation.

For that matter, I intend to share my findings and personal understanding of data compression. Furthermore, expect fun thought experiments to reflect on.

> Grab yourself a drink. You will need it!

Data compression, in this digital era, is a crucial technology that affects everything from the speed of our internet connections to the storage capacity of our devices. But do you know how it works, and what are its limits? Join me as we explore these questions using an unusual but illuminating analogy: **the states of matter**.

## The Analogy Explained

> The universe is made up of matter. Of course you know that, here's more to it. A file(substance) is a cosmic collection of bits(particles).

Imagine data as a substance existing in different states of "**information matter**":

```
1️⃣ Gaseous > 2️⃣ Liquid > 3️⃣ Solid > 4️⃣ 🔹
```

Before we look at the last and mysterious state, let's look at what exists at each of the first three states;

### 1️⃣ Gaseous State (Raw Data)

Picture a vast room filled with colorful, wildly bouncing particles. Each particle represents a bit of information, chaotically occupying far more space than necessary. This is your uncompressed data, full of redundancies and inefficient encoding.

### 2️⃣ Liquid State (Compressed Data)

Now, envision those same particles coming together, forming a more cohesive structure. The wildly bouncing bits have calmed, finding patterns and similarities among themselves. This _"liquid data"_ takes up significantly less space but still retains all its original information.

### 3️⃣ Solid State (Highly Compressed Data)

In this state, our information particles are tightly packed, with minimal space between them. Each particle's position is crucial, representing data in its most compact form while still preserving its essence.

> Currently, this is where we are at with the [LZMA](https://en.m.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm) or [Deflate](https://en.m.wikipedia.org/wiki/Deflate) algorithm. Can we go beyond that? Theoretically, yes! Practically, not quite yet.

### 4️⃣ `🔹` - "One Particle" State (Theoretical Limit)

> Remember that mysterious state, its the last that there can be.

Imagine all those bits of information condensed into a single, incredibly dense particle. This represents the theoretical limit of compression - the absolute minimum amount of information needed to reconstruct the original data.

## The Information Room

> Well, now that you have explored the analogy, take a moment and reflect on this thought experiment;

Imagine you're in a room where each air molecule represents a bit of data. The room starts packed with air (uncompressed data). As you compress the data, the air is slowly removed. How small can you make the room before it's impossible to reconstruct the original atmosphere?

## How This Relates to Real Data Compression

In real-world data compression, we're essentially trying to move our data from a "_gaseous_" state to more compact states. There are basically two types of data compression algorithms;

- [Lossless compression](https://en.m.wikipedia.org/wiki/Lossless_compression)
- [Lossy compression](https://en.m.wikipedia.org/wiki/Lossy_compression)

In our journey through states of information matter, lossless compression algorithms act like careful molecular arrangers, moving our data particles from their gaseous state to a more ordered liquid state. They find patterns and redundancies, grouping similar particles together without losing a single one. When we decompress, we get back exactly what we started with.

On the other hand, lossy compression algorithms are more aggressive molecular remodelers. They not only arrange particles but may also discard some deemed less important, moving towards a solid-like state. This is why a highly compressed JPEG image might lose some fine detail - some of its "_particles_" have been removed for the sake of compactness.

The process of further compression is like trying to squeeze a nearly solid substance. Each additional push yields less and less space saving, reflecting the diminishing returns we see in repeated compression attempts.

## The Data Sculpture

In this experiment, imagine you're a sculptor, and your medium is a block of "_data clay._" Your goal is to recreate a specific image. In lossless compression, you must use every speck of clay, rearranging it as efficiently as possible. In lossy compression, you can discard small bits of clay, as long as the final sculpture is still recognizable as the intended image. How would your approach differ in each case?

## Key Concepts in Compression

To understand compression more deeply, we need to introduce a few key concepts:

### Entropy

This is _a measure of the inherent information content in data_. Think of entropy as the inherent "_liquidity_" of your data. High entropy data is like a gas that's already close to its liquid state - there's not much space between particles to remove. Low entropy data is like a gas with lots of empty space, ripe for compression. Therefore high entropy data (like random noise) is harder to compress than low entropy data (like a file full of repeated text).

### Shannon's Source Coding Theorem

This fundamental [theorem](https://en.m.wikipedia.org/wiki/Shannon%27s_source_coding_theorem) in information theory sets the theoretical limits for lossless data compression. It is like a law of physics for our information matter. It states that _we can't compress data (substance) below its entropy (liquid state) without losing information (particles)._

### Kolmogorov Complexity

[This](https://en.m.wikipedia.org/wiki/Kolmogorov_complexity) represents _the length of the shortest possible program that could generate the data_. It's the theoretical "_one particle_" state of our analogy - the ultimate compressed form.

## The Library of Everything

Imagine a library containing every possible book of 200 pages. Most books would be gibberish, but every coherent book would also be there. Now, you want to compress this library. Which would compress better - a random book of gibberish or a real novel? Why?

## The Limits of Compression

Let's consider an extreme example: _could we compress a 1GB file down to 1KB?_ In our analogy, this would be like compressing a room full of gas into a single particle.

While it is theoretically possible, this level of compression is practically impossible for real-world data. Here's why:

- A 1KB file contains only 8,192 bits.
- A 1GB file contains 8,589,934,592 bits of information.

For this to work, each bit in our compressed file would need to represent over a million bits in the original file. This would require the original file to have an incredibly low entropy - to be almost entirely redundant information.

In reality, most data contains much more unique information, setting a much higher lower bound on how small we can compress it.

## The Compressing Machine

Imagine a machine that can compress any file you give it. You compress a 1MB file to 500KB, then feed that result back into the machine. You repeat this process. Will you eventually reach 1KB? Why or why not?

## Real-World Examples

Several algorithms have been designed and put to use. The following are some of the real-world applications:

- **Text compression** (like [ZIP](<https://en.m.wikipedia.org/wiki/ZIP_(file_format)>) files) works well because written language often contains patterns and redundancies.
- **Image compression** comes in lossless ([PNG](https://en.m.wikipedia.org/wiki/PNG)) and lossy ([JPEG](https://en.m.wikipedia.org/wiki/JPEG)) varieties. JPEG can achieve higher compression ratios by discarding some visual information.
- **Video compression** (like [H.265](https://en.m.wikipedia.org/wiki/High_Efficiency_Video_Coding)) uses complex algorithms to reduce file sizes dramatically, crucial for streaming services.

## Where the Analogy Breaks Down

While our states of matter analogy is helpful, it's not perfect. Real compression doesn't always happen in clear "_states_" - it's more of a continuum. Unlike matter, data doesn't have a fixed volume or density. The same information can be encoded in many ways. Additionally, the analogy doesn't capture the role of algorithms in compression, which is crucial in practice.

## Practical Implications

It is important to understand that compression limits helps us set realistic expectations for file sizes and data transfer speeds. These limits also help us make informed choices about storage and bandwidth requirements as well as appreciate the remarkable efficiency of modern compression algorithms.

## Conclusion

Data compression isn't about magically shrinking information, but about finding and removing redundancies. While we can't compress data infinitely, clever algorithms can achieve remarkable results within the bounds set by information theory.

Many researchers are working towards finding better data compression approaches. Meanwhile, I'll occasionally be looking into my original idea just for fun.

The next time you stream a movie or zip a file, remember the complex dance of information happening behind the scenes, squeezing those data particles ever closer together.
