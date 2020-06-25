# git-genui - streamlined GenUI developer workflow

> ### git-genui's mission: maximize programmer productivity and happiness by minimizing [flow-state-interruptions](https://stackoverflow.blog/2018/09/10/developer-flow-state-and-its-impact-on-productivity/) and reducing time spent on daily non-programing tasks

> ### git-genui's strategy: augment everyday `git commits` to seamlessly integrate task-tracking, semantic versioning, co-author pairing and other bookkeeping tasks

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
