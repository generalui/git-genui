# git-genui


### Purpose

git-genui's goal is to streamline developer workflow for:

* tracking and updating issue-tracker (currently only PivotalTracker)
* tracking semantic changes
* tracking coauthors

### Strategy

The primary strategy for git-genui is to be used instead of `git commmit`. Primarily, `git-genui commit` simply helps generate a well-formatted commit message.

> Future: There will also be a set of optional, post-commit actions that can be configured. See below.

# Run the CLI

Install [NodeJS](https://nodejs.org/en/download/). Then you can run `git-genui` directly without even needing to install it. Super cool!

```
npx git-genui help
```


> Note: npx effectively installs git-genui every time in a temporary location. It's easy to use, but a little slow. You can speed things up by installing git-genui yourself. See below.


# CLI Documentation

CLI Documentation is maintained in the CLI itself. Run `git-genui help` to get the most current and detailed doc on how to use the CLI.

# Install the CLI

If you are using this regularly, you'll want to install it. NPX is great, but it isn't very fast.

> NOTE: By default, npm installs global packages with root privledges. This just isn't a good idea! With a small change you can reconfigure your npm to install 'global' packages in your user folder instead. That way it doesn't require root. See below.

```
# Recommended: Set npm's global folder to your home dir so you don't need sudo. See below.
npm install -g git-genui
```

Once you install git-genui locally, you can run it with a nifty trick provided by the standard `git` cli:

```
# Once installed, you can run git-genui in either of these ways:
git-genui help
git genui help    # git automatically runs git-genui - free of charge!
```

### Reconfigure NPM's Global Package Folder

> Note: This will shadow any previously global-installed packages. You will need to re-install everything you previously installed globally.

It's surprisingly easy to reconfigure Node/Npm to install global packages in your home directory instead of globally. This is more secure, easier, and totally the way to go on your local dev machine.

Create `~/.npmrc` and add this line:

```
prefix=${HOME}/.npm-packages
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

# What it Does

- git commit prompts:
  - semantic-versioning: major/minor/patch
  - kind:
    - feat: A new feature
    - fix: A bug fix
    - docs: Documentation only changes
    - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - refactor: A code change that neither fixes a bug nor adds a feature
    - perf: A code change that improves performance
    - test: Adding missing or correcting existing tests
    - chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
  - pair: whom are you pairing with?
  - story: what tracker-story are you working on?
  - update-story:
    - defaults: unstarted -> started else "no change"
    - options: finish, deliver


# Notes

Related

* https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines


### Commit format

Combination of:
* https://www.npmjs.com/package/semantic-release
* https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
* https://www.pivotaltracker.com/help/articles/githubs_service_hook_for_tracker/


```
<type>(<scope>): [(Starts|Finishes) #TRACKER_STORY_ID] <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
<BLANK LINE>
<BLANK LINE>
Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>
```
