# Deploy this website on Render

This package is a ready-built static website. It does not need Python, Node.js,
or a database to display the included pages.

## 1. Upload to GitHub

Create a new GitHub repository and upload **the contents of this folder**. The
repository root should directly contain `index.html`, `render.yaml`, `_next`,
`admin`, `help`, `login`, `privacy`, and `track`.

Do not upload a `.venv` folder.

## 2. Deploy with the Render Blueprint

1. Sign in to Render and open the Dashboard.
2. Click **New +** and choose **Blueprint**.
3. Connect the GitHub repository containing these files.
4. Render will read `render.yaml` automatically.
5. Click **Apply** or **Deploy Blueprint**.
6. Wait for the status to become **Live** and open the generated
   `onrender.com` URL.

## Manual Static Site settings (if you do not use Blueprint)

- Service type: **Static Site**
- Branch: `main`
- Root directory: leave blank
- Build command: `echo "Static website ready"`
- Publish directory: `.`

## Important limitation

This export stores reports, language selection, and admin state in each
visitor's browser using local storage. The demo admin password is present in
the public page source, so the current admin page is **not secure** and should
not protect real or private data. A secure login, shared reports, and real OTP
require a backend and database.
