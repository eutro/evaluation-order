# Evaluation Order

> It has been a long day.
>
> The last thing you remember is falling asleep
>
> ...at the REPL.

In this game you take the role of an avid Lisp programmer,
dreaming up and evaluating expressions to their heart's content.

Play through the main story, or even create your own puzzles.

# Where to play

You can play online [here](https://eutro.github.io/evaluation-order/).

# Building

This project uses
[npm](https://www.npmjs.com/),
[Leiningen](https://leiningen.org/),
[Figwheel](https://figwheel.org/) and
[lein-cljsbuild](https://github.com/emezeske/lein-cljsbuild).

Below, it is assumed that you have run

```
npm install
```

---

To create a single build for production, run

```
lein cljsbuild once prod
```

Everything will be in `resources/public/`, with the main site being `index.html`.

---

Development was done using
[CIDER](https://cider.mx/),
and `cider-jack-in-cljs` with `figwheel` type.
