```text
.
├── /imports/                   # The source code of the application
    ├── /routes/                # Page/screen components along with the routing information
        ├── /dex/               # inDex routes '/' '/about' etc.
            ├── /dex-routes.ts  # Map of inDex routes to components to render
            ├── /home/          # resolution for '/'
            ├── /about/         # resolution for '/about'
        ├── /accounts/          # Account routes '/account/', '/account/:id/profile', etc.
        └── ...                     # Other core framework modules
```
