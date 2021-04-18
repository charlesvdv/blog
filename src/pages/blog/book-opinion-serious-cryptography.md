---
title: 'Book opinion: Serious Cryptography - A practical introduction to modern encryption'
date: 2021-04-18
description: "A focus on things learned and a small opinion about my first cryptography-focused book"
draft: false
---

I just finished the book "Serious Cryptography - A practical introduction to modern encryption" by Jean-Philippe Aumasson.
The book discuss the modern encryption techniques available today including their trade-offs as well as their 
potential pitfalls.

Just for some context on my background, I only had one semestre course on cryptography during my study in 
software engineering. During the course, we dived into cryptography building blocks like hashing, 
symmetric and asymmetric encryption, and how things were working under the hood at a high-level. I would say that I have basic
knowledge of cryptography.

The book introduces every building blocks needed to understand how modern cryptography works and what does 
it mean for a cypher to be *secure*. Next, the book describes various cryptography concepts and algorithms
like hashing, symmetric cyphers (stream and block cypher), asymmetric cypher (RSA, Diffie-Hellman, ...). TLS is
also presented as a full-blown cryptographic system. The 
book ends on a discussion about the threat of quantum computers and post-quantum cryptography.

Most of the modern cryptographic algorithms that I ever heard of are covered. Common ones like AES, RSA,
SHA-1, SHA-2, SHA-3 and less common ones (in my opinion) like Chacha20, poly1305, BLAKE, ECDSA, ... Each 
algorithm presented is described at a high-level with a description on what makes the algorithm secures.
The auther also presents security issues with those algorithms either due to a research finding or
an implementation error. When reading those issues, the phrase *"don't roll your own crypto"* takes 
all of its meaning.

In conclusion, I really loved the book. It allowed me to understand better how cryptographic systems works
and which are the tradeoffs when picking one of them. The book also interesting to understand how cryptographic systems 
break in practice. All of this knowledge is important to make good implementation decision and avoid being too smart 
about it (like rolling a custom cryptographic systems).