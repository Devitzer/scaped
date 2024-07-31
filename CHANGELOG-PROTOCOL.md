The system for how the Changelogs work.

The main changelog is for *stable*, approved updates to the main part of Scaped. <br>
This is the one you will want to use in production.

The next changelog is for *unstable* updates, they are tested in development, but not in production. <br>
This is the one you will want to use if you are developing or want early access to the newest updates with the consequence of potentially having some features be not useable. You can also use this to see the newest upcoming changes, so you are prepared to adapt upon the production release. (to release compatible versions of your plugins ASAP). This is good to use if there are breaking API changes that your code needs to fix, and you want to test your new code before the stable release of the version.

We follow semantic versioning (MAJOR.MINOR.BUGFIX)
Note: These times are not guaranteed. If we are late on a scheduled release, we will try our best to release it as soon as possible. GitHub Releases does not allow scheduling so we release the versions manually at the scheduled time. A release can be occasionally missed or we are unable to release the drafted release at the moment.

MAJOR updates will release Sunday at 5PM EST/EDT.
MINOR updates will release any day at 3PM EST/EDT.
BUGFIX updates will release any day, any time. (just check for them whenever you want).