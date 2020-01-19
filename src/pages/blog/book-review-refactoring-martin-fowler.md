---
title: 'Book review: Refactoring by Martin Fowler'
date: 2020-01-14
description: "Personal thought after having read the book 'Refactoring: Improving the Design of Existing Code' by Martin Fowler (Second Edition)"
draft: false
---

I finished reading the new edition of 
[Martin  Folwer's book about refactoring](https://martinfowler.com/books/refactoring.html). 
In this piece, I will first dive into the content of the book. At the end, I will express 
my thought of the book. 

## Book content

The book is separated in two parts. First, the author discusses the importance of refactoring and 
various topics around it. The second part  is a collection of refactoring patterns exposed the 
same way as the [GoF book](https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8).

### First part: Discussion

In the first chapter, [Martin Folwer](https://martinfowler.com/aboutMe.html) goes directly into the 
meat of  the subject by presenting an example. The example is a sample of code  doing price 
calculation and formatting. With a new requiremement, an  HTML formatter needs to be added alongside 
the plaintext one. Obviously,  the business logic is tighly tied with the plaintext formatter. 
This makes a refactoring needed for the code to stay [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). 

The refactoring is done in an incremental manner. After each step,  the code is tested to ensure no 
business logic has not been broken. Only  after the refactoring is over, the author adds the functionality 
for the new requiremement.

The second chapter discusses the principle of refactoring. Why should  one refactor? When should we refactor? 
What are the problems and  limitations of refactoring? How to bring refactoring to the upper  management? 
What about performance? ... Those are all questions answered  by this chapter. 

Afterwards, in the next chapter, Martin Folwer lists some code smells. The idea is to show some "bad" code 
pattern that could need a refactoring. Global data, long parameter  list, large/god class are some 
of the more obvious code smell  presented. 

Finally, Martin Folwer talks about testing in the context of  refactoring. Refactoring without a proper test 
suite backing the  business logic is shooting yourself in the foot. In this chapter, the  benefits of 
TDD are explained and some examples are given. 

### Second part: Pattern catalog

The pattern catalog explains different patterns one can use to refactor a piece of code. The catalog contains 
refactoring for straightforward actions like renaming a variable or split a loop. 
More (arguably) complex one are also presented like splitting a function or removing dead code. 

Like the Gang of Four (GoF) book about design pattern, each pattern is described in a structured manner. 
A pattern is first defined by its name. A name creates a common ground for discussions. 
Next, an illustration explains the refactoring result in a succinct manner. 
Most patterns have drawing showing the semantic operation and a code example with a before/after comparison. 

Afterwards, the motivation behind the refactoring operation is explained. The discussion generally includes 
the trade-offs and why the pattern would be needed. Then, the author presents the text manipulation 
required to apply the refactoring. The manipulation are presented in a step-by-step way.

Finally, using the mechanics explained in the last point, an example is given. The example apply 
every step of the conversion by showing a code diff showing the before/after result. Everything is 
written in plain simple Javascript. Some examples uses some ES6 features like classes but nothing too fancy. 

## Personal thought

The first part of the book discussing refactoring is interesting. It provides useful information in the 
different aspects of refactoring. The second chapter about principles of refactoring should be read 
by every engineering manager and developer. It illustrates well why refactoring is sometimes needed and what are the cost for not doing it. 
The chapter also articulates a pragmatic approach for developer to take good decision on when or why refactoring. 

Most of the idea developed in the first part of the book are already things I agree with and I already try to apply in my day-to-day work.

I was a bit more disappointed by the second part. It takes the majority of the book (3/4 of the total 400 pages). 
For me, too much refactoring are straightforward to explain in such details. 
For example, renaming a variable does not require 5 steps to be done. 

I read the book from cover to cover. I think it may explain why I found the second part boring. 
The content is highly structured and the example are often very detailed which make the reading a bit dull.

But the catalog also taught me some valuable things. Seeing *bad* code being refactored in better code trains 
me to become a better software engineer. Stating explicitly code smells and how one can fix them is interesting. 

But one of the most valuable things the book taught me is how to break your refactoring in small pieces. 
Like many other software engineers, I sometimes fall into a rabbit-hole of 2-3 days refactoring without 
seeing the end of the tunnel. I thought it was the only way to do refactoring. The book showed me another way
to do things. The main takeaway for me is to not think directly at the end result but introduce temporary steps.
It will add more work during the refactoring but by doing this, you ensure your code is always in a working state.

In conclusion, I highly recommend to read the first of the book thoroughly. It is really a great read! For the second part, 
if I had to read again, I would only skim over each refactoring pattern. The pattern motivation is generally interesting but 
if the pattern is straightforward, I would read the example in diagonal.