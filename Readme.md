react-typescript-meteor | Sustainable, Large Scale, X-Device Design
===
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Start a new react project with est. lifespan: 2017Q3 -> 2018Q2
---

## File Structure

```text
.
├── /.meteor/                   # Meteor's configuration and build directory
│   ├── /packages               # List of 3rd party ATMOSPHERE libraries and utilities
├── /.vscode/                   # IDE configuration and typing build directory
├── /client/                    # Client-side only hooks
├── /docs/                      # Documentation about the repo not covered in this Readme.md
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build/public folder
├── /imports/                   # The source code of the application
│   ├── /api/                   # API (or GraphQL) server schema and data models
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /startup/               # Server/Client Startup Hooks
│       ├── /both/              # Universal config
│       ├── /client/            # Client config: routes
│       ├── /server/            # Server config: accounts, register-apis, fixtures
│   ├── /ui/                    # 1st-Party React UI Library - interface for 3rd party libraries
│       ├── /lib/               # Atomic parts for the ui library - bespoke components
│   └── ...                     # Other core framework modules
├── /server/                    # Server-side only hooks
└── .gitignore                  # Only use this .gitignore except for extractable modules
├── package.json                # List of 3rd party NPM libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies
```
