# Versioning in Node.js package

## Incrementing semantic versions in published packages

| Code status | Stage | Rule | Example version |
|-------------|-------|------|----------------|
| First release | New product | Start with 1.0.0 | 1.0.0 |
| Backward compatible bug fixes | Patch release | Increment the third digit | 1.0.1 |
| Backward compatible new features | Minor release | Increment the middle digit and reset last digit to zero | 1.1.0 |
| Changes that break backward compatibility | Major release | Increment the first digit and reset middle and last digits to zero | 2.0.0 |

## Using semantic versioning to specify update types your package can accept

You can specify which update types your package can accept from dependencies in your package's `package.json` file.

For example, to specify acceptable version ranges up to 1.0.4, use the following syntax:

* Patch releases: `1.0` or `1.0.x` or `~1.0.4`
* Minor releases: `1` or `1.x` or `^1.0.4`
* Major releases: `*` or `x`

--> ^ it means it updates itself only third and second digit , keeps the major release same,and do the necessary recommended changes and bug fixes.


