# @essers/frontend-common

This package contains the Essers components for React.

## Install

```bash
# install package
npm install @essers/frontend-ui

# or with pnpm (preferable)
pnpm install @essers/frontend-ui
```

## General Use

```js
import { Button } from @essers/frontend-ui;

export default function MyComponent() {

    return (
        <div>
            <Button variant="secondary">Click Me</Button>
        </div>
    )
} 
```

## Link package to your app

```bash
# from the root of your app folder
pnpm link ~/git/frontend-common/packages/frontend-ui 
```

## Contribute

Clone the following repo and follow the contribution guidelines.

```bash
git clone https://github.essers.com/H-Essers/frontend-common
```