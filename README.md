# Related

* https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines


# Commit format

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
