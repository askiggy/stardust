# `@askiggy/stardust`

The Iggy frontend component library and styleguide.

## Setup

Because this is a private package you'll need to set up a Personal Access Token to be able to install this in your project. [See Authenticating to GitHub Packages for more info](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

```
echo "//npm.pkg.github.com/:_authToken=TOKEN" >> ~/.npmrc
```

_Replace `TOKEN` with your own Personal Access Token_

### Project Configuration

On the root of your project, create an `.npmrc` or `.yarnrc` config file and set the registry url for `@askiggy:registry`.

With npm using an `.npmrc` file:

```
"always-auth"="true"
"@askiggy:registry"="https://npm.pkg.github.com"
```

With yarn using a `.yarnrc` file:

```
"always-auth" "true"
"@askiggy:registry" "https://npm.pkg.github.com"
```

## Releasing a new Package

1. Bumpt he version (we try to follow the [Semantic Versioning](https://semver.org/) system)
2. Create a new tag
   ```
   $ git tag -a {VERSION}
   ```
3. Publish a new release...
