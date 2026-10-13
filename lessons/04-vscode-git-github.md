# Lesson 4: VS Code, Git and GitHub

## Words to know

- **Repository ("repo")**: a project folder that Git tracks. This one is
  `ronniereddot/rondeposit` on GitHub.
- **Commit**: a saved snapshot of your files, with a short message describing
  what changed. You can return to any commit later.
- **Push**: send your commits from your computer up to GitHub.
- **Pull**: bring commits from GitHub down to your computer.
- **Clone**: download a copy of a repo to your computer for the first time.
- **Branch**: a separate line of work. `main` is the real, live version. Other
  branches let you try changes without touching it.
- **Pull request (PR)**: a request to merge one branch into another, usually
  into `main`. GitHub shows exactly what changed before you accept it.

## One-time setup

1. **Install Git** from <https://git-scm.com/downloads>. Keep the default
   options. Restart VS Code afterwards.
2. In VS Code, open the terminal: menu **Terminal → New Terminal**. Tell Git
   who you are (use your own name and your GitHub email):

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

3. **Clone this repo:** in VS Code, press `Ctrl+Shift+P` (`Cmd+Shift+P` on a
   Mac), type **Git: Clone**, press Enter, then choose **Clone from GitHub**.
   Sign in to GitHub when asked, pick `ronniereddot/rondeposit`, and choose a
   folder such as `Documents/websites`. Click **Open** when it asks.
4. Recommended extension: click the Extensions icon (four squares) on the left
   and install **Live Server**. Then right-click `index.html` →
   **Open with Live Server**. The page opens in your browser and refreshes
   itself every time you save.

## The everyday routine

You'll repeat these steps for every change, on every website you ever build:

1. **Pull first** to get the latest version: click the **⟳** (sync) in the
   bottom-left status bar, or the **...** menu in Source Control → **Pull**.
2. **Edit** your files and save (`Ctrl+S`).
3. **Check** the result in the browser.
4. **Commit:** click the Source Control icon on the left (it looks like a
   branching line). You'll see the files you changed. Type a short message
   like `Add about page`, then click **Commit**. If VS Code asks whether to
   stage all changes, choose **Yes**.
5. **Push:** click **Sync Changes** (or **Publish Branch**).

Commit little and often. A message like "Fix phone number on contact page" is
much more useful later than "updates".

## Branches in this project

The starter files were created on a branch called
`claude/turbify-website-resurrection-hxqgnb`. To put them on `main` (which is
what the live website will use), you open a pull request on GitHub and merge
it. You can do that from the repo's page on GitHub: a yellow banner offers
**Compare & pull request**. After it's merged, switch to `main` in VS Code by
clicking the branch name in the bottom-left corner.

## If something goes wrong

- **Undo unsaved edits to a file:** in Source Control, hover over the file and
  click the curved arrow (**Discard Changes**).
- **"Push rejected" / "Updates were rejected":** someone (or you, from another
  computer) changed GitHub first. Pull, then push again.
- **See old versions:** the **Timeline** panel at the bottom of the Explorer
  shows every commit that touched the open file.

Nothing you commit is ever truly lost, so experiment freely.

Next: [Lesson 5: Going live](05-go-live-github-pages-namecheap.md)
