#!/usr/bin/env node
//
// This file came about when I was trying to create some test strings to debug https://npm.im/diffy.
// I couldn't find the bug, but I liked the look of it, so I golfed it in the style of https://dwitter.net.
//
// To try it out in your own terminal, run
//
//
//     npx @lachenmayer/dwiffy
//
//
// As a demoscene effect, it's super basic - if you think you can do better, create your own!
//
// There are only three rules for taking part in the dwiffy demoscene:
//
//   1. The executable JavaScript code (without comments) should be less than 140 characters long
//   2. Your demo should be published on npm as @<your_name>/dwiffy
//   3. Your readme should contain these three rules
//
d=require('diffy')(),i=0,r=x=>x.repeat(i);setInterval(()=>d.render(()=>(i++,r((r(' ')+r('#'))))),50)
