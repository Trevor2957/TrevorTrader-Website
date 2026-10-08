# SURGE-R PDCA | Shadow-pattern observation

**Status:** Installed and locally validated October 8, 2026; first scheduled-session verification pending October 9.

## Plan
Investigate why SURGE-R produces few trades by observing less restrictive chart setups **without changing its entry rule**. Compare bull flag, micro pullback, and flat top patterns with SURGE-R's existing chart-confirmation rule. More signals alone do not establish an edge.

## Do
On October 8, after the session, installed a **log-only** shadow-pattern diagnostic in SURGE-R's paper-trading environment. Its observations do not submit orders, and SURGE-R's trading rules and risk limits were not intentionally changed. The three installed file hashes were verified. The diagnostic suite passed 19 tests and the existing SURGE-R suite passed 18 tests (37 total).

**Installed runner code hash:** `a20961778b3d2879`. This hash includes the modified scanner but does not individually cover the two new diagnostic modules. The October 9 scheduled startup has not yet verified this hash in a `RUNNER_START` event.

## Check
On October 9, confirm startup reports code hash `a20961778b3d2879` and `halt=False`. After the session, inspect the shadow-pattern log and run the outcome scorer. Compare logged setups with SURGE-R's original entry rule, including rejected signals and subsequent price behavior. **Shadow observations are not executed trades or realized P&L.** Do not add shadow outcomes to the results scoreboard.

## Act
Collect enough observations across sessions to evaluate whether any alternative pattern merits a separately versioned, prospective paper test. Do not loosen live entry criteria based on one session or hypothetical returns. Keep existing trading rules in force until a proposed change is independently tested and reviewed.

*Research note only. No demonstrated improvement in trading performance or validated edge.*
