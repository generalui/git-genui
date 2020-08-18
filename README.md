# git-genui - streamlined GenUI developer workflow

> ### MISSION: maximize programmer productivity and happiness by minimizing [flow-state-interruptions](https://stackoverflow.blog/2018/09/10/developer-flow-state-and-its-impact-on-productivity/) and reducing time spent on daily non-programing tasks

> ### STRATEGY: augment everyday `git commits` to seamlessly integrate task-tracking, semantic versioning, co-author pairing and other bookkeeping tasks

# Demo: `git genui commit`

![animation showing 'git genui commit' in action](https://github.com/generalui/git-genui/raw/master/doc-assets/git-genui.gif)

In the demo:

1. git staging
2. edit git commit message
3. select tracker story
4. select commit semantics
5. after the commit: comment automatically added to story for the commit:
  ![comment automatically added with commit details](https://github.com/generalui/git-genui/raw/master/doc-assets/auto-comment.png)

Subsequent runs are even faster. Git-genui remembers all your options and uses them as defaults for the next time. That way you only need to update what's changed, if anything, for your next commit.

# Run anywhere with `npx git-genui`

You can run git-genui on any machine with [NodeJS](https://nodejs.org/en/download/). Super cool!


```bash
# get a list of all available commands
npx git-genui help

# dive in and start using it:
npx git-genui commit
```

> Note: npx effectively installs git-genui every time in a temporary location. It's easy to use, but a little slow. You can speed things up by installing git-genui yourself. See below.

# CLI Features

The git-genui command-line tool's current features:

* Generate well-formatted git commit message:
  * tracker story ID
  * semantic changes
  * coauthors
* Update tracker stories:
  * create new stories during commits
  * automatically start unstarted stories with first commit
  * automatically add a comment to the story for each related commit
* Command line tools for managing tracker stories
* Easy, interactive git staging

# CLI Documentation

CLI Documentation is maintained in the CLI itself. Run `git-genui help` to get the most current and detailed documentation.

# Install the CLI

If you are using this regularly, you'll want to install it. NPX is great, but it isn't very fast.

By default, `npm install` installs global packages with root privileges. This just isn't a good idea! With a small change you can reconfigure your npm to install 'global' packages in your user folder instead. That way it doesn't require root.



### Set NPM's Global Package Folder

It's easy to configure Node/Npm to install global packages in your home directory instead of globally. We *highly* recommend making this change. It is more secure, easier, and totally the way to go on your local dev machine.

> Note: This will shadow any previously global-installed packages. You will need to re-install everything you previously installed globally.

Copy-paste this one-line script into your terminal (linux/osx):

```bash
echo 'prefix=${HOME}/.npm-packages' > ~/.npmrc
```

OR, you can edit your ~/.npmrc manually and add this line:

```bash
prefix=${HOME}/.npm-packages
```

### Now, Install git-genui Globally

```bash
# Install git-genui globally for easy access.
npm install -g git-genui
```

Once you install git-genui locally, you can run it with a nifty trick provided by the standard `git` cli:

```bash
# Once installed, you can run git-genui in many ways:
git-genui help
git genui help    # git automatically runs git-genui - free of charge!
gg help           # shortcut alias
```


# Trackers: PivotalTracker

Currently PT is the only supported tracker, but I've penciled in a pattern that should make it fairly easy to add new trackers. They key challenge will be the fact that every tracker is opinionated and works a little differently.

# Post Commit Optional Post-Commit Actions

NOTE: None of these are currently supported.

These are the planned, additional actions. They will all be optional and git-genui will remember your preferences:

git:
* `git push` after every commit if, and only if, you are not on master and you are up-to-date with the remote

tracker story updates:
* 'start' unstarted stories (updates story state from unstarted to started automatically)
* ask if a story is finished and 'finish' it after commit
* automatically add a comment to the story with the git-commit hash.
* automatically add all commit authors to the story's owners

# Notes

Related

* https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines


# The `gg-standard-commit` Format

Git-Genui generates and parses a standard commit format. GG's primary goal is to encode: semantic versioning, story/tracker id, and coauthors. I wanted GG to be as compatible as possible with existing frameworks while also adhering to first-principles & KISS.

Combination of:
* https://www.npmjs.com/package/semantic-release
* https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
* https://www.pivotaltracker.com/help/articles/githubs_service_hook_for_tracker/
* https://git-scm.com/docs/git-interpret-trailers
* https://git.wiki.kernel.org/index.php/CommitMessageConventions

Example using all options:
```
minor/feature(todo-list): [finishes #abc123] select-all button

You can now select all items in one click.

Co-authored-by: Juan Sánchez <foo@bar.com>
```

All elements are optional. Below are several legal variants:

* Without a footer:
    ```
    minor/feature(todo-list): [finishes #abc123] select-all button

    You can now select all items in one click.
    ```
* Without a body:
    ```
    minor/feature(todo-list): [finishes #abc123] select-all button
    ```
* Without scope:
    ```
    minor/feature: [finishes #abc123] select-all button
    ```
* Without tracker info:
    ```
    minor/feature: select-all button
    ```
* Without semanticVersion info:
    ```
    feature: select-all button
    ```
* Without anything except the subject:
    ```
    select-all button
    ```

See below for the full specification.

## Trailers

GG-standard-commit is compatible with [Git Trailers](https://git-scm.com/docs/git-interpret-trailers). Essentially, trailers are an arbitrary key-value metadata map. In pacticular, tailers are how [GitHub.com encodes co-authors](https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors). GG is particularly concerned with tracking co-authors and follows the GitHub standard:

> NOTE: most specifications for git-trailers only require a single empty line before the trailers, but GitHub's specification for `Co-authored-by` explicitly requests two.

Co-authors are encoded as trailers. There should be one tailer for each co-author as follows:
```
Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>
```

> NOTE: This is not specifically a part of the gg-standard-commit specification. The spec allows for any number of trailers with any keys or values.

## What about ConventionalCommit.org?

We also support the [ConventionalCommit.org](https://www.conventionalcommits.org/en/v1.0.0/#specification) format. From a first-principles perspective, this format is clunky.

Conventional-commit shortcomings:

* Is an ill-defined specification. It doesn't provide sufficient details to write a compliant parser or to guarantee a commit-generator will be compliant with other parsers.
* Inconsistent and ambiguous semantic versioning encoding
  * Patch and minor changes are encoded in the types `fix` and `feat` respectively.
  * However, major changes are encoded *either* as an "!" at the end of the type OR as a trailer with the key "BREAKING CHANGES". The first encoding creates ambiguity: What is the semantic versioning of this commit message `fix!: foo`? The second encoding is considered a trailer, but it's illegal. Trailers are not allowed to have spaces in their key.
  * All commits which might affect a deployment are at a minimum patch-level version changes, yet CC explicitly allows many forms of non-version changing commits.
* Poor choice of abbreviation: "feat" means "a deed notable especially for courage"


## The `gg-standard-commit` Specification

The GG-Standard-Commit spec consists of several optional parts. All fields except for the subject are optional. In short, gg-standard-commits look like this:

```html
<semanticVersion><type>(scope): [<stateChange> #<trackerId>] <subject>
<body>
<footer>
```

Precisely, the gg-standard-commit specification is defined as follows:

```javascript
ggStandardCommit: header body? footer?

header:           colonTerm? trackerTerm? subject
subject:          restOfLine

// PREAMBLE - SEMANTIC_VERSION, TYPE, and SCOPE
colonTerm:        semanticsTerm scopeTerm? colon_
dnd
semanticsTerm:
                  semanticVersion '/' type:word
                  semanticVersion
                  type:word

scopeTerm:        '(' scope ')'

scope:            word pathExtension?
pathExtension:    '/' word pathExtension?

trackerTerm:      '[' trackerState? '#' trackerId:word ']' _
trackerState:     word _

// BODY OF MESSAGE
body:             bodyParagraph+
bodyParagraph:    !footer endLines restOfLine

// FOOTER METADATA
footer:           trailer+ whitespaceOnly
trailer:          endLines token:word colon_ value:restOfLine

// TOKENS
_:                /\ +/
endLines:         /( *\n)+/
colon_:           /: +/
word:             /[-_\w]+/
restOfLine:       /[^\n]+/u
semanticVersion:  /(major|minor|patch)\b/
whitespaceOnly:   /\s*(?!.|\n)/
```

Notes:

* Specification is a [Parsing-Expression Grammar](https://en.wikipedia.org/wiki/Parsing_expression_grammar)
* Regular expressions use JavaScript semantics
* You are allowed to have more than one `trailer` with the same token
* Trailer tokens are case insensitive
