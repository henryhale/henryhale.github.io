---
title: "Introducing Kintu-2.0 - A Luganda Chat Model Trained from Scratch"
description: "Pretraining a 30M-parameter Luganda model from scratch with MiniMind, then teaching it to chat."
date: "Nov 9 2026"
tags:
    - ai
    - project
---

[Kintu-2.0-30M](https://huggingface.co/henryhale/Kintu-2.0-30M) is the second version of [Kintu](/blog/introducing-kintu-1-0-a-small-luganda-chat-model), my small Luganda chat model. Kintu-1.0 was a fine-tune of [goldfish-models/lug_latn_10mb](https://huggingface.co/goldfish-models/lug_latn_10mb), a small Luganda GPT-2 model. This time I trained it from scratch with the [MiniMind](https://github.com/jingyaogong/minimind) recipe. You can [chat with it here](https://kintu-demo-kq5xakecfjqwi2jdxco6kq.streamlit.app/).

[![The Kintu demo](https://raw.githubusercontent.com/henryhale/kintu-demo/main/screenshot.png)](https://kintu-demo-kq5xakecfjqwi2jdxco6kq.streamlit.app/)

## What's new

- **Trained from scratch.** It's a Qwen3-style decoder with 8 layers, a hidden size of 512 and 30M parameters, a bit smaller than Kintu-1.0.
- **Its own tokenizer.** A 6,400-token byte-level BPE trained on Luganda text, instead of the 50k-token tokenizer Kintu-1.0 borrowed.
- **Multi-turn chat.** It uses a standard chat template, so it sees the whole conversation (up to 512 tokens), not just your last message.
- **Apache 2.0.** Kintu-1.0 was non-commercial only. Kintu-2.0 isn't.

## Three models

| Model | What it is |
| ----- | ---------- |
| [Kintu-2.0-30M-Base](https://huggingface.co/henryhale/Kintu-2.0-30M-Base) | The pretrained model. It continues text and doesn't chat. |
| [Kintu-2.0-30M](https://huggingface.co/henryhale/Kintu-2.0-30M) | The base model fine-tuned on Luganda conversations. |
| [Kintu-2.0-30M-Instruct](https://huggingface.co/henryhale/Kintu-2.0-30M-Instruct) | Kintu-2.0 fine-tuned further on multi-turn chats, then preference-tuned with DPO. |

## Training

All of it ran on free Kaggle T4 GPUs.

1. **Pretraining.** 273M tokens of [luganda-pretrain2](https://huggingface.co/datasets/henryhale/luganda-pretrain2), a mix of Luganda web text, the Bible, translation data and Luganda TinyStories. 2 epochs on 2× T4 took 2.1 hours.
2. **Chat.** 59,798 prompt-reply pairs from [luganda-sft-translated](https://huggingface.co/datasets/henryhale/luganda-sft-translated) and 685 conversations from [luganda-lima](https://huggingface.co/datasets/henryhale/luganda-lima).
3. **Instruct.** More fine-tuning on [luganda-chats](https://huggingface.co/datasets/henryhale/luganda-chats) and [luganda-lima](https://huggingface.co/datasets/henryhale/luganda-lima), then DPO on 13,659 preference pairs from [luganda-ultrafeedback-dpo](https://huggingface.co/datasets/henryhale/luganda-ultrafeedback-dpo). Together these took about 13 minutes on one T4.

## Using it

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

tok = AutoTokenizer.from_pretrained("henryhale/Kintu-2.0-30M-Instruct")
model = AutoModelForCausalLM.from_pretrained("henryhale/Kintu-2.0-30M-Instruct")

messages = [
    {"role": "system", "content": "Oli muyambi ow'amagezi ayamba abantu mu Luganda."},
    {"role": "user", "content": "Oli otya?"},
]
enc = tok.apply_chat_template(messages, add_generation_prompt=True, return_tensors="pt", return_dict=True)
out = model.generate(**enc, max_new_tokens=256, do_sample=True, temperature=0.4, top_p=0.8, repetition_penalty=1.2)
print(tok.decode(out[0, enc["input_ids"].shape[1]:], skip_special_tokens=True))
```

For phones there are [ONNX exports](https://huggingface.co/henryhale/Kintu-2.0-30M-ONNX) with a KV cache, from 22.8 MB (4-bit) up to 127.4 MB (fp32).

## What it can't do

Kintu-2.0 writes fluent Luganda, but it often drifts off-topic and gets facts wrong. Most of its pretraining tokens (68.5%) come from translated TinyStories, so it leans towards simple stories. The chat data is mostly AI-written and machine-translated, and native speakers haven't fully reviewed it yet. Don't rely on it for information, especially on health, money or farming, and keep chats short.

[Give it a try and say _"Oli otya?"_](https://kintu-demo-kq5xakecfjqwi2jdxco6kq.streamlit.app/).
