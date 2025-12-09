# Project Structure

## Directory Organization

```
src/
├── main.js              # Application entry point
├── app.vue              # Root component with responsive layout logic
├── components/          # Reusable Vue components
│   ├── cube.vue        # Main interactive cube navigation
│   ├── loader.vue      # Loading component
│   ├── photo.vue       # Photo display component
│   └── youtube.vue     # YouTube embed component
├── router/             # Vue Router configuration
└── views/              # Page-level components (routes)
    ├── home.vue
    ├── about.vue
    ├── photos.vue
    ├── climb.vue
    ├── covers.vue
    ├── goodreads.vue
    ├── lastfm.vue
    ├── mastodon.vue
    ├── rain.vue
    └── lost.vue        # 404 page

public/                 # Static assets served as-is
├── fonts/             # Custom fonts (savior.woff)
├── icons/             # Favicon and app icons
├── images/            # Static images
├── resume/            # Resume HTML
└── [utility files]    # install script, GPG key, etc.
```

## Component Conventions

- **Single File Components**: All Vue components use `.vue` extension
- **Component Names**: Lowercase, single-word names are allowed (ESLint rule disabled)
- **Script Style**: Mix of Options API and Composition API
- **Styling**: Scoped styles preferred for views, global styles in app.vue
- **Imports**: Use `@/` alias for src directory imports

## Layout Architecture

- `app.vue` handles responsive layout switching between desktop (grid-template-columns) and mobile (grid-template-rows)
- Desktop: cube on left, content on right (50/50 split)
- Mobile: content on top, cube on bottom (50/50 split)
- Layout switches based on window aspect ratio (width vs height)

## Routing

- Routes defined in `src/router/index.js`
- Routes are dynamically placed on cube facelets at random positions
- Each route corresponds to a view component in `src/views/`
