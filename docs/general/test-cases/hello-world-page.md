# Test Cases — Hello World page

Risk level: low. One static read-only page, no data, no roles, no error flow.

## Scenario: Main greeting visible
**Given** app open on landing page
**When** Guest views page
**Then** `Hello, World!` is visible as main heading and only headline text on page.
**Check:** render_url

## Scenario: Greeting centered on mobile and desktop
**Given** app open on landing page at 320px width and at desktop width
**When** Guest views page
**Then** main heading sits centered in viewport both vertically and horizontally on both sizes.
**Check:** measure_styles

## Scenario: No login, database, navigation, or extra sections
**Given** app open on landing page
**When** Guest views page
**Then** page shows no login UI, no database-driven content, no navigation, and no extra sections.
**Check:** render_url

## Scenario: Minimal neutral style with strong large heading
**Given** app open on landing page
**When** Guest views page
**Then** page uses background `#F8FAFC`, heading color `#0F172A`, accent color `#2563EB`, and large dark heading styling only.
**Check:** measure_styles

## Scenario: No horizontal scroll at 320px and above
**Given** app open on landing page at 320px width
**When** Guest views page
**Then** page fits viewport with no horizontal scroll.
**Check:** measure_styles
