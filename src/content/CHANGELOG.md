# Changelog

User-facing changes, newest first. `## Unreleased` collects lines as work lands
(same commit as the change — see CLAUDE.md); `pnpm release X.Y.Z` promotes it to
a version section and refuses to tag while it is empty. Each version's section
becomes the GitHub release body, the update feed's `releaseNotes`, and the
in-app "What's new" panel — the bullets ship to users verbatim, so each one is
1–3 sentences leading with the change, no backstory. Inline markup is limited
to `**bold**` and `` `code` `` (exactly what the app renders); `(#NN)` refs are
welcome as history here and stripped from everything users see.

## Unreleased

## 0.7.7 — 2026-08-10

- Login-code detection no longer mistakes tracking-link gibberish for a code:
  URLs are ignored entirely when scanning for one-time codes, so newsletters
  with "use the code …" wording next to tracking links stop offering a bogus
  code pill. (#382)
- Tips that teach a setting now carry an **Open settings** button that jumps
  straight to the setting's row and highlights it — including the undo-send
  tip, which previously offered no way to change the window it quoted. (#381)
- Messages with fixed-width layouts — Gmail signatures, wide newsletter
  templates — now fit the reading pane: over-wide blocks shrink and their text
  wraps instead of forcing horizontal (and a spurious vertical) scrollbars on
  the message. (#375)
- Attachments sent from Gmail's composer now show up: the attachment row, the
  thread list's paperclip, and forwarding all recognize files that carry a
  Content-ID without being used inline — previously such attachments were
  invisible and silently dropped from forwards. Already-synced mail is fixed on
  the next launch. (#374)

## 0.7.6 — 2026-08-10

- Microsoft accounts now sync attachments: attached files and inline images
  show up on their messages and can be opened and saved — previously every
  attachment on an Outlook/Hotmail account was invisible. (#378)
- Clicking a new-mail notification now opens the announced conversation in a
  view that contains it, instead of just focusing the app. Digest notifications
  ("N new messages") open the newest thread of the batch, and in **All
  inboxes** a notification click no longer switches you to a single account.
  (#372)

## 0.7.5 — 2026-08-10

- Views pinned as Inbox sections now also split the **All inboxes** stream —
  their sections sit at the top of the merged list, labeled with the account.
  Pinned views also appear under **Favourites** in the combined sidebar;
  unpinning removes both. (#371)
- Thread-list checkboxes now line up with the header's select-all box, and row
  content sits a touch further from the list edges — clear of the row
  highlight's rounded corners.

## 0.7.4 — 2026-08-09

- Hovering a conversation now highlights it with a rounded panel inset from
  the list's edges instead of a full-width band; selected and open rows use
  the same shape, as do drafts and outbox rows.
- The thread list no longer paints a blue bar along the current row's left
  edge — neither on the last clicked conversation nor while moving through
  the list with the arrow keys.
- The view header no longer draws a bottom border — the bar sits flush above
  the list for a calmer top edge. The border still appears while searching,
  where it doubles as the search field's focus outline.

## 0.7.3 — 2026-08-09

- The filter-bar toggle in the view header is now a labeled **View settings**
  button sitting right of the notification bell, instead of an unlabeled
  sliders icon. (#360)
- Email-address links in a message now work: clicking a `mailto:` link opens
  a new message with the address — and any subject or body the link carries —
  already filled in. (#341)
- Right-clicking inside a message now offers **Copy Email Address** on
  address links, **Copy Link Address** on web links, and **Copy** on selected
  text. (#341)
- The combined inbox sidebar gains a **Favourites** group: right-click any view
  inside an account's section to add it, and it appears above **Filtered
  views** with its account's label — one click instead of expanding the
  account every time. Right-click again to remove it. (#345)
- The filter/sorting bar can now be hidden with the new **View settings**
  button beside the view name, and the choice is remembered. A blue dot on the
  button warns when a hidden filter is narrowing the list. (#348)
- The select-all checkbox moved from the filter bar to the left of the view
  title, heading the list it selects. Its behavior is unchanged — always
  visible, tri-state, **Select all**/**Deselect all**. (#346)
- The combined inbox no longer paints an account-colored stripe on every row —
  the list reads like a normal thread list. Pinned split-inbox sections keep
  their color stripe. (#339)
- The message header now shows the address a mail was delivered to next to
  the recipient's name — with several accounts or aliases you can see at a
  glance which address it landed on. Printed conversations list every
  recipient in full. (#344)
- Collapsed messages in a conversation now show just the sender's name, like
  the conversation list — the email address no longer crowds the preview text.
  (#343)
- An expanded message in a thread can now be collapsed again — click its
  header to fold it back to the one-line row. (#342)
- The sidebar border shows its resize cursor only when dragging would actually
  change something — a row is cut off or the sidebar is wider than its minimum.
  (#350)
- The Inbox now shows unread mail in an **Unread** section above the date groups
  by default. Turn it off with the **Unread first** toolbar chip and
  **Update view** — inboxes with a saved view customization are untouched. (#338)
- The sidebar can now be widened by dragging its right border — up to the point
  where its longest account or label name fits without truncating. Double-click
  the border to snap back to the default width; the chosen width is remembered.
  (#337)
- A new app icon: a sealed envelope in NoMail blue, drawn in Apple's current
  icon style. On macOS 26 it renders in real Liquid Glass — including the
  system's dark, clear and tinted icon modes — and older macOS versions get the
  matching classic version.

## 0.7.2 — 2026-08-09

- The identity-color picker on account cards in Settings is now one line tall —
  **No color** sits at the start of the swatch row instead of on its own line
  beneath it. (#333)

## 0.7.1 — 2026-08-09

- Follow-up reminders now raise a native **Reminder** notification with the
  thread's subject when they fire — click it to jump to the thread. It shows
  even while the window is focused, and the notifications toggle and sound
  setting apply as usual. (#330)
- Account and view identity colors now come from a dedicated high-contrast
  palette that stays clearly visible in both themes, with every color easy to
  tell apart at a glance. Colors picked from the old palette map to their
  nearest new equivalent automatically. (#329)
- Accounts are now labelled by their email domain — **GMAIL**, **HOTMAIL**,
  **ICLOUD** — in the sidebar, the account switcher and Settings, with the full
  address alongside, so same-named accounts are easy to tell apart. Messages
  you send still carry your name in the From header. (#322)
- In the combined inbox, each row of the sidebar's **Accounts** list now reads
  `GMAIL (you@gmail.com)` instead of the bare address, so several accounts at
  the same provider or with the same local part no longer truncate to the same
  string. (#324)
- Hovering an account row in the combined inbox now shows the provider and the
  account's full email address, even when the sidebar is too narrow to display
  it. (#326)
- Account cards in Settings now show how each account is connected — "Logged
  in with Google", "via IMAP" — as a pill in the card's corner instead of a
  provider tag crowding the account name. (#328)

## 0.7.0 — 2026-08-08

- Copying a detected login code can now also mark the conversation unread or
  move it to Trash (undoable) — choose under **Settings → Reading**. Off by
  default, and it works from both the conversation and the list row. (#295)
- Calendar operations now retry transient Google errors with backoff and give
  up after a deadline, instead of failing on the first hiccup or hanging on a
  dead connection. (#315)
- Fixed a rare race where a notification could be skipped when several
  messages arrived in the same instant. (#312)
- RSVP replies now send reliably when your name or the organizer's contains a
  comma, quotes, or non-ASCII characters — those previously produced an
  invalid reply header. (#309)
- Opening the label popover with many labels and a large selection is
  faster — the label states now come from a single query instead of one per
  label. (#301)
- Invite cards no longer garble event titles, locations, or descriptions
  containing a backslash (e.g. file paths) — the text was previously split at
  the backslash. (#300)
- Inserting a snippet containing a literal placeholder like `{{constructor}}`
  no longer fails — unknown placeholders are left as typed. (#299)
- Sending to a contact whose name contains a backslash no longer produces a
  malformed recipient header that could get the message rejected. (#298)
- Settings backups now restore saved views that filter on the follow-up
  state — importing previously dropped those views silently. (#297)
- Scheduled sends in Drafts and the Outbox now flip to the live "Sends in
  N sec" countdown when they enter their final minute — previously the pill
  could stay on the static "Scheduled" label all the way past the send time.
  (#296)
- The **Feedback** button in the header is now a quiet outline button instead
  of a solid blue one — **Compose** is the only filled-blue action again.
- Dates in the conversation list are a shade darker, making them readable
  without leaning in.
- Compose popout windows now remember their size — a new popout opens at the
  size you last closed one at (kept within your display), instead of always
  the fixed default. (#288)
- New-mail notifications now play the system alert tone. Turn it off under
  **Settings › General › Notification tone** to get the previous silent
  banners. (#281)
- An optional **Send tone** plays a short sound the moment you press Send —
  off by default, on under **Settings › Composing**. (#281)
- Simple text emails now get a small even margin inside the white message
  frame instead of running flush against its edge — most visible in dark
  mode. (#283)
- After a send is refused for a missing recipient, the **To** field no longer
  shows the red error ring and the blue focus border at the same time — the
  focus border takes over while you type. (#277)
- Sending from a popped-out composer now closes that window right away and
  shows the **Undo send** countdown in the main window, which comes to the
  front while the send can still be undone or cancelled. Undoing reopens the
  draft in the main window's compose dock. (#280)
- Label chips in the reading pane now carry a small **×** — remove a label in
  one click, with the usual undo toast, without opening the label menu. (#272)
- An unfinished reply now shows in its conversation as a **Draft** card
  instead of looking like a sent message — click it to pick up where you left
  off in the composer. (#279)
- The **login code** pill now appears on a conversation's row the moment the
  mail arrives when the subject or preview text carries the code, instead of
  waiting for the message body to download. (#268)
- The local database no longer grows without bound: the internal event log
  that feeds new-mail notifications is now pruned to the last 30 days on each
  launch. (#262)
- Forwarded sign-in mails now show their **Copy login code** pill: a forward
  whose whole body is quoted history is scanned as the message itself, while
  replies still never resurface a code from the quoted history below a fresh
  answer. (#267)
- Old unread mail no longer re-fires its notification on every app launch —
  the new-mail checkpoint now survives restarts. Mail that arrived while the
  app was closed still notifies once on the next launch. (#261)
- Opening a conversation now shows all of its labels as chips under the
  subject, so you can confirm a label was applied without scanning the list —
  the row keeps its compact `+N` overflow, the reading pane shows the full
  set. (#260)
- The follow-up reminder default (Settings › Reading) now offers **Custom…**:
  pick an amount, a unit from hours to years, and a time of day. `⇧H` then
  always arms that span at that time. (#256, #275)
- The **Copy login code** pill now also recognizes lowercase codes and mails
  that introduce the code imperatively — "enter the below code", "Gib den
  folgenden Code ein" — the way Ryanair and similar senders write their
  sign-in mails. (#264)
- Sign-in mails from Booking.com — and any sender whose name is itself a
  commerce word — now get their **Copy login code** pill: the brand name no
  longer counts as shopping context that suppresses the code detection. (#258)
- Accepting a suggested label now always shows the result: the new label
  becomes a visible chip on the row, and if it can't be applied a toast
  explains why. Deleting a label also removes its pending suggestions. (#254)
- Discarding a draft that had already synced to the server now removes it
  from Drafts in one step — no more ghost copy to delete a second time, and
  none left behind after moving a draft to another account. (#251)
- Attaching the same file twice now adds it again as `name (1).ext` instead of
  silently doing nothing, and attachments that would share a filename — two
  `invoice.pdf` from different folders, say — are automatically renamed apart
  so both chips (and the sent mail) stay tellable. (#249)
- Labels created by the label helper now re-learn from the mail the first
  organize pass actually filed, so their accuracy reflects your real mail
  rather than the wizard's few examples. While setup runs, the AI panel marks
  them **New** instead of asking for more examples. (#242)
- With more than one account connected, the Settings panes that edit a single
  account — Labels, your signature in Composing, and sync options in
  Advanced — now show an **Applies to** header naming that account, with a
  switcher to retarget them without leaving Settings. (#248)
- **Rebuild local database** now asks for confirmation in a dialog and lives
  on the account card in Settings › Accounts, so it always names the account
  it acts on. Deleting a snippet asks first too. (#248)
- The On/Off-style toggles in Settings now announce themselves to screen
  readers as option groups with a checked state, take a single Tab stop, and
  move their selection with the arrow keys. (#248)
- Keyboard shortcuts can now be rebound without a mouse: command rows in
  Settings › Shortcuts are focusable, **Enter** starts recording, and the
  edit and reset affordances show on keyboard focus as well as hover. (#248)
- **Mark as read when opened** now reads as one scale — **Right away** /
  **After 3 s** / **Never** — instead of On / 3 secs / Off, where "On"
  secretly meant "after half a second". (#248)
- Settings rows that depend on another setting — the sending-toast options
  under **Undo send**, the summarize scope under auto-summarize — now dim
  with a note saying why instead of doing nothing or disappearing, and they
  keep showing up in settings search. (#248)
- Closing Settings with **Escape** while editing your signature no longer
  silently drops the edit — it saves on close, and when retargeting the pane
  to another account. (#248)
- Settings polish: the General pane groups its rows under **Appearance**,
  **Behavior**, and **System**; pressing **Escape** with a label or account
  color picker open now closes the picker instead of all of Settings; and
  buttons across the panes share one style with a visible keyboard focus
  ring. (#248)
- The label helper can now be re-run any time: **Review labels with AI** in
  Settings › Labels proposes only what's new — labels for mail your current
  set doesn't cover, and opt-in merges that fold two overlapping labels into
  one, moving every conversation over before the duplicate is deleted. (#241)
- The welcome tour now covers follow-up reminders: a new Follow-ups card shows
  how **⇧H** arms a reminder that resurfaces a thread if nobody replies, and
  lets you pick your default horizon right on the card. (#236)
- The account switcher now surfaces unread mail elsewhere: a quiet line
  beneath it jumps to the other inbox with mail waiting, and the menu shows a
  count on each account plus a total on **All inboxes**. (#240)
- NoMail can now set up labels for you: after a new account syncs, a banner
  offers to scan the inbox and propose a label set — review it, then one click
  creates the labels and organizes your existing mail. Also available from
  Settings › Labels. (#168)
- Reloading the window now takes **⌘⇧R** (`Ctrl+Shift+R` on Windows/Linux)
  instead of ⌘R, so it can't happen by accident. (#238)

## 0.6.1 — 2026-08-06

- Maintenance release. No user-facing changes since 0.6.0 — internal test and
  documentation updates only.

## 0.6.0 — 2026-08-06

- Release notes are easier to read: **bold** and `keys` now render properly in
  "What's new" and Settings › About, and internal issue numbers no longer
  appear in them.
- The sidebar's update pill now shows what it wants at a glance: a ready
  update gets a highlighted row with **Restart…**, an update on offer shows
  **Download…**, and a download in progress shows a progress ring with a live
  percentage. (#234)

## 0.5.0 — 2026-08-06

### Added

- Mail in the Trash can now be deleted for good. Until now the Trash was a one-way holding
  pen: everything you binned stayed there forever, and the only way out was back. A binned
  conversation now offers **Delete forever** — on its row, in the reading pane, in a
  popped-out window, in the right-click menu and above a ticked selection — behind a
  confirmation, and with no Undo, because there is nothing to undo. It works on IMAP
  accounts (iCloud and the like), on Fastmail, and on Outlook — where it uses the deep
  delete that Exchange keeps beyond "Recover deleted items", so gone means gone; on Gmail
  the action doesn't appear at all rather than appearing and failing, since Gmail can't
  erase mail with the access NoMail asks for today. One caveat the wording is honest
  about: some IMAP servers clear deleted mail on their own schedule, so the conversation
  leaves NoMail immediately but may linger briefly on the server (#228, #230)

- Tips now teach the things that hide behind a setting. Until now they covered three
  features, so the rest of what NoMail can do only turned up if you went looking in
  Settings. Three new ones appear at the moment they'd help: that Send holds your
  message for a few seconds and the toast can pull it back, that opened mail can wait
  three seconds before it counts as read (offered when you put something back to
  unread), and that a reply can open in its own window instead of the docked panel.
  Each carries a button that makes the change, and the one-tip-per-launch pace is
  unchanged (#227)

- Right-clicking a conversation in the list now offers everything the open conversation's
  ⋯ menu does. Until now the row menu had two entries at most — "Print…", plus "Not spam"
  if you happened to be in the Spam view — so reporting junk, moving mail back to the
  Inbox or saving a copy meant opening the thread first, even though the list is where
  triage actually happens. Both menus now read from one definition: Reply, Reply all and
  Forward, then Move to Inbox and Report spam (or Not spam), then Download (.eml) and
  Print… A reply from the row menu answers the conversation you right-clicked, not the one
  you happen to have open. Which entries appear now follows the conversation rather than
  the view you found it in, so a junk mail turned up by search offers "Not spam" instead
  of "Report spam" (#219)

- A sign-in code now shows on its row in the message list, so copying one no longer costs
  an open. The list is where you are while you wait for the mail, and the code is right
  there when it lands: the row reads `Code: 847213`, hovering it offers Copy, and clicking
  copies without opening the thread. Codes stop showing after a day, by which time they
  have long expired — nothing lingers in the list that someone could read over your
  shoulder and still use (#210)

- A Follow-ups view in the sidebar answers "what am I still waiting on a reply for?"
  in one screen. Until now a follow-up reminder only showed on its own row, so the only
  way to see everything outstanding was to scroll the Inbox — and a thread you archived
  before the reminder came back was invisible entirely. The new view collects every
  thread with a follow-up, whether it is still counting down or has already resurfaced,
  archived ones included, and a thread drops out of it the moment the reply lands or you
  clear the reminder. Press `g f` to jump there (#209)

- A reply now retires a follow-up that had already come back. Before, once a reminder
  had resurfaced a thread, the amber "Follow-up" pill kept insisting there was no reply
  even after one arrived, until you dismissed it by hand (#209)

- A follow-up that comes back now says how long it has been waiting. The amber banner
  on the conversation used to read "no reply since you set a reminder", which told you
  nothing you didn't already know; it now names the date and time of the message the
  silence is measured from — "Follow-up — no reply since Mon, Aug 3, 14:20" — so a
  two-day wait is distinguishable from a two-week one without scrolling the thread (#208)

- Sign-in mails hand you the code. Open one and NoMail reads the verification code out
  of the message and puts it above the body with a Copy button, so the six digits you
  came for are one click instead of a careful drag across the mail. It only appears when
  the message really is offering a login code — a booking reference, an order number or
  a promo code doesn't get one — and the code stays selectable by hand either way (#205)

- Changed your mind about a reminder you set while writing? The "Reminder" pill on a
  queued send, in Drafts and in the Outbox, now opens the same horizons the composer
  offered — next morning, in 3 days, in a week, in 2 weeks — plus Don't remind. Until
  now the pill could only drop the reminder outright, which meant a scheduled send
  sitting there for days had no way to have its chase moved short of cancelling the
  send. Picking a new horizon leaves the mail exactly where it is in the queue. If the
  message has already gone out in the meantime, the pill says so and points you at the
  conversation, where the reminder now lives (#198)

- A draft in its own window can come back. The composer window's footer carries a
  button that returns the message to the compose dock in the main window, so popping
  one out is no longer a one-way trip you undo by closing the window and hunting the
  row down in Drafts. Everything you typed comes with it, right up to the last
  keystroke, and the window closes behind it (#191)

- If you write in windows, NoMail can start you there. Settings › Composing now has
  Compose opens in: keep the panel docked to the bottom right, or have C and every
  reply open the message in its own window straight away — no docked panel, no second
  click. Replying twice to the same conversation raises the window you already have
  rather than starting another draft, and a draft opened this way now carries your
  signature and the quoted history from the first keystroke (#192)

- ⇧H no longer always means tomorrow. Settings › Reading now carries a Follow-up
  reminder choice — tomorrow, in 3 days, next week or in 2 weeks — and ⇧H arms
  whichever one you pick. The command menu names it too, so the entry reads "Remind
  me in 3 days if no reply", and the confirmation gives the date it settled on
  instead of the word "tomorrow". "Remind me…" still picks a one-off time for a
  single conversation (#197)

- The Remind toggle in the composer footer can now be given a horizon. Clicking it
  still arms the next morning in one go; the chevron beside it offers in 3 days, in a
  week, or in 2 weeks instead. The choice counts from the moment the mail actually
  goes out, so it holds for a send scheduled days ahead, and the Reminder pill in
  Drafts and the Outbox says which horizon is waiting (#189)

- The chip on a conversation with a reminder armed now offers Change alongside Cancel.
  Picking a new time — tomorrow, in three days, next week, or a date of your own —
  happens right where the time is stated, instead of going back out to the command
  menu. It works the same in a conversation you've popped out into its own window,
  which never had the picker at all (#190)

- NoMail now offers the occasional tip: one quiet line above the conversation list
  pointing at something you probably haven't found yet — snoozing a conversation
  until you actually want it back, pinning a view as its own section of the Inbox,
  merging two accounts into a single stream. Never more than one at a time, never
  while you're still finding your feet, and each tip bows out after a few launches
  whether or not you read it. Dismiss clears one for now; Never show tips ends them
  for good, and Settings › General › Tips switches them back on (#5, #194)

- Search no longer pretends mail you archived doesn't exist. Results still lead with
  what the open view holds, but anything the query matches elsewhere now follows under
  an "Elsewhere" heading, and every one of those rows says where it lives — Trash,
  Spam, All mail, Sent, Snoozed. Searching from the Inbox for a receipt you binned
  last week finds it, and tells you it's in the Trash instead of coming back empty
  (#180)

- Google's Gemini joins OpenAI, Anthropic, and xAI in Settings › Intelligence: pick it,
  paste your own API key, and summaries, drafts, and labeling tie-breaks go to Gemini
  instead of the on-device model. Labeling embeddings still never leave your Mac (#142)

- A "remind me if no reply" reminder is no longer a one-way door: while it's armed
  the thread carries a chip with the time it will resurface — in the list and above
  the subject — and a Cancel button next to it calls the whole thing off. "Cancel
  reminder" is in the command menu too. Changing your mind no longer means waiting
  for the reminder to fire (#165)

- A conversation that comes back because nobody replied now says so in the list: it
  carries an amber "Follow-up" pill, the same signal the open conversation has always
  shown above the subject. No more wondering why an old thread is suddenly unread
  again — and asking for a new reminder clears the old one instead of stacking (#179).
  The pill clears itself too: press its × to put the conversation behind you without
  opening it (#186)

- Asking to be reminded if nobody replies is now one click while you write: the composer's
  footer carries a Remind button that lights up when it's armed, and clicking it again calls
  it off. Setting one no longer means opening the send-options menu, which is now purely
  about when the mail goes out (#185)

- A reminder no longer always means tomorrow morning: "Remind me…" in the command menu
  opens a picker with the horizons a chase actually needs — tomorrow, in 3 days, next
  week, in 2 weeks, or any date and time you pick. ⇧H still arms tomorrow 9am on the
  spot, and its confirmation now offers "Change…" if that wasn't the horizon you meant.
  Chasing Friday's contract on Monday no longer means re-arming it every morning (#166)

- Resting on a conversation's hover buttons — star, snooze, archive, trash, label — or on
  its checkmark now names the action and shows the key that does the same thing, in the
  same tidy bubble the open-conversation toolbar has always used (#172)

- A reminder set while writing is now visible on the mail it's waiting for: a queued or
  scheduled send carries a "Reminder" pill next to its send time, in Drafts and in the
  outbox above Sent, and clicking that pill drops the reminder while the mail goes out
  as planned. Changing your mind about a send-later reminder no longer means cancelling
  the send itself and writing the whole thing again (#173)

- A draft no longer has to live in the corner: the composer's header carries a button that
  moves it into a window of its own, so you can write a long reply beside the conversation
  you're answering, keep the inbox in view, or park the draft on a second monitor. It's the
  same draft either way — everything you type keeps autosaving — and asking a draft that
  already has a window to pop out just brings that window forward (#182)

### Fixed

- An action that changes nothing no longer pretends it did. Archiving mail that was
  already archived, starring a starred conversation, binning something already in the
  Trash — such a request used to put up a success toast with an Undo that had nothing
  to take back, and still cost a pointless round-trip to the mail server. The engine
  now notices when a change would change nothing, skips the server call, and stays
  silent; when only part of a selection actually moves, the toast and its Undo cover
  exactly that part (#231)

- "Move to Inbox" no longer appears on conversations it cannot move. Both thread menus —
  a row's right-click and the open conversation's ⋯ — offered it on essentially everything:
  in the Inbox it did nothing at all, and on snoozed or binned mail it said "Conversation
  moved to Inbox", offered you an Undo, and left the conversation exactly where it was,
  because the snooze timer and the Trash both outrank the label it puts back. That one slot
  now holds whichever verb genuinely brings *that* conversation back: "Move to Inbox" on
  archived mail, "Un-snooze" on snoozed mail, "Restore" on binned mail, "Not spam" on junk
  — and nothing at all on mail already in your Inbox, or on your own sent mail. The
  command menu's "Move to Inbox" follows the same rule (#226)

- A conversation already in the Trash no longer offers to move it there. The Trash button
  sat in the reading pane, in a popped-out window, on a row's hover actions and in the bar
  above a ticked selection whether or not the mail was already binned — and clicking it in
  the Trash said "Conversation moved to Trash", offered you an Undo, and moved nothing. The
  button now steps aside wherever the conversation is already there, exactly as `⌫` has,
  and comes back the moment you restore it (#225)

- `e` and the row's hover button now restore a binned conversation instead of archiving it.
  Both used to decide between Archive and Restore by which list you were standing in, so a
  conversation you binned and later found through search — it comes back under "Elsewhere",
  labeled "Trash" — was archived by both: nothing moved, and the toast claimed it had. The
  reading pane could offer you "Restore", tell you the key was `E`, and `E` would archive.
  Both now follow the conversation: hover a binned hit anywhere and the button reads
  "Restore", press `E` and it comes back. With a mixed set of conversations picked out, `E`
  now does nothing rather than guessing which half you meant (#224)

- A conversation you binned can be restored from its own window. Popping one out of the
  Trash used to hand you the inbox's action bar: the first button read "Archive", clicking
  it said "Conversation archived" and left the mail exactly where it was, and the ⋯ menu
  offered "Report spam" on mail already on its way out — so a popped-out window was a dead
  end you could only leave by going back to the main one. The bar now reads "Restore" and
  genuinely takes the conversation out of the Trash, and the menu withholds "Report spam".
  Both now follow the conversation rather than whatever list you opened it from, so a
  binned mail turned up by search offers Restore too (#223)

- Right-clicking one of several ticked conversations now acts on all of them. Ticking four
  and right-clicking one of the four used to report, move or download exactly the one under
  the pointer and leave the other three sitting there — the menu said "Report spam", you
  clicked it, and three conversations you had picked out by hand stayed put with nothing on
  screen admitting it. Every menu entry now names the number it is about to touch — "Report
  4 as spam", "Move 4 to Inbox", "Download 4 (.eml)" — so the count is there before you
  commit to it. Right-clicking a conversation *outside* the ticks still acts on that one
  alone, and either way your ticks survive: closing the menu with Escape costs you nothing.
  Reply, Reply all, Forward and Print… step out of the menu above a single conversation,
  having no sensible meaning across four (#222)

- Double-clicking the filter bar no longer leaves a word highlighted in it. Toggling
  "Unread first" twice, or clicking twice in the empty space beside a chip, used to pick
  out the nearest button's label in the selection colour and leave it there until you
  clicked elsewhere — buttons reading like text you were meant to copy. The bar, the
  dropdown menus and the conversation's action row are all chrome now, and clicking in
  them selects nothing. Typing in the filter's text box is unaffected (#221)

- The view's own ⋯ has moved up beside the view's name, so there is only ever one ⋯ on the
  right edge of the window: the open conversation's. With a mail open the two used to stack
  40px apart on the same line, same dots, nothing saying which was which — and the upper one
  held "Delete view" while the lower one held "Report spam". A slip of the mouse could throw
  away a view you had built while you were trying to flag junk. The bell that governs a
  view's notifications moved with it, since it too is about the view rather than about the
  list; filtering, grouping and sorting stay on the toolbar where they were (#220)

- A search result you are looking at no longer disappears while you read it. Search kept only
  the best 30 matches on screen, and it re-picked those 30 every time your mail changed — so
  opening one hit, which loads its text and reshuffles how well everything else scores, could
  quietly push a result at the bottom of the list out of it. Nothing said so; a match that
  vanished looked exactly like mail you never had. Results now stay put until they genuinely
  stop matching what you typed, and a search across several accounts gets a full set of
  matches from each mailbox instead of thirty shared between them (#218)

- Signing an account out now takes everything it left on this machine with it. Removing an
  account cleared its mail but quietly kept the rest — the views you had made for it, your
  grouping and sorting choices, half-written drafts, calendar invitations, and anything still
  queued against it. None of it was reachable from the app again and nothing ever cleaned it
  up, so a profile that had connected and dropped a few accounts carried all of them for good.
  One of those leftovers, a queued draft deletion, quietly retried and failed on every launch.
  Upgrading clears out what earlier sign-outs left behind; views and settings that belong to
  the combined inbox rather than to one account stay exactly as they are (#217)

- Search results now hold their order while you read them. Opening a hit used to shuffle the
  list a second or two later, and not just the row you opened: everything around it moved too,
  so after reading one result you couldn't find your place to open the next, and `j`/`k` from
  where you left off landed somewhere unrelated. Results still stay live — a hit you archive
  or label still updates in place, and mail that arrives while the search is open still shows
  up — but nothing that is already on screen changes position any more. Anything genuinely new
  joins the bottom of the list, and typing another character ranks the results afresh (#215)

- Throwing a thread away now takes its follow-up and its snooze with it. A reminder set on a
  thread you later trashed — or one the server deleted out from under you — kept counting
  down, and when it came back it left a note on a conversation you could no longer open to
  clear it. Trashing a thread now calls off whatever was scheduled against it, and reminders
  left over from before are cleaned up once when you upgrade. Untrashing doesn't re-arm a
  reminder the trash cancelled — set it again if you still want it (#214)

- A draft that is already on its way no longer opens as a composer you can type into. Picking
  one out of Drafts — a send counting down, or one scheduled for next week — handed you an
  ordinary editor, and every keystroke in it was thrown away the moment it tried to save: the
  outgoing message is assembled when it actually goes out, so NoMail refuses to rewrite it, and
  nothing on screen said so. Clicking such a draft now tells you the send is queued and leaves
  you at the row, where Cancel is the way back to a draft you can edit. And a composer that
  can't save what you type now says as much across the top instead of taking it anyway (#212)

- A composer window that reloads mid-countdown comes back as the send, not as the draft.
  Sending from a window leaves it up for the length of the undo window, because the
  countdown is the only place Undo send lives. If that window reloaded in the meantime — a
  crash, the error screen's Reload button, ⌘R — it reopened as an ordinary composer for a
  message that was already queued: nothing said a send was in flight, the countdown and its
  Undo send were gone, and the window no longer closed itself. Worse, what you typed into
  it did not stay there. The outgoing mail is assembled at the moment it actually goes out,
  so those edits rode along and the message that arrived was not the one you pressed Send
  on. The window now rebuilds the countdown it was showing, Undo send and all, and a draft
  with a send queued against it can no longer be written to from anywhere (#207)

- Copy buttons actually copy. Copying the version from Settings › About, the details
  from the crash screen, or the sign-in link during setup all said "Copied" while
  leaving the clipboard untouched — installed builds were refused the clipboard
  outright, so only the develop-time app ever worked. Copying now goes through the
  app itself, and a button that can't copy no longer claims it did (#205)

- Replying right after sending starts the reply, and reloading no longer loses your
  open composers. With Compose opens in set to Its own window, hitting R on a
  conversation you had just sent from raised the window that was still counting down
  the undo — a frame with nothing in it but the toast — and wrote no reply at all.
  That window is now left to close itself and the reply opens as it should. The other
  way round: after the main window reloaded — a crash, Reload, the error screen's
  button — NoMail forgot which conversations already had a composer open and replying
  started a second one beside the first. It remembers across a reload now (#201)

- A mail link, a notification or a draft coming back from its own window no longer
  vanishes when the timing is unlucky. If the NoMail window happened to be reloading —
  after a crash, after Reload, after the error screen's button — anything the system
  handed it in that moment was dropped: a mailto: link opened no message, a notification
  click went nowhere, and Pop in closed the composer's window without docking the draft.
  All three now arrive as soon as the window is back. Open NoMail from the menu bar and
  the dock icon also bring back the inbox again, instead of raising a popped-out
  composer and leaving you with no way to it (#202)

- Turning Unified inbox off now takes ⌘0 with it, straight away. With more than one
  account signed in, the "All inboxes" command stayed in the command menu and the
  Shortcuts list after the setting was switched off — and the key still worked — until
  you happened to do something else in the inbox; switching it back on left the command
  missing the same way. Both directions now land the moment you make the change (#200)

- Messages no longer stretch on and on. Mail built on a full-height stylesheet — payment
  receipts and most marketing templates — made the white message frame keep growing
  downward, burying the rest of the conversation and the reply box under thousands of
  pixels of blank space, with nothing you could do about it. A message now stops at its
  own height and stays there (#199)

- The unread number next to Inbox now matches the unread conversations the Inbox is
  actually showing you, and the dock badge agrees with both. If you had a view set to
  skip the Inbox and also pinned as an Inbox section, its mail appeared in the list but
  was subtracted from the count — three places quoting three different numbers at the
  same moment. Pinning a view as a section now settles it: that mail is in your Inbox,
  so it shows there and it counts there. Snoozed conversations no longer turn up in a
  pinned section either (#193)

- The count beside the Inbox title now includes the conversations sitting in its pinned
  sections. With a view set to skip the Inbox and pinned as a section, the header was
  quoting only the conversations below the sections — reading 4 with 6 on screen (#204)

- Accounts you connected with a server address and app password now get the same patience
  limit as the rest: if the mail server accepts a request and then goes quiet, NoMail gives
  up after a spell, drops the dead connection and tries again on a fresh one, instead of
  letting that account's mail stop arriving until you restart. Signing in against a wrong
  server address or port also says so in seconds rather than a minute and a half, and
  fetching a large message or sending one with attachments keeps the long patience it
  needs (#196)

- Clicking a draft that has since been sent or discarded now tells you so, and the
  row leaves the pane. A draft can disappear between the moment the Drafts pane drew
  it and the moment you click it — its scheduled send fired, or you discarded it in
  another window — and until now the click simply did nothing: no composer, no
  message, nothing to distinguish it from a click that missed (#188)

- Opening a draft that lives on the server no longer freezes the rest of the Drafts
  pane. While one draft was being brought down, every other row quietly stopped
  responding to clicks while still looking perfectly clickable — now only the row you
  opened waits, and the others carry on. If the connection stalls partway, the draft
  gives up and says so instead of leaving the pane dead for the rest of the session (#187)

- A stalled connection can no longer hang NoMail indefinitely. Requests to your mail
  provider now give up after a spell and surface as a normal, retryable failure, rather
  than waiting on an answer that is never coming — large attachments still get the long
  patience they need (#187)

- The checkmark on a conversation in the list is easier to hit: clicking just beside it
  now checkmarks the conversation instead of opening it. The mark itself looks the same —
  it just no longer demands pixel-perfect aim (#181)

- The message count on a conversation in the list is now right before you open it. A
  conversation that had gained and lost a message behind the scenes — which happens every
  time a draft in it is saved — could sit there reading one higher than it really was,
  and only corrected itself once you opened it (#183)

- A reminder now stands itself down the moment the reply arrives. Answered conversations
  no longer keep advertising a resurface that will never happen, and you no longer have to
  cancel the reminder by hand to be rid of it. Your own follow-up doesn't count — chasing
  someone again leaves the reminder exactly where it was (#174)

- Dismissing the "Follow-up — no reply" banner now clears it immediately instead of
  leaving it on screen until the next mail arrived

- Checkmarking a conversation and then scrolling away no longer snaps the list back to
  that row a moment later. It was easiest to hit while new mail was still arriving (#176)

- Discarding a draft no longer leaves a stray item stuck in the outbox. The draft was
  deleted correctly, but a queued upload for it was re-created on the way out and then
  had nothing left to upload (#177)

- A draft that can't be saved no longer traps you in the composer. If saving fails on the
  way out, the panel now says so and offers a way to close anyway, instead of sitting
  there ignoring Escape and every other shortcut with nothing to explain why. Opening a
  draft and closing it again without typing anything also no longer rewrites it (#178)

- A keyboard shortcut pressed in the instant after closing a composer no longer goes
  nowhere. Hitting Escape and immediately typing `g d` could drop the keystroke
  entirely, leaving you sitting in the inbox wondering why nothing happened (#175)

## 0.4.0 — 2026-08-03

### Added

- The view icon picker gained "!" and "!!" priority markers, plus icons for
  deliveries, banking, security notices, school and events — and the grid is now
  laid out by category instead of in one arbitrary run, so the icon you want is
  where you'd expect it. Hovering an icon names it (#153)

- Compose's send menu can now arm a "Remind me if no reply" follow-up: send as
  usual (or schedule it), and if nobody has written back by 9am the next day the
  thread comes back to your inbox with a follow-up banner (#157)

- With "Download automatically" off, the sidebar update pill now announces an
  available update — click for release notes and a Download button — and shows
  quiet download progress until it flips to "restart to update" (#159)

- "Mark as read when opened" can now wait 3 seconds — a middle option between
  the half-second default and Off, so skimming a conversation doesn't mark it
  read before you've decided to read it (#123)

- Control over update downloads: a "Download automatically" toggle in
  Settings › About, and with it off NoMail still checks for updates and offers
  a Download button there instead. The About pane now also shows live update
  state — available, download progress, and "restart to install" — without
  needing to click "Check for updates".

- Releases now carry release notes: the GitHub release body, the updater feed,
  and the app itself show what changed in each version.
- Updates announce themselves: a sidebar pill offers "Restart now" once an
  update finishes downloading (restarting installs it immediately), and after
  updating, "What's new" shows this version's notes once. Checking for updates
  in Settings › About now also lists what the new version changes.

### Changed

- Taking a label off a thread in Gmail now teaches NoMail the same "not this
  one" lesson that removing it in the app does, so it stops suggesting a label
  you've already rejected elsewhere. Guarded so that scripts, filters, and
  deleting a label outright don't get mistaken for you changing your mind
  (#151)

- The sort control in the toolbar now reads as one chip: the ▾ sits inside it
  at the same height as its label rather than floating between neighbours as a
  smaller button, and the row's icons are all one size. Each button's label
  now also lines up with its icon on non-retina displays, where it used to
  sit a pixel high (#164)
- The view color button in the toolbar is now a labeled chip like its
  neighbors — "Color" when no color is set, the color's name (e.g. "Mint")
  when one is — instead of a bare circle you had to hover to identify (#163)

### Fixed

- Keyboard focus now outlines the whole field in the command menu, the
  shortcuts and mail searches, and compose's recipient and subject rows —
  previously the ring hugged the text and floated inside the field's own box.
  Clicking into those fields also tints their border, so they show where you
  are with the mouse too (#167)
- Keyboard focus on the Settings search field now draws a single ring around
  the field instead of two nested blue rectangles. Text fields elsewhere get
  the same treatment — one crisp ring that follows the field's rounded
  corners, not a ring floating inside or beside the border (#161)
- Color pickers now announce their swatches by name ("Red", "Mint", …) and
  mark the current selection for screen readers, and the label color button in
  Settings › Labels speaks its purpose instead of reading as an unnamed
  button (#162)
- The select-all checkbox in the toolbar now announces its action ("Select
  all N" / "Deselect all") to screen readers instead of reading as an unnamed
  button (#160)
- Adding a second account no longer brings back a dismissed "Getting started"
  checklist or resets its progress, and the welcome tour can't auto-open twice
  in one session (#138)
- AI thread summaries now speak to you — "Ana confirmed your booking", never a
  third-person narration of you by name — and distinguish mail addressed to you
  from mail you were only Cc'd on (#137)
- Rebinding, unbinding, or cancelling a shortcut edit in Settings › Shortcuts
  no longer scrolls the list back to the top — you stay on the row you just
  edited (#136)
- The sidebar no longer shows an empty band above Settings when there is no
  update to announce; dismissing "What's new" removes the pill's row entirely
  (#158)
- Hovering a snippet or shortcut row in Settings no longer shifts the controls
  under your cursor — the delete and reset buttons now keep their place, so
  aiming at a row's edge can't land on the wrong button (#155)
- The view color button in the toolbar now announces itself to screen readers
  instead of reading as an unnamed button (#152)

## 0.3.0 — 2026-08-03

### Added

- Icon picker for custom views, opened from the sidebar row icon (#139)
- Optional divider lines between thread-list rows (#141)
- Settings export/import from Settings › Advanced; inbox views travel in the
  backup (#107, #108)
- Send now on the undo-send countdown chip and the sending toast (#120, #124)
- "Set as default email app" control in Settings, plus a proactive banner when
  NoMail isn't the default (#133, #134)
- Per-account sync health surfaced in the combined inbox (#112)

### Changed

- One view menu now backs both the toolbar and sidebar entry points (#140)
- Keyboard hints render as key chips across search, the compose bubble menu,
  and the bulk-action bar (#106, #113, #127)
- The welcome tour can be paused and resumed; refreshed slides and Getting
  started checklist (#126)
- Wider reading-pane message container (#129)

### Fixed

- Auto-labeling keeps learning: manual and external label adds teach the
  classifier, server-deleted labels are pruned, and label memory stays plastic
  over time (#130, #146, #147, #148, #149, #150)
- Large syncs no longer stall the app; missing messages in a thread no longer
  abort hydration (#121, #122)
- Similar recipient suggestions are visually distinguishable (#117)
- Scheduled-draft rows keep their Cancel button from shifting the row (#120)
- Stable download filenames so the latest-release links never break (#116)

## 0.2.0 — 2026-07-31

### Added

- Notion-style rich-text compose editor: headings, lists, to-dos, quotes, code,
  and a formatting bubble menu (#98)
- "Not spam" action in the Spam view (#95)

### Changed

- Polished AI provider setup and onboarding (#96)
- Unverified Yahoo and GMX presets hidden until verified (#33)

### Fixed

- One-click unsubscribe now uses the RFC 8058 POST flow instead of visiting the
  link (#110)
- Cmd/Ctrl+A selects all conversations in the current view (#115)
- To-do lists survive draft save and reopen (#98)
- Spam actions apply to the thread you're reading (#95)
- Label views show only mail with that label across all providers (#100)
- Search results stay live while triaging (#103)
- The sync warning clears when an account is reconnected (#99)

## 0.1.2 — 2026-07-30

### Fixed

- Packaged builds use their own profile, so they no longer collide with
  development data
- Release pipeline: both architecture builds share one draft release (#7)

## 0.1.1 — 2026-07-30

### Fixed

- Release pipeline: version tags now trigger the release build (#7)

## 0.1.0 — 2026-07-30

First release.

### Added

- Accounts: Gmail, Outlook/Hotmail, Fastmail (JMAP), and generic IMAP, with
  multi-account and a combined inbox
- Keyboard-first triage: archive, delete, labels, snooze, undo, and an
  editable-shortcut command system
- Compose: rich editor with signatures, snippets, slash menu, scheduled send,
  drafts, and attachments (including drag & drop and inline images)
- Views engine: saved views, search, split inbox, filters, view colors
- Local AI: bundled model for auto-labeling and summaries, fully on-device
- Desktop integration: notifications, tray, snooze reminders, .eml export,
  opt-in crash reporter
- Auto-updates via the public releases feed
