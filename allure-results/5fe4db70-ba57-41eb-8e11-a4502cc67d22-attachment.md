# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities Module >> Verify Create Opportunity navigation
- Location: .features-gen/features/opportunities.feature.spec.js:15:7

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

<launching> /Users/varam/Library/Caches/ms-playwright/firefox-1543/firefox/Nightly.app/Contents/MacOS/firefox -no-remote -headless -profile /var/folders/pq/9jycjm1j29jgx5kr_tzdv8x00000gn/T/playwright_firefoxdev_profile-dGGddl -juggler-pipe -silent
<launched> pid=61400
[pid=61400][err] *** You are running in headless mode.
[pid=61400][err] Could not find profile folder.
[pid=61400] <process did exit: exitCode=1, signal=null>
[pid=61400] starting temporary directories cleanup
Call log:
  - <launching> /Users/varam/Library/Caches/ms-playwright/firefox-1543/firefox/Nightly.app/Contents/MacOS/firefox -no-remote -headless -profile /var/folders/pq/9jycjm1j29jgx5kr_tzdv8x00000gn/T/playwright_firefoxdev_profile-dGGddl -juggler-pipe -silent
  - <launched> pid=61400
  - [pid=61400][err] *** You are running in headless mode.
  - [pid=61400][err] Could not find profile folder.
  - [pid=61400] <process did exit: exitCode=1, signal=null>
  - [pid=61400] starting temporary directories cleanup
  - [pid=61400] <gracefully close start>
  - [pid=61400] <kill>
  - [pid=61400] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=61400] finished temporary directories cleanup
  - [pid=61400] <gracefully close end>

```