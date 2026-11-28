# NoMail Privacy Policy

**Last updated: 28 November 2026**

NoMail is a desktop email client for macOS. It runs entirely on your computer. It
has no backend, no accounts system, and no servers operated by us that your mail
passes through. When NoMail talks to the network, it talks directly to your mail
provider — Google, Microsoft, or your own IMAP/JMAP server — using credentials
you grant it.

This policy explains what data NoMail touches, where that data lives, and the two
cases in which anything leaves your machine. Both are off until you turn them on.

## Google user data

With your consent, NoMail requests access to the following Google data:

| What we access | Why |
| --- | --- |
| Gmail messages, threads, labels | To show your mail in the app, search it, and let you file, archive, star, snooze, and delete it |
| Sending mail on your behalf | To send messages you compose, and to send calendar RSVP replies to meeting organizers |
| Your send-as aliases and signature (read-only) | To send from the right address and append your existing Gmail signature |
| Calendar events | To add an event to your calendar from an invitation email, update it, remove it, and record your RSVP |
| Your email address and basic profile | To show which account you're signed in as and to tell multiple accounts apart |

NoMail's use and transfer of information received from Google APIs to any other
app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the Limited Use requirements.

## Where your data is stored

**On your device, and nowhere else.** Mail, calendar data, and everything NoMail
derives from them are stored in a local SQLite database in the app's data folder
on your Mac. There is no copy on any server we control, because we do not operate
one.

**Access tokens** for your accounts are encrypted with Electron's `safeStorage`,
which on macOS derives its key from your login Keychain, and stored in that same
local database. The database never holds a usable token in plaintext.

We recommend enabling macOS FileVault. NoMail does not yet encrypt its database
independently of the operating system's disk encryption.

## What we do *not* do

- We do not transmit your mail, calendar data, contacts, or attachments to us.
  Nothing goes to a third party either, unless you connect an AI provider
  yourself (see below).
- We do not sell or share your data with advertisers, data brokers, or any other
  party.
- We do not use your data for advertising, credit assessment, or lending decisions.
- We do not use your data to train any machine-learning model, ours or anyone
  else's.
- We do not run analytics or telemetry. The app has no usage tracking of any kind.

## Artificial intelligence features

NoMail can label and summarize your mail automatically. By default this runs a
language model **executed on your own computer**. In that setup your mail is not
sent to any AI service, ours or a third party's, and it is not used as training
data. What the model learns about how you file mail is stored locally and is not
synchronized anywhere.

Model weights are downloaded once from a fixed, checksum-verified URL when you
choose to download them. That download carries no information about you or your
mail.

### If you connect your own AI provider

Instead of the on-device model, you can connect an AI provider of your choice in
Settings › AI — OpenAI, Anthropic, xAI, Google Gemini, or a server you run
yourself — with an API key that you supply. This is off until you set it up, and
the app asks for your consent, naming what will be sent, before it connects.

Once connected, the AI features you turn on send mail content directly from your
computer to that provider: for summaries, drafts and reply suggestions, the
subjects, senders and text of the messages involved; for Ask AI requests and
rules the AI judges, the subject, sender and preview of the conversations
involved, together with what you asked; for label setup, the subject, sender
and opening text of a sample of your conversations. A feature you have not
turned on sends nothing.

That content goes to the provider under your own account with it. It does not
pass through us, and we never receive it. What the provider does with it —
including how long it is kept and whether it is used for training — is governed
by your agreement with that provider, so choose one whose terms you accept. The
part of automatic labeling that learns from your mail runs on your computer in
either setup.

You can disconnect the provider at any time in Settings › AI; nothing further is
sent after that. Your API key is stored encrypted on your device, the same way
account tokens are.

## Crash reports — opt-in

Crash reports are **off by default**. If — and only if — you turn on Settings ›
General › Crash reports, NoMail uploads crash dumps to an error-tracking service
(Sentry) so we can diagnose the crash.

You should know what a crash dump is before enabling it. A crash dump is a snapshot
of the app's memory at the moment it failed. We do not deliberately collect your
mail, and no message is ever sent as such — but because the snapshot is raw memory
from a program that was displaying your mail, it can contain fragments of whatever
was in memory at that instant, including message text. We would rather say this
plainly than describe the dumps as anonymous. If that trade is not one you want to
make, leave the setting off; NoMail works identically either way, and dumps then
stay on your disk and are never uploaded.

## Retention and deletion

Because your data lives on your device, you control it directly:

- **Remove an account** in NoMail to delete its locally stored mail and its
  credentials from the database.
- **Delete the app's data folder**, or uninstall NoMail, to remove everything it
  has stored.
- **Revoke NoMail's access to your Google account** at any time from your
  [Google Account permissions page](https://myaccount.google.com/permissions).
  Revoking access stops NoMail from syncing; any mail already downloaded stays on
  your device until you remove the account or delete the data.

We hold no server-side copy, so there is no separate deletion request to make of us.

## Children

NoMail is not directed to children under 13 and we do not knowingly collect data
from them.

## Changes to this policy

If this policy changes materially, we will update the date above and note the
change in the release notes for the version that carries it.

## Contact

Questions about this policy or about how NoMail handles your data:
**privacy@nomailapp.com**
