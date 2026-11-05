---
title: "Introducing Kintu-1.0 - A Small Luganda Chat Model"
description: "Fine-tuning a 39M-parameter Luganda model to chat, releasing it on Hugging Face, and putting it in a demo you can try."
date: "Nov 5 2026"
tags:
    - ai
    - project
---

[Kintu-1.0-39M](https://huggingface.co/henryhale/Kintu-1.0-39M) is a small language model that replies in Luganda. It's on Hugging Face, and there's a [live demo](https://kintu-demo-kq5xakecfjqwi2jdxco6kq.streamlit.app/) where you can chat with it.

## The base model

I didn't train Kintu-1.0 from scratch. It's a fine-tune of [goldfish-models/lug_latn_10mb](https://huggingface.co/goldfish-models/lug_latn_10mb), a small GPT-2 model (4 layers, hidden size 512) pretrained on about 10 MB of Luganda text. Kintu-1.0 keeps the base model's 50k-token Unigram tokenizer unchanged.

## The data

There isn't much Luganda chat data around, so I made some. I machine-translated two English conversation datasets, EmpatheticDialogues and SmolTalk, into Luganda with [NLLB-200](https://huggingface.co/facebook/nllb-200-distilled-600M) and published the result as [luganda-sft-translated](https://huggingface.co/datasets/henryhale/luganda-sft-translated). Kintu-1.0 learned from 58,829 EmpatheticDialogues pairs and 2,260 SmolTalk pairs (counted before filtering). The translations haven't been reviewed by anyone yet.

Each example is a single prompt and reply in this format:

```
[CLS]Omuntu: <message> Omuyambi: <reply>[SEP]
```

_Omuntu_ means person and _Omuyambi_ means helper. The loss only counts the reply tokens, so the model learns to answer, not to repeat the question.

## Training

Training ran for 3 epochs on 2× T4 GPUs on Kaggle and took 968 seconds, about 16 minutes. I used AdamW with a learning rate of 1e-4, a cosine schedule, and a batch size of 64 in fp16.

| Epoch | Training loss | Held-out loss |
| ----- | ------------- | ------------- |
| 1     | 3.927         | 3.717         |
| 2     | 3.607         | 3.555         |
| 3     | 3.460         | **3.527**     |

The released weights are from epoch 3, at a perplexity of about 34. There's also an [ONNX export](https://huggingface.co/henryhale/Kintu-1.0-39M-ONNX).

## Using it

Load the tokenizer with `PreTrainedTokenizerFast`, because `AutoTokenizer` can fail on the base model's tokenizer config in some setups, such as Kaggle and Colab. The tokenizer drops newlines, so keep the prompt on one line.

```python
from transformers import AutoModelForCausalLM, PreTrainedTokenizerFast

tok = PreTrainedTokenizerFast.from_pretrained("henryhale/Kintu-1.0-39M")
model = AutoModelForCausalLM.from_pretrained("henryhale/Kintu-1.0-39M")

inputs = tok("[CLS]Omuntu: Oli otya? Omuyambi:", return_tensors="pt", add_special_tokens=False)
out = model.generate(
    **inputs,
    max_new_tokens=40,
    do_sample=True,
    top_p=0.9,
    eos_token_id=tok.convert_tokens_to_ids("[SEP]"),
    pad_token_id=tok.convert_tokens_to_ids("<pad>"),
)
print(tok.decode(out[0, inputs.input_ids.shape[1]:], skip_special_tokens=True))
```

## The demo

The [demo](https://kintu-demo-kq5xakecfjqwi2jdxco6kq.streamlit.app/) is a single-file Streamlit app ([source](https://github.com/henryhale/kintu-demo)). It runs on Streamlit Community Cloud with CPU-only PyTorch, which is plenty for a model this size.

You can type your own message or tap a suggestion like _"Oli otya?"_. The sidebar has sliders for temperature, top-p and reply length. Each reply only sees your latest message, because that's how Kintu-1.0 was trained. The earlier messages stay on screen but don't go into the prompt. Sometimes the model keeps going and writes your next line too, so the app cuts the reply at the first _"Omuntu:"_.

## What it can't do

Kintu-1.0 is an experiment. It has no factual knowledge, its replies read like translated English because that's what it learned from, and it may carry biases from its pretraining text, the source conversations and the translation model. Don't use it for factual questions, advice or serious emotional topics. It's licensed CC BY-NC 4.0, so non-commercial use only.

Give it a try and say _"Oli otya?"_.
