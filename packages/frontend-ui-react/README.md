# @essers/frontend-ui-react

This package contains the Essers components for React.

## Install

```bash
# install package
npm install @essers/frontend-ui-react

# or with pnpm (preferable)
pnpm install @essers/frontend-ui-react
```

## General Use

```js
import { Button } from @essers/frontend-ui-react;

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
pnpm link ~/git/frontend-common/packages/frontend-ui-react 
```

## Contribute

Clone the following repo and follow the contribution guidelines.

```bash
git clone https://github.essers.com/H-Essers/frontend-common
```